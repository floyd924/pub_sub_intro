const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function() {
};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    console.log('Payload received in Prime Logic department:', inputtedNumber);
    const result = this.numberIsPrime(inputtedNumber);
    console.log('is it prime?:', result);
    PubSub.publish('PrimeChecker:result-calculated', result);
  });
};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeChecker;
