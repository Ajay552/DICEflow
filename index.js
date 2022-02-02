
document.addEventListener("DOMContentLoaded", () => {
    'use strict';
    siemaLoader();
})

const siemaLoader = () => {

    const mySiema = new Siema({
        selector: ".feature-carousel",
        loop: true
    });
 
    // const prev = document.querySelector('.left-arrow');
    // const next = document.querySelector('.right-arrow');
    const arrows = document.querySelector(".arrow-buttons").childNodes;
    
    arrows[1].addEventListener('click', () => mySiema.prev());
    arrows[3].addEventListener('click', () => mySiema.next());
    
}

