console.log("Evaluating test.js");

var message = 'test.js developing';

exports.message = 'test.js message.';

console.log(exports.message); 

console.log(message);

module.exports = function () {
  console.log("hello world");

}