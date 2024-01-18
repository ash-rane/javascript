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

const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
for (const element of arrayEmployees) {
element.getDetails();
}

console.log(`<<----Step_01----------------------------------------------->>`);
 for (const element of arrayEmployees) {
    if (element.emp_company=="TCS") {
        element.getDetails.emp_name;
        console.log(`Name :${element.emp_name}, Comapny :${element.emp_company}`);
    }
 }

 console.log(`<<----Step_02----------------------------------------------->>`);
 for (const element of arrayEmployees) {
    if (element.emp_dept=="Finance") {
        element.getDetails.emp_name && emp_dept;
        console.log(`Name : ${element.emp_name}, Department : ${element.emp_dept}`);
    }
 }
 console.log(`<<----Step_03----------------------------------------------->>`);
 for (const element of arrayEmployees) {
    if (element.emp_name.startsWith(`R`)) {
        element.getDetails();
        
    }
 }
 console.log(`<<----Step_04----------------------------------------------->>`);
 for (const element of arrayEmployees) {
    if (element.emp_salary>75000) {
        console.log(`Name : ${element.emp_name}, Comapny : ${element.emp_company}, Salary : ${element.emp_salary}`);
    }
 }
 console.log(`<<----Step_05----------------------------------------------->>`);
 for (const element of arrayEmployees) {
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
        element.getDetails();
        //console.log(`ID :${element.emp_id}, Name : ${element.emp_name}, Department: ${element.emp_dept}, Salary : ${element.emp_salary}, Comapny : ${element.emp_company}`);
    }
 }
 console.log(`<<----Step_06----------------------------------------------->>`);
 for (const element of arrayEmployees) {
    if (element.emp_company=="Infy") {
        element.getDetails();
    }
 }