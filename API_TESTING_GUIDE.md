# API Testing Guide for VnExpress Backend

Backend Domain: `https://vnexpress-backend.vercel.app/`

## 1. GET Request: Lấy danh sách users

```javascript
fetch("https://vnexpress-backend.vercel.app/api/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

## 2. POST Request: Tạo user mới

```javascript
fetch("https://vnexpress-backend.vercel.app/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    password: "password123",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("User created:", data))
  .catch((error) => console.error("Error:", error));
```

## 3. POST Request: Login

```javascript
fetch("https://vnexpress-backend.vercel.app/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "admin@vnexpress.com",
    password: "123456",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Login success:", data))
  .catch((error) => console.error("Error:", error));
```

## 4. Test endpoint

```javascript
fetch("https://vnexpress-backend.vercel.app/api/test")
  .then((response) => response.json())
  .then((data) => console.log("Test API response:", data))
  .catch((error) => console.error("Error:", error));
```

## Lưu ý:

- Đảm bảo backend đã được deploy thành công và không có lỗi.
- Nếu API yêu cầu Authorization, bạn cần thêm token vào headers:

```javascript
headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer <your-token>",
}
```

## Kết nối với frontend framework:

Nếu bạn dùng React, Vue, hoặc Angular, bạn có thể sử dụng các thư viện như Axios hoặc Fetch API để gọi các endpoint này.

## Cấu hình Environment Variables:

- Development: `VITE_API_URL=http://localhost:3001/api`
- Production: `VITE_API_URL=https://vnexpress-backend.vercel.app/api`
