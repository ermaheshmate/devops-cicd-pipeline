console.log("DevOps Dashboard Started");

// Live Clock

function updateClock() {

    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();

    document.getElementById("buildDate").innerHTML =
        now.toLocaleDateString();

}

setInterval(updateClock,1000);

updateClock();
