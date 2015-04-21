function randomDateByOffset(base, hours, mins, seconds) {
    hours = hours || 0;
    mins = mins || 0;
    seconds = seconds || 0;
    return new Date(base.getTime() + Math.random() * (hours * 60 * 60 * 1000 + mins * 60 * 1000 + seconds * 1000));
}

function generateTimeTableData(config) {
    var result = [],
        departure,
        arrival,
        numberOfStages = 0;

    if (config.start && (config.stops || config.number)) {
        //determine number of stages
        if (Array.isArray(config.stops)) {
            numberOfStages = config.stops.length - 1;
        } else if (config.number) {
            numberOfStages = config.number;
        }

        //generate time time data
        for (var i = 0, l = numberOfStages; i < l; i++) {

            departure = i === 0 ? randomDateByOffset(config.start, 0, 30) : randomDateByOffset(result[i - 1].arr, 0, 30); // dwell in about half an hour
            arrival = randomDateByOffset(departure, 1); // run in about one hour

            if (Array.isArray(config.stops)) {
                result.push({
                    src: config.stops[i],
                    des: config.stops[i + 1],
                    dep: departure,
                    arr: arrival
                });
            } else {
                result.push({
                    dep: departure,
                    arr: arrival
                });
            }
        }
    }

    return result;
}

module.exports = generateTimeTableData;
