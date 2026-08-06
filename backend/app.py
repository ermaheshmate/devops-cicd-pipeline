from flask import Flask, jsonify
from flask_cors import CORS

import requests
import platform
import socket
import psutil
from datetime import datetime

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "<h1>🚀 DevOps Backend Running Successfully</h1>"

@app.route("/api/system")
def system():
    return jsonify({
        "status": "Running",
        "developer": "Mahesh Mate",
        "project": "DevOps CI/CD Pipeline Dashboard",
        "backend": "Flask",
        "version": "1.0"
    })

@app.route("/api/live")
def live():

    return jsonify({

        "hostname": socket.gethostname(),

        "operating_system": platform.system() + " " + platform.release(),

        "python_version": platform.python_version(),

        "cpu_usage": str(psutil.cpu_percent(interval=1)) + "%",

        "memory_usage": str(psutil.virtual_memory().percent) + "%",

        "disk_usage": str(psutil.disk_usage('/').percent) + "%",

        "current_time": datetime.now().strftime("%d-%m-%Y %I:%M:%S %p")

    })

@app.route("/api/jenkins")
def jenkins():

    url = "http://host.docker.internal:8080/job/DevOps-CICD-Pipeline/lastBuild/api/json"

    response = requests.get(url)

    build = response.json()

    return jsonify({
        "build_number": build["number"],
        "status": build["result"],
        "duration": round(build["duration"] / 1000, 2),
        "job": "DevOps-CICD-Pipeline"
    })

@app.route("/api/github")
def github():

    url = "https://api.github.com/repos/ermaheshmate/devops-cicd-pipeline"

    response = requests.get(url)

    repo = response.json()

    return jsonify({

        "name": repo["name"],

        "owner": repo["owner"]["login"],

        "branch": repo["default_branch"],

        "stars": repo["stargazers_count"],

        "forks": repo["forks_count"],

        "last_push": repo["pushed_at"]

    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
