<template>
  <v-row>
    <v-col class="mx-auto" cols="8">
      <v-scroll-y-transition>
        <v-card
          v-if="stockMetaData.information.length > 0"
          class="d-flex flex-column align-center justify-center"
          elevation="4"
          height="350"
        >
          <v-card-title>{{ stockMetaData.information }}</v-card-title>
          <v-container class="d-flex align-center justify-center">
            <BaseOutlineButton @click="handleGetStockIn('Intraday')">
              Intraday
            </BaseOutlineButton>
            <BaseOutlineButton @click="handleGetStockIn('Daily')">
              Daily
            </BaseOutlineButton>
            <BaseOutlineButton @click="handleGetStockIn('Weekly')">
              Weekly
            </BaseOutlineButton>
            <BaseOutlineButton @click="handleGetStockIn('Monthly')">
              Monthly
            </BaseOutlineButton>
          </v-container>
          <v-container class="d-flex">
            <div class="info-container">
              <ul>
                <li>Symbol: {{ stockMetaData.symbol }}</li>
                <li>Volume: {{ parseStockVolume(stockPrice.volume) }}</li>
                <li>
                  Last Refreshed:
                  {{ stockMetaData.lastRefreshed }}
                </li>
              </ul>
            </div>
            <div class="graph-container">
              <v-sparkline
                :value="[
                  stockPrice.open,
                  stockPrice.high,
                  stockPrice.low,
                  stockPrice.close
                ]"
                line-width="2"
                color="brownLighter"
                padding="30"
              >
                <template v-slot:label="label">
                  {{ parsePriceLabel(Object.keys(price)[label.index]) }}: ${{
                    label.value
                  }}
                </template>
              </v-sparkline>
            </div>
          </v-container>
        </v-card>
      </v-scroll-y-transition>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

import { capitalizeText, parseNumber } from '@/utils/FormatValues';
import {
  ICompanyStockMetaData,
  ICompanyStockPrice,
  IStockTimeSeries,
  IPayload
} from '@/types';

export default Vue.extend({
  name: 'CompanyStockCard',
  data() {
    return {
      metaData: {
        information: '',
        symbol: '',
        lastRefreshed: ''
      },
      price: {
        open: 0,
        high: 0,
        low: 0,
        close: 0,
        volume: 0
      }
    };
  },
  computed: {
    stockMetaData() {
      return this.metaData as ICompanyStockMetaData;
    },
    stockPrice() {
      return this.price as ICompanyStockPrice;
    }
  },
  methods: {
    parsePriceLabel(value: string) {
      return capitalizeText(value);
    },
    parseStockVolume(value: number) {
      return parseNumber(value);
    },
    async handleGetStockIn(range: string, firstRender = false) {
      const timeSeriesRange: string = capitalizeText(range);
      let timeSeriesHistory: string;
      const payload: IPayload = {
        symbol: this.metaData.symbol,
        stockExchange: ''
      };

      try {
        switch (timeSeriesRange) {
          case 'Intraday':
            timeSeriesHistory = 'Time Series (5min)';
            break;
          case 'Daily':
            timeSeriesHistory = 'Time Series (Daily)';
            break;
          case 'Weekly':
            timeSeriesHistory = timeSeriesRange + ' Time Series';
            break;
          case 'Monthly':
            timeSeriesHistory = timeSeriesRange + ' Time Series';
            break;
          default:
            throw new RangeError('Unexpected Time Series Range.');
        }

        if (!firstRender) {
          await this.$store.dispatch(
            'timeSeries/fetchStockTimeSeries' + timeSeriesRange,
            payload
          );
        }

        const value: IStockTimeSeries | any = await new Promise((resolve) => {
          resolve(this.$store.getters['timeSeries/stock' + timeSeriesRange]);
        });

        this.metaData = {
          information: value['Meta Data']['1. Information'],
          symbol: value['Meta Data']['2. Symbol'].toUpperCase(),
          lastRefreshed: value['Meta Data']['3. Last Refreshed']
        };

        const [lastRefreshedDate]: string =
          this.metaData.lastRefreshed.split(' ');
        this.price = {
          open: +value[timeSeriesHistory][lastRefreshedDate]['1. open'],
          high: +value[timeSeriesHistory][lastRefreshedDate]['2. high'],
          low: +value[timeSeriesHistory][lastRefreshedDate]['3. low'],
          close: +value[timeSeriesHistory][lastRefreshedDate]['4. close'],
          volume: +value[timeSeriesHistory][lastRefreshedDate]['5. volume']
        };
      } catch (err) {
        console.error(err);
      }
    }
  },
  created() {
    setTimeout(() => {
      this.handleGetStockIn('Daily', true);
    }, 1500);
  }
});
</script>

<style scoped>
.info-container {
  width: 25%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.graph-container {
  width: 75%;
}
</style>
