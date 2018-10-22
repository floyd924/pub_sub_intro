const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (){
};


ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const isItPrime = event.detail;
    console.log('payload received in ResultView:', isItPrime);
    this.displayResult(isItPrime);
  });
};



// method that takes in a result a displays it on a page
ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if (result) {
    resultElement.textContent = `That is a prime number!`;
  } else {
    resultElement.textContent = `That is not prime number!`;
  }

};





module.exports = ResultView;
