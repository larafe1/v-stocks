import axios, { AxiosResponse, AxiosError } from 'axios';

import config from '@/config';
import { IOverviewActions } from '@/types';

export default {
  async fetchCompanyOverview(context, payload) {
    if (!payload) return console.log('No payload provided.');

    context.commit('setIsLoading', true);
    const customParams = `query?function=OVERVIEW&symbol=${payload}&apikey=${config.alphaVantageToken}`;
    await axios
      .get(config.alphaVantageBaseUrl + customParams)
      .then(({ data }: AxiosResponse) => {
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
