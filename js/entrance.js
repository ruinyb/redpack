	$(function() {
   		FastClick.attach(document.body);
	});

	$(document).ready(function(){
	  var swiper = new Swiper('.swiper-container', {
	        loop : true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        paginationClickable: true,
	        spaceBetween: 30,
	        centeredSlides: true,
	        autoplay:3000,
	        autoplayDisableOnInteraction: false
	    });

	    $.ajax({
	      type:   "get",
	      url:  "",
	      data:{},

	    success:function(data){
	        if (data.result.status=='fail'){
	          alert('错误信息');
	          return;
	        }else{
	          //判断活动状态，改变按钮
	          //状态为已结束
	          if(true){
	             $('#over').css('display','block')
	          }
	          //抢光啦
	          else if(true){
	             $('#gone').css('display','block')
	          }
	           //请期待
	          else if(true){
	            $('#expect').css('display','block')
	          }
	           //已抢过
	          else if(true){
	           $('#start').css('display','block')
	          }
	        }
	        //页面加载前的动画
	        $('.mask4').css({'display':'block','background':'#fff'});
	        $('.mask4').css('display','none');
	      }
	    });
});



  //开始抢红包
	document.querySelector(".js-kai").addEventListener("click",function(){
    $.ajax({
      type:   "get",
      url:  "",
      data:{},
      
      success:function(data){
        //弹出错误信息
        alert("错误信息");
        if(data.result.status=='fail'){
          //判断是否关注公众号
          if(true){
          $('.mask2').css('display','block');
          return;
        }
        //红包被抢完
        else if(true){
          $('.mask3').css('display','block');
          $('.mask3 .mask-body .mask-content').html('红包被抢完');
          return;
        }
         //已参与过本轮次
        else if(true){
          $('.mask3').css('display','block');
          $('.mask3 .mask-body .mask-content').html('已参与过本轮次');
          return;
        }
         //拥堵中
        else if(true){
          $('.mask3').css('display','block');
          $('.mask3 .mask-body .mask-content').html('拥堵中');
          return;
        }
      }else{
        //抢到红包
        $('.mask1').css('display','block');
        //抢到多少钱
        $('.mask1 .mask-body .money span').html();
      }
      //加载中，ajax成功后结束加载动画
      $('.mask4').css('display','block');
      $('.mask4').css('display','none');
    }
  });
},false)



  document.querySelector(".js-close").addEventListener("click",function(){
    $('.mask1').css('display','none');
  },false)

  document.querySelector(".js-close2").addEventListener("click",function(){
    $('.mask2').css('display','none');
  },false)

  document.querySelector(".know").addEventListener("click",function(){
    $('.mask3').css('display','none');
  },false)