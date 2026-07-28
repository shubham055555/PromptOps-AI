# PromptOps AI

## AI-Powered Prompt Engineering Workspace

PromptOps AI is a modern AI-powered Prompt Engineering Workspace developed as part of a Prompt Engineering Internship. The platform helps users create, optimize, organize, test, and analyze AI prompts using Google's Gemini API through a centralized web application.

---

# Project Overview

PromptOps AI simplifies the complete Prompt Engineering workflow by providing a single platform for prompt creation, optimization, testing, storage, analytics, and configuration.

---

# Features

## Dashboard

- Prompt Statistics
- AI Calls Overview
- Success Rate
- Activity Charts
- Recent Activity

---

## Prompt Builder

- Generate AI Prompts
- Save Prompt History
- Structured Prompt Generation

---

## Prompt Library

- Save Prompts
- Search Prompts
- Category Management
- Delete Prompts
- Reuse Prompt Templates

---

## Prompt Optimizer

- Optimize Existing Prompts
- Improve Prompt Quality
- AI-Based Prompt Enhancement

---

## AI Playground

- Chat with Google Gemini
- Conversation History
- Auto Conversation Title
- Rename Conversation
- Delete Conversation
- Search Conversations
- Persistent Chat Storage

---

## Analytics

- KPI Cards
- Daily Activity
- Weekly Activity
- Monthly Activity
- Prompt Categories
- AI vs User Messages
- Recent Activity
- Most Used Prompt
- Most Used AI Model
- Average Response Time
- CSV Export

---

## Settings

- AI Model Configuration
- Temperature Configuration
- System Prompt
- API Key Management
- Appearance Settings
- Data Export
- Data Cleanup
- About Section

---

# Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Zustand
- React Router DOM
- Axios
- Recharts
- Lucide React

## Backend

- Python
- FastAPI
- SQLAlchemy
- Pydantic

## Database

- SQLite

## AI Integration

- Google Gemini API

## Development Tools

- Visual Studio Code
- Git
- GitHub
- Swagger UI

---

# System Architecture

```
                 User

                   │

                   ▼

          React Frontend

                   │

                   ▼

            FastAPI Backend

        ┌──────────┴──────────┐

        ▼                     ▼

  Google Gemini API      SQLite Database
```

---

# Project Structure

```
PromptOps-AI

│

├── backend
│   ├── api
│   ├── services
│   ├── models
│   ├── schemas
│   ├── db
│   └── main.py
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── features
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── store
│
├── README.md
└── .gitignore
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/shubham055555/PromptOps-AI.git
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

The frontend will start on:

```
http://localhost:5173
```

---

## Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

The backend will start on:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

# API Modules

- Prompt Builder API
- Prompt Library API
- Prompt Optimizer API
- AI Playground API
- Conversation API
- Messages API
- Analytics API
- Settings API
- Data Management API

---

# Database Tables

- Prompt
- Prompt Library
- Conversation
- Message
- App Settings

---

# Screenshots

Dashboard


Prompt Builder


Prompt Library


Prompt Optimizer


AI Playground


Analytics


Settings


---

# Future Enhancements

- User Authentication
- PostgreSQL Database
- Docker Deployment
- Cloud Deployment
- Multiple AI Models
- Team Collaboration
- Prompt Versioning
- PDF Report Export
- Prompt Sharing
- Workspace Management

---

# Learning Outcomes

This project demonstrates practical experience in:

- Prompt Engineering
- Frontend Development
- Backend Development
- REST API Development
- Database Design
- AI Integration
- State Management
- Software Architecture

---

# Developed By

Shubham Sharma

Prompt Engineering Intern

---

# License

This project was developed for educational and internship learning purposes.
