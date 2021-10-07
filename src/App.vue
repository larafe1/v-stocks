<template>
  <v-app>
    <Divider />
    <v-container>
      <SearchCard :is-loading="overviewIsLoading" @on-send="setHasSended" />
      <v-scroll-y-transition>
        <CompanyOverviewCard v-if="!overviewIsLoading && hasSended" />
      </v-scroll-y-transition>
      <v-scroll-y-transition>
        <CompanyStockCard v-if="!timeSeriesIsLoading && hasSended" />
      </v-scroll-y-transition>
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
      hasSended: false
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
