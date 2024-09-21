document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();

    const addMoneyNumber = getInputFieldValueById('input-add-money');
    const inputPinNumber = getInputFieldValueById('input-pin-number');
   //  validation for number;
    if(isNaN(addMoneyNumber)){
      alert('Failed to add money');
      return;
    }

     if(inputPinNumber === 1234){
          const balance = getTextFieldValueById('account-balance');
         const newBalance = addMoneyNumber + balance;

         document.getElementById('account-balance').innerText = newBalance;

           // add to transaction history;
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoneyNumber} Tk. Present balance: ${newBalance}`;
        console.log(p);
          
        // pushing to transaction history;
        document.getElementById('transaction-container').appendChild(p);

     }
     else{
        alert('Failed to add money!! Please try again.')
     }
 
    // const addMoneyInput = document.getElementById('input-add-money').value;
    // const inputPinNumber = document.getElementById('input-pin-number').value;
 
    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log('add money value', addMoney);
    
    // if(inputPinNumber === '1234'){
    //     console.log('adding money to your main balance');
    //     const addMoneyNumber = parseFloat(addMoneyInput);
    //     const accountBalance = document.getElementById('account-balance').innerText;
    //     const accBalanceNumber = parseFloat(accountBalance);
    //     const newBalance = (addMoneyNumber + accBalanceNumber).toFixed(2);
    //     console.log(newBalance);
    // document.getElementById('account-balance').innerText = newBalance;
    // }
    // else{
    //     alert('Wrong pin number!!! Please try again.')
    // }
});
