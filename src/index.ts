import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const consoleManUWins = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
consoleManUWins.buildAndPrintReport(matchReader.matches);