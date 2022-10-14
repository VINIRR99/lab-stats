import fs from "fs";

const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
        .map((match: string): string[] => match.split(','));

let manUnitedWins = 0;

const matchResult = {
    homeWin: 'H',
    awayWin: 'A',
    draw: 'D'
};

for (let match of matches) {
    if (
        ((match[1] === 'Man United') && (match[5] === matchResult.homeWin)) ||
        ((match[2] === 'Man United') && (match[5] === matchResult.awayWin))
    ) manUnitedWins += 1;
};

console.log(`Man United won ${manUnitedWins} games`);