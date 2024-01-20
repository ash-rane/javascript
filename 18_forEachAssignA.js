console.log(`<<----------------Step_01-------------->>`);
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

arrayNumbers.forEach ((currentValue, index)=>{
    console.log(`Index : ${index} : Element  : ${currentValue}`);
} );

console.log(`<<----------------Step_02-------------->>`);
arrayNumbers.forEach( (element) => {
    if (element>0) {
        console.log(element);
    }
});

console.log(`<<----------------Step_03-------------->>`);
arrayNumbers.forEach((element) =>{
if (element%2==-1) {
console.log(`Negative numbers : ${element}`);
    
}
});
console.log(`<<----------------Step_04-------------->>`);
arrayNumbers.forEach((element) =>{
    if (element%2==0) {
        console.log(`Even numbers : ${element}`);
    }
});

console.log(`<<----------------Step_05-------------->>`);
let sum = 0;
arrayNumbers.forEach((element) => 
        {
           sum += element;
      });
      
console.log(`Sum of elements from array :${sum}`);

console.log(`<<----------------Step_05-------------->>`);
arrayNumbers.forEach((element,index) => {
    if (index%2==0) {
        console.log(`Even Index elements : ${element}`);
    }
});