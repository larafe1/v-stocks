import { IOverviewMutations } from '@/types';

export default {
  setIsLoading(state, payload) {
    state.isLoading = payload;
  },
  setCompanyOverview(state, payload) {
    state.companyOverview = { ...payload };
  }
} as IOverviewMutations;
