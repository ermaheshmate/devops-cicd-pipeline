# 🚀 DevOps CI/CD Pipeline Project

A complete DevOps CI/CD Pipeline project demonstrating continuous integration and continuous deployment using Git, GitHub, Jenkins, Docker, Nginx and Linux.

---

# 📌 Project Overview

This project automates the deployment of a web application.

Whenever code is pushed to GitHub:

1. Jenkins detects the latest changes.
2. The pipeline checks out the source code.
3. Docker builds a new image.
4. The old container is removed.
5. A new container is deployed automatically.
6. Nginx serves the updated application.

This demonstrates a complete beginner-friendly DevOps workflow.

---

# 🏗️ Architecture

```
Developer
     │
     ▼
 Git Repository
     │
     ▼
   GitHub
     │
     ▼
  Jenkins Pipeline
     │
     ▼
 Docker Build
     │
     ▼
 Docker Container
     │
     ▼
    Nginx
     │
     ▼
 Application
```

---

# 🛠 Technologies Used

- Linux (Ubuntu WSL)
- Git
- GitHub
- Jenkins
- Docker
- Nginx
- HTML
- CSS
- JavaScript

---

# 📂 Project Structure

```
devops-cicd-pipeline
│
├── app
│   ├── index.html
│   ├── css
│   │      style.css
│   ├── js
│   │      app.js
│   └── images
│
├── Dockerfile
├── Jenkinsfile
├── build.sh
├── deploy.sh
├── README.md
└── screenshots
```

---

# ⚙️ CI/CD Pipeline

The Jenkins pipeline performs the following stages:

- Checkout Source Code
- Show Workspace
- Build Docker Image
- Remove Old Container
- Deploy New Container
- Verify Deployment

---

# 🌐 Application Features

- Professional DevOps Dashboard
- Responsive Design
- Live Clock
- Build Information
- Dark Mode
- Animated CI/CD Pipeline
- Project Information Section
- DevOps Environment Dashboard
- Deployment Status
- Docker + Nginx Deployment

---

# 🐳 Docker

Build Image

```bash
docker build -t devops-cicd-app .
```

Run Container

```bash
docker run -d \
--name devops-web \
-p 8081:80 \
devops-cicd-app
```

---

# 🚀 Jenkins Pipeline

The Jenkins pipeline automatically:

- Pulls latest source code
- Builds Docker image
- Removes old container
- Deploys latest container
- Verifies deployment

No manual deployment is required.

---

# 📷 Project Screenshots

Add screenshots here:

```
screenshots/

dashboard.png

jenkins-success.png

docker-container.png

pipeline.png
```

---

# 👨‍💻 Developer

**Mahesh Mate**

GitHub

https://github.com/ermaheshmate

Project Repository

https://github.com/ermaheshmate/devops-cicd-pipeline

---

# 📈 Future Improvements

- Docker Compose
- Docker Hub Integration
- Kubernetes Deployment
- AWS EC2 Deployment
- Prometheus Monitoring
- Grafana Dashboard
- GitHub Actions CI/CD

---

# ⭐ Resume Highlights

✔ Complete CI/CD Pipeline

✔ Jenkins Automation

✔ Docker Containerization

✔ Nginx Deployment

✔ Git & GitHub Integration

✔ Linux Environment

✔ Responsive DevOps Dashboard

✔ Automated Deployment Pipeline
