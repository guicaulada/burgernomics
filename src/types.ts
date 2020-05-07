export interface BigMacIndexData {
  [key: string]: Date | string | number | undefined;
  date: Date;
  iso_a3: string;
  currency_code: string;
  name: string;
  local_price: number;
  dollar_ex: number;
  dollar_price: number;
  USD_raw: number;
  EUR_raw: number;
  GBP_raw: number;
  JPY_raw: number;
  CNY_raw: number;
  GDP_dollar?: number;
  adj_price?: number;
  USD_adjusted?: number;
  EUR_adjusted?: number;
  GBP_adjusted?: number;
  JPY_adjusted?: number;
  CNY_adjusted?: number;
}

export interface CalculatedValues {
  foreignImpliedValue: number;
  baseImpliedValue: number;
  foreignMarketValue: number;
  baseBigMacs: number;
  foreignBigMacs: number;
  perceivedValue: number;
  marketExchangeRate: number;
  impliedExchangeRate: number;
  exchangeRatePercent: number;
  baseValue: number;
}

export type BigMacIndex = BigMacIndexData[];

export interface Arguments {
  base_currency: string;
  foreign_currency: string;
  exchange_rate?: number;
  date?: number;
  value: number;
  adjusted: boolean | undefined;
}
