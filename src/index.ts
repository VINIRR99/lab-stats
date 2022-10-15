import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.file('football.csv');
matchReader.load();


const summary = Summary.analyzerWithOutputTarget('Man United', 'wins', 'console');
summary.buildAndPrintReport(matchReader.matches);