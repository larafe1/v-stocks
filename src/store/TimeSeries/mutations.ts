import { ITimeSeriesMutations } from '@/types';

export default {
  setIsLoading(state, payload) {
    state.isLoading = payload;
  },
  setStockTimeSeriesIntraday(state, payload) {
    state.stockIntraday = { ...payload };
  },
  setStockTimeSeriesDaily(state, payload) {
    state.stockDaily = { ...payload };
  },
  setStockTimeSeriesWeekly(state, payload) {
    state.stockWeekly = { ...payload };
  },
  setStockTimeSeriesMonthly(state, payload) {
    state.stockMonthly = { ...payload };
  }
} as ITimeSeriesMutations;
