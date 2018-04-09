function Ones(digit) {
    this.digit = digit;
}

Ones.map = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
};

Ones.prototype.toString = function () {
    return Ones.map[this.digit];
}

module.exports = Ones;
