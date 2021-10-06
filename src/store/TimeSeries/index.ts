import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import { ITimeSeriesState } from '@/types';

const timeSeriesModule = {
  namespaced: true,
  state: {
    isLoading: false,
    stockIntraday: {},
    stockDaily: {},
    stockWeekly: {},
    stockMonthly: {}
  } as ITimeSeriesState,
  getters,
  mutations,
  actions
};

export default timeSeriesModule as any;
