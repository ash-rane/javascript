console.log(
  `<<<=======================Assignment_02==============================>>>`
);
console.log(
  `<<...........................Step_01..................................>>`
);
var evenOddResult = function (n1) {
 // var displayResult = returnvalues;
    if(n1 % 2 == 0 )
    {
        console.log(`Given Number is Even `);
    } 
     else
    {
        console.log(`Given Number is Odd`);
    }  
};
evenOddResult(45);
evenOddResult(70);
evenOddResult(67);
evenOddResult(98);

console.log(
  `<<...........................Step_02..................................>>`
);

var checkedEligibility = function (age) {
  if (age >=18) {
    console.log(`Age ${age} You are eligible for Vote`);
  } else {
    console.log(`Age ${age} You are not eligible for vote`);
  }
};
checkedEligibility(18);
checkedEligibility(20);
checkedEligibility(17);
checkedEligibility(40);
console.log(
  `<<...........................Step_03..................................>>\n`
);
var countStringVariables = function (str) {
    if (str.length>10) {
        console.log(`The "${str}" string contains more than 10 characters`);
    } else {
        console.log(`The "${str}" string cannot contains more than 10 characters`);
    }
}
countStringVariables("JavaScript - ES6");

console.log(
    `\n<<...........................Step_04..................................>>\n`
  );
    var checkStringStartWith = function (str1) {
       var  toCheckString = "Java";
        if (str1.startsWith(toCheckString)) {
            console.log(`The ${str1} start with "Java"`);
        } else 
        {
         console.log( `The ${str1} is Not start with "Java"`);   
        }
}
checkStringStartWith("JavaScript Language");