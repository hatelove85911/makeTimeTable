var fs = require('fs'),
    argv = require('minimist')(process.argv.slice(2)),
    configuration = {},
    timeTables = [];

function randomDateByOffset(base, hours, mins, seconds) {
    hours = hours || 0;
    mins = mins || 0;
    seconds = seconds || 0;
    return new Date(base.getTime() + Math.random() * (hours * 60 * 60 * 1000 + mins * 60 * 1000 + seconds * 1000));
}


if (argv.f) {
    configuration = JSON.parse(fs.readFileSync(argv.f, 'utf8'));
} else if (argv.c) {
    configuration = JSON.parse(argv.c);
}

if (configuration.start && configuration.number) {
    start = new Date(configuration.start);

    for (var i = 0, l = +configuration.number; i < l; i++) {
        departure = i === 0 ? randomDateByOffset(start, 1) : randomDateByOffset(timeTables[i - 1].arr, 0.5);
        arrival = randomDateByOffset(departure, 1);
        timeTables.push({
            dep: departure,
            arr: arrival
        });
    }
}

console.log(JSON.stringify(timeTables));
