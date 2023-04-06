
  
//   // Bài 17. JavaScript Kiểm tra dữ liệu nhập - Regular Expressions
// // Viết hàm kiểm tra dữ liệu của form sau:
// function kiemTra() {
//   const usernameRegex = /^[a-zA-Z0-9._-]{6,}(?<![._-])$/;
//   const name = document.getElementById("name");
//   const passwordRegex = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;
//   const pass = document.getElementById("pass");
//   const repass=document.getElementById("repass");
//   const fullnameRegex=/^[a-z0-9_-]{3,16}$/;
//   const fullname=document.getElementById("fullname");
//   if (usernameRegex.test(name.value)){
//       document.getElementById("errname").innerHTML ="";
//   }
//   else {
//       document.getElementById("errname").innerHTML ="Lỗi";
//   }

//   if  (passwordRegex.test(pass.value)){
//       document.getElementById("errpass").innerHTML ="";
//   }
      
//   else {
//       document.getElementById("errpass").innerHTML ="Lỗi";
//   }
//   if(passwordRegex.test(repass.value)){
//       document.getElementById("errrepass").innerHTML ="";
//   }
//   else 
//   {
//       document.getElementById("errrepass").innerHTML ="";
//   }
//   if(fullnameRegex.test(fullname.value)){
//       document.getElementById("errrfullname").innerHTML ="";
//   }
//   else 
//   {
//       document.getElementById("errfullname").innerHTML ="Lỗi";
//   }
      
// }
function checkName(){
   var name=document.getElementById("txt_name").value;
   var check_error_Name =document.getElementById("errname");
   var regexName=/^[a-zA-Z\s]+$/;
  
    if(name=="" ||name==null){
      check_error_Name.innerHTML="error";
    }else if(!regexName.test(name)){
      check_error_Name.innerHTML="error";
    }else{
      check_error_Name.innerHTML="";
      return name;
    }
  
}

function kiemTraPassword() {
  var re = /(?=.*\d).{6,}/;
  if (re.test(document.getElementById('txtMK').value.trim())== false) {
      mk.innerText = "*error";
      return false;
  } else {
      mk.innerText = "";
      return true;
  }
}

function kiemTraLaiPassword() {
  var re = /(?=.*\d).{6,}/;
  if (re.test(document.getElementById('txtXNMK').value.trim())== false) {
      xnmk.innerText = "mật khâu không";
      return false;
  } else {
      xnmk.innerText = "";
      return true;
  }
}

function checkhoName(){
  var name2=document.getElementById("fullname").value;
  var check_error_hoName =document.getElementById("errfullname");
  var regexhoName=/^[a-z0-9_-]{3,16}$/;
 
   if(name2=="" ||name2==null){
    check_error_hoName.innerHTML="error";
   }else if(!regexhoName.test(name2)){
    check_error_hoName.innerHTML="error";
   }else{
    check_error_hoName.innerHTML="";
     return name2;
   }
 
}
function checkSDT(){
  var phone=document.getElementById("number_phone").value;
  var check_error_SDT=document.getElementById("errorsdt");
  var regexSDT=/^\+?(84|0)\d{9}$/;
  if(phone=="" ){
    check_error_SDT.innerHTML="error";
   }else if(!regexSDT.test(phone)){
    check_error_SDT.innerHTML="error";
   }else{
    check_error_SDT.innerHTML="";
     return phone;
   }
 
}

function checkEmail(){
  var email=document.getElementById("txt_email").value;
  var check_error_email=document.getElementById("erremail");
  var regexEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(email=="" ){
    check_error_email.innerHTML="error";
   }else if(!regexEmail.test(email)){
    check_error_email.innerHTML="error";
   }else{
    check_error_email.innerHTML="";
     return email;
   }
 
}
