import { activeFirstSliderFunction, activeSlide } from "./gallery/gallery-main.js";

const stylebtn = document.querySelector(".style");
const workbtn = document.querySelector(".work");

let activeFirstSlider = true;

stylebtn.addEventListener("click", () => {
    stylebtn.classList.add("active");
    activeFirstSlider = true;
    workbtn.classList.remove("active");
    activeFirstSliderFunction();
    activeSlide();
})
workbtn.addEventListener("click", () => {
    workbtn.classList.add("active");
    activeFirstSlider = false;
    stylebtn.classList.remove("active");
    activeFirstSliderFunction();
    activeSlide();
})

activeFirstSliderFunction()
activeSlide();


// map 
const mapContant = document.querySelector(".map-contant");
setTimeout(() => {
    mapContant.classList.remove("loading-map");
}, 2000);

const dataShowElement = document.querySelectorAll("[data-animation='showElement']");
const dataShowHeading = document.querySelectorAll("[data-animation='showHeading']");
const dataShowImg = document.querySelectorAll("[data-animation='showImg']");
const dataShowSection = document.querySelectorAll("[data-animation='section']");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animated");
        } else {
            entry.target.classList.remove("animated");
        }
    })
}, {
    threshold: 0.1,
    rootMargin: "60px 0px 20px 0px",
})
const observerImg = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animated");
        } else {
            entry.target.classList.remove("animated");
        }
    })
}, {
    threshold: 0.1,
    rootMargin: "150px 0px 0px 0px"
})

dataShowElement.forEach(a =>
    observer.observe(a)
)
dataShowHeading.forEach(a =>
    observer.observe(a)
)
dataShowImg.forEach(a =>
    observerImg.observe(a)
)
dataShowSection.forEach(a =>
    observer.observe(a)
)
