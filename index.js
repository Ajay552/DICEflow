
const mySiema = new Siema({
    selector: ".feature-carousel",
    loop: true
});

const prev = document.querySelector('.left-arrow');
const next = document.querySelector('.right-arrow');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());