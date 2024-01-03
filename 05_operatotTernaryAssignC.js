console.log(`<<=========================Assignment_01=============================>>`);
console.log(`\n<<...........................Step_01...............................>>`);

var maleMarriageEligibility = function(gender,age,boyName){
    var result = gender=="Male" && age>=21 
     ?  `-> Hey ${boyName} you are eligible for Marriage` 
     : "-> Sorry..! You are not eligible for marriage, Please try next time.\n" ; 
     console.log(result);
 }
 maleMarriageEligibility("Male", 25, "Billgates");
 maleMarriageEligibility("Male", 17, "Stew Jobs");

 console.log(`<<............................Step_02..............................>>`);

 var femaleMarriageEligibility = function (gender,age,girlName) {
    var result = gender =="Female" && age>=18 ? 
    `-> Hey ${girlName} you are eligible for marriage` :
    `-> Unfortunately,you are not eligible for marriage`;
    console.log(result);
 }
 femaleMarriageEligibility("Female",16,"Jnnifer");
 femaleMarriageEligibility("Female",27,"Malinda Gates");

 console.log(`----------------------------------------------------------------------`);