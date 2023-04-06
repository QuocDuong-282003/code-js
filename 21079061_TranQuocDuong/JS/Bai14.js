function checkCreditCard() {
    const creditCardInput = document.getElementById('credit-card-input').value;
    const creditCardRegex = /^(\d{4}-){3}\d{4}$/;
  
    if (creditCardRegex.test(creditCardInput)) {
      document.getElementById('result').innerHTML = 'Số Credit Card hợp lệ';
    } else {
      document.getElementById('result').innerHTML = 'Số Credit Card không hợp lệ';
    }
  }
  