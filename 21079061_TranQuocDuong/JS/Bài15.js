function checkEmail() {
    const inputEmail = document.getElementById("inputEmail").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(inputEmail)) {
        document.getElementById("result").textContent = "Email hợp lệ";
    } else {
        document.getElementById("result").textContent = "Email không hợp lệ";
    }
}
