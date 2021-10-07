<template>
  <v-row>
    <v-col class="mx-auto mt-12" cols="7">
      <v-card
        class="d-flex flex-column align-center justify-space-between"
        elevation="4"
      >
        <v-card-title>{{ company.Name }}'s Overview</v-card-title>
        <v-card-subtitle class="pt-4">
          {{ company.Name }} - {{ company.Symbol }} |
          {{ company.Exchange }}
        </v-card-subtitle>
        <v-card-text>{{ company.Description }}</v-card-text>
        <div class="separator" />
        <v-container class="d-flex">
          <v-container class="d-flex flex-column flex-1 align-center">
            <ul>
              <li>Sector: {{ parseSector }}</li>
              <li>Country: {{ company.Country }}</li>
              <li>Currency: {{ company.Currency }}</li>
              <li>Exchange: {{ company.Exchange }}</li>
              <li>Asset Type: {{ company.AssetType }}</li>
              <li>Fiscal Year End: {{ company.FiscalYearEnd }}</li>
            </ul>
          </v-container>
          <v-container class="d-flex flex-column flex-1 align-center">
            <ul class="">
              <li>Revenue: {{ parseRevenue }}</li>
              <li>EV/EBITDA: {{ company.EVToEBITDA }}</li>
              <li>Price To Book (P/B): {{ company.PriceToBookRatio }}</li>
              <li>Price To Earnings (P/E): {{ company.PERatio }}</li>
              <li>Return On Equity (ROE): {{ parseReturnOnEquity }}</li>
              <li>Dividend Yield (DY): {{ company.DividendYield }}%</li>
            </ul>
          </v-container>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

import { ICompanyOverview } from '@/types';

export default Vue.extend({
  name: 'CompanyOverviewCard',
  computed: {
    company() {
      const companyData = this.$store.getters[
        'overview/companyOverview'
      ] as unknown;
      return companyData as ICompanyOverview;
    },
    parseSector() {
      const lowerValue: string = this.company.Sector.toLowerCase();
      const parsedValue =
        lowerValue.charAt(0).toUpperCase() + lowerValue.slice(1);
      return parsedValue;
    },
    parseRevenue() {
      const parsedValue: string = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(this.company.RevenueTTM);
      return parsedValue;
    },
    parseReturnOnEquity() {
      const parsedValue =
        (+this.company.ReturnOnEquityTTM * 100).toFixed(2) + '%';
      return parsedValue;
    }
  }
});
</script>

<style scoped>
.separator {
  width: 80%;

  margin-top: 12px;

  border-top: 1px solid #ccc;
}
</style>
