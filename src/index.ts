import { MatchResult } from "./MatchResult";

// Using Class Inheritance

import { MatchReader } from "./inheritance/MatchReader";

const reader1 = new MatchReader('football.csv');
reader1.read();

let manUnitedWins1 = 0;

for (let match of reader1.data) {
    if (
        ((match[1] === 'Man United') && (match[5] === MatchResult.HomeWin)) ||
        ((match[2] === 'Man United') && (match[5] === MatchResult.AwayWin))
    ) manUnitedWins1 += 1;
};

console.log(`Class Inheritance => Man United won ${manUnitedWins1} games`);

// Using Alternative

import { CsvFileReader } from "./CsvFileReader";

const reader2 = new CsvFileReader('football.csv');
reader2.read();

let manUnitedWins2 = 0;

for (let match of reader2.data) {
    if (
        ((match[1] === 'Man United') && (match[5] === MatchResult.HomeWin)) ||
        ((match[2] === 'Man United') && (match[5] === MatchResult.AwayWin))
    ) manUnitedWins2 += 1;
};

console.log(`Alternative => Man United won ${manUnitedWins2} games`);