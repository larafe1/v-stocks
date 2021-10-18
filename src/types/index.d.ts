import { ActionContext } from 'vuex';

export interface IPayload {
  symbol: string;
  stockExchange: string;
}

export interface ICompanyOverview {
  Symbol: string;
  AssetType: string;
  Name: string;
  Description: string;
  Sector: string;
  Exchange: string;
  Currency: string;
  Country: string;
  DividendYield: string;
  RevenueTTM: string;
  ReturnOnEquityTTM: string;
  PriceToBookRatio: string;
  PERatio: string;
  EVToEBITDA: string;
  FiscalYearEnd: string;
}

export interface ICompanyStockMetaData {
  information: string;
  symbol: string;
  lastRefreshed: string;
}

export interface ICompanyStockPrice {
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
}

interface IMetaData {
  'Meta Data': {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
  };
}

type TimeSeries =
  | 'Time Series (5min)'
  | 'Time Series (Daily)'
  | 'Weekly Time Series'
  | 'Monthly Time Series';

interface ITimeSeriesProps {
  [key: string]: {
    '1. open': string;
    '2. high': string;
    '3. low': string;
    '4. close': string;
    '5. volume': string;
  };
}

export type IStockTimeSeries = {
  [key in TimeSeries]: ITimeSeriesProps;
} & IMetaData;

export interface IOverviewState {
  isLoading: boolean;
  companyOverview: ICompanyOverview;
}

export interface ITimeSeriesState {
  isLoading: boolean;
  stockIntraday: IStockTimeSeries;
  stockDaily: IStockTimeSeries;
  stockWeekly: IStockTimeSeries;
  stockMonthly: IStockTimeSeries;
}

export interface IOverviewGetters {
  isLoading: (state: IOverviewState) => boolean;
  companyOverview: (state: IOverviewState) => ICompanyOverview;
}

export interface ITimeSeriesGetters {
  isLoading: (state: ITimeSeriesState) => boolean;
  stockIntraday: (state: ITimeSeriesState) => IStockTimeSeries;
  stockDaily: (state: ITimeSeriesState) => IStockTimeSeries;
  stockWeekly: (state: ITimeSeriesState) => IStockTimeSeries;
  stockMonthly: (state: ITimeSeriesState) => IStockTimeSeries;
}

export interface IOverviewMutations {
  setIsLoading: (state: IOverviewState, payload: boolean) => void;
  setCompanyOverview: (
    state: IOverviewState,
    payload: ICompanyOverview
  ) => void;
}

export interface ITimeSeriesMutations {
  setIsLoading: (state: ITimeSeriesState, payload: boolean) => void;
  setStockTimeSeriesIntraday: (
    state: ITimeSeriesState,
    payload: IStockTimeSeries
  ) => void;
  setStockTimeSeriesDaily: (
    state: ITimeSeriesState,
    payload: IStockTimeSeries
  ) => void;
  setStockTimeSeriesWeekly: (
    state: ITimeSeriesState,
    payload: IStockTimeSeries
  ) => void;
  setStockTimeSeriesMonthly: (
    state: ITimeSeriesState,
    payload: IStockTimeSeries
  ) => void;
}

export interface IOverviewActions {
  fetchCompanyOverview: (
    context: ActionContext<ICompanyOverview, unknown>,
    payload: IPayload
  ) => void;
}

export interface ITimeSeriesActions {
  fetchStockTimeSeriesIntraday: (
    context: ActionContext<IStockTimeSeries, unknown>,
    payload: IPayload
  ) => void;
  fetchStockTimeSeriesDaily: (
    context: ActionContext<IStockTimeSeries, unknown>,
    payload: IPayload
  ) => void;
  fetchStockTimeSeriesWeekly: (
    context: ActionContext<IStockTimeSeries, unknown>,
    payload: IPayload
  ) => void;
  fetchStockTimeSeriesMonthly: (
    context: ActionContext<IStockTimeSeries, unknown>,
    payload: IPayload
  ) => void;
}
