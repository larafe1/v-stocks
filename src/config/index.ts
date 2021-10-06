import { config } from 'dotenv';

config();

export default {
  alphaVantageBaseUrl: 'https://www.alphavantage.co/',
  alphaVantageToken: process.env.ALPHAVANTAGE_TOKEN
} as const;
