<template>
  <v-row>
    <v-col>
      <v-card
        class="
          mx-auto
          mt-12
          d-flex
          flex-column
          justify-space-between
          align-center
        "
        width="765"
        height="105"
        elevation="8"
      >
        <v-progress-linear
          v-if="isLoading"
          indeterminate
          color="greenLighter"
        />
        <div class="search-container">
          <v-text-field
            clearable
            hide-details="auto"
            class="pb-3"
            color="greenLighter"
            label="Company Symbol"
            v-model="enteredSymbol"
          />
          <v-radio-group class="mx-9" v-model="selectedStockExchange">
            <v-radio label="US Stock" value="US" color="greenLighter" />
            <v-radio label="BR Stock" value="SA" color="greenLighter" />
          </v-radio-group>
          <v-btn
            large
            class="ml-8 white--text"
            color="greenLighter"
            @click="handleFetchCompanyData"
          >
            Search
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

import { IPayload } from '@/types';

export default Vue.extend({
  name: 'SearchCard',
  props: ['isLoading'],
  data() {
    return {
      enteredSymbol: '',
      selectedStockExchange: 'US'
    };
  },
  methods: {
    handleFetchCompanyData() {
      const payload: IPayload = {
        symbol: this.enteredSymbol,
        stockExchange: this.selectedStockExchange === 'SA' ? '.SA' : ''
      };

      this.$store.dispatch('overview/fetchCompanyOverview', payload);
      this.$store.dispatch('timeSeries/fetchStockTimeSeriesDaily', payload);
      this.$emit('on-send', true);
      this.$emit('on-change', this.selectedStockExchange as string);

      this.enteredSymbol = '';
      this.selectedStockExchange = 'US';
    }
  }
});
</script>

<style scoped>
.search-container {
  width: 90%;
  margin: auto;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin: auto;
}
</style>
