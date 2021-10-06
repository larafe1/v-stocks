import { IOverviewGetters } from '@/types';

export default {
  isLoading(state) {
    return state.isLoading;
  },
  companyOverview(state) {
    return state.companyOverview;
  }
} as IOverviewGetters;
