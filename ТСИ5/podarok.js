$(function(){
$(window).scroll(function() {
var top = $(document).scrollTop();
if (top < 140) $(".heroin").css({top: '0', position: 'relative'});
else $(".heroin").css({top: '0', position: 'fixed'});
});
});
