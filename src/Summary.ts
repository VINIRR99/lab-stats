import { MatchData } from "./MatchData"
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

export interface Analyzer {
    run(matches: MatchData[]): { subject: string; report: string };
};

export interface OutputTarget {
    print(report: { subject: string; report: string }): void;
};

type AnalyzerId = 'wins';

type OutputTargetId = 'console' | 'html';

export class Summary {
    static analyzerWithOutputTarget(team: string, analyzerId: AnalyzerId ,outputTargetId: OutputTargetId): Summary {
        let analyzerClass: Analyzer | undefined;
        switch(analyzerId) {
            case 'wins':
                analyzerClass = new WinsAnalysis(team);
                break;
            case undefined:
                throw new Error('Missing analyzerId! => Summary');
            default:
                throw new Error('analyzerId Invalid! => Summary');
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
                throw new Error('Missing outputTargetId! => Summary');
            default:
                throw new Error('outputTargetId Invalid! => Summary');
        };

        return new Summary(analyzerClass, outputTargetClass);
    };

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {};

    buildAndPrintReport(matches: MatchData[]): void {
        const analysis = this.analyzer.run(matches);
        this.outputTarget.print(analysis);
    };
};