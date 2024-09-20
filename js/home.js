// add money to the acc;

// Step-1 = add event handler && prevent page reload after from submit;


document.getElementById('btn-add-money')
 .addEventListener('click', function(event){
    event.preventDefault();
   

// Step-2 = get money to be added to the acc balance ;
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    // get the pin number provided;
    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputPinNumber);
});
