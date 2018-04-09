const SpokenNumber = require('./SpokenNumber.js');

function inEnglish(number) {
    return `${new SpokenNumber(number)}`;
}

module.exports = {
    inEnglish
};
