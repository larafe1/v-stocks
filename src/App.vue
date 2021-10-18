<template>
  <v-app>
    <Divider />
    <v-container>
      <SearchCard
        :is-loading="overviewIsLoading && timeSeriesIsLoading"
        @on-send="setHasSended"
        @on-change="parseStockExchange"
      />
      <v-scroll-y-transition>
        <CompanyOverviewCard
          v-if="hasSended && !overviewIsLoading && isDefaultStockExchange"
        />
      </v-scroll-y-transition>
      <v-fade-transition>
        <CompanyStockCard v-if="hasSended" v-show="!timeSeriesIsLoading" />
      </v-fade-transition>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import Divider from '@/components/layout/Divider.vue';
import SearchCard from '@/components/base/SearchCard.vue';
import CompanyOverviewCard from '@/components/base/CompanyOverviewCard.vue';
import CompanyStockCard from '@/components/base/CompanyStockCard.vue';

export default Vue.extend({
  name: 'App',
  components: { Divider, SearchCard, CompanyOverviewCard, CompanyStockCard },
  data() {
    return {
      hasSended: false,
      isDefaultStockExchange: true
    };
  },
  computed: {
    ...mapGetters('overview', {
      overviewIsLoading: 'isLoading'
    }),
    ...mapGetters('timeSeries', {
      timeSeriesIsLoading: 'isLoading'
    })
  },
  methods: {
    setHasSended(value: boolean) {
      this.hasSended = value;
    },
    parseStockExchange(value: string) {
      if (value === 'US') return;
      this.isDefaultStockExchange = false;
    }
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto Slab', sans-serif;
  background-color: var(--v-background-base);
}
</style>
