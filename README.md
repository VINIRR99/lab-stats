![logo_udemy](https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg)

# LAB | STATS

This lab was made for the [Typescript: The Complete Developer's Guide](https://www.udemy.com/course/typescript-the-complete-developers-guide/) online course at [Udemy](https://www.udemy.com/).

This code can read and analyse data files by using TypeScript and Composition.

## Technologies

- HTML
- JavaScript
- Node.js
- TypeScript

## Set your enviroment variables with

```shell
FILE_NAME=     // The name of the file to be read. 'football.csv' is available in the root of the directory
ANALYZER=      // Type of analysis to make in the file. 'all teams' will get all the teams present in the file and 'wins' will get all the wins of a selected team
TEAM=          // The individual team to be analyzed
OUTPUT_TARGET= // Type of Output where the analysis will be printed. 'console' will print the analysis in the console and 'html' will print the analysis in a HTML file
```

## Setup

- Fork this repo
- Clone this repo

```shell
$ cd lab-stats
$ npm install
$ npm run build
$ npm start
```

### Available Scripts

In the project directory, you can run:

#### `npm run build`

Transform the TypeScript code into JavaScript in the "build" folder for running.

#### `npm run dev`

Runs the app in the development mode.

The console will reload when you make changes and you can see any lint errors in it.

#### `npm start`

Runs the JavaScript code in the build folder

#### `npm run dev:build`

Transform the TypeScript code into JavaScript in the “build” folder for running and update the "build" folder everytime there is a change in the "src" folder.

#### `npm run dev:run`

Runs the "build" folder in the development mode.

Any changes in the "build" folder will reload the console and you can see any lint errors in it.
