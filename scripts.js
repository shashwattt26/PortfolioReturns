function calculate(){
    const amount = parseFloat(document.querySelector('#capital').value);
    const time = parseFloat(document.querySelector('#year').value);
    const rate = parseFloat(document.querySelector('#int').value);

    if(isNaN(rate) || isNaN(amount) || isNaN(time)){
      alert("Please enter numbers!")
    }

    if(rate < 0 || rate > 100){
      alert("Enter valid interest rate!")
      return ;
    }

    const result = amount*((1 + rate/100)**time);
    const res = document.querySelector('#amo');
    const int = document.querySelector('#intamo');

    res.innerText = `₹${result.toFixed(2)}`;
    int.innerText = `₹${(result-amount).toFixed(2)}`;
}
