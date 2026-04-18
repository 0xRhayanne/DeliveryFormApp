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
