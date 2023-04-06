var SoLuong, x;
var DS = new Array(100);
SoLuong = prompt("Nhập số người cho phòng ban : ", 10);
for (i=0; i < SoLuong; i++)
{
DS[i] = prompt("Nhập vào họ tên: ","");
}
DS.sort();
document.write("<H3>Danh sách phòng ban sau khi đã sắp xếp </H3>");
for (x in DS)
{
document.write( DS[x] + "<BR>");
}