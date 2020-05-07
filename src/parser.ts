import { BigMacIndex, BigMacIndexData } from "./types";

export function parseCsvData(csvData: string): BigMacIndex {
  const arr = csvData.split("\n");
  const jsonObj = [] as BigMacIndex;
  const headers = arr[0].split(",") as string[];
  for (let i = 1; i < arr.length; i++) {
    const data = arr[i].split(",");
    const obj = {} as BigMacIndexData;
    for (let j = 0; j < data.length; j++) {
      const key = headers[j].trim();
      const value = data[j].trim();
      if (value) {
        if (j == 0) {
          obj[key] = new Date(value);
        } else if (j <= 3) {
          obj[key] = value;
        } else {
          obj[key] = Number(value);
        }
      }
    }
    jsonObj.push(obj);
  }
  return jsonObj;
}

export default {
  parseCsvData,
};
