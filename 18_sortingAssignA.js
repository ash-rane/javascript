console.log(`<<======================Step_01==============================>>`);
const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
const reverseArray = arrayRollNumbers.reverse();
console.log(reverseArray);

console.log(`<<======================Step_02==============================>>`);
reverseArray.sort();
console.log(reverseArray);

console.log(`<<======================Step_03==============================>>`);
arrayRollNumbers.sort((a,b) =>(a - b));
console.log(arrayRollNumbers);

console.log(`<<======================Step_04==============================>>`);
function largestElement(arr) {
    return arr.reduce((largest, current) =>
        (current > largest ? current : largest), arr[0]);
}
let num1 = [113,45,56,11,32,45,109,799,56,45];
console.log(largestElement(num1));

console.log(`<<======================Step_05==============================>>`);
function smallestNumber(arr1) {
return arr1.reduce((smallest, current) => 
(current < smallest ? current : smallest), arr1[0]);    
}
let num2 = [113,45,56,11,32,45,109,799,56,45];
console.log(smallestNumber(num2));

console.log(`<<======================Step_06==============================>>`);

//const array = [113,45,56,11,32,45,109,799,56,45];
let duplicates = [];
 
arrayRollNumbers.forEach(function (value, index, array) {
    if (array.indexOf(value, index + 1) !== -1
        && duplicates.indexOf(value) === -1) {
        duplicates.push(value);
    }
});
 
console.log("Duplicate values:", duplicates);


