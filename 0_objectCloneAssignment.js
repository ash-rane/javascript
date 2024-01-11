console.log(`<<---step_01---------------------------------------------------->>`);
const bankSbi = {
                bankName : "State Bank Of India",
                bankAccountNo : "78954845",
                ifscCode : "SBI01015",
                branch :"Pune"
}
console.log(bankSbi);
console.log(`<<---step_02---------------------------------------------------->>`);
const bankLocation = {
    street : "Main Street",
    city : "Pune",
    pin : "438312"
}
console.log(bankLocation);
console.log(`<<---step_03----------------Clone_Banks------------------------------------>>`);
const newBank = Object.assign({}, bankSbi ,bankLocation);
console.log(bankSbi);
console.log(bankLocation);
//console.log(`The clone object is :`,newBank);

console.log(`<<---step_04---------------------------------------------------->>`);
const rateOfInterest = {
    homeLoanInterest : "7.5%",
    personalLoanInterest : "10%",
    dueInterest : "12% "
}
console.log(rateOfInterest);

console.log(`<<---step_05----------------------Merge_All_objects------------------------------>>`);
const bankDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(`After object merging bank details are :`,bankDetails);
console.table(bankDetails);

console.log(`<<---step_06-----------------Traverse_bankDetails_Object----------------------------------->>`);
for (const key in bankDetails) {
    if (Object.hasOwnProperty.call(bankDetails, key)) {
        const element = bankDetails[key];
        console.log(` ${key} ==>> ${element}`);
    }
}