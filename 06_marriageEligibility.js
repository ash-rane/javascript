console.log(`<<====================Assignment_02===================>>`);
var marriageEligibility = function (gender,age) {
if (age<=0) {
    console.log(`${gender,age} ===> Invalid output`);
} else {
    if(gender=="Male" && age>=21){
        console.log(`${gender}, ${age} ===> You are eligible for marriage..!`);
    }
    else if(gender=="Female" && age>=18){
        console.log(`${gender},${age} ===> You are eligible for marriage..!`);
    }
    else if (gender=="Other" || age>=21) {
        console.log(`${gender}, ${age} ===> Hey..! You are Eligible for marriage.`);
    } 
    else
    {
        console.log(`${gender},${age} ===> Sorry..! You are not eligible for marriage.`);
    }
}
    
}
marriageEligibility('Male',17);
marriageEligibility('Male',25);
marriageEligibility('Female',28);
marriageEligibility('Female',16);
marriageEligibility('Other',35);
marriageEligibility('Other',41);