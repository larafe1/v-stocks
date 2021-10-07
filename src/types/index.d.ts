import { ActionContext } from 'vuex';

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

interface IStockTimeSeries {
  'Meta Data': {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Time Zone': string;
  };
}

export interface IStockTimeSeriesIntraday extends IStockTimeSeries {
  'Time Series (5min)': {
    [key: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
      '5. volume': string;
    };
  };
}

export interface IStockTimeSeriesDaily extends IStockTimeSeries {
  'Time Series (Daily)': {
    [key: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
      '5. volume': string;
    };
  };
}

export interface IStockTimeSeriesWeekly extends IStockTimeSeries {
  'Weekly Time Series': {
    [key: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
      '5. volume': string;
    };
  };
}

export interface IStockTimeSeriesMonthly extends IStockTimeSeries {
  'Monthly Time Series': {
    [key: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
      '5. volume': string;
    };
  };
}

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
    payload: string
  ) => void;
}

export interface ITimeSeriesActions {
  fetchStockTimeSeriesIntraday: (
    context: ActionContext<IStockTimeSeries, unknown>,
    payload: string
  ) => void;
  fetchStockTimeSeriesDaily: (
    context: ActionContext<IStockTimeSeries, unknown>,
    payload: string
  ) => void;
  fetchStockTimeSeriesWeekly: (
    context: ActionContext<IStockTimeSeries, unknown>,
    payload: string
  ) => void;
  fetchStockTimeSeriesMonthly: (
    context: ActionContext<IStockTimeSeries, unknown>,
    payload: string
  ) => void;
}
