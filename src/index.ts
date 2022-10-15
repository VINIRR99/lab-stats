import "dotenv/config";

import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const fileName = process.env.FILE_NAME;
const analyzer = process.env.ANALYZER;
const team = process.env.TEAM;
const outputTarget = process.env.OUTPUT_TARGET;
if (fileName && analyzer && outputTarget) {
    const matchReader = MatchReader.file(fileName);
    matchReader.load();

    if (analyzer === 'all teams') {
        const allTeams = Summary.getAllTeams(outputTarget);
        allTeams.buildAndPrintReport(matchReader.matches);
    } else {
        if (team) {
            const teamSummary = Summary.teamDetails(team, analyzer, outputTarget);
            teamSummary.buildAndPrintReport(matchReader.matches);
        };
    }
};
// const matchReader = MatchReader.file('football.csv');
// matchReader.load();

// const teamSummary = Summary.teamDetails('Man United', 'wins', 'console');
// teamSummary.buildAndPrintReport(matchReader.matches);

// const allTeams = Summary.getAllTeams('console');
// allTeams.buildAndPrintReport(matchReader.matches);