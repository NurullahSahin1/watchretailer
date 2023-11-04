const panels = document.querySelectorAll(".pan");
panels.forEach(pan => {
    pan.addEventListener("click", () => {
        removeActive();
        pan.classList.add("active");
    });
})

function removeActive(){
    panels.forEach(pan => {
        pan.classList.remove("active");
    });
}
