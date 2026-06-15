## 📌 Overview

**DeliveryFormApp** is designed to streamline delivery form submissions while ensuring data quality through advanced email validation.

It combines:

* A **React frontend** for user interaction
* A **Node.js (Express) backend** for validation logic
* Optional **Java/Spring structure** (present in repo for expansion)

---

## ✨ Features

* 📄 Submit delivery forms through a clean UI
* 📬 Email domain validation:
  * ✅ Trusted domain whitelist (e.g., Gmail, Outlook)
  * 🔍 Typo detection (e.g., `gamil.com → gmail.com`)
  * 🌐 MX record verification (real email domain check)
* ⚡ Fast API with Express
* 🔁 Frontend ↔ Backend integration via proxy
* 🩺 Health check endpoint (`/health`)
  
---

## 🛠 Tech Stack

### Frontend

* React
* React Scripts
* Testing Library

### Backend

* Node.js
* Express
* DNS (Node core module)
* didyoumean (string suggestion)

### Other

* MongoDB (dependency included for future data storage)

---

## 📁 Project Structure

```
DeliveryFormApp/
│
├── delivery-form-frontend/   # React frontend
│   ├── src/
│   │   ├── DeliveryForm.js
│   │   ├── FormList.js
│   │   └── App.js
│
├── delivery-form-backend/    # Express backend
│   ├── server.js
│
├── package.json              # Root config
├── netlify.toml              # Deployment config
└── pom.xml                   # Java backend (optional/unused)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/0xRhayanne/DeliveryFormApp.git
cd DeliveryFormApp
```
---

---

### 2️⃣ Install dependencies

#### Backend

```bash
cd delivery-form-backend
npm install
```
#### Frontend

```bash
cd ../delivery-form-frontend
npm install
```
---

## ▶️ Running the Application

### Start Backend (Port 3001)

```bash
cd delivery-form-backend
node server.js
```
---

### Start Frontend (Port 3000)

```bash
cd delivery-form-frontend
npm start
```
The frontend is configured with a proxy:

```
http://localhost:3001
```
---

## 🔌 API Endpoints

Response:
### Health Check

```
GET /health
```
```json
{
  "alive": true,
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```
---

### Check Email Domain

```
GET /api/check-domain?domain=gmail.com
```
#### ❌ Invalid response examples

#### ✅ Valid response

```json
{ "valid": true }
```

```json
{ "valid": false, "reason": "Invalid TLD" }
```

```json
{ "valid": false, "reason": "Did you mean gmail.com?" }
```

```json
{ "valid": false, "reason": "No MX records" }
```
---

## 🧠 How Validation Works

1. **TLD validation**
   Ensures the domain uses a valid top-level domain (`.com`, `.org`, etc.)

2. **Trusted provider check**
   Only allows known email providers (e.g., Gmail, Yahoo)

3. **Typo correction**
   Uses `didyoumean` to suggest correct domains

4. **MX record lookup**
   Confirms the domain can actually receive emails

---

## 🚀 Deployment

* Frontend ready for deployment via **Netlify** (`netlify.toml` included)
* Backend can be deployed on:
  * Render
  * Railway
  * VPS / Docker
    
---

## 📌 Future Improvements

* 🗄 Database integration (MongoDB already included)
* 🔐 Authentication system
* 📊 Admin dashboard for submissions
* 🌍 Support for more email providers
* 🧪 Improved test coverage
  
---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
