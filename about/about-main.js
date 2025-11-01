
const dataShowElement = document.querySelectorAll("[data-animation='showElement']");
const dataShowImg = document.querySelectorAll("[data-animation='showImg']");
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
dataShowImg.forEach(a =>
    observerImg.observe(a)
)