import fs from "fs";
import csv from "csv-parser";

export type ParsedCSV = { [key: string]: string };

export class CSVParser {
  public async parse(filePath: string): Promise<ParsedCSV[]> {
    const result: ParsedCSV[] = [];

    return new Promise((res, rej) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (data) => result.push(data))
        .on("end", () => res(result))
        .on("error", (error) => rej(error));
    });
  }
}
