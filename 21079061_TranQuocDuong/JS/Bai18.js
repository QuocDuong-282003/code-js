function validate() {
    var hoInput = document.getElementById("ho");
    var hoValue = hoInput.value.trim();
    var hoPattern = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/;

    var tenInput = document.getElementById("ten");
    var tenValue = tenInput.value.trim();
    var tenPattern = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/;

    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    var confirmEmailInput = document.getElementById("nhaplaiemail");
    var confirmEmailValue = confirmEmailInput.value.trim();

    var passwordInput = document.getElementById("pass");
    var passwordValue = passwordInput.value.trim();
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    var yofbInput = document.getElementById("namsinh");
    var yofbValue = parseInt(yofbInput.value);
    if(hoInput==null || hoInput==""){
        alert("Bạn chưa nhập Họ. Vui lòng điền đầy dủ thông tin!");
        hoInput.focus();
        return;
        /*hàm foucs kích hoạt khi người dùng click vào thẻ input textarea select 
         sau đó sẽ bắt lỗi sự kiện theo yêu cầu*/
         /* trim xóa khoảng trắng đầu và cuối */
    }
     else  if(!hoPattern.test(hoValue)) {
        alert("Nhập họ không hợp lệ. Vui lòng nhập lại!");
        hoInput.focus();
        return;
    }

    if (!tenPattern.test(tenValue)) {
        alert("Nhập tên không hợp lệ. Vui lòng nhập lại!");
        tenInput.focus();
        return;
    }

    if (!emailPattern.test(emailValue)) {
        alert("Nhập email không hợp lệ. Vui lòng nhập lại!");
        emailInput.focus();
        return;
    }

    if (emailValue !== confirmEmailValue) {
        alert("Xác nhận email không trùng khớp. Vui lòng nhập lại!");
        confirmEmailInput.focus();
        return;
    }

    if (!passwordPattern.test(passwordValue)) {
        alert("Nhập mật khẩu không hợp lệ. Mật khẩu phải chứa ít nhất 6 ký tự bao gồm ký tự chữ và số. Vui lòng nhập lại!");
        passwordInput.focus();
        return;
    }

    if (yofbValue >= 2002) {
        alert("Năm sinh phải nhỏ hơn 2002. Vui lòng nhập lại!");
        yofbInput.focus();
        return;
    }

    alert("Đăng ký thành công!");
    }
