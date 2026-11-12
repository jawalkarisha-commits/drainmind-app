# 🌧️ DrainMind — Urban Waterlogging Risk Predictor

**Predict potential drainage blockages. Prioritize inspections. Help communities prepare for waterlogging.**

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Leaflet-Maps-199900?style=for-the-badge&logo=leaflet&logoColor=white" />
</p>

## 🚀 Live Demo

**Frontend:** https://drainmind-app.vercel.app/

**GitHub Repository:** https://github.com/jawalkarisha-commits/drainmind-app

---

## 📌 Overview

DrainMind is an urban drainage monitoring and waterlogging risk-prioritization prototype designed to help municipal authorities monitor drainage conditions, review citizen reports, and identify locations that may require immediate inspection.

The system provides a centralized dashboard with an interactive drainage map, report management, severity indicators, rainfall information, and maintenance status tracking.

DrainMind aims to make urban drainage monitoring more organized, accessible, and data-driven.

## 🚨 Problem Statement

Urban areas frequently experience waterlogging due to:

- Blocked stormwater drainage systems.
- Plastic waste and garbage accumulation.
- Poor drainage maintenance.
- Heavy rainfall.
- Delayed identification of drainage problems.
- Lack of organized communication between citizens and municipal authorities.

Municipal teams may struggle to identify which locations need urgent attention.

DrainMind addresses this challenge by providing a centralized platform for reporting drainage issues, viewing affected locations, and tracking maintenance activities.

## 💡 Proposed Solution

DrainMind provides an urban water intelligence dashboard that helps monitor drainage-related reports and organize inspection activities.

The application brings together:

- Citizen drainage issue reporting.
- Location-based visualization.
- Severity classification.
- Report status management.
- Rainfall information display.
- Centralized municipal monitoring.

The goal is to help authorities identify reported issues and prioritize drainage inspections more efficiently.

## ✨ Features

### 1. 📊 Dashboard Overview
- Centralized urban drainage monitoring dashboard.
- Total Reports counter.
- Pending Action counter.
- High-Risk Reports counter.
- Reports Cleared counter.
- City administrator dashboard interface.

### 2. 🗺️ Interactive Drainage Risk Map
- Interactive map powered by Leaflet and OpenStreetMap.
- Displays reported drainage locations.
- Uses severity-based map markers.
- High, Medium, and Low risk indicators.
- Popup information for reported locations.
- Pune-based illustrative sample locations.

### 3. 📝 Citizen Drain Reporting
- Submit a new drainage issue.
- Enter the affected location.
- Select issue severity.
- Add a description of the problem.
- View newly submitted reports in the dashboard.

### 4. 🚦 Severity Classification
Reports can be classified into three levels:

| Severity | Meaning |
|---|---|
| High | Requires priority inspection |
| Medium | Requires attention |
| Low | Routine monitoring |

### 5. 📋 Report Management
- View recent drainage reports.
- Search reports by location, report ID, or description.
- Filter reports by status.
- Update maintenance status.

Available statuses:

- Pending
- Assigned
- Cleared

### 6. 🌧️ Rainfall Monitoring
- Rainfall summary section.
- Weekly illustrative rainfall chart.
- Sample rainfall readings.
- Rainfall information displayed alongside drainage monitoring.

**Note:** The current rainfall values are illustrative demo data. Live weather integration is not connected.

### 7. 📱 Responsive Dashboard
- Dark-themed dashboard interface.
- Sidebar navigation.
- Mobile navigation menu.
- Dashboard cards and report tables.
- Modal-based report submission.

---

## 🛠️ Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| React.js 18 | User interface development |
| Vite 6 | Frontend development server and build tool |
| JavaScript | Application logic |
| CSS | Styling and responsive layout |
| React Leaflet | Interactive map integration |
| Leaflet | Map rendering |
| OpenStreetMap | Map tile data |
| Lucide React | Icons |
| Axios | HTTP client dependency |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | REST API development |
| Mongoose | MongoDB object modeling |
| CORS | Cross-origin request handling |
| dotenv | Environment variable management |

### Database

| Technology | Purpose |
|---|---|
| MongoDB Atlas | Cloud database |
| Mongoose Schema | Drainage report data structure |

### Deployment and Development

- GitHub — Source code management.
- Vercel — Frontend deployment.
- npm — Package management.
- OpenStreetMap — Map tile service.

---

## 🏗️ Project Architecture

DrainMind follows a frontend and backend architecture.

```text
                 DRAINMIND
                     |
          -----------------------
          |                     |
       FRONTEND              BACKEND
          |                     |
     React + Vite          Node.js
          |                Express.js
     React Leaflet              |
          |                REST APIs
     OpenStreetMap               |
                                |
                           Mongoose
                                |
                          MongoDB Atlas
```

**Frontend:** Displays the dashboard, maps, report forms, and monitoring interface.

**Backend:** Provides API endpoints for checking server health and managing drainage reports.

**Database:** Stores drainage report information through MongoDB and Mongoose.

---

## 📂 Project Structure

```text
drainmind-app/
│
├── backend/
│   ├── server.js
│   ├── Report.js
│   └── package.json
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation and Setup

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MongoDB Atlas account
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/jawalkarisha-commits/drainmind-app.git
```

