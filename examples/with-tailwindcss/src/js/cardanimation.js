import './../css/style.scss'

const videos = document.querySelectorAll(".latestvideo");
const cards = document.querySelectorAll(".cards");

window.addEventListener("scroll", ()=>{
    const innerHeightOfWindow = window.innerHeight;

    videos.forEach(latestvideo =>{
        const video = latestvideo.getBoundingClientRect().top;

        if(video < innerHeightOfWindow){
            latestvideo.classList.add("show");
        }
    });
    cards.forEach(card =>{
        const cardtop = card.getBoundingClientRect().top;

        if(cardtop < innerHeightOfWindow){
            card.classList.add("show");
        }
    });

});