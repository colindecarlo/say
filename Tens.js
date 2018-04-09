const Teens = require('./Teens.js');

function Tens(digit, ones) {
    this.digit = digit;
    this.ones = ones;
    this.isTeens = digit == 1;
}

Tens.map = {
    0: null,
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
}

Tens.prototype.toString = function() {

    if (this.isTeens) {
        return new Teens(parseInt(`${this.digit}${this.ones.digit}`)).toString();
    }

    return [Tens.map[this.digit], this.ones.toString()]
        .filter(word => !! word)
        .join('-');
}

module.exports = Tens;
