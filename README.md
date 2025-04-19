# 🏠 DormBK Backend

**DormBK** là hệ thống quản lý ký túc xá được xây dựng bằng **Express + TypeScript**, phục vụ quản lý sinh viên, phòng ở, nhân viên và các chức năng liên quan trong môi trường nội trú.

## 🚀 Công nghệ sử dụng

- ⚙️ Express JS
- ⛑️ TypeScript
- 🐬 MySQL
- 🧩 Node JS

---

## 📂 Cấu trúc thư mục

```bash
src/
├── App/
│   ├── Controllers/     ← Xử lý request/response
│   ├── Middlewares/     ← Middleware cho bảo mật, log, validate,...
│   ├── Models/          ← Định nghĩa dữ liệu hoặc schema DB
├── Config/          ← Cấu hình hệ thống (env, db, jwt, ...)
├── Routes/          ← Khai báo route → gọi controller
├── Services/        ← Logic nghiệp vụ, thao tác với DB/API
├── utils/           ← Hàm tiện ích chung
└── index.ts         ← Điểm bắt đầu server (khởi chạy Express)
```

---

## 📦 Cài đặt

```bash
# Clone project
git clone https://github.com/nKhanGh/DormBK-BE.git
cd DormBK-BE

# Cài dependency
npm install

# Chạy development server
npm run dev
```

---

## 🧪 Các tính năng đã có

 (Đang cập nhật)_

---



> Made with 💙 by DormBK Team - Database Systems L03 - Team 08 - 2025
