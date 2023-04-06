function calculateAge() { // hàm sẽ đc gọi khi người dùng nhấp nút tính tuổi

	var birthYearInput = document.getElementById("birthYear");
   // 31  "getElementById" để lấy giá trị của đầu vào năm sinh, có id là "birthYear" 
   //và lưu vào biến "birthYearInput"

	var birthYear = parseInt(birthYearInput.value);
// parseInt hàm chuyển giá trị đầu vào thành kiểu số nguyên và lưu vào birthYear
    
	var currentYear = new Date().getFullYear();
    //đối tượng "Date" để lấy năm hiện tại bằng phương thức "getFullYear" 
    //và lưu vào biến "currentYear".

	if (birthYear <= 0 || birthYear > currentYear) {//currentYear năm hiện tại
		alert("Năm sinh không phù hợp. Vui lòng nhập lại.");
		birthYearInput.value = "";
		return;
	}
    //innerHTML hàm cập nhật nọi dung
	var age = currentYear - birthYear;
	document.getElementById("result").innerHTML = `Tuổi của bạn là: ${age}`;
}