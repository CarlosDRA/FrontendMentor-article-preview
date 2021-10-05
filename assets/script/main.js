const mediaButton = document.querySelector(".profile__media");
const mediaSection = document.querySelector(".media__card");
const mediaSocial = document.querySelector(".media__share");

document.addEventListener("click", (e)=>{
    if(mediaSection.classList[1] != "hidden" && e.target != mediaSocial 
        && e.target != document.querySelector(".media__text")){
        mediaSection.classList.add("hidden");
        mediaButton.classList.remove("dark__bg");
    }
})

mediaButton.addEventListener("click", (e) =>{
    e.stopImmediatePropagation();
    e.stopPropagation();
    mediaSection.classList.toggle("hidden");
    mediaButton.classList.toggle("dark__bg");
})