### Step 2: Open the Project

```bash
cd drainmind-app
```

### Step 3: Install Frontend Dependencies

```bash
npm install
```

### Step 4: Start the Frontend

```bash
npm run dev
```

Open the local development URL shown in your terminal, usually:

```text
http://localhost:5173
```

---

## 🔧 Backend Setup

### Step 1: Open the Backend Folder

```bash
cd backend
```

### Step 2: Install Backend Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5001
MONGO_URI=your_mongodb_atlas_connection_string
```

Replace the placeholder with your own MongoDB Atlas connection string.

**Important:** Never upload your actual `.env` file or database credentials to GitHub.

### Step 4: Start the Backend

For development:

```bash
npm run dev
```

For normal execution:

```bash
npm start
```

The backend runs on:

```text
http://localhost:5001
```

---

## 🔌 Backend API Endpoints

The backend currently provides the following REST API endpoints.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Checks whether the API is running |
| GET | `/api/health` | Checks server and database status |
| GET | `/api/reports` | Retrieves all drainage reports |
| POST | `/api/reports` | Creates a new drainage report |

### 1. API Health Check

```http
GET /api/health
```

Checks whether the backend is online and whether MongoDB is connected.

### 2. Get All Reports

```http
GET /api/reports
```

Retrieves drainage reports sorted by creation date.

### 3. Create a Report

```http
POST /api/reports
```

Example request body:

```json
{
  "location": "FC Road, Pune",
  "severity": "High",
  "status": "Pending",
  "description": "Plastic waste blocking drain"
}
```

Example response:

```json
{
  "message": "Report saved successfully!",
  "report": {}
}
```

The actual response includes the saved report document.

---

## 🗄️ Database Structure

DrainMind uses MongoDB with Mongoose to define the drainage report schema.

### Report Collection

| Field | Data Type | Description |
|---|---|---|
| location | String | Drainage issue location |
| severity | String | Low, Medium, or High |
| status | String | Pending, Assigned, or Cleared |
| description | String | Description of the drainage issue |
| createdAt | Date | Automatically generated creation time |
| updatedAt | Date | Automatically generated update time |

The schema uses Mongoose timestamps to maintain creation and update information.

---

## 🔄 Application Workflow

1. The dashboard displays drainage monitoring information.
2. A user submits a drainage issue with its location, severity, and description.
3. The report appears in the dashboard's report list.
4. The report can be searched and filtered.
5. Its severity and location can be reviewed.
6. Municipal staff can update its maintenance status.
7. The interactive map displays reported locations and their severity indicators.

**Backend workflow:** The separate Express API accepts report creation requests and retrieves stored reports from MongoDB.

**Current prototype behavior:** The dashboard currently uses local browser state for report operations. The backend API is available separately and is not yet wired into the dashboard.

---

## 📍 Sample Dashboard Data

The current dashboard includes illustrative sample reports from Pune.

| Report ID | Location | Severity | Status |
|---|---|---|---|
| DR-104 | FC Road | High | Pending |
| DR-103 | Shivajinagar | Medium | Assigned |
| DR-102 | Kothrud | Low | Cleared |
| DR-101 | Swargate | High | Pending |

These records are demonstration data and should not be interpreted as verified live municipal reports.

---

## 🔐 Security and Configuration

- Environment variables are used for backend configuration.
- MongoDB credentials should remain private.
- `.env` files are excluded through `.gitignore`.
- CORS middleware is configured in the backend.
- The backend validates required database fields through the Mongoose schema.

---

## 🚧 Current Limitations and Future Scope

DrainMind is an evolving prototype. The following improvements can be explored in future development:

- Connect the React dashboard directly to the Express backend.
- Persist dashboard reports in MongoDB.
- Integrate live weather and rainfall APIs.
- Add GPS-based location selection.
- Enable photograph uploads for drainage reports.
- Explore AI-assisted drain blockage detection.
- Develop more advanced drainage risk-prioritization methods.
- Add user authentication and role-based access.
- Introduce municipal inspection and maintenance analytics.
- Improve map-based monitoring with verified location data.

These are potential improvements, not claims of currently implemented functionality.

---

## 🎯 Project Goal

The goal of DrainMind is to support smarter urban drainage monitoring by helping municipal authorities organize citizen reports, visualize reported drainage issues, and prioritize inspections.

By combining mapping technology, report management, and backend data services, DrainMind aims to contribute to better urban infrastructure monitoring and more responsive drainage maintenance.

---

## 👩‍💻 Project Information

**Project Name:** DrainMind

**Category:** Urban Infrastructure / Smart City Technology

**Project Type:** Web Application Prototype

**Frontend:** React.js + Vite

**Backend:** Node.js + Express.js

**Database:** MongoDB Atlas

**Maps:** Leaflet + OpenStreetMap

**Repository:** https://github.com/jawalkarisha-commits/drainmind-app

**Live Demo:** https://drainmind-app.vercel.app/

---

<p align="center">
  <b>🌧️ DrainMind — Smarter Drainage Monitoring for Smarter Cities.</b>
</p>
