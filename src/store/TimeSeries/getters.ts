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
  stockWeekly(state) {
    return state.stockWeekly;
  },
  stockMonthly(state) {
    return state.stockMonthly;
  }
} as ITimeSeriesGetters;
