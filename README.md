# 📌 ClarifyCSV Cleaner

A lightweight CSV cleaning web application built using React (frontend) and FastAPI (backend), deployed on Netlify + Hugging Face Spaces.


---

## 🚀 Features

Upload any .csv file

Remove duplicate rows

Replace missing values

Download cleaned CSV instantly

Simple & clean UI

FastAPI backend deployed on HuggingFace

Fully automated pipeline (frontend + backend)



---

## 🧩 Tech Stack

Frontend (React)

React.js

Axios

Netlify Deployment


Backend (FastAPI)

Python

Pandas

Uvicorn

Hugging Face Spaces (Docker)



---

## 🛠️ Architecture

React UI  --->  Netlify Hosting  
        |
        ↓
CSV Upload + Request
        |
        ↓
FastAPI Backend (HuggingFace)  
        |
        ↓
Cleaning with Pandas  
        |
        ↓
Cleaned CSV Download


---

## 🔧 How CSV Cleaning Works

1. Remove duplicate rows


2. Replace NaN / null with blank values


3. Return cleaned CSV as downloadable file



Backend uses:

df = df.drop_duplicates()
df = df.fillna("")


---

## 🌐 Live Links

Frontend (Netlify)

🔗 https://timely-scone-f7ff83.netlify.app

Backend (Hugging Face Space)

🔗 https://gaurikapare-clarifycsv-cleaner-gauri.hf.space


---

## 📝 API Endpoint

POST /predict

Upload CSV file → returns cleaned CSV file.

Request

file: CSV file

Response

Downloadable cleaned CSV



---

## 📦 Project Structure

clarifycsv/
│── backend/
│   ├── main.py
│   ├── cleaner.py
│   ├── auth.py
│   ├── requirements.txt
│   └── Dockerfile
│
└── frontend/
    ├── src/
    │   ├── UploadCSV.jsx
    │   ├── Signup.jsx
    │   ├── Login.jsx
    │   ├── Navbar.jsx
    │   └── App.js
    ├── package.json
    └── public/


---

## 🏁 Conclusion

ClarifyCSV Cleaner is a fast and easy CSV preprocessing tool for students, analysts, and developers.
This project demonstrates full-stack development, API integration, and cloud deployment using Netlify & HuggingFace.
