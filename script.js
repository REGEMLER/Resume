const burger = document.getElementById(`burger`);
const menu = document.getElementById(`header-menu`);
burger.addEventListener(`click`, () =>{
    if( menu.style.opacity === `1` && menu.style.height === `300px`){
        menu.style.height = `0`;
        menu.style.visibility = `hidden`;
        menu.style.opacity = `0`;

    } else{
        menu.style.height = `300px`;
        menu.style.visibility = `visible`;
        menu.style.opacity = `1`;
        }
    })