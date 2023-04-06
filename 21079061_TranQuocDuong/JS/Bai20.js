 function myFunction() {
    var table = document.getElementById("myTable");
     var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   
   
   cell1.innerHTML = "Trần Quốc Dương";
    cell2.innerHTML = "DHCNTH17ATT";
    cell3.innerHTML = "Website";
     cell4.innerHTML = "CLC ";
  }
  function addRow(){
  var hoInput = document.getElementById("hoten");
  var hoValue = hoInput.value.trim();
  var hoPattern = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/;

 
   if(!hoPattern.test(hoValue)) {
    alert("Nhập họ không hợp lệ. Vui lòng nhập lại!");
    hoInput.focus();
    return;
}
 else alert("Đăng ký thành công!");
}
// function myFunction() {
//     var row = document.getElementById("myRow");
//     var x = row.insertCell(3);
//     x.innerHTML = "New ";
//   }