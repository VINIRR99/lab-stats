import { OutputTarget } from "../Summary"

export class ConsoleReport implements OutputTarget {
    print(report: { subject: string; report: string }): void {console.log(report)};
};