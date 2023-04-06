	function updateTotalPrice() {
			// Lấy giá trị của số lượng bó hoa của từng loại hoa
			var rose = parseInt(document.getElementById("rose").value);
			var tulip = parseInt(document.getElementById("tulip").value);
			var daisy = parseInt(document.getElementById("daisy").value);
            var dai= parseInt(document.getElementById("dai").value);
			// Tính tổng thành tiền của từng loại hoa và tổng thành tiền của toàn bộ đơn hàng
			var roseTotal = rose * 20000;
			var tulipTotal = tulip * 40000;
			var daisyTotal = daisy * 30000;
            var fourPrice = dai * 50000;
			var totalPrice = roseTotal + tulipTotal + daisyTotal + fourPrice;

			// Cập nhật giá trị của các ô Total price và Total price của toàn bộ đơn hàng
			document.getElementById("rose").innerHTML = "$" + roseTotal.toFixed(2);
			document.getElementById("tulip").innerHTML = "$" + tulipTotal.toFixed(2);
			document.getElementById("daisy").innerHTML = "$" + daisyTotal.toFixed(2);
            document.getElementById("dai").innerHTML = "$" + fourPrice.toFixed(2);
           document.getElementById("total-price").innerHTML=totalPrice +"  nghìn đồng";
        }