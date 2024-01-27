console.log(`<<=======Step_01=====================================================>>`);
const arrayNums = [20,3,4,56,90,400,49];
const arrayNums2 = [...arrayNums];
arrayNums.push(55);
arrayNums.push(60);
console.log(`Original array :`,arrayNums2);
console.log(`Clone array :`,arrayNums);

console.log(`<<=======Step_02=====================================================>>`);
const arrayNumsUsingSpread = [...arrayNums];
arrayNums.splice(4,0,10);
arrayNums.splice(5,0,25);
console.log(`Original array :`,arrayNums2);
console.log(`Clone array :`,arrayNums);

console.log(`<<=======Step_03=====================================================>>`);
const arrayEven = [2,30,14,8];
const arrayNumsN = [20,3,4,56,90,400,49];
const mergeArray = [...arrayEven, ...arrayNumsN];
console.log(`merged array is : `,mergeArray);

console.log(`<<=======Step_04=====================================================>>`);
const employee_Info = {
    emp_id : 27,
    emp_name : "john Deo",
    salary :{
        july_month : "40,000INR",
        aug_month : "50,000INR",
        june_month : "65,000INR"
    },
    address :{
        locality : {
            colony : "om vrindavan socity",
            street : "kanch pokli, 431202"
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles :["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]
}
console.log(employee_Info);

console.log(`<<=======Step_05(a)=====================================================>>`);
console.table(employee_Info.address);

console.log(`<<=======Step_05(b)=====================================================>>`);
console.log(employee_Info.mobiles);

console.log(`<<=======Step_06(a)=====================================================>>`);
const employee_InfoNew = JSON.parse(JSON.stringify(employee_Info));
//console.table(employee_Info);
employee_InfoNew.salary.july_month = "80,000INR";
console.table(employee_Info);
console.table(employee_InfoNew);


// const empdeepCloneArray = {...employee_Info};
// const empdeepCloneArray1 = JSON.parse(JSON.stringify(employee_Info));
// empdeepCloneArray1.salary.july_month = "80,000INR";
// console.log(`Before salary is :`,employee_Info.salary.july_month); // 
// console.log(`After updated salary in clone object is :`,empdeepCloneArray1.salary.july_month); //

console.log(`<<=======Step_06(b)=====================================================>>`);
JSON.parse(JSON.stringify(employee_Info));
employee_Info.address.country = "United Kingdom";
console.log(`After update country is :`,employee_Info.address.country); //
console.table(employee_Info);

console.log(`<<=======Step_06(c)=====================================================>>`);
console.table(employee_Info);
console.table(employee_InfoNew);
