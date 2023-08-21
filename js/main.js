'esversion: 6';

//mobile menu animation

let mobileMenuOpenButton = document.querySelector(".icon-menu");
let mobileMenu = document.querySelector(".mobile_menu");
let mobileNav = document.querySelector("nav.mobile");
let animBlock = document.querySelector(".animBlock");
let animBlockWrapper = document.querySelector(".animBlockWrapper");
let closeMenuBtn = document.querySelector("svg.icon-cancel");

let mobileMenuLinks = document.querySelectorAll("nav.mobile a");


mobileMenuOpenButton.onclick = function () {
    mobileMenu.style.display = "flex";
    setTimeout(() => {
        mobileMenu.classList.add("active");
        document.querySelector("html").style.overflowY = "hidden";
        document.querySelector("html").style.touchAction = "none";
    }, 10);

    setTimeout(() => {
        animBlockWrapper.style.display = "block";
        animBlock.style.animation = "whiteBlock .7s cubic-bezier(.23,.45,.38,.84)";
        setTimeout(() => {
            animBlockWrapper.style.display = "none";
            animBlock.style.animation = "";
            mobileNav.classList.add("active");
            closeMenuBtn.classList.add("active");
        }, 700);
    }, 1100);
}

closeMenuBtn.onclick = function () {
    mobileMenu.classList.remove("active");
    mobileNav.classList.remove("active");
    closeMenuBtn.classList.remove("active");
    document.querySelector("html").style.overflowY = "scroll";
    document.querySelector("html").style.touchAction = "auto";
    setTimeout(() => {
        mobileMenu.style.display = "none";
    }, 1000);
}

mobileMenuLinks.forEach((item) => {
    item.onclick = function () {
        setTimeout(() => {
            mobileMenu.classList.remove("active");
            mobileMenu.style.position = "absolute";
            mobileNav.classList.remove("active");
            closeMenuBtn.classList.remove("active");
            document.querySelector("html").style.overflowY = "scroll";
            document.querySelector("html").style.touchAction = "auto";
            setTimeout(() => {
                mobileMenu.style.display = "none";
                mobileMenu.style.position = "";
            }, 1000);
        }, 100);
    }
});

