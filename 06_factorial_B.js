//console.log(`<<===============Assignment_02=================>>`);
// let wordCount = function(str) {
//     return str.split(' ').length;   
// }
// console.log(wordCount('Revision is the mother of success'));

console.log(`<<===============Assignment_02=================>>`);
let factorialOfNum = function (num) {
    if (num==0 || num==1) {
        return 1;
    }
    if (num<0 || num==null || num==undefined || num==NaN) {
        return `Invalid Number`
    }
    //let s = 0;
    // if (num==String.length) {
    //     return num.split(' ').length;
    // }
    let result = 1;
    for (let index = 1; index <= num; index++) {
        result = result * index;    
    }
    return result;
}
// let result = factorialOfNum(5);
// console.log(`Factorial of number 5 is :`,result);

// let result1 = factorialOfNum(3);
// console.log(`Factorial of number 3 is :`,result1);

// let result2 = factorialOfNum(null);
// console.log(`Factorial of  null is :`,result2);

// let result3 = factorialOfNum(8);
// console.log(`Factorial of number 8 is :`,result3);

// let result4 = factorialOfNum(undefined);
// console.log(`Factorial of Undefined is :`,result4);

// let result5 = factorialOfNum(9);
// console.log(`Factorial of number 9 is :`,result5);

// let result6 = factorialOfNum(0);
// console.log(`Factorial of number 0 is :`,result6);
console.log(`-------------------step_01-------------------`);
let str = "Revision is the mother of success";
let Total = str.split(' ').length;
let result7 = factorialOfNum(Total);
console.log(`The words into the string are : ${Total}`);
console.log(`Factorial of 6 is :`,result7);

console.log(`-------------------step_02-------------------`);

let str1 = "We never fail, we always learn, Mind it";
let Total1 = str1.split(' ').length;
let result8 = factorialOfNum(Total1);
console.log(`The words into the string are : ${Total1}`);
console.log(`Factorial of 8 is :`,result8);

console.log(`-------------------step_03-------------------`);
let result6 = factorialOfNum(null);
console.log(`Factorial of null is :`,result6);

console.log(`-------------------step_04-------------------`);

let result5 = factorialOfNum("");
console.log(`Factorial of "" is :`,result5);

console.log(`-------------------step_05-------------------`);

let str3 = "Aishwarya Vijay Rane";
let Total3 = str3.split(' ').length;
let result9 = factorialOfNum(Total3);
console.log(`The words into the my name are : ${Total3}`);
console.log(`Factorial of 3 is :`,result9);