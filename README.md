HẦN A – BACKEND API (60 PHÚT)
A1️⃣ Khởi tạo server (5 phút)

Server chạy cổng 3000

Parse JSON body

✅ LỜI GIẢI
const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

A2️⃣ CRUD USER API (20 phút)
📌 Yêu cầu

User gồm:

{
  "id": number,
  "name": string,
  "email": string,
  "age": number
}

API:

POST /users

GET /users

GET /users/:id

PUT /users/:id

DELETE /users/:id

✅ LỜI GIẢI
let users = [];
let idCounter = 1;

// CREATE
app.post("/users", (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || age <= 0) {
    return res.status(400).json({ message: "Invalid data" });
  }

  const user = { id: idCounter++, name, email, age };
  users.push(user);
  res.status(201).json(user);
});

// READ ALL
app.get("/users", (req, res) => {
  res.json(users);
});

// READ ONE
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.sendStatus(404);
  res.json(user);
});

// UPDATE
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.sendStatus(404);

  Object.assign(user, req.body);
  res.json(user);
});

// DELETE
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id !== Number(req.params.id));
  res.json({ message: "Deleted" });
});

🧪 TEST POSTMAN – CRUD
POST /users
{
  "name": "Duong",
  "email": "duong@gmail.com",
  "age": 22
}

GET /users
GET /users/1
PUT /users/1
{
  "age": 23
}

DELETE /users/1
A3️⃣ LOGIN + JWT (20 phút)
📌 Yêu cầu

Login bằng email/password

Trả JWT

API /profile cần token

✅ LỜI GIẢI
const jwt = require("jsonwebtoken");
const SECRET = "secret";

const account = {
  email: "admin@gmail.com",
  password: "123456"
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email !== account.email || password !== account.password) {
    return res.sendStatus(401);
  }

  const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded;
    next();
  });
}

app.get("/profile", auth, (req, res) => {
  res.json({ email: req.user.email });
});

🧪 POSTMAN TEST JWT

1️⃣ POST /login

{
  "email": "admin@gmail.com",
  "password": "123456"
}


2️⃣ GET /profile

Authorization: Bearer <TOKEN>

A4️⃣ PAGINATION (10 phút)
📌 Yêu cầu

GET /users?page=1&limit=2

✅ LỜI GIẢI
app.get("/users", (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 2;
  const start = (page - 1) * limit;

  res.json(users.slice(start, start + limit));
});

⏱️ PHẦN B – CODE GIẢI THUẬT (30 PHÚT)

❗ Phần này rất hay ra, kiểm tra tư duy + code sạch

B1️⃣ Đảo ngược chuỗi (5 phút)
📌 Đề

Input: "backend"
Output: "dnekcab"

✅ LỜI GIẢI
function reverseString(str) {
  return str.split("").reverse().join("");
}

B2️⃣ Tìm số lớn nhất trong mảng (5 phút)
function maxNumber(arr) {
  return Math.max(...arr);
}

B3️⃣ Kiểm tra số nguyên tố (10 phút)
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

B4️⃣ Đếm số lần xuất hiện (10 phút)
📌 Input
["a", "b", "a", "c", "b", "a"]

📌 Output
{ a: 3, b: 2, c: 1 }

✅ LỜI GIẢI
function countItems(arr) {
  const result = {};
  for (let item of arr) {
    result[item] = (result[item] || 0) + 1;
  }
  return result;
}
