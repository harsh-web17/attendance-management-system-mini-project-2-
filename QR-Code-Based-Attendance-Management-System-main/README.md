**Smart Attendance Management System Using QR Code and Geolocation**

---

## 📖 Overview

This project is a **web-based attendance management system** that simplifies and secures the process of tracking student attendance using **QR codes** and **geolocation verification**. The system distinguishes between **teachers (QR generators)** and **students (QR scanners)**. It ensures that students are physically present within the campus premises when marking attendance.

---

## ✅ Features

* 📲 **Login/Signup for Students and Teachers**
* 🔐 Role-based redirection (Student ➝ QR Scanner, Teacher ➝ QR Generator)
* 📍 **Geolocation check** to ensure student is within the allowed campus region
* 🔄 Real-time QR Code generation by the teacher
* 📷 QR Scanner for students to mark attendance
* 📊 Dashboard for attendance analytics
* 📝 MongoDB-based student and attendance record storage

---

## 🧑‍💻 Tech Stack

| Frontend    | Backend    | Database | Other           |
| ----------- | ---------- | -------- | --------------- |
| HTML5, CSS3 | Node.js    | MongoDB  | Bootstrap 5     |
| JavaScript  | Express.js | Mongoose | Geolocation API |
| QRCode.js   |            |          | Fetch API       |

---

## 📂 Folder Structure (Basic)

```
/project-root
│
├── public/
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── location.html
│   └── attendance.html
│
├── routes/
│   ├── user.js
│   ├── student.js
│   ├── teacher.js
│   └── attendance.js
│
├── models/
│   ├── User.js
│   ├── Student.js
│   └── Attendance.js
│
├── server.js
└── package.json
```

---

## 📖 How It Works

1. **User Signup/Login**: Users sign up with a role (student or teacher).
2. **QR Generation (Teacher)**: Teacher generates a time-based QR code only when they are on campus.
3. **Location Verification (Student)**: Student scans the QR only if they're within the approved location radius (e.g., 100 meters from college).
4. **Attendance Recording**: Attendance is saved in MongoDB with student info, time, date, and location.

---

## 🚀 Setup Instructions

1. Clone the repo:

   ```bash
   git clone https://github.com/YazhiniGowrisankar/QR-Code-Based-Attendance-Management-System.git
   cd attendance-qr-system
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   node server.js
   ```

4. Open `index.html` in your browser for the frontend.

---

## ✨ Future Improvements

* Add face detection during attendance
* Export attendance reports as Excel/PDF
* Admin panel for managing users

---

## 📬 Contact

If you like this project or have questions, feel free to [reach out](mailto:yazhinigowrisankar3@gmail.com) or raise an issue.

---

## 📝 About

This project was developed as part of a **college mini-project** to simplify and modernize attendance systems using QR code scanning and location verification. It helps reduce manual errors, proxy attendance, and improves transparency.

---
