// Common Shared functions are here;
// function getInputFieldValueById(){
//     console.log('i love coding');
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// };
// more simpler way to make common function for various parameter:
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// to get available balance from div;
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// to activate the button works as we want;
function  showSectionById(id){
    // hide all sections;
   document.getElementById('add-money-form').classList.add('hidden');
   document.getElementById('cash-out-form').classList.add('hidden');
   document.getElementById('transaction-page').classList.add('hidden');
   //show the only section we want to see; 
   document.getElementById(id).classList.remove('hidden');
}
