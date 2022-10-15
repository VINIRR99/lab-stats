import { MatchData } from "./MatchData";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

interface DataReader {
    data: string[][];
    read(): void;
};

export class MatchReader {
    matches: MatchData[] = [];

    constructor(public reader: DataReader) {};

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            Number(row[3]),
            Number(row[4]),
            row[5] as MatchResult,
            row[6]
        ]);
    };
};