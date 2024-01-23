class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name =emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
    getDetails(){
        console.log(`ID:${this.emp_id}, Name:${this.emp_name}, Department:${this.emp_dept}, Salary:${this.emp_salary}, Company:${this.emp_company}`);
    }
    
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayEmps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
// for (const element of arrayEmps) {
// element.getDetails();
// }
console.log(`<<========Step_01=================================================>`);
const empFromWipro = arrayEmps.filter((element)=>{
    if (element.emp_company=="Wipro") {
        return element;
    }
    //return element.emp_company=="Wipro";
});
console.log(empFromWipro);

// let b = empFromWipro.reduce((element,rv)=>{
//     return rv + element;
// },0);
// console.log(b);

empFromWipro.forEach((element) =>{
        console.log(`${element.emp_name}`);
});

console.log(`<<========Step_02=================================================>`);
const empFromWIt = arrayEmps.filter((element)=>{
    if (element.emp_dept=="IT" || element.emp_dept=="HR") {
        return element;
    }
});
console.log(empFromWIt);

empFromWIt.forEach((element) =>{
    console.log(`${element.emp_name}`);
});

console.log(`<<========Step_03=================================================>`);
const empFromId = arrayEmps.filter((element)=>{
    if (element.emp_id > 50) {
        return element;
    }
});
console.log(empFromId);

empFromId.forEach((element) =>{
    console.log(`${element.emp_name}`);
});

console.log(`<<========Step_04=================================================>`);
const empFromStartLetter = arrayEmps.filter((element)=>{
    if (element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")) {
        return element;
    }
});
console.log(empFromStartLetter);

empFromStartLetter.forEach((element) =>{
    console.log(`${element.emp_name}`);
});

console.log(`<<========Step_05=================================================>`);
const totalSalary = arrayEmps.reduce( (runningTotal, element) => {
  return runningTotal + element.emp_salary ; 
},0);
console.log(`Average salary of all Employee : ${totalSalary/arrayEmps.length}`);

console.log(`<<========Step_06=================================================>`);
const array4 = arrayEmps.filter( (element) => {
  return element.emp_dept==="IT";
})
const total= array4.reduce((rt,element) => {
 return rt + element.emp_salary;   
},0)
console.log(`Average salary of IT dept Employee: ${total/array4.length}`);









// console.log(`<<========Step_05=================================================>`);
// const totalSal = arrayEmps.filter((element)=>{
//     return element.emp_salary;
// });
// //console.log(empAvgSal);

// const sumOfTotalSal = arrayEmps.reduce((element,rv)=>{
//          return rv + element.emp_salary;
//      },0);
 
// console.log(`Total salary is : ${sumOfTotalSal}, and number of employees : ${empAvgSal.length}`);
// console.log(`Average Salary is: ${sumOfTotalSal/empAvgSal.length}`);


// empAvgSal.forEach((element) =>{
//     console.log(`${element}`);
// });
