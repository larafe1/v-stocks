<template>
  <v-app>
    <separator />
    <v-container>
      <search-card :is-loading="isLoading" @on-send="setHasSended" />
      <v-scroll-y-transition>
        <company-overview-card v-if="!isLoading && hasSended" />
      </v-scroll-y-transition>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import Separator from '@/components/layout/Separator.vue';
import SearchCard from '@/components/base/SearchCard.vue';
import CompanyOverviewCard from '@/components/base/CompanyOverviewCard.vue';

export default Vue.extend({
  name: 'App',
  components: { Separator, SearchCard, CompanyOverviewCard },
  data() {
    return {
      hasSended: false
    };
  },
  computed: {
    ...mapGetters('overview', ['isLoading'])
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
