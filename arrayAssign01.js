const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`<<=================================Step_01================================>>`);
console.log(`Original array :: ${fruits_seasonal}`);
var FirstElement = fruits_seasonal[0];
var LastElement = fruits_seasonal[4];
console.log(`First element of array is: ${FirstElement} And Last element of array is: ${LastElement}`);

console.log(`<<=================================Step_02================================>>`);
console.log(`Original array :: ${fruits_seasonal}`);
fruits_seasonal.unshift("Papaya");
console.log(`After adding at first element :`,fruits_seasonal);

console.log(`<<=================================Step_03================================>>`);
const fruits_seasonal1 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array :: ${fruits_seasonal1}`);
let removeMango = fruits_seasonal1.splice(3,1);//third index first position is deleted
console.log(`Removed element is : `,removeMango);
console.log(`After removing at middle element  :`,fruits_seasonal1);

console.log(`<<=================================Step_04================================>>`);
const fruits_seasonal2 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array :: ${fruits_seasonal2}`);
fruits_seasonal2.push("Pineapple");
console.log(`After adding element at last :`,fruits_seasonal2);

console.log(`<<=================================Step_05================================>>`);
const fruits_seasonal3 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array :: ${fruits_seasonal3}`);
const addDragonFruit = fruits_seasonal3.splice(4,0,"Dragon Fruit");
//console.log(addDragonFruit);
console.log(`After addiing element at middle :`,fruits_seasonal3);

console.log(`<<=================================Step_06================================>>`);
const fruits_seasonal4 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array :: ${fruits_seasonal4}`);
fruits_seasonal4.splice(1,1,"Kiwi");
console.log(`After replace element :`,fruits_seasonal4);

console.log(`<<=================================Step_07================================>>`);
const fruits_seasonal5 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array :: ${fruits_seasonal5}`);
let removeSliceEle = fruits_seasonal5.slice(1,5);
console.log(`log element from 1 to 4 :`,removeSliceEle);

console.log(`<<=================================Step_08================================>>`);
const fruits_seasonal6 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array :: ${fruits_seasonal6}`);
let selectElemnts = fruits_seasonal6.slice(2);
    console.log(`After slecting last three elements : `,selectElemnts);

