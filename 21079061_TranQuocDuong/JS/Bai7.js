function displayDateTime() {
    var currentDateTime = new Date();
    //Date để lấy thời gian hiện tại (theo múi giờ của máy tính đang chạy tập lệnh) 
    //và hiển thị nó trong định dạng "giờ:phút"

    //var date = currentDateTime.toLocaleDateString();
    // 10  hiển thị ngày tháng nănm (date + " " +)

    //toLocaleTimeString () trả về phần thời gian của một đối tượng ngày tháng dưới dạng một chuỗi
    var time = currentDateTime.toLocaleTimeString();
    document.getElementById("datetime").innerHTML =  time ;
}