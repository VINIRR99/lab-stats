import { MatchResult } from "./MatchResult";

// Using Class Inheritance

import { MatchReader as MatchReaderInheritance } from "./inheritance/MatchReader";

const matchReader1 = new MatchReaderInheritance('football.csv');
matchReader1.read();

let manUnitedWins1 = 0;

for (let match of matchReader1.data) {
    if (
        ((match[1] === 'Man United') && (match[5] === MatchResult.HomeWin)) ||
        ((match[2] === 'Man United') && (match[5] === MatchResult.AwayWin))
    ) manUnitedWins1 += 1;
};

console.log(`Class Inheritance => Man United won ${manUnitedWins1} games`);

// Using Composition

import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchReader as MatchReaderComposition } from "./composition/MatchReader";

const csvFileReader = new CsvFileReader('football.csv');
const matchReader2 = new MatchReaderComposition(csvFileReader);
matchReader2.load();

let manUnitedWins2 = 0;

for (let match of matchReader2.matches) {
    if (
        ((match[1] === 'Man United') && (match[5] === MatchResult.HomeWin)) ||
        ((match[2] === 'Man United') && (match[5] === MatchResult.AwayWin))
    ) manUnitedWins2 += 1;
};

console.log(`Composition => Man United won ${manUnitedWins2} games`);