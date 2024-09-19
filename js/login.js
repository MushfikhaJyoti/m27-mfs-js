
// step-01 = Set event handler;
document.getElementById('login-btn').addEventListener("click", function(event){
    // step 2 = stop reloading brouser for "form" tag;
    event.preventDefault();
    console.log('button clicked');
    // step 3 = get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
});