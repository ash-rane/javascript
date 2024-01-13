console.log(`<<===============Assignment_01=================>>`);
let factorialOfNum = function (num) {
    if (num==0 || num==1) {
        return 1;
    }
    if (num<0 || num==null || num==undefined || num==NaN) {
        return `Invalid Number`
    }
    let result = 1;
    for (let index = 1; index <= num; index++) {
        result = result * index;    
    }
    return result;
}
let result = factorialOfNum(5);
console.log(`Factorial of number 5 is :`,result);

let result1 = factorialOfNum(3);
console.log(`Factorial of number 3 is :`,result1);

let result2 = factorialOfNum(null);
console.log(`Factorial of  null is :`,result2);

let result3 = factorialOfNum(8);
console.log(`Factorial of number 8 is :`,result3);

let result4 = factorialOfNum(undefined);
console.log(`Factorial of Undefined is :`,result4);

let result5 = factorialOfNum(9);
console.log(`Factorial of number 9 is :`,result5);

let result6 = factorialOfNum(0);
console.log(`Factorial of number 0 is :`,result6);
