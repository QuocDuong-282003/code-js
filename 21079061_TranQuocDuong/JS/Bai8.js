// Lấy thẻ div chứa đồng hồ
var clockDiv = document.querySelector(".clock");

// Cập nhật đồng hồ
function updateClock() {
  // Lấy thời gian hiện tại
  var now = new Date();

  // Tạo chuỗi giờ:phút:giây
  var timeString =
    now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  // Hiển thị chuỗi giờ:phút:giây lên trên trang web
  clockDiv.textContent = timeString;
}

// Cập nhật đồng hồ mỗi giây
setInterval(updateClock, 1000);
