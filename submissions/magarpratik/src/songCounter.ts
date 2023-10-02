/* eslint-disable @typescript-eslint/no-explicit-any */
export type Filter = {
  key?: string;
};

export class SongCounter {
  public getCount(songsList: any[], filter?: Filter): number {
    let count = songsList.length;

    if (filter?.key) {
      const filteredSongs = songsList.filter((s) => s.key === filter.key);
      count = filteredSongs.length;
    }

    return count;
  }
}
