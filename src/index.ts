import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manUnitedWins = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
manUnitedWins.buildAndPrintReport(matchReader.matches);