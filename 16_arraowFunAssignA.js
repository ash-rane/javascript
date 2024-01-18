console.log(`<<------------------------Step_01------------------------------>>`);
const  arrowFunction = () => {
console.log(`\n"Good Morning,Today is Thursday"`);
}
arrowFunction();

console.log(`\n<<------------------------Step_02------------------------------>>`);
const multiplication = (n1,n2,n3) => {
    let result = n1*n2*n3;
    console.log(`\nThe result of multiplication is : ${result}`);
}
multiplication(5,5,2);
multiplication(10,4,1);

console.log(`\n<<-------------------------Step_03----------------------------->>`);
const addition = (n1,n2,n3,n4,n5) => {
return n1+n2+n3+n4+n5;
}
let result = addition(100,100,200,349,756);
console.log(`\nThe Addition of four numbers is: ${result}`);

let resultStr = addition("I am","learning","ES6","features","in depth");
console.log(`The addition of string is : ${resultStr}`);