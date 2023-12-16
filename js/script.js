let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    let elem = document.querySelector('header');
    let elem2 = document.querySelector('.nav__link');
    console.log(scroll_pos)
    if (scroll_pos >= 100 && scroll_pos <= 1650) {
        elem.style.background = 'rgba(255, 255, 255, 0.0)';
        elem.style.transition = '1s';
    } else {
        elem.style.background = 'rgba(255, 255, 255, 0.4)'
    }
}

window.addEventListener("scroll", function (e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
        ticking = true;
    }
});
