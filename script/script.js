const iconControls = document.querySelectorAll('.iconControl .title');
iconControls.forEach((iconControl) => {
    iconControl.addEventListener('click', function() {
        let i = iconControl;
        if (iconControl.classList.contains('active')) {
            iconControl.classList.remove('active');
        } else {
            iconControls.forEach((iconControl) => {
                if (i !== iconControl) {
                    iconControl.classList.remove('active');
                }
            })
            iconControl.classList.add('active');
        }
    });
});

const mobileNavs = document.querySelectorAll('.mobileNav .title');
mobileNavs.forEach((mobileNav) => {
    mobileNav.addEventListener('click', function() {
        let m = mobileNav;
        if (mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
        } else {
            mobileNavs.forEach((mobileNav) => {
                if (m !== mobileNav) {
                    mobileNav.classList.remove('active');
                }
            })
            mobileNav.classList.add('active');
        }
    });
});

$(document).on("click", ".burger, .navigation-backdrop", function() {
    let $nav = $("#navigation-demo");
    let $hasClass = $nav.hasClass("open");
    let $mainNav = $('.mainNavbar');

    if (!$hasClass) {
        $nav.addClass("open");
        $mainNav.addClass("open");
        $("body").append("<div class='navigation-backdrop'></div>");
    } else {
        $nav.removeClass("open");
        $mainNav.removeClass("open");
        $(".navigation-backdrop").remove();
    }
});

$(window).bind('scroll', function() {
    var navHeight = $('.header').height() - 10 - 56.8;
    if ($(window).scrollTop() > navHeight) {
        $('.navList').addClass('fixed');
    } else {
        $('.navList').removeClass('fixed');
    }
});

const items = document.querySelectorAll('.menuItem.has-collapsible');
items.forEach((item) => {
    item.addEventListener('click', function() {
        let i = item;
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            items.forEach((item) => {
                if (i !== item) {
                    item.classList.remove('active');
                }
            })
            item.classList.add('active');
        }
    });
});