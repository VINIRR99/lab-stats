import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.file('football.csv');
matchReader.load();

const teamSummary = Summary.teamDetails('Man United', 'wins', 'console');
teamSummary.buildAndPrintReport(matchReader.matches);

const allTeams = Summary.getAllTeams('console');
allTeams.buildAndPrintReport(matchReader.matches);