console.log(`<<================Question_01================>>`);
function greaterNumber(num1, num2) {
  var num1 = 10;
  var num2 = -10;
  var result = num1 > num2 ? num1 : num2;
  console.log(`Greatest number between two numbers is :${result}`);
}
greaterNumber();

function greatestNum(num1, num2) {
  var num1 = 800;
  var num2 = 899;
  var result = num1 > num2 ? num1 : num2;
  console.log(`Greatest number between two numbers is :${result}`);
}
greatestNum();

console.log(`<<================Question_02================>>`);

function isEvenOrOddNum(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}
isEvenOrOddNum();
console.log(`The 29 number is :`, isEvenOrOddNum(29));
console.log(`The 44 number is : `, isEvenOrOddNum(44));
console.log(`The 0 number is  :`, isEvenOrOddNum(0));
console.log(`The 101 number is:`, isEvenOrOddNum(101));

console.log(`<<================Question_03================>>`);

function wordLength1(n4) {
  var result = n4.length;
  //console.log(`The length of string is :${result}`);

  return result % 2 === 0 ? "Even" : "Odd";
}
wordLength1("JavaScript");
console.log(`The length of JavaScript is :`, wordLength1("JavaScript"));
console.log(`The length of Developer is :`, wordLength1("Developer"));
console.log(`The length of Google is :`, wordLength1("Google"));
