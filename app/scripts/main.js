'use strict';
// Custom scripts
$(document).ready(function(){
  
  // Add current year to footer copyright
  var currentDate = new Date();
  $('#current-year').text((currentDate).getFullYear());
  //make overlay strech full page height
  var windowHeight = $('header').height() + $('#content').height() + 40;
  $('#page-wrapper, .overlay').css('min-height', windowHeight + 'px');
  //smooth page scroll
  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
});