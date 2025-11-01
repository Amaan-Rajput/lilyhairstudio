const stylebtn = document.querySelector(".style");
const workbtn = document.querySelector(".work");
const Arrowbtn = document.querySelectorAll(".gallery-image-area i");
const imageSliderOne = document.querySelector(".image-slider-one");
const imageSliderTwo = document.querySelector(".image-slider-two");
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

let isDragging = false, startX, startScrollLeft;

let activeFirstSlider = true, whichImgSlider;

stylebtn.addEventListener("click", () => {
  stylebtn.classList.add("active");
  activeFirstSlider = true
  workbtn.classList.remove("active");
  activeFirstSliderFunction();
  activeSlide();
})

workbtn.addEventListener("click", () => {
  workbtn.classList.add("active");
  activeFirstSlider = false
  stylebtn.classList.remove("active");
  activeFirstSliderFunction();
  activeSlide();
})

const activeFirstSliderFunction = () => {
  if (activeFirstSlider) {
    whichImgSlider = imageSliderOne
    imageSliderOne.classList.add("activeimages")
    imageSliderTwo.classList.remove("activeimages")
    imageSliderOne.classList.remove("inactiveimages")
    imageSliderTwo.classList.add("inactiveimages")

  } else {
    whichImgSlider = imageSliderTwo
    imageSliderTwo.classList.add("activeimages")
    imageSliderOne.classList.remove("activeimages")
    imageSliderTwo.classList.remove("inactiveimages")
    imageSliderOne.classList.add("inactiveimages")
  }
  whichImgSlider.style.display = "flex"
}
activeFirstSliderFunction()

const activeSlide = () => {

  const firstimagedwidth = whichImgSlider.querySelector("li").offsetWidth;
  const images = [...whichImgSlider.children];

  let imgpreview = Math.round(whichImgSlider.offsetWidth / firstimagedwidth)

  images.slice(-imgpreview).reverse().forEach(img => {
    whichImgSlider.insertAdjacentHTML("afterbegin", img.outerHTML)
  })
  images.slice(0, imgpreview).forEach(img => {
    whichImgSlider.insertAdjacentHTML("beforeend", img.outerHTML)
  })
  const dragStart = (e) => {
    isDragging = true;
    whichImgSlider.classList.add("dragging")
    startX = e.pageX;
    startScrollLeft = whichImgSlider.scrollLeft;
  }

  const infinitescroll = () => {
    if (whichImgSlider.scrollLeft === 0) {
      whichImgSlider.classList.add("none-effect")
      whichImgSlider.scrollLeft = whichImgSlider.scrollWidth - (2 * whichImgSlider.offsetWidth)
      whichImgSlider.classList.remove("none-effect")
    } else if (Math.ceil(whichImgSlider.scrollLeft) === whichImgSlider.scrollWidth - whichImgSlider.offsetWidth) {
      whichImgSlider.classList.add("none-effect")
      whichImgSlider.scrollLeft = whichImgSlider.offsetWidth
      whichImgSlider.classList.remove("none-effect")
    }
  }
  const dragging = (e) => {
    if (!isDragging) return;
    whichImgSlider.scrollLeft = startScrollLeft - (e.pageX - startX)
  }

  Arrowbtn.forEach(btn => {
    btn.addEventListener("click", () => {
      whichImgSlider.scrollLeft += btn.id === "left" ? -firstimagedwidth : firstimagedwidth;
    })
  });

  const dragStop = () => {
    isDragging = false;
    whichImgSlider.classList.remove("dragging")
  }

  whichImgSlider.addEventListener("mousedown", dragStart)
  whichImgSlider.addEventListener("mousemove", dragging)
  document.addEventListener("mouseup", dragStop)
  whichImgSlider.addEventListener("scroll", infinitescroll)
}

activeSlide();

export { activeSlide, activeFirstSliderFunction, };