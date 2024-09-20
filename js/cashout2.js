document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
  event.preventDefault();
// console.log("button clicked");

const cashOut = document.getElementById('input-out-money').value;
const inputPinNumber = document.getElementById('input-pin-num').value;
// console.log(cashOut,inputPinNumber);
if(inputPinNumber === "1234"){
    console.log('cashing your money');
    const balance = document.getElementById('account-balance').innerText;
    const accBalanceNumber = parseFloat(balance);
    const cashOutNum = parseFloat(cashOut);
    const newAccBalance = (accBalanceNumber - cashOutNum).toFixed(2);
document.getElementById('account-balance').innerText = newAccBalance; 

}
else{
    alert("Wrong pin number!!! Please try again");
}
})