document.getElementById('btn-cash-out')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('button is clickable');

    const cashOutInput = document.getElementById('input-out-money').value;
    const inputPinNumber = document.getElementById('input-pin-num').value;
    console.log(cashOutInput, inputPinNumber);
    
    if(inputPinNumber === '1234'){
        console.log('adding money to your main balance');
        const cashOutNumber = parseFloat(cashOutInput);
        const accountBalance = document.getElementById('account-balance').innerText;
        const accBalanceNumber = parseFloat(accountBalance);
        const newBalance = (accBalanceNumber - cashOutNumber).toFixed(2);
        console.log(newBalance);
    document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Wrong pin number!!! Please try again.')
    }
});