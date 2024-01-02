console.log(`<<===================Question_01====================>>`);

function squareOfWordLength(){
    var str = "JavaScript";
    var result = str.length;
    var squareNum = result ** 2;
    console.log(`The length of given string is :${squareNum}`);
       
}
squareOfWordLength();

function squareOfWordLength1(){
    var str1 = "Google Chrome";
    var result1 = str1.length;
    var squareNum1 = result1 ** 2;
    console.log(`The length of given string is :${squareNum1}`);
       
}
squareOfWordLength1("Google chrome");

function squareOfWordLength2(){
    var str2 = "Developer Smart";
    var result2 = str2.length;
    var squareNum2 = result2 ** 2;
    console.log(`The length of given string is :${squareNum2}`);
       
}
squareOfWordLength2("Google chrome");

console.log(`<<===================Question_02====================>>`);

function angularDeveloper() {
var str = "I am Angular Developer";
var resultLen = str.length;
console.log(`The length of string is : ${resultLen}`);
var newResult = str.split(" ");
console.log(`The total words into the string is : ${newResult.length}`);
//var finalResult = resultLen / newResult.length;
console.log(`After division result is :${str.length/newResult.length}`);  

console.log(`The multiplication result is :${str.length*newResult.length}`);
}angularDeveloper();