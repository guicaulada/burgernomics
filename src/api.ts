import axios from "axios";
import { parseCsvData } from "./parser";
import { BigMacIndex, BigMacIndexData, CalculatedValues } from "./types";

export const BIGMAC_FULL_INDEX =
  "https://raw.githubusercontent.com/TheEconomist/big-mac-data/master/output-data/big-mac-full-index.csv";

export async function getBigMacIndex(): Promise<BigMacIndex> {
  const { data } = await axios.get<string>(BIGMAC_FULL_INDEX);

  if (!data) {
    throw Error("Error collecting index data!");
  }

  return parseCsvData(data.trim());
}

export async function getBigMacIndexFromDate(
  startDate?: Date,
): Promise<BigMacIndex> {
  if (!startDate) {
    startDate = new Date(new Date().getFullYear(), 0, 1);
  }

  const index = await getBigMacIndex();
  const filteredIndex = index.filter(
    data =>
      data.date.getTime() - (startDate as Date).getTime() >
      -1000 * 60 * 60 * 24,
  );

  return filteredIndex;
}

export function calculateValues(
  baseValue: number,
  baseBigMacPrice: number,
  foreignBigMacPrice: number,
  marketExchangeRate: number,
): CalculatedValues {
  const foreignImpliedValue =
    (baseValue * foreignBigMacPrice) / baseBigMacPrice;
  const baseImpliedValue = foreignImpliedValue / marketExchangeRate;
  const foreignMarketValue = baseValue * marketExchangeRate;
  const baseBigMacs = baseValue / baseBigMacPrice;
  const foreignBigMacs = foreignMarketValue / foreignBigMacPrice;
  const perceivedValue = foreignBigMacs * baseBigMacPrice;
  const impliedExchangeRate = foreignImpliedValue / baseValue;
  const exchangeRatePercent = impliedExchangeRate / marketExchangeRate;

  return {
    foreignImpliedValue,
    baseImpliedValue,
    foreignMarketValue,
    baseBigMacs,
    foreignBigMacs,
    perceivedValue,
    marketExchangeRate,
    impliedExchangeRate,
    exchangeRatePercent,
    baseValue,
  };
}

export function findCountryFromCurrencyCode(
  index: BigMacIndex,
  currencyCode: string,
): BigMacIndexData {
  const country = index.find(data => data.currency_code === currencyCode);

  if (!country) {
    throw Error(`Invalid currency code! (${currencyCode})`);
  }

  return country;
}

export async function getRawValues(
  value: number,
  baseCurrencyCode: string,
  foreignCurrencyCode: string,
  startDate?: Date,
): Promise<CalculatedValues> {
  const index = await getBigMacIndexFromDate(startDate);
  const baseCountry = findCountryFromCurrencyCode(index, baseCurrencyCode);
  const foreignCountry = findCountryFromCurrencyCode(
    index,
    foreignCurrencyCode,
  );

  const foreignBigMacPrice = foreignCountry.local_price;
  const baseBigMacPrice = baseCountry.local_price;
  const exchangeRate = foreignCountry.dollar_ex / baseCountry.dollar_ex;

  const result = calculateValues(
    value,
    baseBigMacPrice,
    foreignBigMacPrice,
    exchangeRate,
  );

  return result;
}

export async function getAdjustedValues(
  value: number,
  baseCurrencyCode: string,
  foreignCurrencyCode: string,
  startDate?: Date,
): Promise<CalculatedValues> {
  const index = await getBigMacIndexFromDate(startDate);
  const baseCountry = findCountryFromCurrencyCode(index, baseCurrencyCode);
  const foreignCountry = findCountryFromCurrencyCode(
    index,
    foreignCurrencyCode,
  );

  if (!foreignCountry.adj_price) {
    console.log(foreignCountry);
    throw Error(
      `Adjusted data unavailable at period for currency code! (${foreignCountry.currency_code})`,
    );
  }

  const foreignBigMacPrice =
    foreignCountry.adj_price * foreignCountry.dollar_ex;
  const baseBigMacPrice = baseCountry.local_price;
  const exchangeRate = foreignCountry.dollar_ex / baseCountry.dollar_ex;

  const result = calculateValues(
    value,
    baseBigMacPrice,
    foreignBigMacPrice,
    exchangeRate,
  );

  return result;
}

export default {
  getBigMacIndex,
  getBigMacIndexFromDate,
  calculateValues,
  findCountryFromCurrencyCode,
  getRawValues,
  getAdjustedValues,
};
