const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const testimonal1 = document.getElementById('testimonal-1')
const testimonal2 = document.getElementById('testimonal-2')
const testimonal3 = document.getElementById('testimonal-3')
const testimonal4 = document.getElementById('testimonal-4')
const carousel = document.getElementById('carousel')
const circle1 = document.getElementById('circle-1')
const circle2 = document.getElementById('circle-2')
const circle3 = document.getElementById('circle-3')
const circle4 = document.getElementById('circle-4')

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

let times = 2

let removeClasses = (circle, testimonal) => {
    circle1.classList.remove('carousel-bg')
    circle2.classList.remove('carousel-bg')
    circle3.classList.remove('carousel-bg')
    circle4.classList.remove('carousel-bg')

    circle.classList.add('carousel-bg')

    testimonal1.classList.add('hidden')
    testimonal2.classList.add('hidden')
    testimonal3.classList.add('hidden')
    testimonal4.classList.add('hidden')

    testimonal.classList.remove('hidden')
}
let updateTestimonal = () => {
    switch (times) {
        case 1:
            removeClasses(circle1, testimonal1)
            times ++;
            break;
        case 2:
            removeClasses(circle2, testimonal2)
            times ++;
            break;
        case 3:
            removeClasses(circle3, testimonal3)
            times ++;
            break;
        case 4:
            removeClasses(circle4, testimonal4)
            times ++;
            break;
        default:
            times = 1
            updateTestimonal()
    }
}

setInterval(updateTestimonal, 2000)