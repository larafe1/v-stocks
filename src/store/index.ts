import Vue from 'vue';
import Vuex from 'vuex';

import overviewModule from './Overview';
import timeSeriesModule from './TimeSeries';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { overview: overviewModule, timeSeries: timeSeriesModule }
});

export default store;
