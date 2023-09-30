import test from "ava";
import { CSVParser } from "../src/csvParser";

type testCase = {
  title: string;
};

const testCases: testCase[] = [
  {
    title: "testing testing",
  },
];

testCases.forEach((tc) => {
  test(tc.title, (t) => {
    // Arrange
    const csvParser = new CSVParser();

    // Act
    csvParser.parse();

    // Assert
    t.true(true);
  });
});
