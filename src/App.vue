<template>
  <v-app>
    <div class="div__main">
      <search-card :is-loading="isLoading" />
      <v-scroll-y-transition>
        <company-details-card
          v-if="!isLoading && stockOverview.ticker"
          :ticker="stockOverview.ticker"
          :company-name="stockOverview.companyName"
          :description="stockOverview.description"
          :revenue="stockOverview.revenue"
          :ev-to-ebitda="stockOverview.evToEbitda"
          :return-on-equity="stockOverview.returnOnEquity"
          :dividend-yield="stockOverview.dividendYield"
        />
      </v-scroll-y-transition>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import SearchCard from '@/components/SearchCard.vue';
import CompanyDetailsCard from '@/components/CompanyDetailsCard.vue';

export default Vue.extend({
  name: 'App',
  components: { SearchCard, CompanyDetailsCard },
  computed: {
    ...mapGetters(['stockOverview', 'isLoading'])
  }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.div__main {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 60px;
}
</style>
