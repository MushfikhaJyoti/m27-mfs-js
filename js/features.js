// show the cash out form
document.getElementById('btn-show-cash-out')
   .addEventListener('click', function(){

    // show cash out btn clicked;
    // console.log('show cash out btn clicked');
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide the add money from;
    document.getElementById('add-money-form').classList.add('hidden');
   })

//  show add money form from cash out option;
document.getElementById('btn-show-add-money')
  .addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');
  }) 