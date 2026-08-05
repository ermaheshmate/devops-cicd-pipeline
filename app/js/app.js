console.log("DevOps Dashboard Started");

// Live Time

function updateTime(){

    const now = new Date();

    document.getElementById("time").innerHTML =
        now.toLocaleTimeString();

    document.getElementById("date").innerHTML =
        now.toDateString();

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
