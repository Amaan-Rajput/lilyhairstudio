
// map 
const mapContant = document.querySelector(".map-contant");
setTimeout(() => {
  mapContant.classList.remove("loading-map");
}, 2000);


const dataShowElement = document.querySelectorAll("[data-animation='showElement']");
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

dataShowElement.forEach(a =>
  observer.observe(a)
)

