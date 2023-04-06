function pag(){
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
// tại sao lại có [0] như  thế này bởi vì mỗi close là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0]. 
//Nếu mình có 2 cái component cùng class thì khi [0] nó sẽ hiển thị component 1 còn [1] thì nó sẽ hiển thị component 2.
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
function page(){
  var passwordInput = document.getElementById("muahang");
  var passwordValue = passwordInput.value.trim();
  var passwordPattern= /<div class="product">.*?<h2 class="name">(.+?)<\/h2>.*?<span class="price">(.+?)<\/span>.*?<p class="description">(.+?)<\/p>.*?<\/div>/g
  if (!passwordPattern.test(passwordValue)) {
  alert("Sản phẩm bạn vừa nhập hiện đang không còn!");
        hoInput.focus();
        return;
}
}