$(document).ready(function(){
	  var swiper = new Swiper('.swiper-container', {
	        loop : true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        paginationClickable: true,
	        spaceBetween: 30,
	        centeredSlides: true,
	        autoplayDisableOnInteraction: false
	    });

	 $('.swiper-wrapper .swiper-slide .min').click(function(){
	 	$(this).toggleClass('min');
		$(this).toggleClass('max');
	 })
	 	
});