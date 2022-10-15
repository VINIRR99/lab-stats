import { MatchData } from "./MatchData";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
    data: string[][];
    read(): void;
};

export class MatchReader {
    static file(fileName: string): MatchReader {
        const array = fileName.split('.');
        const dataType = array[array.length -1];

        let dataReaderClass: DataReader | undefined;

        switch(dataType) {
            case 'csv':
                dataReaderClass = new CsvFileReader(fileName);
                break;
            default:
                throw new Error('Data Type Not Found => MatchReader');
        };

        return new MatchReader(dataReaderClass);
    };

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