# 🚀 DevOps CI/CD Automation Dashboard

A complete DevOps CI/CD project demonstrating automated build, integration, containerization, deployment, and live monitoring using **Git, GitHub, Jenkins, Docker, Nginx, Flask, and Linux/WSL2**.

## 📌 Project Overview

This project is a web-based DevOps dashboard that displays live information from the CI/CD environment.

The dashboard integrates:

* Git & GitHub
* Jenkins CI/CD
* Docker containers
* Flask REST APIs
* Nginx
* Linux / Ubuntu WSL2
* GitHub API
* Jenkins API
* Live system monitoring

The project also demonstrates how a frontend application can communicate with backend APIs running inside Docker containers.

---

## 🏗️ Architecture

```text
Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    │ webhook / Jenkins trigger
    ▼
Jenkins
    │
    ├── Build
    ├── Test
    └── Deployment
    │
    ▼
Docker
    │
    ├── Nginx Frontend
    │       │
    │       └── DevOps Dashboard
    │
    └── Flask Backend
            │
            ├── Jenkins API
            ├── GitHub API
            └── Live System API
```

---

## 🛠️ Technologies Used

| Technology          | Purpose                    |
| ------------------- | -------------------------- |
| Git                 | Version control            |
| GitHub              | Source code repository     |
| Jenkins             | CI/CD automation           |
| Docker              | Containerization           |
| Nginx               | Web server / reverse proxy |
| Flask               | Backend REST API           |
| Python              | Backend development        |
| Linux / Ubuntu WSL2 | Development environment    |
| Cloudflare Tunnel   | Public demo access         |

---

## 🔄 CI/CD Workflow

```text
Code Change
     ↓
Git
     ↓
GitHub
     ↓
Jenkins
     ↓
Build
     ↓
Test
     ↓
Docker Image
     ↓
Container Deployment
     ↓
Nginx
     ↓
Live Dashboard
```

---

## 📊 Dashboard Features

### Jenkins Build Information

The dashboard retrieves live Jenkins information through the Flask backend.

Displayed information includes:

* Build number
* Build status
* Build duration
* Jenkins job information

Example:

```json
{
  "build_number": 27,
  "duration": 14.29,
  "job": "DevOps-CICD-Pipeline",
  "status": "SUCCESS"
}
```

### GitHub Repository Information

The dashboard retrieves repository information including:

* Repository name
* Owner
* Branch
* Stars
* Forks
* Last push time

### Live System Information

The backend provides live information such as:

* CPU usage
* Memory usage
* Disk usage
* Hostname
* Operating system
* Python version
* Current server time

---

## 🐳 Docker Containers

The project uses separate containers for the frontend and backend.

### Frontend

```text
Container: devops-web
Image: devops-cicd-app:latest
Port: 8081 → 80
```

### Backend

```text
Container: flask-api
Image: devops-backend
Port: 5000 → 5000
```

### Jenkins

```text
Container: jenkins
Port: 8080 → 8080
Port: 50000 → 50000
```

---

## 🔌 Backend API Endpoints

### Jenkins

```text
GET /api/jenkins
```

Returns the latest Jenkins build information.

### GitHub

```text
GET /api/github
```

Returns GitHub repository information.

### Live System

```text
GET /api/live
```

Returns live system information.

Example:

```json
{
  "cpu_usage": "56.1%",
  "current_time": "07-08-2026 09:06:31 AM",
  "disk_usage": "0.7%",
  "hostname": "0e3927e3007a",
  "memory_usage": "60.5%",
  "operating_system": "Linux 6.18.33.2-microsoft-standard-WSL2",
  "python_version": "3.12.13"
}
```

---

## 📁 Project Structure

```text
devops-cicd-pipeline/
│
├── app/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
│
├── backend/
│   ├── app.py
│   ├── Dockerfile
│   └── requirements.txt
│
├── Dockerfile
├── nginx.conf
├── Jenkinsfile
└── README.md
```

---

## 🚀 Running the Project

### Build the frontend Docker image

```bash
docker build -t devops-cicd-app:latest .
```

### Run the frontend

```bash
docker run -d \
  --name devops-web \
  --add-host=host.docker.internal:host-gateway \
  -p 8081:80 \
  devops-cicd-app:latest
```

### Check containers

```bash
docker ps
```

---

## 🧪 Testing

Test the frontend:

```bash
curl http://localhost:8081
```

Test Jenkins API:

```bash
curl http://localhost:8081/api/jenkins
```

Test GitHub API:

```bash
curl http://localhost:8081/api/github
```

Test live system API:

```bash
curl http://localhost:8081/api/live
```

---

## 🌐 Public Demo

The project can be temporarily exposed to the internet using Cloudflare Quick Tunnel.

```bash
cloudflared tunnel --url http://localhost:8081
```

This generates a temporary public URL.

> Cloudflare Quick Tunnels are intended for testing and demonstration. For permanent production access, a named Cloudflare Tunnel or cloud-hosted deployment should be used.

---

## 🎯 What This Project Demonstrates

This project demonstrates practical understanding of:

* Source code management
* Git branching and commits
* GitHub repositories
* CI/CD concepts
* Jenkins automation
* Docker image creation
* Docker container management
* Container networking
* Nginx configuration
* Flask REST APIs
* API integration
* Linux command-line operations
* System monitoring
* DevOps deployment workflow

---

## 🔮 Future Improvements

Planned improvements include:

* Kubernetes deployment
* AWS cloud deployment
* Terraform Infrastructure as Code
* Azure deployment
* Docker image registry
* Production CI/CD pipeline
* Monitoring with Prometheus and Grafana
* Kubernetes monitoring
* Cloud-based deployment
* HTTPS with a permanent domain

---

## 👨‍💻 Developer

**Mahesh Mate**

Computer Engineering Graduate

Interested in:

* DevOps
* Cloud Computing
* Automation
* CI/CD
* Docker
* Kubernetes
* Infrastructure as Code

---

## ⭐ Project Status

**Completed — DevOps CI/CD Dashboard**

The project has been tested locally and through a public Cloudflare Tunnel.

