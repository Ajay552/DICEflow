
document.addEventListener("DOMContentLoaded", () => {
    'use strict';
    siemaLoader();
})



const siemaLoader = () => {

    let perPage = 1;
    if(screen.width >= 1023) {
        perPage = 3;
    }

    // console.log(perPage);

    const mySiema = new Siema({
        selector: ".feature-carousel",
        loop: true,
        perPage: perPage,
    });
 
    const arrows = document.querySelector(".arrow-buttons").childNodes;
    
    arrows[1].addEventListener('click', () => mySiema.prev());
    arrows[3].addEventListener('click', () => mySiema.next());
    
}

