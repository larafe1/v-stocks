import axios, { AxiosError, AxiosResponse } from 'axios';

import config from '@/config';
import { ITimeSeriesActions, IStockTimeSeries } from '@/types';

export default {
  async fetchStockTimeSeriesIntraday(context, payload) {
    if (!payload) return console.log('Payload not provided.');

    context.commit('setIsLoading', true);
    const symbolParsed = payload.symbol + payload.stockExchange;
    const customParams = `query?function=TIME_SERIES_INTRADAY&symbol=${symbolParsed}&interval=5min&apikey=${config.alphaVantageToken}`;
    await axios
      .get(config.alphaVantageBaseUrl + customParams)
      .then(({ data }: AxiosResponse<IStockTimeSeries>) => {
        context.commit('setStockTimeSeriesIntraday', data);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      })
      .finally(() => {
        context.commit('setIsLoading', false);
      });
  },
  async fetchStockTimeSeriesDaily(context, payload) {
    if (!payload) return console.log('Payload not provided.');

    context.commit('setIsLoading', true);
    const symbolParsed = payload.symbol + payload.stockExchange;
    const customParams = `query?function=TIME_SERIES_DAILY&symbol=${symbolParsed}&apikey=${config.alphaVantageToken}`;
    await axios
      .get(config.alphaVantageBaseUrl + customParams)
      .then(({ data }: AxiosResponse<IStockTimeSeries>) => {
        context.commit('setStockTimeSeriesDaily', data);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      })
      .finally(() => {
        context.commit('setIsLoading', false);
      });
  },
  async fetchStockTimeSeriesWeekly(context, payload) {
    if (!payload) return console.log('Payload not provided.');

    context.commit('setIsLoading', true);
    const symbolParsed = payload.symbol + payload.stockExchange;
    const customParams = `query?function=TIME_SERIES_WEEKLY&symbol=${symbolParsed}&apikey=${config.alphaVantageToken}`;
    await axios
      .get(config.alphaVantageBaseUrl + customParams)
      .then(({ data }: AxiosResponse<IStockTimeSeries>) => {
        context.commit('setStockTimeSeriesWeekly', data);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      })
      .finally(() => {
        context.commit('setIsLoading', false);
      });
  },
  async fetchStockTimeSeriesMonthly(context, payload) {
    if (!payload) return console.log('Payload not provided.');

    context.commit('setIsLoading', true);
    const symbolParsed = payload.symbol + payload.stockExchange;
    const customParams = `query?function=TIME_SERIES_MONTHLY&symbol=${symbolParsed}&apikey=${config.alphaVantageToken}`;
    await axios
      .get(config.alphaVantageBaseUrl + customParams)
      .then(({ data }: AxiosResponse<IStockTimeSeries>) => {
        context.commit('setStockTimeSeriesMonthly', data);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      })
      .finally(() => {
        context.commit('setIsLoading', false);
      });
  }
} as ITimeSeriesActions;
