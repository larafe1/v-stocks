<template>
  <v-row>
    <v-col class="mx-auto mt-12" cols="12" sm="6">
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
        <v-card-subtitle>
          Revenue: {{ parseRevenue }} | EV/EBITDA: {{ company.EVToEBITDA }} |
          ROE: {{ parseReturnOnEquity }} | DY: {{ company.DividendYield }}%
        </v-card-subtitle>
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
