import { MatchData } from "./MatchData"
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { GetAllTeams } from "./analyzers/GetAllTeams";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

export interface Analyzer {
    run(matches: MatchData[]): { subject: string; report: string };
};

export interface OutputTarget {
    print(report: { subject: string; report: string }): void;
};

export class Summary {
    static teamDetails(team: string, analyzerId: string ,outputTargetId: string): Summary {
        let analyzerClass: Analyzer | undefined;
        switch(analyzerId) {
            case 'wins':
                analyzerClass = new WinsAnalysis(team);
                break;
            case undefined:
                throw new Error('Missing analyzerId! => Summary(teamDetails)');
            default:
                throw new Error('analyzerId Invalid! => Summary(teamDetails)');
        };

        let outputTargetClass: OutputTarget | undefined;
        switch(outputTargetId) {
            case 'console':
                outputTargetClass = new ConsoleReport();
                break;
            case 'html':
                outputTargetClass = new HtmlReport();
                break;
            case undefined:
                throw new Error('Missing outputTargetId! => Summary(teamDetails)');
            default:
                throw new Error('outputTargetId Invalid! => Summary(teamDetails)');
        };

        return new Summary(analyzerClass, outputTargetClass);
    };

    static getAllTeams(outputTargetId: string): Summary {
        let outputTargetClass: OutputTarget | undefined;
        switch(outputTargetId) {
            case 'console':
                outputTargetClass = new ConsoleReport();
                break;
            case 'html':
                outputTargetClass = new HtmlReport();
                break;
            case undefined:
                throw new Error('Missing outputTargetId! => Summary(getAllTeams)');
            default:
                throw new Error('outputTargetId Invalid! => Summary(getAllTeams)');
        };

        return new Summary(new GetAllTeams(), outputTargetClass);
    };

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {};

    buildAndPrintReport(matches: MatchData[]): void {
        const analysis = this.analyzer.run(matches);
        this.outputTarget.print(analysis);
    };
};