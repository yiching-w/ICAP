const search = document.querySelector('.search');
search.addEventListener('click', () => {
    search.classList.toggle('active');
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

const items = document.querySelectorAll('.menItem');

$('.menItem').click(function() {
    items.forEach((item) => {
        item.classList.remove('active');
    });
    $(this).toggleClass('active');
});

/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function() {
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
        //if ($this.children('option').eq(i).is(':selected')){
        //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
        //}
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function() {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});