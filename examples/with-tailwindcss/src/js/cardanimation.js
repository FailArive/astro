import './../css/style.scss'

const videos = document.querySelectorAll(".latestvideo");
const lcarden = document.querySelectorAll(".hidden_left");
const rcarden = document.querySelectorAll(".hidden_right");

window.addEventListener("scroll", ()=>{
    const innerHeightOfWindow = window.innerHeight;

    videos.forEach(latestvideo =>{
        const video = latestvideo.getBoundingClientRect().top;

        if(video < innerHeightOfWindow){
            latestvideo.classList.add("show");
        }
    });
    lcarden.forEach(hidden_left =>{
        const lcards = hidden_left.getBoundingClientRect().top;

        if(lcards < innerHeightOfWindow){
            hidden_left.classList.add("show");
        }
    });
    rcarden.forEach(hidden_right =>{
        const rcards = hidden_right.getBoundingClientRect().top;

        if(rcards < innerHeightOfWindow){
            hidden_right.classList.add("show");
        }
    });
});

