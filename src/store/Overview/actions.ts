import axios, { AxiosResponse, AxiosError } from 'axios';

import config from '@/config';
import { IOverviewActions, ICompanyOverview } from '@/types';

export default {
  async fetchCompanyOverview(context, payload) {
    if (!payload) return console.log('Payload not provided.');

    context.commit('setIsLoading', true);
    const symbolParsed = payload.symbol + payload.stockExchange;
    const customParams = `query?function=OVERVIEW&symbol=${symbolParsed}&apikey=${config.alphaVantageToken}`;
    await axios
      .get(config.alphaVantageBaseUrl + customParams)
      .then(({ data }: AxiosResponse<ICompanyOverview>) => {
        context.commit('setCompanyOverview', data);
      })
      .catch((err: AxiosError) => {
        console.error(err);
      })
      .finally(() => {
        context.commit('setIsLoading', false);
      });
  }
} as IOverviewActions;
