<template>
  <v-row>
    <v-col class="mx-auto pt-4">
      <v-card
        class="d-flex flex-column justify-space-between align-center"
        width="400"
        height="100"
        elevation="4"
        :loading="isLoading"
      >
        <div class="div__container--search">
          <v-text-field
            label="Company Ticker"
            hide-details="auto"
            v-model="enteredTicker"
          />
          <v-btn
            class="ml-8"
            color="primary"
            outlined
            @click="handleFetchStockOverview"
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

export default Vue.extend({
  name: 'SearchCard',
  props: ['isLoading'],
  data() {
    return {
      hasSended: false,
      enteredTicker: ''
    };
  },
  watch: {
    isLoading(value) {
      return value;
    }
  },
  methods: {
    handleFetchStockOverview() {
      this.hasSended = true;
      this.$store.dispatch('fetchStockOverview', this.enteredTicker);
      this.enteredTicker = '';
    }
  }
});
</script>

<style scoped>
.div__container--search {
  display: flex;
  align-items: baseline;

  margin: auto;
  padding-bottom: 0.6rem;
}
</style>
