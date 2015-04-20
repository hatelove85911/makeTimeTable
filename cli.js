var fs = require('fs'),
    argv = require('minimist')(process.argv.slice(2)),
    makeTimeTable = require('./makeTimeTable'),
    configuration = {},
    timeTables = [];

if (argv.f) {
    configuration = JSON.parse(fs.readFileSync(argv.f, 'utf8'));
} else if (argv.c) {
    configuration = JSON.parse(argv.c);
}

if (configuration.start && ( configuration.stops || configuration.number )) {
    configuration.start = new Date(configuration.start);
    timeTables = makeTimeTable(configuration);
}

console.log(JSON.stringify(timeTables));
