const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle("open");
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}
panels.forEach(item => item.addEventListener("click", toggleOpen));

// listen for the transition end event
panels.forEach(item => item.addEventListener("transitionend", toggleActive));
