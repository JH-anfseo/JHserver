$(function(){
    $('.vdlmenu .vdlmenu_f').on('mouseenter',function(){
        $('ul',this).css({'display': 'none'});
    });
	$('.open').on('click', function() {
      $('.nav_gnb').css({height:'25%'})
	   })
	$('.closebtn').on('click', function() {
    $('.nav_gnb').css({height: 0});
	});
  
  $('.hidden_txt').delay(200).animate({'marginTop':'+=-30px','opacity':'1'},1000);
});