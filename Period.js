const Zero = require('./Zero.js');
const Ones = require('./Ones.js');
const Tens = require('./Tens.js');
const Hundreds = require('./Hundreds.js');

function Period(period, suffix = '') {

    if (period === '0') {
        return new Zero();
    }

    this.rawPeriod = period;
    let digits = this.rawPeriod.split('').reverse();

    this.ones = new Ones(digits[0]);

    if (digits.length > 1) {
        this.tens = new Tens(digits[1], this.ones);
    }

    if (digits.length == 3) {
        this.hundreds = new Hundreds(digits[2]);
    }

    this.suffix = suffix;
}

Period.prototype.allBalls = function () {
    return this.rawPeriod === '000';
}

Period.prototype.toString = function () {

    if (this.allBalls()) {
        return '';
    }

    let hundreds = this.hundreds ? `${this.hundreds.toString()} ` : '';
    let tens = this.tens ? this.tens.toString() : '';
    let ones = !tens ? this.ones.toString() : '';

    return `${hundreds}${tens}${ones} ${this.suffix}`.trim();
}

module.exports = Period;
