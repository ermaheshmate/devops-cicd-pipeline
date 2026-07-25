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

// Dark Mode

const btn = document.getElementById("themeBtn");

btn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        btn.innerHTML="☀️ Light Mode";

    }

    else{

        btn.innerHTML="🌙 Dark Mode";

    }

});
