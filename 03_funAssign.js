console.log("<<======================Question_1=========================>>");
function div(args) {
  console.log("Function name div with no arguments and no return values");
}
div();

function sub() {
  console.log("Function name sub with no arguments and no return values");
}
sub();

console.log("<<======================Question_2=========================>>");
function personalDetails(firstName, lastName, collegeName) {
  console.log("My First Name is :", firstName);
  console.log("My Last Name is :", lastName);
  console.log("My College Name is:", collegeName);
}
personalDetails("Aishwarya", "Rane", "Dilkap_College");

console.log("<<======================Question_3=========================>>");
function swapValues(name1, name2) {
  console.log("<<............Before Swap............>>");
  console.log("The First Person :",name1);
  console.log("The Second Person :",name2);

  console.log("<<............After Swap.............>>");
   temp = name1;
   name1 = name2;
   name2 = temp;

   console.log("The First Person  :",name1);
   console.log("The Second Person :",name2);
   
}
swapValues("Virat", "Anushka");
console.log("------------------------------------------------");
swapValues(1000,2000);

console.log("<<======================Question_4=========================>>");
function addThreeValues(n1,n2,n3){
console.log("The first value is :",n1);
console.log("The second value is :",n2);
console.log("The third value is :",n3);
}
console.log("<<<..........4.2..........>>>");
addThreeValues("10.23","600","40");
console.log("<<<..........4.3..........>>>");
addThreeValues("Hello","Good","Morning");