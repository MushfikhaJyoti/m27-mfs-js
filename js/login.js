
// step-01 = Set event handler;
document.getElementById('login-btn').addEventListener("click", function(event){
    // step 2 = stop reloading brouser for "form" tag;
    event.preventDefault();
    console.log('button clicked');
    // step 3 = get the phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-num').value;
    console.log(phoneNumber, pinNumber);

    // A TEMPORARY AND NOT RECOMENDED WAY TO CHECK PHONE AND PIN;
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in');
        window.location.href = '/homepage.html';
    } 
    // step 5 = allow user to use the website;
    else{
        alert('wrong phone number or pin');
    }
});