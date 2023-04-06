// Khai báo biến
var imageSources = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
var intervalID;

// Lấy phần tử từ HTML
var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");
var randomImage = document.getElementById("random-image");

// Lắng nghe sự kiện click vào nút "Start"
startButton.addEventListener("click", function() {
  // Bắt đầu thay đổi hình ảnh mỗi 3 giây
  intervalID = setInterval(function() {
    // Chọn ngẫu nhiên một hình ảnh từ danh sách imageSources
    var randomIndex = Math.floor(Math.random() * imageSources.length);
    var randomSource = imageSources[randomIndex];
    // Thay đổi src của hình ảnh
    randomImage.setAttribute("src", randomSource);
  }, 3000);
});

// Lắng nghe sự kiện click vào nút "Stop"
stopButton.addEventListener("click", function() {
  // Dừng thay đổi hình ảnh
  clearInterval(intervalID);
});

