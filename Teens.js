function Teens(number) {
    this.number = number;
}

Teens.map = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

Teens.prototype.toString = function () {
    return Teens.map[this.number - 10];
}

module.exports = Teens;
