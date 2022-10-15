import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";

export class GetAllTeams implements Analyzer {
    run(matches: MatchData[]): { subject: string; report: string } {
        const teams = matches.map((match: MatchData): string => match[1]);
        const removedDuplicates = [...new Set(teams)];

        const report = 'Premier League Teams for the 2018/2019 season:\n' + removedDuplicates.join('\n');

        return { subject: 'All Teams', report };
    };
};