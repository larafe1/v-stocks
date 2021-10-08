<template>
  <v-row>
    <v-col class="mx-auto mt-3" cols="7">
      <v-card
        class="d-flex flex-column align-center justify-center"
        elevation="4"
        height="350"
      >
        <v-card-title>{{ stockWeekly.metaData.information }}</v-card-title>
        <v-container class="d-flex align-center justify-center">
          <BaseOutlineButton class="mr-2 white--text">
            Intraday
          </BaseOutlineButton>
          <BaseOutlineButton class="mr-2 white--text">
            Daily
          </BaseOutlineButton>
          <BaseOutlineButton class="mr-2 white--text">
            Weekly
          </BaseOutlineButton>
          <BaseOutlineButton class="mr-2 white--text">
            Monthly
          </BaseOutlineButton>
        </v-container>
        <v-container class="d-flex">
          <div class="info-container">
            <ul>
              <li>Symbol: {{ stockWeekly.metaData.symbol }}</li>
              <li>Volume: {{ stockWeekly.price.volume }}</li>
              <li>
                Last Refreshed:
                {{ stockWeekly.metaData.lastRefreshed }}
              </li>
              <li>Time Zone: {{ stockWeekly.metaData.timeZone }}</li>
            </ul>
          </div>
          <div class="graph-container">
            <v-sparkline
              :value="[
                stockWeekly.price.open,
                stockWeekly.price.low,
                stockWeekly.price.high,
                stockWeekly.price.close
              ]"
              line-width="2"
              color="brownLighter"
              padding="30"
            >
              <template v-slot:label="label">
                {{
                  capitalizeText(Object.keys(stockWeekly.price)[label.index])
                }}: ${{ label.value }}
              </template>
            </v-sparkline>
          </div>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

import { IStockTimeSeriesWeekly } from '@/types';

export default Vue.extend({
  name: 'CompanyStockCard',
  computed: {
    stockWeekly() {
      const value: IStockTimeSeriesWeekly =
        this.$store.getters['timeSeries/stockWeekly'];

      const metaData = {
        information: value['Meta Data']['1. Information'],
        symbol: value['Meta Data']['2. Symbol'].toUpperCase(),
        lastRefreshed: value['Meta Data']['3. Last Refreshed'],
        timeZone: value['Meta Data']['4. Time Zone']
      };

      const [lastRefreshedDate] = metaData.lastRefreshed.split(' ');
      const price = {
        open: +value['Weekly Time Series'][lastRefreshedDate]['1. open'],
        low: +value['Weekly Time Series'][lastRefreshedDate]['3. low'],
        high: +value['Weekly Time Series'][lastRefreshedDate]['2. high'],
        close: +value['Weekly Time Series'][lastRefreshedDate]['4. close'],
        volume: +value['Weekly Time Series'][lastRefreshedDate]['5. volume']
      };

      return {
        metaData,
        price
      };
    }
  },
  methods: {
    capitalizeText(value: string) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
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
