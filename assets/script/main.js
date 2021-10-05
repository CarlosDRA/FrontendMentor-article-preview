const mediaButton = document.querySelector(".profile__media");
const mediaSection = document.querySelector(".media__card");
const mediaSocial = document.querySelector(".media__share");
const arrow = document.querySelector("#arrow")

document.addEventListener("click", (e)=>{
    if(mediaSection.classList[1] != "hidden" && e.target != mediaSocial 
        && e.target != document.querySelector(".media__text")){
        mediaSection.classList.add("hidden");
        mediaButton.classList.remove("dark__bg");
        arrow.classList.remove("clear__arrow");
    }
})

mediaButton.addEventListener("click", (e) =>{
    e.stopImmediatePropagation();
    e.stopPropagation();
    mediaSection.classList.toggle("hidden");
    mediaButton.classList.toggle("dark__bg");
    arrow.classList.toggle("clear__arrow");
})