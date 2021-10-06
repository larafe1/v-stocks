import { ITimeSeriesGetters } from '@/types';

export default {
  isLoading(state) {
    return state.isLoading;
  },
  stockIntraday(state) {
    return state.stockIntraday;
  },
  stockDaily(state) {
    return state.stockDaily;
  },
  stockMonthly(state) {
    return state.stockMonthly;
  }
} as ITimeSeriesGetters;
