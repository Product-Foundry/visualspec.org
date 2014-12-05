'use strict';
// Custom scripts
$(document).ready(function () {

  // Add current year to footer copyright
  var currentDate = new Date();
  $('#current-year').text((currentDate).getFullYear());
  //smooth page scroll
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  
  function cbpAnimatedHeader() {
    var docElem = document.documentElement,
      didScroll = false,
      changeHeaderOn = 300;
    function init() {
      window.addEventListener( 'scroll', function( ) {
        if( !didScroll ) {
          didScroll = true;
          setTimeout( scrollPage, 250 );
        }
      }, false );
    }
    function scrollPage() {
      var sy = scrollY();
      if ( sy >= changeHeaderOn ) {
        $( '.navbar-default' ).addClass('navbar-shrink' );
      }
      else {
        $( '.navbar-default' ).removeClass('navbar-shrink' );
      }
      didScroll = false;
    }
    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }
    init();
  }
  
  cbpAnimatedHeader();

  var scrollToPosition = function(event) {
    var target;
    if (event !== null) {
      event.preventDefault();
    }
    target = $(this).attr('href');
    $('body').animate({
      scrollTop: $(target).offset().top + 1
    }, 500, function() {
      window.location.hash = target;
    });
  };
  $('#main-nav a').click(scrollToPosition);
});