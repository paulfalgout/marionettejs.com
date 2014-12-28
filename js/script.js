$(document).ready(function() {

    // Cycle 2
    $('.video_slideshow').cycle({
        pager: '.slider2',
        pagerTemplate: '<span></span>',
        paused: true
    });

    // equalHeights
    if($(window).width() > 705) {
        $('.code_examples > div').equalHeights();
    }
    $(window).resize(function() {
        if($(window).width() > 705) {
            $('.code_examples > div').css('height', 'auto');
            $('.code_examples > div').equalHeights();
        } else {
            $('.code_examples > div').css('height', 'auto');
        }
    });

    // Google Prettify syntax highlighting
    prettyPrint();

    // Unveil.js (lazy loader for company logos)
    $('.company-logo-list img').unveil();

    // Toggle company logos
    $('.show-more').on('click', function(e) {
      var $this = $(this);

      e.preventDefault();
      $this.parent().toggleClass('active');
      $('.slider').toggleClass('closed');

      var txt = $this.text() === 'more'? 'less': 'more';
      $this.text(txt);
    });

    // Back to top button
    var offset = 300; //"back to top" button is shown
    var offset_opacity = 1200; //"back to top" button opacity is reduced
    var scroll_top_duration = 700; //duration of the top scrolling animation (in ms)
    var $backToTopBtn = $('.top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ($(this).scrollTop() > offset) ? $backToTopBtn.addClass('is-visible') : $backToTopBtn.removeClass('is-visible fade-out');
        if($(this).scrollTop() > offset_opacity) {
            $backToTopBtn.addClass('fade-out');
        }
    });

    //smooth scroll to top
    $backToTopBtn.on('click', function(e){
        e.preventDefault();
        $('body, html').animate({
              scrollTop: 0
          }, scroll_top_duration
        );
    });
});