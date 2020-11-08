$(function() {
	var interval = 2000;
  
	var numslide = $('.seller .sellerin .product ul').length;//배열안 방갯수 li갯수를 저장;
  var slideNow = 0;
  var slideNext = 0;
  var slidePrev = 0;

	$('.slideshow').each(function() {
		var $block = $(this);
		
		function switchImg() {
			var $img = $block.find('img');
			var first = $img.eq(0);
			var second = $img.eq(1);
			first.appendTo($block).fadeOut();
			second.fadeIn()
		}
		setInterval(switchImg, interval);		
	});
  
  $('.vdlmenu .vdlmenu_f').on('mouseenter',function(){
			$('ul', this).show();
			$(this).siblings('li').find('ul').hide();
			$(this).addClass('on').siblings('li').removeClass('on');
		})
		.on('mouseleave',function(){
		$('.gnb ul').hide().add('.gnb .m').removeClass('on');
		});
		$("*:not('.gnb a')").on('focus',function(){
			$('.gnb ul').hide().add('.gnb .m').removeClass('on')
		});
    
});