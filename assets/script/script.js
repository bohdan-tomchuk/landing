
document.addEventListener('DOMContentLoaded', function () {
    let nextSlide = document.getElementById('left-slide');
    let prevSlide = document.getElementById('right-slide');

    let slide = document.querySelectorAll('#slide')

    let currentSlide = document.querySelector('.current_slide');

    nextSlide.style.opacity = 0.5;

    prevSlide.addEventListener('click', () => {
        for (i = 0; i < slide.length; i++) {
            slide[i].style.transition = "all 0.5s linear 0s";;
            slide[i].style.transform = `translateX(-${slide[i].offsetWidth}px)`;
            currentSlide.innerHTML = '02';
        }
        nextSlide.style.opacity = 1;
        prevSlide.style.opacity = 0.5;

    })

    nextSlide.addEventListener('click', () => {
        for (i = 0; i < slide.length; i++) {
            slide[i].style.transition = "all 0.5s linear 0s";;
            slide[i].style.transform = 'translateX(0px)';
            currentSlide.innerHTML = '01';
        }
        prevSlide.style.opacity = 1;
        nextSlide.style.opacity = 0.5;

    })
})