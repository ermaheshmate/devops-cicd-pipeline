console.log("DevOps Dashboard Started");

// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

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

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});
