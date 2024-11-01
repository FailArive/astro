import './../css/style.scss'

const videos = document.querySelectorAll(".latestvideo");


window.addEventListener("scroll", ()=>{
    const innerHeightOfWindow = window.innerHeight;

    videos.forEach(latestvideo =>{
        const video = latestvideo.getBoundingClientRect().top;

        if(video < innerHeightOfWindow){
            latestvideo.classList.add("show");
        }
    });
    

});