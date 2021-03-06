import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      isLoading: false,
      isFetched: false,
      error: null,
      stockOverview: null,
      stockChart: null
    };
  },
  getters,
  mutations,
  actions
};
