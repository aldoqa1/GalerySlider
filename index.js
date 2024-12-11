const images = document.querySelectorAll(".container .pictures img");
const imageContainer = document.querySelector(".container .pictures");
const prev = document.getElementById("left");
const next = document.getElementById("right");

let currentImage = 0;

next.addEventListener("click", ()=>{
    if(currentImage < images.length-1){
        currentImage++;
        imageContainer.style.transform = `translateX(-${500*currentImage}px)`;
    }else{
        imageContainer.style.transform = `translateX(0px)`;
        currentImage=0;
    }
});

prev.addEventListener("click", ()=>{
    if(currentImage == 0){
        currentImage = images.length-1;
        imageContainer.style.transform = `translateX(-${500*currentImage}px)`;
    }else{
        currentImage--;
        imageContainer.style.transform = `translateX(-${500*currentImage}px)`;
    }
});