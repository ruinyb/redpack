

var is_loaded = false,  // 页面加载锁
    is_allow_click = true;   // 抢红包锁


//存入各公司会场大图数组
var yzImg1= new Array(["../image/youzhen/2.jpg"]);//邮政
var qnImg1= new Array(["../image/qnws/1.jpg"]);//青年网商
var ycImg1= new Array(["../image/youchu/2.jpg"]);//邮储
var xhImg1= new Array(["../image/xinghuo/1.jpg"]);//星火教育

//存入各公司会场logo数组
var yzImg2= new Array(["../image/youzhen/1.jpg"]);//邮政
var qnImg2= new Array(["../image/qnws/1.png"]);//青年网商
var ycImg2= new Array(["../image/youchu/1.png"]);//邮储
var xhImg2= new Array(["../image/xinghuo/1.png"]);//星火教育

//存入各公司二维码图片数组
var yzImg3= new Array(["../image/youzhen/"]);//邮政
var qnImg3= new Array(["../image/qnws/2.jpg"]);//青年网商
var ycImg3= new Array(["../image/youchu/3.jpg"]);//邮储
var xhImg3= new Array(["../image/xinghuo/2.jpg"]);//星火教育

// //存入各公司红包金额数组
// var yzMoney= new Array(["4888","2000","2888"]);//邮政
// var qnMoney= new Array(["8888","4000","4888"]);//青年网商
// var ycMoney= new Array(["12888","4000","8888"]);//邮储
// var xhMoney= new Array(["13888","5000","8888"]);//星火教育

// //存入各公司名字数组
// var yzMsg= new Array(["中山邮政"]);//邮政
// var qnMsg= new Array(["青年网商"]);//青年网商
// var ycMsg= new Array(["邮储银行中山市分行"]);//邮储
// var xhMsg= new Array(["星火教育"]);//星火教育

function xh () {
	$('.middle-top-img').attr('src',xhImg1);
	$('.middle-redpack-log img').attr('src',xhImg2);
	$('.mask2 .mask-body img').attr('src',xhImg3);
	$('.middle-redpack-title-gsname').add('.desc-gsName').add('.swiper-gsname').text('星火教育');
	$('.subHeading-gzh').text('中山星火教育');
	$('.swiper-zonge').text('13888');
	$('.swiper-shangwu').text('5000');
	$('.swiper-xiawu').text('8888');
	$('.middle-redpack-log img').addClass('redpack-xh-log');
}

function yc () {
	$('.middle-top-img').attr('src',ycImg1);
	$('.middle-redpack-log img').attr('src',ycImg2);
	$('.mask2 .mask-body img').attr('src',ycImg3);
	$('.middle-redpack-title-gsname').add('.desc-gsName').text('邮储银行中山市分行');
	$('.swiper-gsname').text('中山邮储');
	$('.subHeading-gzh').text('邮储银行中山市分行');
	$('.swiper-zonge').text('12888');
	$('.swiper-shangwu').text('4000');
	$('.swiper-xiawu').text('8888');
	$('.middle-redpack-log img').addClass('redpack-youc-log');
}


// function xh () {
// 	$('.middle-top-img').attr('src',xhImg1)
// 	$('.middle-redpack-log img').attr('src',xhImg2);
// 	$('.mask2 .mask-body img').attr('src',xhImg3);
// 	$('.middle-redpack-title-gsname').add('.desc-gsName').add('.swiper-gsname').text('星火教育');
// 	$('.subHeading-gzh').text('中山星火教育')
// 	$('.swiper-zonge').text('13888');
// 	$('.swiper-shangwu').text('5000');
// 	$('.swiper-xiawu').text('8888');
// 	$('.middle-redpack-log img').addClass('redpack-xh-log');
// }
//
// function xh () {
// 	$('.middle-top-img').attr('src',xhImg1)
// 	$('.middle-redpack-log img').attr('src',xhImg2);
// 	$('.mask2 .mask-body img').attr('src',xhImg3);
// 	$('.middle-redpack-title-gsname').add('.desc-gsName').add('.swiper-gsname').text('星火教育');
// 	$('.subHeading-gzh').text('中山星火教育')
// 	$('.swiper-zonge').text('13888');
// 	$('.swiper-shangwu').text('5000');
// 	$('.swiper-xiawu').text('8888');
// 	$('.middle-redpack-log img').addClass('redpack-xh-log');
// }




