var fs = require('fs');

var USERTIMEINDEX = 13;
var LOOPTIME = [1E7, 1E7, 1E7, 1E7, 2E7, 2E7, 3E7, 5E7];

/**
 *
 * convert `process.hrtime` to nanoseconds
 *
 * @param hr {Array} [ ms, ns]
 * @returns {Number} in nanoseconds
 */
function hrToNS(hr) {
    return hr[0] * 1E9 + hr[1];
}

/**
 *
 * read user time from /proc/{pid}/stat file
 *
 * @returns {Number} in ticks
 */
function getUserTime() {
    return parseFloat(
        fs.readFileSync('/proc/' + process.pid + '/stat')
            .toString()
            .split(' ')[USERTIMEINDEX], 10);
}

/**
 *
 * @param loopTime {Number} how long is the loop in nanoseconds
 *
 * @returns {number}
 */
function getSampleTickClocks(loopTime) {
    var before = getUserTime();
    var start = process.hrtime();
    do {
        var end = process.hrtime();
        diff = hrToNS([end[0] - start[0], end[1] - start[1]])
    } while (diff < loopTime);
    var after = getUserTime();
    var result = (after - before) * 1E9 / diff;

    // round 95.000 - 104.99999 to 100
    return Math.round(result / 10) * 10;
}

/**
 *
 * @param override_cache if true, the sampling loop will run each time its called
 *
 *  @returns {Number} Clock ticks per second
 */
function init_sampling(override_cache) {
    var each_count = {};

    LOOPTIME.forEach(function (i) {
        var hertz = getSampleTickClocks(i);
        each_count[hertz] = each_count[hertz] || 0;
        each_count[hertz]++;
    });

    var max = Number.MIN_VALUE;
    var maxNumber = Number.MIN_VALUE;
    Object.keys(each_count).forEach(function (number) {
        if (each_count[number] > max) {
            max = each_count[number];
            maxNumber = number
        }
    });
    return maxNumber;
}

module.exports = init_sampling;
