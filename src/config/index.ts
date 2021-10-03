import { config } from 'dotenv';

config();

export default {
  alphaVantageToken: process.env.ALPHAVANTAGE_TOKEN
} as const;
