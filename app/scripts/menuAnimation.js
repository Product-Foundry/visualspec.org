'use strict';
$(document).ready(function () {
  var divinfo = {
    'initial': []
  };
  var current = -1;
  $('#menuCircles > div').each(function () {
    var $this = $(this);
    var initial = {
      'index': $this.index(),
      'top': $this.css('top'),
      'left': $this.css('left')
    };
    divinfo.initial.push(initial);
  });
  $('a.menuTitle').bind('click', function (e) {
    var $this = $(this);
    var $currentBox = $this.parent();
    $currentBox.css('z-index', '1');
    if (current === $currentBox.index()) {
      $currentBox.find('.closeMenuContent').addClass('hidden');
      $currentBox.stop().removeClass('openItem').animate({
        'top': divinfo.initial[$currentBox.index()].top,
        'left': divinfo.initial[$currentBox.index()].left,
        'width': '127px',
        'height': '127px'
      }, 800, 'easeInBack').find('.menuContent').fadeOut();
      $('#menuCircles > div').not($currentBox).each(function () {
        var $ele = $(this);
        var elemTop = divinfo.initial[$ele.index()].top;
        var elemLeft = divinfo.initial[$ele.index()].left;
        $ele.stop().show().removeClass('openItem').animate({
          'top': elemTop,
          'left': elemLeft,
          'opacity': 1
        }, 800);
      });
      current = -1;
    } else {
      $('#menuCircles > div').not($currentBox).each(function () {
        var $ele = $(this);
        $ele.stop().animate({
          'top': (Math.floor(Math.random() * 601) - 150) + 'px',
          'left': (Math.floor(Math.random() * 601) - 150) + 'px',
          'opacity': 0
        }, 800, function () {
          $(this).hide();
        });
      });
      $currentBox.find('.closeMenuContent').removeClass('hidden');
      var newTopPos,
        newLeftPos,
        containerWidth = $('#menuContainer').width(),
        containerHeight = $('#menuContainer').height();
      newLeftPos = containerWidth / 2 - 160;
      newTopPos = containerHeight / 2 - 160;
      $currentBox.stop().addClass('openItem').animate({
        'top': newTopPos + 'px',
        'left': newLeftPos + 'px',
        'width': '320px',
        'height': '320px'
      }, 800, 'easeOutBack', function () {
        current = $currentBox.index();
        $(this).find('.menuContent').fadeIn();
      });
    }
    e.preventDefault();
  });
});