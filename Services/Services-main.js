const dataShowElement = document.querySelectorAll("[data-animation='showElement']");
const dataShowHeading = document.querySelectorAll("[data-animation='showHeading']");
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
dataShowSection.forEach(a =>
    observer.observe(a)
)