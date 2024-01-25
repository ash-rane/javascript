const submitButton = document.querySelector('#addition');
const submitButtonSub = document.querySelector('#subtraction');
const submitButtonMult = document.querySelector('#multiplication');
const submitButtonDivi = document.querySelector('#division');

const fieldOne = document.querySelector('#field-one');
const fieldTwo = document.querySelector('#field-two');
const resultValue = document.querySelector('#resultValue');

submitButton.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne + valueTwo;
    console.log(valueOne + valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;
} );

submitButtonSub.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne - valueTwo;
    console.log(valueOne - valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;
} );

submitButtonMult.addEventListener('click', () =>{
    const valueOne = +fieldTwo.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne * valueTwo;
    console.log(valueOne * valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;

});

submitButtonDivi.addEventListener('click', () =>{
    const valueOne = +fieldTwo.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne / valueTwo;
    console.log(valueOne / valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;

});