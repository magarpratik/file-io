import test from "ava";
import { Filter, SongCounter } from "../src/songCounter";

type testCase = {
  title: string;
  givenFilter?: Filter;
  givenSongsList: { [key: string]: string }[];
  expectedCount: number;
};

const testCases: testCase[] = [
  {
    title: "Given a list of songs, count total and return it",
    givenSongsList: [
      {
        track_name: "Track 1",
        key: "C",
      },
      {
        track_name: "Track 2",
        key: "D",
      },
    ],
    expectedCount: 2,
  },
  {
    title: "Given a filter is supplied, use it and return total",
    givenFilter: { key: "C" },
    givenSongsList: [
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
        key: "C",
      },
      {
        track_name: "Track 4",
        key: "C",
      },
    ],
    expectedCount: 3,
  },
];

testCases.forEach(async (tc) => {
  test(tc.title, async (t) => {
    // Arrange
    const songCounter = new SongCounter();

    // Act
    const count = songCounter.getCount(tc.givenSongsList, tc.givenFilter);

    // Assert
    t.is(count, tc.expectedCount);
  });
});