$(document).ready(function(){
	yc ();



	// $.ajax({
	// 	type: "get",
	// 	url: "http://redpack.qnws.net/wechat/main/appid?callback=jQuery321021514113942128987_1517883468943&_=1517883468944",
	// 	dataType:'jsonp',
	//
	// 	success:function (data) {
	// 		console.log(data);
	// 	},
	// 	error:function (XMLHttpRequest, textStatus, errorThrown) {
	// 		console.log("请求失败！");
	// 	}
	// })

})
$("#mask").click(function () {
	$("#mask, #popup-captcha-mobile").hide();
});
$("#popup-submit-mobile").click(function () {
	$("#mask, #popup-captcha-mobile").show();
});
var handlerPopupMobile = function (captchaObj) {
	// 将验证码加到id为captcha的元素里
	captchaObj.appendTo("#popup-captcha-mobile");
	//拖动验证成功后两秒(可自行设置时间)自动发生跳转等行为
	captchaObj.onSuccess(function () {
		var validate = captchaObj.getValidate();
		$.ajax({
			url: "../gt3-php-sdk-master/web/VerifyLoginServlet.php", // 进行二次验证
			type: "post",
			dataType: "json",
			data: {
				// 二次验证所需的三个值
				type: "mobile",
				geetest_challenge: validate.geetest_challenge,
				geetest_validate: validate.geetest_validate,
				geetest_seccode: validate.geetest_seccode
			},
			success: function (data) {
				if (data && (data.status === "success")) {
					$('#mask').add('.geetest_btn').hide();



				} else {
					$(document.body).html('<h1>登录失败</h1>');
				}
			}
		});
	});
};
$.ajax({
	// 获取id，challenge，success（是否启用failback）
	url: "../gt3-php-sdk-master/web/StartCaptchaServlet.php?type=mobile&t=" + (new Date()).getTime(), // 加随机数防止缓存
	type: "get",
	dataType: "json",
	success: function (data) {
		// 使用initGeetest接口
		// 参数1：配置参数
		// 参数2：回调，回调的第一个参数验证码对象，之后可以使用它做appendTo之类的事件
		initGeetest({
			gt: data.gt,
			challenge: data.challenge,
			offline: !data.success // 表示用户后台检测极验服务器是否宕机，一般不需要关注
			// 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
		}, handlerPopupMobile);
	}
});

// 	$(document).ready(function(){
//     document.body.style.display="block";
//
//     $('.middle .middle-redpack-button').css('display','inline-block');
// 	  var swiper = new Swiper('.swiper-container', {
// 	        loop : true,
// 	        nextButton: '.swiper-button-next',
// 	        prevButton: '.swiper-button-prev',
// 	        paginationClickable: true,
// 	        spaceBetween: 30,
// 	        centeredSlides: true,
// 	        autoplay:3000,
// 	        autoplayDisableOnInteraction: false
// 	    });
//
// 	    $.ajax({
// 	      type:   "get",
// 	      url:  "",
// 	      data:{},
//
// 	    success:function(data){
// 	        if (data.result.status=='fail'){
// 	          console.log('错误信息');
// 	          return;
// 	        }else{
// 	          //判断活动状态，改变按钮
// 	          //状态为已结束
// 	          if(true){
// 	             $('#over').css('display','block');
// 	             $('#start').css('display','none');
// 	          }
// 	          //抢光啦
// 	          else if(true){
// 	             $('#gone').css('display','block');
// 		         $('#start').css('display','none');
// 	          }
// 	           //请期待
// 	          else if(true){
// 	             $('#expect').css('display','block');
// 		         $('#start').css('display','none');
// 	          }
// 	           //已抢过
// 	          else if(true){
// 	             $('#snatch').css('display','block');
// 		         $('#start').css('display','none');
// 	          }
// 	        }
// 	        //页面加载前的动画
//           is_loaded = true;
// 	        $('.mask4').css({'display':'block','background':'#fff'});
// 	        $('.mask4').css('display','none');
// 	      }
// 	    });
// });
//
//
//
//   //开始抢红包
//   $('.js-kai').click(function(){
//      if ( false == is_loaded )
//    {
//       return ;
//    }
//    if ( false == is_allow_click )
//    {
//       return ;
//    }
//    is_allow_click = false;
//
//     $.ajax({
//       type:   "get",
//       url:  "",
//       data:{},
//
//       success:function(data){
//         is_allow_click = true;
//         //弹出错误信息
//         //alert("错误信息");
//         if(data.result.status=='fail'){
//           //判断是否关注公众号
//           if(true){
//           $('.mask2').css('display','block');
//           return;
//         }
//         //红包被抢完
//         else if(true){
//           $('.mask3').css('display','block');
//           $('.mask3 .mask-body .mask-content').html('红包被抢完');
//           return;
//         }
//          //已参与过本轮次
//         else if(true){
//           $('.mask3').css('display','block');
//           $('.mask3 .mask-body .mask-content').html('已参与过本轮次');
//           return;
//         }
//          //拥堵中
//         else if(true){
//           $('.mask3').css('display','block');
//           $('.mask3 .mask-body .mask-content').html('拥堵中');
//           return;
//         }
//       }else if(data.result.status=='success'&& is_allow_click==true){
//         //抢到红包
//         $('.mask1').css('display','block');
//         //抢到多少钱
//         $('.mask1 .mask-body .mask-title .title-money').html();
//
//         if($('.mask1 .mask-body .mask-title .title-money').html()==""){
//           $('.mask1').css('display','none');
//         }
//
//       }
//       //加载中，ajax成功后结束加载动画
//       $('.mask4').css('display','block');
//       $('.mask4').css('display','none');
//
//     }
//   });
// })
//
//
//
//
//  /*关闭弹框*/
//   document.querySelector(".js-close").addEventListener("click",function(){
//     $('.mask1').css('display','none');
//   },false)
//
//   document.querySelector(".js-close2").addEventListener("click",function(){
//     $('.mask2').css('display','none');
//   },false)
//
//   document.querySelector(".know").addEventListener("click",function(){
//     $('.mask3').css('display','none');
//   },false)
// /*关闭弹框*/