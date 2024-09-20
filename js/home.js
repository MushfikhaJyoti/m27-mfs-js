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

//Step-3 = check pin for validetion; 
   if(inputPinNumber === '1234'){
    console.log('Adding money to your account!!');
// Step-4 = get the current balance;
    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);

//Step-5 = adding input amount with account balance;
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance);

//Step-6 = updating the new balance into the UI we can say DOM;
     document.getElementById('account-balance').innerText = newBalance;
   }
   else{
         alert('Failed to add money!! Please try again.');
   }
});
