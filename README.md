# burgernomics

[The Big Mac Index](https://www.economist.com/news/2020/01/15/the-big-mac-index) was invented by The Economist in 1986 as a lighthearted guide to whether currencies are at their “correct” level. It is based on the theory of purchasing-power parity (PPP), the notion that in the long run exchange rates should move towards the rate that would equalise the prices of an identical basket of goods and services (in this case, a burger) in any two countries.

## Usage

`npx burgernomics`

## Results

[Purchasing power parity](https://en.wikipedia.org/wiki/Purchasing_power_parity) (PPP) is a measurement of prices in different areas using specific goods, to contrast the absolute purchasing power between currencies. In many cases, PPP produces an inflation rate that is equal to the price of the basket of goods at one location divided by the price of the basket of goods at a different location. The PPP inflation and exchange rate may differ from the market exchange rate because of poverty, tariffs and other frictions. PPP exchange rates are widely used when comparing the GDP of different countries.

How to interpret the results:

- **perceivedValue**: value perceived in foreign country in terms of purchasing power
- **foreignBigMacs**: how many Big Macs this value buys on foreign country
- **baseBigMacs**: how many Big Macs this value buys on base country
- **baseImpliedValue**: value assuming purchasing power parity in base currency
- **foreignImpliedValue**: value assuming purchasing power parity in foreign currency
- **foreignMarketValue**: value on foreign country using exchange rate
- **marketExchangeRate**: market exchange rate used
- **impliedExchangeRate**: implied exchange rate assuming purchasing power parity
- **exchangeRatePercent**: difference between exchange rates (undervalue/overvalue)
- **baseValue**: value on base country (same as value)

## License

```
MIT License

Copyright (c) 2020 Guilherme Caulada (Sighmir)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
