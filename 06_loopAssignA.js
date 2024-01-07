console.log(`<<...............Step_01...............>>`);

let str = "I am very good IT Developer";
let totalVowels = 0;
for (let index = 0; index < str.length; index++) {
 let s1 = str.charAt(index).toLowerCase();
if (s1=="a" || s1=="e" || s1=="i" || s1=="o" || s1=="u" || 
    s1== 'A' || s1== 'E'|| s1== 'I'  || s1== 'O' || s1== 'U') {
    totalVowels = totalVowels +1;
    }
}
console.log(`\nVowels count is:${totalVowels}`);

console.log(`\n<<...............Step_02...............>>`);
let sum = 5;
for (let index = 1; index < 5; index++) {
    sum = sum + index;
    var sumResult = sum * sum;
}
console.log(`\nSum of cube Numbers from 1 to 5 is : ${sumResult}`);

//ole.log(`First given string odd positioned char are :${index}`);


    // var chars = "123456789";
    // for(i=0;i<chars.length;i++) {
    // if(parseInt(chars[i])%2!==0) {
    // console.log(parseInt(chars[i]));
    // }
    // }

    // var returnValue = "";
    // if (num % 2 == 0) {
    //   returnValue = "EVEN";
    // } else {
    //   returnValue = "ODD";
    // }
    // return returnValue;
  