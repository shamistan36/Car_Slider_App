let carouselElement = document.getElementById("carousel");
let rightIconElement = document.querySelector(".right-icon");
let leftIconElement = document.querySelector(".left-icon");
let activeElement = document.querySelector(".active");






rightIconElement.addEventListener("click", function () {
    let nextElement = activeElement.nextElementSibling;
    if (nextElement != null) {
        activeElement.classList.remove("active");
        nextElement.classList.add("active");
        activeElement = nextElement;
    }
    else {
        activeElement.classList.remove("active")
        activeElement = document.querySelector("#carousel img:first-child");
        activeElement.classList.add("active");
    }
})

leftIconElement.addEventListener("click", function () {
    let previousElement = activeElement.previousElementSibling;
    if (previousElement != null) {
        activeElement.classList.remove("active");
        previousElement.classList.add("active");
        activeElement = previousElement;
    }
    else {
        activeElement.classList.remove("active")
        activeElement = document.querySelector("#carousel img:last-child");
        activeElement.classList.add("active");
    }
})