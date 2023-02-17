// Homepage top slider 
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
});

// News slider
var swiper = new Swiper(".swiperNews", {
    slidesPerView: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Videos slider
var swiper = new Swiper(".swiperVideos", {
    slidesPerView: 3,
    navigation: {
        nextEl: ".nextVideo",
        prevEl: ".prevVideo",
    },
});

// FAQ JS
$(".faq_item").on("click", function () {
    $(this)
        .closest(".faq_item")
        .find(".faq_item-text")
        .toggleClass("d-none");
});
$(".faq_item").on("click", function () {
    $(this).closest(".faq_item").find("img").toggleClass("rotateIcon");
});