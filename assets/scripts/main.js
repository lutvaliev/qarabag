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
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1.4,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

// Videos slider
var swiper = new Swiper(".swiperVideos", {
    slidesPerView: 3,
    navigation: {
        nextEl: ".nextVideo",
        prevEl: ".prevVideo",
    },
    breakpoints: {
        300: {
            slidesPerView: 1.4,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

// Links slider
var swiper = new Swiper(".swiperInfographics", {
    slidesPerView: 4,
    navigation: {
        nextEl: ".nextInfo",
        prevEl: ".prevInfo",
    },
    breakpoints: {
        300: {
            slidesPerView: 1.4,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 4,
        },
    },
});

// Events slider
var swiper = new Swiper(".swiperEvents", {
    slidesPerView: 3,
    navigation: {
        nextEl: ".nextEvent",
        prevEl: ".prevEvent",
    },
    breakpoints: {
        300: {
            slidesPerView: 1.8,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

// Ads slider
var swiper = new Swiper(".swiperAds", {
    slidesPerView: 3,
    navigation: {
        nextEl: ".nextAd",
        prevEl: ".prevAd",
    },
    breakpoints: {
        300: {
            slidesPerView: 1.4,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

// Ads page slider
var swiper = new Swiper(".swiperAdsPage", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

// Events page slider
var swiper = new Swiper(".swiperEventsPage", {
    slidesPerView: 3,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

// News page slider
var swiper = new Swiper(".swiperNewsPage", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
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

// Activity tabs 
$('.event_tab').click(function (e) {
    //Toggle tab link
    $(this).addClass('active_event-tab').siblings().removeClass('active_event-tab');

    //Toggle target tab
    $($(this).attr('href')).addClass('active_elem').siblings().removeClass('active_elem');
});

// Onclick map region
$('.map_region').click(function (e) {
    e.preventDefault()
    //Toggle tab link
    $(this).addClass('active_svg-tab').siblings().removeClass('active_svg-tab');

    //Toggle target tab
    $($(this).attr('href')).addClass('active_svg').siblings().removeClass('active_svg');
});

// Menu
if (window.innerWidth > 768) {
    $(".menu_list-item").hover(
        function () {
            $(this).closest(".menu_list-item").find(".menu_submenu").toggleClass("active_menu")
        }
    );
}
if (window.innerWidth < 768) {
    $(".menu_list-item").click(
        function (e) {
            console.log(e)
            e.preventDefault()
            $(this).closest(".menu_list-item").find(".menu_submenu").toggleClass("active_menu")
        }
    );
}

// Mobile menu
$(".mobile_menu-bar").click(function (e) {
    $(".menu_list").toggleClass("openMenu")
})

// $(".head_block").click(function (e) {
//     if (e.target.classList.contains("popup_block")) {
//         e.preventDefault()
//         $(".head_popup-section").toggleClass("d-none");
//         $("#head_img").attr("src", $(this).closest(".popup_block").find(".data_img").attr("src"));
//         $("#head_name").html($(this).closest(".popup_block").find(".data_name").text());
//         $("#head_role").html($(this).closest(".popup_block").find(".data_role").text());
//     }
// })

$("#closeButton").click(function (e) {
    $(".head_popup-section").addClass("d-none")
})

$(document).ready(function () {
    $('.video').magnificPopup({
        type: 'iframe',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByIframeClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        iframe: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});
