const Period = require('./Period.js');

function SpokenNumber(number) {
    if (number < 0 || number >= 1000000000000) {
        throw new Error('Number must be between 0 and 999,999,999,999.');
    }

    this.periods = this.toPeriods(number.toString().split(''));
}

SpokenNumber.prototype.toPeriods = function (digits) {

    let periods = [];
    while (digits.length) {
        periods.push(digits.splice(-3));
    }

    return periods.map((period, index) => {
        let suffixes = {
            0: '',
            1: 'thousand',
            2: 'million',
            3: 'billion'
        }

        return new Period(period.join(''), suffixes[index])
    }).reverse();
}

SpokenNumber.prototype.toString = function () {
    return this.periods.map(period => period.toString())
        .filter(period => period.length > 0)
        .join(' ');
}

module.exports = SpokenNumber;
