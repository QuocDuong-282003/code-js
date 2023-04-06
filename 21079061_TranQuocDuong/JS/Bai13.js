function checkFirstLetter() {
    const inputString = document.getElementById("inputString").value;
    const firstLetterRegex = /^[A-Z]/;

    if (firstLetterRegex.test(inputString)) {
        document.getElementById("result").textContent = "Ký tự đầu tiên của chuỗi là ký tự hoa";
    } else {
        document.getElementById("result").textContent = "Ký tự đầu tiên của chuỗi không phải là ký tự hoa";
    }
}
