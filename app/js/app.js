console.log("DevOps Dashboard Started");

// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");
cl
    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML="☀️ Light Mode";

    }else{

        themeBtn.innerHTML="🌙 Dark Mode";

    }

};


// Live Clock

function updateClock(){

    const now=new Date();

    document.getElementById("clock").innerHTML=

    now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();


// Build Date

const today=new Date();

document.getElementById("buildDate").innerHTML=

today.toDateString();


// Smooth Scroll

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = this.getAttribute("href");

        // Ignore empty links like href="#"
        if (target === "#") {
            return;
        }

        e.preventDefault();

        const section = document.querySelector(target);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
