<template>
  <v-row>
    <v-col class="mx-auto" cols="12" sm="6">
      <v-card
        class="d-flex flex-column align-center justify-space-between"
        elevation="4"
      >
        <v-card-title>{{ companyName }}'s Overview</v-card-title>
        <v-card-subtitle class="pt-4">
          {{ companyName }} - {{ ticker }}
        </v-card-subtitle>
        <v-card-text>{{ description }}</v-card-text>
        <v-card-subtitle>
          Revenue: {{ parseRevenue }} | EV/EBITDA: {{ evToEbitda }} | ROE:
          {{ parseReturnOnEquity }} | DY: {{ dividendYield }}%
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CompanyDetailsCard',
  props: [
    'ticker',
    'companyName',
    'description',
    'revenue',
    'evToEbitda',
    'returnOnEquity',
    'dividendYield'
  ],
  computed: {
    parseRevenue() {
      const parsedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(this.revenue);
      return parsedValue;
    },
    parseReturnOnEquity() {
      const parsedValue = (+this.returnOnEquity * 100).toFixed(2) + '%';
      return parsedValue;
    }
  }
});
</script>
