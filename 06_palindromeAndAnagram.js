console.log(`<<=======Step_01=============================================>>`);
let checkPalindrome = (stringg) => {
    return stringg === stringg.split("").reverse().join("");
};
 
console.log("Given string (madam) is Palindrome? : " + checkPalindrome("madam"));
console.log("Given string (dad) is Palindrome?: " + checkPalindrome("dad"));
console.log("Given string (hello) is Palindrome?: " + checkPalindrome("hello"));

console.log(`<<=======Step_02=============================================>>`);

const checkAnangram = (str1,str2)=>{

const resultStr1 = str1.split("").sort().join("");
const resultStr2 = str2.split("").sort().join("");
console.log(resultStr1==resultStr2 ? true : false);

};
console.log(`The given strings silent and listen are anagram or not ? :`);
checkAnangram("Silent","Listen");
console.log(`The given strings Hello and World are anagram or not ? :`);
checkAnangram("Hello","World");
console.log(`The given strings Such and much are anagram or not ? :`);
checkAnangram("Such","much");
