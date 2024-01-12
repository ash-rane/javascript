console.log(`<<------Step_01--------------------------------------------------------------------------------->>`);
class Vehicle { 
    constructor(model,number,cc,color,weight){
        this.model = model;
        this.number = number;
        this.cc = cc;
        this.color = color;
        this.weight = weight;

    }
    getDetails(){
        console.log(`Model:${this.model}, Number:${this.number}, CC:${this.cc}, Color:${this.color}, Weight:${this.weight}`);
    }
}
const wagonr = new Vehicle("wagonr","MH12BQ4587",1170,"Grey","4094p");
//wagonr.getDetails();

const kia = new Vehicle("kia","MH14MN7587",1250,"white","4195p");
//kia.getDetails();

const tata_punch = new Vehicle("tata_punch","MH41MP7845",1150,"black","3989p");
//tata_punch.getDetails();

const maruti_suzuki = new Vehicle("maruti_suzuki","MH24RJ7784",1290,"red","4587p");
//maruti_suzuki.getDetails();

const duster = new Vehicle("duster","MH23UP4554",1180,"blue","4110p");

// const arrayOfVehicle = [wagonr,kia,tata_punch,maruti_suzuki];
// for (const element of arrayOfVehicle) {
//     element.getDetails();
// }

const wagonrObj = Object.assign(wagonr);
console.log(wagonrObj);
const kiaObj = Object.assign(kia);
console.log(kiaObj);
const tataObj = Object.assign(tata_punch);
console.log(tataObj);
const marutiObj = Object.assign(maruti_suzuki);
console.log(marutiObj);
const dustObj = Object.assign(duster);
console.log(dustObj);


console.log(`<<------Step_02--------------------------------------------------------------------------------->>`);
class College {
    constructor(name,city,grade,govAidedOrNot){
        this.name = name;
        this.city = city;
        this.grade = grade;
        this.govAidedOrNot = govAidedOrNot;
    }
    getDetails(){
    console.log(`Name:${this.name},City:${this.city},Grade:${this.grade},GovAidedOrNot:${this.govAidedOrNot}`);
}
}
console.log(`<<....First Object Details...>>`);
const dilkap = new College("Dilkap_College","Neral","A","Yes");
dilkap.getDetails();

console.log(`<<...Second Object Details...>>`);
const sinhagad = new College("Sinhagad_College","Pune","A","Yes");
sinhagad.getDetails();

console.log(`<<...Third Object Details...>>`);
const torna = new College("Torna_College","Navi_Mumbai","B","No");
torna.getDetails();

console.log(`<<...Fourth Object Details...>>`);
const acharya = new College("Acharya_College","Badlapur","B","Yes");
acharya.getDetails();

console.log(`<<------Step_03--------------------------------------------------------------------------------->>`);
console.log(`------Traverse Object Dilkap College------`);
const DilkapObj = Object.assign({},dilkap);
 function traverseOfObjectFun() {

    for (const key in DilkapObj) {
        if (Object.hasOwnProperty.call(DilkapObj, key)) {
            const element = DilkapObj[key];
            console.log(` ${key} ==>> ${element}`);
        }
    }
 }
 traverseOfObjectFun();

 console.log(`------Traverse Object Sinhagad College------`);
 const sinhagadObj = Object.assign(sinhagad);
 function traverseOfObjectFun1() {

    for (const key in sinhagadObj) {
        if (Object.hasOwnProperty.call(sinhagadObj, key)) {
            const element = sinhagadObj[key];
            console.log(` ${key} ==>> ${element}`);
        }
    }
 }
 traverseOfObjectFun1();

 console.log(`------Traverse Object Torna College------`);
const tornaObj = Object.assign({},dilkap);
 function traverseOfObjectFun3() {

    for (const key in tornaObj) {
        if (Object.hasOwnProperty.call(tornaObj, key)) {
            const element = tornaObj[key];
            console.log(` ${key} ==>> ${element}`);
        }
    }
 }
 traverseOfObjectFun3();

 console.log(`------Traverse Object Acharya College------`);
 const acharyaObj = Object.assign(sinhagad);
 function traverseOfObjectFun4() {

    for (const key in acharyaObj) {
        if (Object.hasOwnProperty.call(acharyaObj, key)) {
            const element = acharyaObj[key];
            console.log(` ${key} ==>> ${element}`);
        }
    }
 }
 traverseOfObjectFun4();

