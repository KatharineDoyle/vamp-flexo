$(document).ready(function(){
  $(document).scroll(function () {
    var $nav = $("#navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

$(window).scroll(function() {
var theta = $(window).scrollTop() / 10 % Math.PI;
$('#yellow-vamp-logo').css({ transform: 'rotate(' + theta + 'rad)' });
});
});
