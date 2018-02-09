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

	/**** 获取地址栏参数 ****/
	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}

	var id=getQueryString('id');
	/**** 获取地址栏参数 ****/

		 if(id=='wxf21b6048d08dd3e4'){
		 	//青年网商
			$('.swiper-slide .list li img').attr('src','../image/qnws/3.jpg')
		 }else if(id==''){
			 //星火
			 $('.swiper-slide .list li img').attr('src','../image/xinghuo/3.jpg')
		 }else if(id==''){
			 //邮储
			 $('.swiper-slide .list li img').attr('src','../image/youchu/4.jpg')
		 }

});