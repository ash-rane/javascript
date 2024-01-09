console.log(`<<==========================Step_01============================>>`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Length of array:`,arrayNumbers);

console.log(`<<==========================Step_02============================>>`);
const arrayNumbers1 = [20,31,40,25,23,11,29,9,60,2,11];
let firstElement = arrayNumbers1[0];
console.log(`First Element is :`,firstElement);
let lastElement = arrayNumbers1[arrayNumbers1.length-1];
console.log(`Last Element is :`,lastElement);

console.log(`<<==========================Step_03============================>>`);
const arrayNumbers2 = [20,31,40,25,23,11,29,9,60,2,11];
let thirdLastElement = arrayNumbers2[arrayNumbers2.length-3];
console.log(`The third last element from array is : ${thirdLastElement}`);

console.log(`<<==========================Step_04============================>>`);
const arrayNumbers3 = [20,31,40,25,23,11,29,9,60,2,11];
let even =[];
for (const num of arrayNumbers3) {
    if (num%2==0){
        even.push(num)
    }
    
}console.log(`The Even numbers from array are : ${even}`);

console.log(`<<==========================Step_05============================>>`);
const arrayNumbers4 = [20,31,40,25,23,11,29,9,60,2,11];
let odd =[];
for (const num1 of arrayNumbers4) {
    if(num1%2==1){
        odd.push(num1)
    }
}
console.log(`The odd numbers from array are : ${odd}`);

console.log(`<<==========================Step_06============================>>`);
const arrayNumbers5 = [20,31,40,25,23,11,29,9,60,2,11];
even = [];
sum = 0;
for (let i=0;i<arrayNumbers5.length;i++) {
    if (i%2===0) {
       even.push(arrayNumbers5[i]);
        sum = sum + arrayNumbers5[i];
    }
}
console.log(`Even positioned elements from array:${even}`);
console.log(`Sum of even numbers are :${sum}`);

console.log(`<<==========================Step_07============================>>`);
const arrayNumbers6 = [20,31,40,25,23,11,29,9,60,2,11];
odd= [];
sum = 0;
for (let index = 0; index < arrayNumbers6.length; index++) {
    if (index%2==1) {
        odd.push(arrayNumbers6[index]);
        sum = sum + arrayNumbers6[index];
    }  
}
console.log(`Odd positioned elements from array:${odd}`);
console.log(`Sum of odd numbers are :${sum}`);

console.log(`<<==========================Step_08============================>>`);
const arrayNumbers7 = [20,31,40,25,23,11,29,9,60,2,11];
sum = 0;
for (let index = 0; index < arrayNumbers7.length; index++) {
    sum = sum + arrayNumbers7[index];
}
console.log(`Sum of all elements from array : ${sum}`);

console.log(`<<==========================Step_09============================>>`);
const arrayNumbers8 = [20,31,40,25,23,11,29,9,60,2,11];
allElements = [];
for (let index = 0; index < arrayNumbers8.length; index++) {
    if (arrayNumbers8[index]%5==0) {
        allElements.push(arrayNumbers8[index]);
    }
    
}
console.log(`The all elements which are multiple of 5 are :${allElements}`);

console.log(`<<==========================Step_10============================>>`);
const arrayNumbers9 = [20,31,40,25,23,11,29,9,60,2,11];
 let myArray = new Set();
 myArray.add(20);
 myArray.add(31);
 myArray.add(40);
 myArray.add(25);
 myArray.add(23);
 myArray.add(11);
 myArray.add(29);
 myArray.add(9);
 myArray.add(60);
 myArray.add(2);
 myArray.add(11);
 //console.log(myArray);

 console.log(`Is 115 available in my array ?`, myArray.has(115));

 console.log(`<<==========================Step_11============================>>`);

 console.log(`Is 23 available in my array ?`, myArray.has(23));

 console.log(`<<==========================Step_12============================>>`);
 let arrayNumbers10 = [20,31,40,25,23,11,29,9,60,2,11];
 //console.log(arrayNumbers10);

    let index = [3];
    let index1 = [4];
    let element = 55;
    let ele = 66;
 
    arrayNumbers10.splice(index, 0, element);
    arrayNumbers10.splice(index1, 0, ele);
     
    console.log(`Insert number 55 and 66 at index 3 :`,arrayNumbers10);

//  const myArray1 = new Set();
//  myArray1.add(20);
//  myArray1.add(31);
//  myArray1.add(40);
//  myArray1.add(55);
//  myArray1.add(66);
//  myArray1.add(25);
//  myArray1.add(23);
//  myArray1.add(11);
//  myArray1.add(29);
//  myArray1.add(9);
//  myArray1.add(60);
//  myArray1.add(2);
//  myArray1.add(11);
 
 //console.log(myArray1);


//  console.log(`Size is: ${myArray1.size} `);

//  console.log(`Traversing set collection....`);
// for (const element of myArray1) {
//     console.log(element);
// }

//   const newArray = [...new Set(arrayNumbers10)];
//   console.log(newArray);

console.log(`<<==========================Step_13============================>>`);
const arrayNumbersLast = [20,31,40,25,23,11,29,9,60,2,11];

 console.log(`Delete 3 elements from index 4 are :`);
 arrayNumbersLast.splice(4,3);
 console.log(arrayNumbersLast);


 