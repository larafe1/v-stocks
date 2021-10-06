import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { IOverviewState } from '@/types';

const overviewModule = {
  namespaced: true,
  state: {
    isLoading: false,
    companyOverview: {}
  } as IOverviewState,
  getters,
  mutations,
  actions
};

export default overviewModule as any;
