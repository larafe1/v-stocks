import Vue from 'vue';
import Vuex from 'vuex';
import axios, { AxiosResponse, AxiosError } from 'axios';

import config from '@/config';
import { IStock } from '@/types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: false,
    stockOverview: {}
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    stockOverview(state) {
      return state.stockOverview;
    }
  },
  mutations: {
    setisLoading(state, payload: boolean) {
      state.isLoading = payload;
    },
    setStockOverview(state, payload: IStock) {
      state.stockOverview = {
        ticker: payload.Symbol,
        companyName: payload.Name,
        description: payload.Description,
        revenue: payload.RevenueTTM,
        evToEbitda: payload.EVToEBITDA,
        returnOnEquity: payload.ReturnOnEquityTTM,
        dividendYield: payload.DividendYield
      };
    }
  },
  actions: {
    async fetchStockOverview(context, payload: string) {
      if (!payload) return;

      context.commit('setisLoading', true);
      const customParams = `query?function=OVERVIEW&symbol=${payload}&apikey=${config.alphaVantageToken}`;
      await axios
        .get(`https://www.alphavantage.co/` + customParams)
        .then(({ data }: AxiosResponse<IStock>) => {
          context.commit('setStockOverview', data);
        })
        .catch((err: AxiosError) => {
          console.error(err);
        })
        .finally(() => {
          context.commit('setisLoading', false);
        });
    }
  }
});

export default store;
