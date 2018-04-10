const Period = require('./Period.js');

function SpokenNumber(number) {
    if (number < 0 || number >= 1000000000000) {
        throw new Error('Number must be between 0 and 999,999,999,999.');
    }

    this.periods = this.toPeriods(number.toString());
}

SpokenNumber.prototype.toPeriods = function (digits) {

    let periods = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",").split(',')
    let suffixes = ['billion', 'million', 'thousand', ''].slice(-periods.length)

    return periods.map((period, index) => new Period(period, suffixes[index]));
}

SpokenNumber.prototype.toString = function () {
    return this.periods.map(period => period.toString())
        .filter(period => period.length > 0)
        .join(' ');
}

module.exports = SpokenNumber;
