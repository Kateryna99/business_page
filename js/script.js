const header = document.querySelector('.header'),
      burger = header.querySelector('.header__burger'),
      nav = header.querySelector('.nav');

burger.addEventListener('click', (event)=>{
    event.preventDefault()

    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--active');
});


const services = new Swiper('.swiper-services', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    mousewheel:true,
    freeMode: true,

});
const offers = new Swiper('.swiper-offers', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-offers__pagination',
        clickable: true,
        renderBullet: function (index, className){
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-offers__button-next',
        prevEl: '.swiper-offers__button-prev',
    },

});
const reviews = new Swiper('.swiper-reviews', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel:true,

    navigation: {
        nextEl: '.swiper-reviews__button-next',
        prevEl: '.swiper-reviews__button-prev',
    },

    breakpoints: {
        992:{
            slidesPerView: 3,
        },
        600:{
            slidesPerView:2,
        }
    }

});