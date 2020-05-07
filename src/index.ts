#!/usr/bin/env node
import yargs from "yargs";
import api from "./api";
import { Arguments } from "./types";

export default api;

export function getArguments(args?: string[]): Arguments {
  return (args ? yargs(args) : yargs)
    .option("base_currency", {
      alias: "b",
      type: "string",
      description: "Local currency code",
      required: true,
    })
    .option("foreign_currency", {
      alias: "f",
      type: "string",
      description: "Foreign currency code",
      required: true,
    })
    .option("value", {
      alias: "v",
      type: "number",
      description: "Value in base currency",
      required: true,
    })
    .option("date", {
      alias: "d",
      type: "string",
      description: "Get value from next closest date (YYYY-MM-DD)",
    })
    .option("adjusted", {
      alias: "a",
      type: "boolean",
      description: "Adjust to account for GDP per capita",
    })
    .coerce("date", Date.parse).argv;
}

export function main(args?: string[], force = false): void {
  if (require.main === module || force) {
    const argv = getArguments(args);
    console.log(argv.date);
    if (argv.adjusted) {
      api
        .getAdjustedValues(
          argv!.value,
          argv!.base_currency,
          argv!.foreign_currency,
          argv!.date ? new Date(argv!.date) : undefined,
        )
        .then(result => console.log(JSON.stringify(result, null, 4)));
    } else {
      api
        .getRawValues(
          argv!.value,
          argv!.base_currency,
          argv!.foreign_currency,
          argv!.date ? new Date(argv!.date) : undefined,
        )
        .then(result => console.log(JSON.stringify(result, null, 4)));
    }
  }
}

main();
