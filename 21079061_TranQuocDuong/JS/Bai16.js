function validateIP() {
    const ipInput = document.getElementById("ip");
    const ip = ipInput.value;
    const resultElement = document.getElementById("ip-result");
    
    const re = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
    const isValid = re.test(ip);
  
    resultElement.innerHTML = isValid ? "Valid IP address" : "Invalid IP address";
  }
  
  function validateURL() {
    const urlInput = document.getElementById("url");
    const url = urlInput.value;
    const resultElement = document.getElementById("url-result");
    
    const re = /^(https?:\/\/)?([a-z0-9]+\.)+[a-z]{2,}(\/[a-z0-9]+)*$/i;
    const isValid = re.test(url);
  
    resultElement.innerHTML = isValid ? "Valid URL" : "Invalid URL";
  }
  
  function validateZip() {
    const zipInput = document.getElementById("zip");
    const zip = zipInput.value;
    const resultElement = document.getElementById("zip-result");
    
    const re = /^\d{5}(-\d{4})?$/;
    const isValid = re.test(zip);
  
    resultElement.innerHTML = isValid ? "Valid Zip Code" : "Invalid Zip Code";
  }
  