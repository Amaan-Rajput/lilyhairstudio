const Body = document.querySelector("Body");
const globalContactBtns = document.querySelectorAll('.global-contact-btn');
const globalAddressBtns = document.querySelectorAll('.global-address-btn');
const upperheader = document.querySelector(".upperheader");
const overlayer = document.querySelector(".overlayer");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNavbar = document.querySelector(".mobile-navbar");
const mobileNavbarCloseBtn = mobileNavbar.querySelector(".closebtn");


const globalAddresscontent = () => {
    upperheader.innerHTML = `
        <div class="closeing-area">
            <div class="closeing-btn"><i class="fa-solid fa-xmark"></i></div>
        </div>
        <div class="global-address">
            <ul>
                <li>
                    <a href="https://www.google.com/maps?q=Polo+Stores,2+Abberley+Square,1st+Floor,+Tallaght,+Dublin"
                        target="_blank" class="main-address"><i class="fa-solid fa-location-arrow"></i> Polo Stores,2
                        Abberley Square,1st Floor, Tallaght, Dublin</a>
                </li>
                <li>
                    <a href="https://www.google.com/maps?q=Polo+Stores,2+Abberley+Square,1st+Floor,+Tallaght,+Dublin"
                        target="_blank" class="address-floor">(1st Floor)</a>
                </li>
            </ul>
            <ul class="list-inline">
                <li>
                    <a href="https://www.google.com/maps?q=Polo+Stores,2+Abberley+Square,1st+Floor,+Tallaght,+Dublin"
                        target="_blank"><img
                            src="https://cdn-cms-s-8-4.f-static.net/files/images/google_map_white_small.png?v=y841244163"
                            width="40px" height="40px" alt=""></a>
                </li>
                <li>
                <a href="https://www.waze.com/live-map/directions?p=Polo+Stores%2C2+Abberley+Square%2C1st+Floor%2C+Tallaght%2C+Dublin&navigate=yes&to=ll.53.2881109%2C-6.3663278"
                target="_blank"><img
                src="https://cdn-cms-s-8-4.f-static.net/files/images/waze_white_small.png?v=y841244163"
                            width="40px" height="40px" alt=""></a>
                </li>
                <li>
                    <a href="https://moovit.com/?to=Polo%20Stores%2C2%20Abberley%20Square%2C1st%20Floor%2C%20Tallaght%2C%20Dublin&tll=53.2881109_-6.3663278&metroId=1"
                        target="_blank"><img
                            src="https://cdn-cms-s-8-4.f-static.net/files/images/moovit_white_small.png?v=y841244163"
                            width="40px" height="40px" alt=""></a>
                </li>
            </ul>
        </div> `;
    const closeingBtn = upperheader.querySelector(".closeing-btn");
    closeingBtn.addEventListener('click', () => {
        upperheaderRemove();
    })
}

const globalContactContent = () => {
    upperheader.innerHTML = `
    <div class="closeing-area">
        <div class="closeing-btn"><i class="fa-solid fa-xmark"></i></div>
    </div>
    <div class="global-contact">
        <div class="heading">
            <h4>Contact Us</h4>
            <span>Fill out the form or send a direct email to: <a
                    href="mailto:info@lilyhairstudio.ie">info@lilyhairstudio.ie</a></span>
        </div>
        <form action="">
            <ul>
                <li>
                    <label for="">Full Name</label>
                    <input type="text" placeholder="Full Name" required />
                </li>
                <li>
                    <label for="">Email address</label>
                    <input type="email" placeholder="Email address" required />
                </li>
                <li>
                    <label for="">Description</label>
                    <textarea  rows="4" placeholder="Description"></textarea>
                </li>
            </ul>
            <button type="submit">SEND</button>
        </form>
    </div> `;
    const closeingBtn = upperheader.querySelector(".closeing-btn");
    closeingBtn.addEventListener('click', () => {
        upperheaderRemove();
    })
}

const upperheaderRemove = () => {
    upperheader.innerHTML = '';
    upperheader.style.height = "0";
    Body.classList.remove("upperheaderactive");
}
globalAddressBtns.forEach(globalAddressBtn => {
    globalAddressBtn.addEventListener('click', () => {
        Body.classList.add("upperheaderactive");
        upperheader.style.height = "100%";
        globalAddresscontent();
    })
})
globalContactBtns.forEach(globalContactBtn => {
    globalContactBtn.addEventListener('click', () => {
        Body.classList.add("upperheaderactive");
        upperheader.style.height = "100%";
        globalContactContent();
    })
})


mobileMenuBtn.addEventListener("click", () => {
    Body.classList.add("overlayeractive");
    mobileNavbar.style.left = "0";
});
mobileNavbarCloseBtn.addEventListener("click", () => {
    inActiveMobileNavbar()
});
overlayer.addEventListener("click", () => {
    inActiveMobileNavbar()
});

const inActiveMobileNavbar = () => {
    Body.classList.remove("overlayeractive");
    mobileNavbar.style.left = "-80%";
}


// chat Button
const chatBtn = document.querySelector(".chat-btn");
const chatList = document.querySelector(".action-btn ul");

chatBtn.addEventListener("mouseenter", () => {
    chatBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    chatList.classList.add("visible");
});
chatBtn.addEventListener("mouseleave", () => {
    chatBtn.innerHTML = `<i class="fa-solid fa-comments"></i>`
    chatList.classList.remove("visible");
});
chatList.addEventListener("mouseenter", () => {
    chatBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    chatList.classList.add("visible");
});
chatList.addEventListener("mouseleave", () => {
    chatBtn.innerHTML = `<i class="fa-solid fa-comments"></i>`
    chatList.classList.remove("visible");
});
chatBtn.addEventListener("click", () => {
    let chatIcon = chatBtn.querySelector("i");
    chatIcon.classList.toggle("fa-xmark");
    chatIcon.classList.toggle("fa-comments");
    chatList.classList.toggle("visible");
});

export { Body };