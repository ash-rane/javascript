console.log(`<<======================Step_01=======================>>`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

const addNumbers = arrayNumbers.map((currentValue)=>{
 return currentValue + 10;
});
console.log(addNumbers);

console.log(`<<======================Step_02=======================>>`);
const cubeNumbers = arrayNumbers.map((currentValue)=>{
    return currentValue**2; // The **  is use for square root of element or cube like 2^3
});
console.log(cubeNumbers);
console.log(`<<======================Step_03=======================>>`);
const addIndexValue = arrayNumbers.map((currentValue,index)=>{
    return currentValue + index;
});
console.log(addIndexValue);