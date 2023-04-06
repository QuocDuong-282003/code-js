function changeBackgroundColor() {
	// Thiết lập màu nền cho đoạn văn bản
	var paragraphs = document.getElementsByTagName("p");
	for (var i = 0; i < paragraphs.length; i++) {
		paragraphs[i].style.backgroundColor = "yellow";
	}

	// Thiết lập màu nền cho trang web
	var body = document.body;
	body.style.backgroundColor = "blue";
}
