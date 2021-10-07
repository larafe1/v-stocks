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
        width="740"
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
          <v-radio-group class="mx-9" v-model="selectedExchange">
            <v-radio label="US Stock" value="US" color="greenLighter" />
            <v-radio label="BR Stock" value="SA" color="greenLighter" />
          </v-radio-group>
          <v-btn
            large
            class="ml-8 white--text"
            color="greenLighter"
            @click="handleFetchCompanyOverview"
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
      enteredSymbol: '',
      selectedExchange: 'US'
    };
  },
  methods: {
    handleFetchCompanyOverview() {
      // const payload = {
      //   symbol: this.enteredSymbol,
      //   exchange: this.selectedExchange
      // };
      this.$store.dispatch('overview/fetchCompanyOverview', this.enteredSymbol);
      this.$store.dispatch(
        'timeSeries/fetchStockTimeSeriesWeekly',
        this.enteredSymbol
      );
      this.$emit('on-send', true);
      this.enteredSymbol = '';
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
