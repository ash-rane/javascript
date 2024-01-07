console.log(`<<....The odd positioned char from First given string are :....>>`);

let str = "Hard work always pays back";
for (let index = 0; index < str.length; index++) {
   let char = str.charAt(index); 
    if (index%2==1 && char!=" ") {
        console.log(str.charAt(index)); 
    }
}

console.log(`<<....The odd positioned char from Second given string are :....>>`);

let str1 = "Soon I will be UI IT Champ";
for (let index = 0; index < str1.length; index++) {
   let char1 = str1.charAt(index); 
    if (index%2==1 && char1!=" ") {
        console.log(str1.charAt(index)); 
    }
}

console.log(`<<.................................Step_01.................................>>`);

let word = "Hard work always pays back";
let result = "";
for (let index = word.length-1; index >=0; index--) {
    let char2 = word.charAt(index);
    if (char2 ==" ") {
        result =result + word.charAt(index);
    }
    result = result + word.charAt(index); 
     //result = result.concat(word.charAt(index));
}
console.log(`\nReverse string of First given string :  ${result}`);



console.log(`\n<<.................................Step_02.................................>>`);

let word1 = "Soon I will be Angular IT Champ";
let result1 = "";
for (let index = word1.length-1; index >=0; index--) {
    let char3 = word1.charAt(index);
    if (char3 ==" ") {
        result1 = result1 + word1.charAt(index);
    }
    result1 = result1 + word1.charAt(index); 
     //result = result.concat(word.charAt(index));
}
console.log(`\nReverse string of First given string :  ${result1}`);



