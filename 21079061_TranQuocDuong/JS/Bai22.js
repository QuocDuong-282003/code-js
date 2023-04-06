
  

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
        xnmk.innerText = "error";
        return false;
    } else {
        xnmk.innerText = "";
        return true;
    }
  }
  
  
 
//  function checkhoName(){
//    var name2=document.getElementById("fullname").value;
//    var check_error_hoName =document.getElementById("errfullname");
//    var regexhoName=/^[a-z0-9_-]{3,16}$/;
  
//     if(name2=="" ||name2==null){
//      check_error_hoName.innerHTML="error";
//     }else if(!regexhoName.test(name2)){
//      check_error_hoName.innerHTML="error";
//     }else{
//      check_error_hoName.innerHTML="";
//       return name2;
//     }
  
//  }
 
 
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
 
 function submitForm() {
  if (checkName() == false || checkEmail() == false || kiemTraPassword() == false || kiemTraLaiPassword() == false) 
   {
     alert("Bạn chưa nhập đủ hoặc thiếu thông tin");
      return false;
  // }  else{
   }else if (checkName() == true || checkEmail() == true || kiemTraPassword() == true || kiemTraLaiPassword() == true) 
 {
   alert("Dữ liệu nhập vào hợp lệ.");
 
  return true ;
 
 }
}