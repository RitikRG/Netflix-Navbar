const menuToggle = document.getElementById("hamMenu");
const blackBg = document.getElementById("blackBg");
const redBg = document.getElementById("redBg");
const whiteBg = document.getElementById("whiteBg");
const closeIc = document.getElementById("closeIc");
const mainLogo = document.getElementById("mainLogo");


const openingMenu =()=>{
    blackBg.classList.add("openMenu");
    blackBg.classList.remove("closedMenu");
    blackBg.classList.remove("closingMenu");
    mainLogo.classList.remove("mainLogoInit");
    mainLogo.classList.remove("slideBackLogo");
    mainLogo.classList.add("slideLogo");
    redBg.classList.add("openMenu");
    redBg.classList.remove("closedMenu");
    redBg.classList.remove("closingMenu");
    whiteBg.classList.add("openMenu");
    whiteBg.classList.remove("closedMenu");
    whiteBg.classList.remove("closingMenu");
}

const closingMenu=()=>{
    blackBg.classList.add("closingMenu");
    blackBg.classList.remove("openMenu");
    redBg.classList.add("closingMenu");
    redBg.classList.remove("openMenu");
    whiteBg.classList.add("closingMenu");
    whiteBg.classList.remove("openMenu");
    mainLogo.classList.remove("slideLogo");
    mainLogo.classList.add("slideBackLogo");
}

menuToggle.addEventListener("click", openingMenu);
closeIc.addEventListener("click", closingMenu);