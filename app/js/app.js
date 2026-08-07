console.log("DevOps Dashboard Started");

// Live Time

function updateTime(){

    const now = new Date();

    // Live System section
    document.getElementById("time").innerHTML =
        now.toLocaleTimeString();

    document.getElementById("date").innerHTML =
        now.toDateString();

    // Build Information section
    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();

    document.getElementById("buildDate").innerHTML =
        now.toLocaleDateString();

}
setInterval(updateTime,1000);

updateTime();


// Browser

document.getElementById("browser").innerHTML =
navigator.userAgent;


// Operating System

document.getElementById("os").innerHTML =
navigator.platform;


// Screen Resolution

document.getElementById("screen").innerHTML =
screen.width + " x " + screen.height;


// Online Status

function updateStatus(){

    document.getElementById("status").innerHTML =
    navigator.onLine ? "🟢 Online" : "🔴 Offline";

}

updateStatus();

window.addEventListener("online",updateStatus);

window.addEventListener("offline",updateStatus);


// ================= BACKEND API =================

async function loadBackendData() {

    try {

        const response = await fetch("http://localhost:5000/api/system");

        const data = await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}

loadBackendData();


async function loadLiveData() {

    try {

        const response = await fetch("http://localhost:5000/api/live");

        const data = await response.json();

        document.getElementById("status").innerHTML = "🟢 Backend Connected";

        document.getElementById("time").innerHTML =
            data.current_time;

        document.getElementById("os").innerHTML =
            data.operating_system;

    }

    catch (error) {

        document.getElementById("status").innerHTML =
            "🔴 Backend Offline";

        console.log(error);

    }

}

loadLiveData();

setInterval(loadLiveData,5000);


async function loadJenkinsData() {

    try {

        const response = await fetch("http://localhost:5000/api/jenkins");

        const data = await response.json();

        document.getElementById("buildNumber").innerHTML =
            "#" + data.build_number;

        document.getElementById("jenkinsBuild").innerHTML =
           "#" + data.build_number;

        document.getElementById("jenkinsStatus").innerHTML =
            data.status;

        document.getElementById("jenkinsDuration").innerHTML =
            data.duration + " sec";

    }

    catch(error){

        console.log(error);

    }

}

loadJenkinsData();

setInterval(loadJenkinsData,5000);

// ================= GITHUB =================

async function loadGithubData() {

    try {

        const response = await fetch("http://localhost:5000/api/github");

        const data = await response.json();

        document.getElementById("githubName").innerHTML =
            data.name;

        document.getElementById("githubOwner").innerHTML =
            data.owner;

        document.getElementById("githubBranch").innerHTML =
            data.branch;

        document.getElementById("githubStars").innerHTML =
            data.stars;

        document.getElementById("githubForks").innerHTML =
            data.forks;

        document.getElementById("githubLastPush").innerHTML =
            new Date(data.last_push).toLocaleString();

    }

    catch(error) {

        console.log("GitHub API Error:", error);

    }

}

loadGithubData();

setInterval(loadGithubData, 30000);

// ================= THEME =================

function changeThemeMode() {

    document.body.classList.toggle("dark");

}
