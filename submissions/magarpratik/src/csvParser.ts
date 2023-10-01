export type ParsedCSV = { [x: string]: string };

export class CSVParser {
  public async parse(csvPath: string): Promise<ParsedCSV[]> {
    const result: ParsedCSV[] = [{}];

    const msg = await Promise.resolve("Hello World!");

    console.log(msg);
    console.log(csvPath);

    return result;
  }
}
