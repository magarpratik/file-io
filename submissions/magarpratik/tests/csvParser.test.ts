import test from "ava";
import { CSVParser, ParsedCSV } from "../src/csvParser";

const csvPath = "./testCSV/sample.csv";

type testCase = {
  title: string;
  expectedParsedCSV: ParsedCSV[];
};

const testCases: testCase[] = [
  {
    title: "Given a valid csv, parse it and return it as an array of objects",
    expectedParsedCSV: [
      {
        track_name: "Track 1",
        key: "C",
      },
      {
        track_name: "Track 2",
        key: "D",
      },
      {
        track_name: "Track 3",
        key: "E",
      },
      {
        track_name: "Track 4",
        key: "C",
      },
    ],
  },
];

testCases.forEach(async (tc) => {
  test(tc.title, async (t) => {
    // Arrange
    const csvParser = new CSVParser();

    // Act
    const result = await csvParser.parse(csvPath);

    // Assert
    t.deepEqual(result, tc.expectedParsedCSV);
  });
});
