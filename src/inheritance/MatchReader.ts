import { MatchResult } from "./../MatchResult";
import { CsvFileReader } from "./CsvFileReader";
import { MatchData } from "../MatchData";
import { dateStringToDate } from "./../utils";

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        Number(row[3]),
        Number(row[4]),
        row[5] as MatchResult,
        row[6]
    ]};
};