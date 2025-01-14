const swiperNews = new Swiper('.news__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoheight: true,
    navigation: {
        nextEl: '.news .next',
        prevEl: '.news .prev',
    },
    pagination: {
        el: '.news .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        760: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1250: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});
$('.header__search-input').on('keyup', () => {
    if ($('.header__search-input').val() > 0) {
        $('.header__search').addClass('filled')
    } else {
        $('.header__search').removeClass('filled')
    }
})
$('.header__search-input').focus(() => {
    $('.header__search').addClass('active')
})
$('.header__search-input').focusout(() => {
    $('.header__search').removeClass('active')
})


$('.header__search-remove').on('click', () => {
    $('.header__search-input').val('')
})

$('.header__burger').on('click', () => {
    $('.mob').toggleClass('active')
    $('.header__burger').toggleClass('active')

    if ($('.header__search-mob').hasClass('active') || $('.mob').hasClass('active') || $('.header__langs').hasClass('active')) {
        $('body').addClass('scroll')
        $('.header__search-mob').removeClass('active')
        $('.header__langs').removeClass('active')
    } else {
        $('body').removeClass('scroll')
    }

    if ($('.mob').hasClass('active')) {
        $('.mob__cont').slideDown()
    } else {
        $('.mob__cont').slideUp()
    }
})


$('.mob-bg').on('click', () => {
    $('.mob').removeClass('active')
    $('body').removeClass('scroll')
    $('.mob__cont').slideUp()
})

$('.header__mob-btn').on('click', () => {
    $('.header__search-mob').toggleClass('active')

    if ($('.mob').hasClass('active') || $('.header__search-mob').hasClass('active') || $('.header__langs').hasClass('active')) {
        $('body').addClass('scroll')
        $('.mob__cont').slideUp()
        $('.mob').removeClass('active')
        $('.header__langs').removeClass('active')
    } else {
        $('body').removeClass('scroll')
    }
})

$('.header__search-mob-bg').on('click', () => {
    $('.header__search-mob').removeClass('active')
    $('body').removeClass('scroll')
})


$('.header__langs-top').on('click', () => {
    if ($(window).width() < 1000) {
        $('.header__langs').toggleClass('active')
        if ($('.mob').hasClass('active') || $('.header__search-mob').hasClass('active') || $('.header__langs').hasClass('active')) {
            $('body').addClass('scroll')
            $('.mob__cont').slideUp()
            $('.mob').removeClass('active')
            $('.header__search-mob').removeClass('active')
        } else {
            $('body').removeClass('scroll')
        }
    }

})


$('.header__langs-bg').on('click', () => {
    $('.header__langs').removeClass('active')
    $('body').removeClass('scroll')
})