const Ones = require('./Ones.js');

function Hundreds(digit) {
    this.digit = digit;
}

Hundreds.prototype = new Ones();

Hundreds.prototype.toString = function () {
    let word = Ones.prototype.toString.call(this);
    return word ? `${word} hundred` : word;
}

module.exports = Hundreds;
