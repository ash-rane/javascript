console.log("<<.......................Assignment_2......................>>");
console.log("==========================Step_01===========================");
function stringHandsOn() {
    var givenString = "   Hey you are doing good, keep it up    ";
    console.log(`The given string is :-${givenString}`);
}
stringHandsOn();

console.log("==========================Step_02===========================");

function stringLength(){
    var givenString = "   Hey you are doing good, keep it up   ";
    var totalChar = givenString.length;
    console.log("Total Char in the string is :",totalChar);
}
stringLength();

console.log("==========================Step_03===========================");

function removeExtraSpace(){
    var givenString = "   Hey you are doing good, keep it up   ";
    // console.log(givenString.length);
    var trimResult = givenString.trim();
    console.log(`After removing spaces string is:${trimResult}`);
    console.log(`and its length is :${trimResult.length}`);   
}
removeExtraSpace();

console.log("==========================Step_04===========================");
function countSpaces()
{  
    var givenString = "   Hey you are doing good, keep it up   ";
    var trimResult = givenString.trim();
    //var extraSp = trimResult.split(" ").givenString.length-1; 
    var extraSpaces = givenString.length-trimResult.length;
    console.log("Total extra spaces which are removed from the string is :" ,extraSpaces);
}countSpaces();

console.log("==========================Step_05===========================");
function firstandlastChar(){
    var trimResult = "Hey you are doing good, keep it up";
    var firstChar2 = trimResult.charAt(0);
    var lastChar2 = trimResult.charAt(trimResult.length-1);
    console.log("First Char after trim is:",firstChar2," &  Last char after trim is:",lastChar2);
}
firstandlastChar();

console.log("==========================Step_06===========================");
function wordTotal() {
var givenString = "Hey you are doing good, keep it up";
var result = givenString.split(" ");
console.log(`total number of words in the string is : ${result.length}`);
}
wordTotal();

console.log("==========================Step_07===========================");
function wordGood() {
var givenString = "Hey you are doing good, keep it up";
var indexofgood = givenString.indexOf(`good`);
console.log("The index of word good in the string is :",indexofgood);
}
wordGood();

console.log("==========================Step_08===========================");
function subStringPrint() {
    var givenString = "Hey you are doing good, keep it up";
    //console.log(givenString.substring(22));;
    console.log("Print the substring starting from index 22 is :",givenString.substring(22,34));
    console.log("Using slice substring is :",givenString.slice(22,34));
}
subStringPrint();

console.log("==========================Step_09===========================");
function endsWord() {
    var givenString = "Hey you are doing good, keep it up";
    var resultAvailable = givenString.includes("up");
    console.log(`Is string ends with word "up" ? : ${resultAvailable}`);   
}
endsWord();

console.log("==========================Step_10===========================");
function startWord() {
    var givenString = "Hey you are doing good, keep it up";
    var resultAvailable = givenString.includes("Hey");
    console.log(`Is string start with word "hey" ? : ${resultAvailable}`);   
}
startWord();
