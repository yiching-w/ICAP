$('#navbar').load('navbar.html', function (data) {
  $('#navbar').replaceWith(data);
  $('.search').click(function(){
    $(this).toggleClass('active');
  });

  const mobileMainNavbars = document.querySelectorAll('.mobileMainNavbar .title');
  mobileMainNavbars.forEach((mobileMainNavbar) => {
    mobileMainNavbar.addEventListener('click', function () {
      let m = mobileMainNavbar;
      if (mobileMainNavbar.classList.contains('active')) {
        mobileMainNavbar.classList.remove('active');
      } else {
        mobileMainNavbars.forEach((mobileMainNavbar) => {
          if (m !== mobileMainNavbar) {
            mobileMainNavbar.classList.remove('active');
          }
        });
        mobileMainNavbar.classList.add('active');
      }
    });
  });

  $(document).on('click', '.burger, .backdrop', function () {
    let $nav = $('.navigation');
    let $hasClass = $nav.hasClass('open');
    let $mainNav = $('.mainNavbar');

    if (!$hasClass) {
      $nav.addClass('open');
      $mainNav.addClass('open');
      $('body').append('<div class="backdrop"></div>');
    } else {
      $nav.removeClass('open');
      $mainNav.removeClass('open');
      $('.backdrop').remove();
    }
  });

  $(window).bind('scroll', function () {
    var navHeight = $('.header').height() - 10 - 56.8;
    if ($(window).scrollTop() > navHeight) {
      $('.navList').addClass('fixed');
    } else {
      $('.navList').removeClass('fixed');
    }
  });

  const items = document.querySelectorAll('.menuItem.hasChild');
  items.forEach((item) => {
    item.addEventListener('click', function () {
      let i = item;
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        items.forEach((item) => {
          if (i !== item) {
            item.classList.remove('active');
          }
        });
        item.classList.add('active');
      }
    });
  });

  const fontSizeBtns = document.querySelectorAll('.fontSizeBtn');
  fontSizeBtns.forEach((fontSizeBtn) => {
    fontSizeBtn.addEventListener('click', function () {
      fontSizeBtns.forEach((fontSizeBtn) =>
        $(fontSizeBtn).removeClass('active')
      );
      $('body').css('font-size', $(this).data('size'));
      $(this).addClass('active');
    });
  });
}); // load navbar.html

$('#leftSide').load('leftSide.html', function(data){
  $('#leftSide').replaceWith(data);
}); // load leftSide.html

$('#footer').load('footer.html', function (data) {
  $('#footer').replaceWith(data);
  const scrollTop = $('.scrollTop');
  $(scrollTop).click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0,
      }, 800);
    return false;
  });

  $('.memberZone').click(function(){
    $(this).toggleClass('active');
  })
}); // load footer.html