import cards from './experience.js';
const burger = document.getElementById(`burger`);
const menu = document.getElementById(`header-menu`);
let isMenuOpen = false;

function showMenu(){
    menu.classList.add("header__menu__active");
    burger.classList.add("burger__active"); 
    document.body.style.overflowY = "hidden";
    isMenuOpen = true;
 }
 
 
function hideMenu(){
    menu.classList.remove("header__menu__active");
    burger.classList.remove("burger__active"); 
    document.body.style.overflowY = "";
    isMenuOpen = false;
}

function moveMenuWithBurger(event){
    event.stopPropagation();
     if(menu.classList.contains("header__menu__active")){
        menu.classList.add("header__menu__transition-slow");
        hideMenu(); 
        setTimeout(() => {
          menu.classList.remove("header__menu__transition-slow");
        },1100)
     } else {
         showMenu();
     }
}
 
function hideMenuWithBody(){
     if(!isMenuOpen){
         return; 
     }   
     menu.classList.add("header__menu__transition-slow");
     hideMenu(); 
     setTimeout(() => {
       menu.classList.remove("header__menu__transition-slow");
     },1100)
}
 
burger.addEventListener("click", moveMenuWithBurger); 
document.body.addEventListener("click", hideMenuWithBody);
 

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right"); 
const carusel = document.querySelector(".experience__inner"); 
const leftItems = document.querySelector(".experience__back");
const centreItems = document.querySelector(".experience__center");
const rightItems = document.querySelector(".experience__forward");

function createNewSlides(direction){
    let newCardsArr = [...cards].filter(item => {
        const card1 = centreItems.querySelector(".experience__card1");
        const card2 = centreItems.querySelector(".experience__card2");
        const card3 = centreItems.querySelector(".experience__card3");
        return item.id !== card1.id && item.id !== card2.id && item.id !== card3.id; 
      }).sort(() => Math.random() - 0.5);
   
    for(let i = 1; i < 4; i++){
        const card = direction.querySelector(`.experience__card${i}`);
        card.id = newCardsArr[i].id;
        const img = card.querySelector("img");
        img.src = newCardsArr[i].img;
        img.alt = newCardsArr[i].name;
        const a = card.querySelector("a");
        a.textContent = newCardsArr[i].name;
        a.href = newCardsArr[i].link;
    }
}
   
function moveLeft() { 
    carusel.classList.add("carusel-left");
    leftItems.classList.add("slide__animated");
    arrowLeft.removeEventListener("click", moveLeft);
    arrowRight.removeEventListener("click", moveRight);
}
   
function moveRight() {
    carusel.classList.add("carusel-right");
    rightItems.classList.add("slide__animated");
    arrowRight.removeEventListener("click", moveRight);
    arrowLeft.removeEventListener("click", moveLeft);
}
   
function animed(event){
    if(event.animationName === "slider-left" || event.animationName === "slider-left-small"){
        carusel.classList.remove("carusel-left"); 
        leftItems.classList.remove("slide__animated");
        rightItems.innerHTML = centreItems.innerHTML; 
        centreItems.innerHTML = leftItems.innerHTML; 
        createNewSlides(leftItems);
   
      } else{
        carusel.classList.remove("carusel-right"); 
        rightItems.classList.remove("slide__animated");
        leftItems.innerHTML = centreItems.innerHTML; 
        centreItems.innerHTML = rightItems.innerHTML; 
        createNewSlides(rightItems);
      }
   
    arrowLeft.addEventListener("click", moveLeft);
    arrowRight.addEventListener("click", moveRight);
}
   
arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);
carusel.addEventListener("animationend", animed); 

createNewSlides(rightItems);
createNewSlides(centreItems);
createNewSlides(leftItems);

