document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('button is clickable');

    const addMoneyInput = document.getElementById('input-add-money').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;
    
    if(inputPinNumber === '1234'){
        console.log('adding money to your main balance');
        const addMoneyNumber = parseFloat(addMoneyInput);
        const accountBalance = document.getElementById('account-balance').innerText;
        const accBalanceNumber = parseFloat(accountBalance);
        const newBalance = (addMoneyNumber + accBalanceNumber).toFixed(2);
        console.log(newBalance);
    document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Wrong pin number!!! Please try again.')
    }
});