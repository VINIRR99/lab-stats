import { OutputTarget } from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>Report</title>
    </head>
    <body>
        <div>
            <h1>Analysis Output</h1>
            <div>${report}</div>
        </div>
    </body>
</html>`;

        fs.writeFileSync('report.html', html);
    };
};