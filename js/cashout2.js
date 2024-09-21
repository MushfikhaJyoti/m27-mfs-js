document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
  event.preventDefault();
// console.log("button clicked");

const cashOut = getInputFieldValueById('input-out-money');
const inputPinNumber = getInputFieldValueById('input-pin-num');
// validation for number;
if(isNaN(cashOut)){
  alert('Failed to Cash Out');
  return;
}

if(inputPinNumber === 1234){
  const balance = getTextFieldValueById('account-balance');

  // validation for larger cashout amount than balance;
  if(cashOut>balance){
    alert('You do not have enough balance for cash out!!');
    return;
  }
  const newBalance = balance - cashOut;
  document.getElementById('account-balance').innerText = newBalance;

  // pushing transaction history;
  const div = document.createElement('div');
  div.classList.add('bg-blue-300');
  div.innerHTML = `
  <h4 class="text-2xl font-bold"> Cash Out</h4>
  <p> Withdrawn: ${cashOut} Tk. Present Balance: ${newBalance} </p>`

  document.getElementById('transaction-container').appendChild(div);
    // const p = document.createElement('p');
    // p.innerText = `Decreased: ${cashOut} Tk. Present Balance: ${newBalance}`;
    // console.log(p);

    // document.getElementById('transaction-container').appendChild(p);
}
else{
  alert('No money for you...... DGM')
}


// const cashOut = document.getElementById('input-out-money').value;
// const inputPinNumber = document.getElementById('input-pin-num').value;
// // console.log(cashOut,inputPinNumber);
// if(inputPinNumber === "1234"){
//     console.log('cashing your money');
//     const balance = document.getElementById('account-balance').innerText;
//     const accBalanceNumber = parseFloat(balance);
//     const cashOutNum = parseFloat(cashOut);
//     const newAccBalance = (accBalanceNumber - cashOutNum).toFixed(2);
// document.getElementById('account-balance').innerText = newAccBalance; 

// }
// else{
//     alert("Wrong pin number!!! Please try again");
// }
});