const swiperHero = new Swiper('.hero__slider', {
    effect: 'fade',
    navigation: {
        nextEl: ".hero__next",
        prevEl: ".hero__prev",
    },
    pagination: {
        el: ".hero .swiper-pagination",
        clickable: true
    },
    autoplay: {
        speed: 1000,
    }
});