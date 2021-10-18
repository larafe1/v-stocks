<template>
  <v-row>
    <v-col class="mx-auto mt-12" cols="8">
      <v-card
        v-if="company.Name.length > 0"
        class="d-flex flex-column align-center justify-space-between"
        elevation="4"
      >
        <v-card-title>{{ company.Name }}'s Overview</v-card-title>
        <v-card-subtitle class="pt-4">
          {{ company.Name }} - {{ company.Symbol }} |
          {{ company.Exchange }}
        </v-card-subtitle>
        <v-card-text>{{ company.Description }}</v-card-text>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Advanced Company Information
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-container class="d-flex">
                <v-container class="d-flex flex-column flex-1 align-center">
                  <ul>
                    <li>Sector: {{ sector }}</li>
                    <li>Country: {{ company.Country }}</li>
                    <li>Currency: {{ company.Currency }}</li>
                    <li>Exchange: {{ company.Exchange }}</li>
                    <li>Asset Type: {{ company.AssetType }}</li>
                    <li>Fiscal Year End: {{ company.FiscalYearEnd }}</li>
                  </ul>
                </v-container>
                <v-container class="d-flex flex-column flex-1 align-center">
                  <ul class="">
                    <li>Revenue: {{ revenue }}</li>
                    <li>EV/EBITDA: {{ company.EVToEBITDA }}x</li>
                    <li>
                      Price To Book (P/B): {{ company.PriceToBookRatio }}x
                    </li>
                    <li>Price To Earnings (P/E): {{ company.PERatio }}x</li>
                    <li>Return On Equity (ROE): {{ returnOnEquity }}%</li>
                    <li>Dividend Yield (DY): {{ company.DividendYield }}%</li>
                  </ul>
                </v-container>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

import { capitalizeText, parseNumber } from '@/utils/FormatValues';
import { ICompanyOverview } from '@/types';

export default Vue.extend({
  name: 'CompanyOverviewCard',
  computed: {
    company() {
      return this.$store.getters[
        'overview/companyOverview'
      ] as ICompanyOverview;
    },
    sector() {
      const lowerValue: string = this.company.Sector.toLowerCase();
      return capitalizeText(lowerValue);
    },
    revenue() {
      return parseNumber(this.company.RevenueTTM, 'USD');
    },
    returnOnEquity() {
      return (+this.company.ReturnOnEquityTTM * 100).toFixed(2);
    }
  }
});
</script>
