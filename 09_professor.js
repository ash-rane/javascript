console.log(`<<====Step_01=======================================Professor_Details=====================================>>`);
professor = {
    professorName : "APJ Abdul Kalam",
    age : 50,
    specialSubject : "Mathematics",
    isBharatRatnaAwarded : true,
    skills : ["Intellect","Vision","Leadership"],
}
console.log(professor);
console.log(`<<====Step_02=======================================Degrees=====================================>>`);
degrees = {
    engineering : 'CSC',
    PHD : 'Adv Computing',
    CA : 'Accountant',
    Law : "Civil Law"
}
console.log(degrees);

console.log(`<<====Step_03=======================================Add_Array=====================================>>`);
certificates = ['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming'];
console.log(certificates);

console.log(`<<====Step_04=======================================Add_New_Property=====================================>>`);
professor.totalExperience = 14;
console.table(professor);

console.log(`<<====Step_05=======================================Modify_Existing_Property=====================================>>`);
professor.professorName = "APJ Kalam";
console.log(professor);

console.log(`<<====Step_06=======================================Add_Certificate=====================================>>`);
certificates.splice(2,0,"Oracle Certified");
console.log(certificates);

console.log(`<<====Step_07=======================================Log_Last_Element_Array=====================================>>`);
console.log(`The last element of array is : `,certificates[3]);

console.log(`<<====Step_08=======================================Log_Complete_Object=====================================>>`);
console.log(professor);

console.log(`<<====Step_09=======================================Traverse_Array_Certificate=====================================>>`);
for (const iterator of certificates) {
    console.log(iterator);

}
