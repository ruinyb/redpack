

var array = [

	//邮政
	"wx713a8c95b0a4eb14",//公司id
	"中山邮政" ,//公司名称
	"了解更多微信邮付内容" ,//按钮名称
	"4888",//红包总额
	"2000" ,//上午红包
	"2888",//下午红包
	"../image/youzhen/2.jpg",//会场大图
	"../image/youzhen/1.jpg" ,//logo
	"../image/youzhen/3.jpg",//二维码
	"../image/youzhen/4.jpg",//轮播图
	"http://i.postpage.cn/v-U902362959?from=singlemessage",//按钮链接,除了邮政给外链


	//青年网商
	"wxf21b6048d08dd3e4",
	"青年网商" ,
	"青年网商电子商务",
	"查看更多青年网商内容" ,
	"8888",
	"4000" ,
	"4888",
	"../image/qnws/1.jpg",
	"../image/qnws/1.png" ,
	"../image/qnws/2.jpg",
	"../image/qnws/4.jpg",
	"advertising.html?id=wxf21b6048d08dd3e4",



	//邮储
	"??",
	"中国邮储" ,
	"邮储银行中山市分行",
	"中山邮政和邮储银行中山市分行" ,
	"邮储银行中山市分行",
	"了解更多小微企业贷款内容" ,
	"12888",
	"5000" ,
	"7888",
	"../image/youchu/2.jpg",
	"../image/youchu/1.png" ,
	"../image/youchu/3.jpg",
	"../image/youchu/5.jpg",
	"advertising.html?id= ",//邮储ID


	//星火教育
	"??",
	"星火教育" ,
	"中山星火教育",
	"查看更多星火教育内容" ,
	"13888",
	"5000" ,
	"8888",
	"../image/xinghuo/1.jpg",
	"../image/xinghuo/1.png" ,
	"../image/xinghuo/2.jpg",
	"../image/xinghuo/4.jpg",
	"advertising.html?id= ",
	];




/**** 获取地址栏参数 ****/
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

/**** 获取地址栏参数 ****/


/*** 获取各公司本轮（上午）金额 ***/
function getBenlunMoneny(){
	if(id=='wx713a8c95b0a4eb14'){
		//邮政本轮红包金额
		$('.middle-top-img').attr('src',array[6]);
		$('.middle-redpack-log img').attr('src',array[7]);
		$('.mask2 .mask-body img').attr('src',array[8]);
		$('.swiper-slide .swiper-lunboImg').attr('src',array[9]);
		$('.middle-redpack-title-gsname').add('.desc-gsName').add('.swiper-gsname').add('.subHeading-gzh').text(array[1]);
		$('.btn-gsbtn').add('.mask1 .mask-body .mask1-gszx button').text(array[2]);
		$('.swiper-zonge').text(array[3]);
		$('.gs-guangGao').add('.swiper-slide a').add('.mask1 .mask-body .mask1-gszx').attr('href',array[10]);
	}else if(id=='wxf21b6048d08dd3e4'){
		$('.middle-top-img').attr('src',array[18]);
		$('.middle-redpack-log img').attr('src',array[19]);
		$('.mask2 .mask-body img').attr('src',array[20]);
		$('.swiper-slide .swiper-lunboImg').attr('src',array[21]);
		$('.middle-redpack-title-gsname').add('.desc-gsName').add('.swiper-gsname').text(array[12]);
		$('.subHeading-gzh').text(array[13]);
		$('.btn-gsbtn').add('.mask1 .mask-body .mask1-gszx button').text(array[14]);
		$('.swiper-zonge').text(array[15]);
		$('.gs-guangGao').add('.swiper-slide a').add('.mask1 .mask-body .mask1-gszx').attr('href',array[22]);
		$('.middle-redpack-log img').addClass('redpack-qnws-log');
	}else if(id=='q'){
		$('.middle-top-img').attr('src',array[32]);
		$('.middle-redpack-log img').attr('src',array[33]);
		$('.mask2 .mask-body img').attr('src',array[34]);
		$('.swiper-slide .swiper-lunboImg').attr('src',array[35]);
		$('.middle-redpack-title-gsname').text(array[25]);
		$('.desc-gsName').text(array[26]);
		$('.swiper-gsname').text(array[24]);
		$('.subHeading-gzh').text(array[27]);
		$('.btn-gsbtn').add('.mask1 .mask-body .mask1-gszx button').text(array[28]);
		$('.swiper-zonge').text(array[29]);
		$('.gs-guangGao').add('.mask1 .mask-body .mask1-gszx').add('.swiper-slide a').attr('href',array[36]);
		$('.middle-redpack-log img').addClass('redpack-youc-log');
	}else if(id=='w'){
		$('.middle-top-img').attr('src',array[44])
		$('.middle-redpack-log img').attr('src',array[45]);
		$('.mask2 .mask-body img').attr('src',array[46]);
		$('.swiper-slide .swiper-lunboImg').attr('src',array[47]);
		$('.middle-redpack-title-gsname').add('.desc-gsName').add('.swiper-gsname').text(array[38]);
		$('.subHeading-gzh').text(array[39]);
		$('.btn-gsbtn').text(array[40]);
		$('.swiper-zonge').add('.mask1 .mask-body .mask1-gszx button').text(array[41]);
		$('.gs-guangGao').add('.mask1 .mask-body .mask1-gszx').add('.swiper-slide a').attr('href',array[48]);
		$('.middle-redpack-log img').addClass('redpack-xh-log');
	}
}

/*** 获取数组本轮金额 ***/



var id=getQueryString('id');
var name=getQueryString('name');


/**** 初始化调用方法 ****/
$(document).ready(function(){
	getBenlunMoneny();
	$('.middle .middle-redpack-button').css('display','inline-block');

	/****顶部轮播图设置****/
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
	/****顶部轮播图设置****/



	/**** 判断活动状态 ****/

	$.ajax({
		type:   "get",
		url:  "",
		data:{},

		success:function(data){
			// if (data.result.status=='fail'){
			// 	console.log('错误信息');
			// 	return;
			// }
			// //活动即将开始
			// else if(true){
			// 	$('#expect').css('display','block');
			// 	$('#start').css('display','none');
			// 	getBenlunMoneny(); //获取本轮金额（上午）
			// }
			//
			// //活动开始
			// else if(true){
			// 	//从API获取本轮和派发金额
			// if(id==array[0]){
			// 	$('.swiper-benlun').text(data.benlun);
			// 	$('.swiper-paifa').text(data.paifa);
			// }else if(id==array[11]){
			// 	$('.swiper-benlun').text(data.benlun);
			// 	$('.swiper-paifa').text(data.paifa);
			// }else if(id==array[23]){
			// 	$('.swiper-benlun').text(data.benlun);
			// 	$('.swiper-paifa').text(data.paifa);
			// }else if(id==array[37]){
			// 	$('.swiper-benlun').text(data.benlun);
			// 	$('.swiper-paifa').text(data.paifa);
			// }
			//
			// }
			//
			// //已抢过
			// else if(true){
			// 	$('#snatch').css('display','block');
			// 	$('#start').css('display','none');
			// 	getBenlunMoneny();
			// }
			//
			// //抢光啦
			// else if(true){
			// 	$('#gone').css('display','block');
			// 	$('#start').css('display','none');
			// 	getBenlunMoneny();
			// }
			//
			// //活动结束
			// if(true){
			// 	$('#over').css('display','block');
			// 	$('#start').css('display','none');
			// 	getBenlunMoneny();
			// }

			//页面加载前的动画
			is_loaded = true;
			$('.mask4').css({'display':'block'});
			$('.mask4').css('display','none');
	 	}
	});
	/**** 判断活动状态 ****/



	/**** 获取公司id 读取数组内容 ****/
	// $.ajax({
	// 	url: 'http://redpack.qnws.com.cn/wechat/main/appid',
	// 	type: 'GET',
	// 	dataType: 'json',
	// 	data:'{}',
	//
	// 	success: function(data){
	//
	// 		if(id == 'wx713a8c95b0a4eb14'){
	// 			//邮政
	// 			$('.middle-top-img').attr('src',array[6]);
	// 			$('.middle-redpack-log img').attr('src',array[7]);
	// 			$('.mask2 .mask-body img').attr('src',array[8]);
	// 			$('.swiper-slide .swiper-lunboImg').attr('src',array[9]);
	// 			$('.middle-redpack-title-gsname').add('.desc-gsName').add('.swiper-gsname').add('.subHeading-gzh').text(array[1]);
	// 			$('.btn-gsbtn').add('.mask1 .mask-body .mask1-gszx button').text(array[2]);
	// 			$('.swiper-zonge').text(array[3]);
	// 			$('.gs-guangGao').add('.swiper-slide a').add('.mask1 .mask-body .mask1-gszx').attr('href',array[10]);
	// 		}else if(id == 'wxf21b6048d08dd3e4'){
	// 			//青年
	// 			$('.middle-top-img').attr('src',array[18]);
	// 			$('.middle-redpack-log img').attr('src',array[19]);
	// 			$('.mask2 .mask-body img').attr('src',array[20]);
	// 			$('.swiper-slide .swiper-lunboImg').attr('src',array[21]);
	// 			$('.middle-redpack-title-gsname').add('.desc-gsName').add('.swiper-gsname').text(array[12]);
	// 			$('.subHeading-gzh').text(array[13]);
	// 			$('.btn-gsbtn').add('.mask1 .mask-body .mask1-gszx button').text(array[14]);
	// 			$('.swiper-zonge').text(array[15]);
	// 			$('.gs-guangGao').add('.swiper-slide a').add('.mask1 .mask-body .mask1-gszx').attr('href',array[22]);
	// 			$('.middle-redpack-log img').addClass('redpack-qnws-log');
	// 		}else if (id == 'q') {
	// 			//邮储
	// 			$('.middle-top-img').attr('src',array[32]);
	// 			$('.middle-redpack-log img').attr('src',array[33]);
	// 			$('.mask2 .mask-body img').attr('src',array[34]);
	// 			$('.swiper-slide .swiper-lunboImg').attr('src',array[35]);
	// 			$('.middle-redpack-title-gsname').text(array[25]);
	// 			$('.desc-gsName').text(array[26]);
	// 			$('.swiper-gsname').text(array[24]);
	// 			$('.subHeading-gzh').text(array[27]);
	// 			$('.btn-gsbtn').add('.mask1 .mask-body .mask1-gszx button').text(array[28]);
	// 			$('.swiper-zonge').text(array[29]);
	// 			$('.gs-guangGao').add('.mask1 .mask-body .mask1-gszx').add('.swiper-slide a').attr('href',array[36]);
	// 			$('.middle-redpack-log img').addClass('redpack-youc-log');
	// 		}else if (id == 'w') {
	// 			//星火
	// 			$('.middle-top-img').attr('src',array[44])
	// 			$('.middle-redpack-log img').attr('src',array[45]);
	// 			$('.mask2 .mask-body img').attr('src',array[46]);
	// 			$('.swiper-slide .swiper-lunboImg').attr('src',array[47]);
	// 			$('.middle-redpack-title-gsname').add('.desc-gsName').add('.swiper-gsname').text(array[38]);
	// 			$('.subHeading-gzh').text(array[39]);
	// 			$('.btn-gsbtn').text(array[40]);
	// 			$('.swiper-zonge').add('.mask1 .mask-body .mask1-gszx button').text(array[41]);
	// 			$('.gs-guangGao').add('.mask1 .mask-body .mask1-gszx').add('.swiper-slide a').attr('href',array[48]);
	// 			$('.middle-redpack-log img').addClass('redpack-xh-log');
	// 		}else{
	// 			$('.mask4').css({'display':'block'});
	// 			return;
	// 		}
	// 		$('.mask4').css('display','none');
	// 	}
	// });
	/**** 获取公司id ****/

});
/**** 初始化调用方法 ****/








var verify_check = false,    // 验证锁
	is_loaded = false,       // 页面加载锁
	is_allow_click = true;   // 抢红包锁

/**** 滑动拼图验证码 ****/
$('.js-kai').click(function (){

	if ( false == is_loaded )
	{
		return ;
	}
	if ( false == is_allow_click )
	{
		return ;
	}

	is_allow_click = true;

	if( verify_check == true )
	{
		goGetRedpack();
		return ;
	}

	$('.mask5').css('display','block');
	$('#mpanel4').slideVerify({
		type : 2,		//类型
		vOffset : 3,	//误差量，根据需求自行调整
		vSpace : 5,	//间隔
		imgName : ['11.jpg', '22.jpg'],
		imgSize : {
			width: '270px',
			height: '200px',
		},
		blockSize : {
			width: '40px',
			height: '40px',
		},
		barSize : {
			width : '',
			height : '',
		},
		ready : function() {

		},
		success : function() {
			verify_check = true;
			setTimeout(function () {
				$('.mask5').remove();
			},1000)
			$('#success').css('display','block');

			setTimeout(function () {
				goGetRedpack();
			},1100)

		},
		error : function() {
		     // alert('验证失败！');
		}

	});
});
/**** 滑动拼图验证码 ****/



function goGetRedpack()
{
	$('.mask4').css('display','block');
	$.ajax({
		type:   "get",
		url:  "https://ruinyb.github.io/redpack/entrance.json",
		datatype:"json",
		data:{

		},
		success: redpackAPICallbackSuccess
	});
}

function redpackAPICallbackSuccess(data)
{
	$('.mask4').css('display','none');

	// 中奖的
	if(data.data[0].a==name)
	{
		$('.mask1 .mask-body .mask-title .title-money').html('8.88');
		$('.mask1').css('display','block');
	}

	//已抢光
	else if(data.data[0].b==name)
	{
		$('.mask3').css('display','block');
		$('.mask3 .mask-body .mask-content').html('红包被抢光了~');
	}

	//已抢过
	else if(data.data[0].c==name)
	{
		$('.mask3').css('display','block');
		$('.mask3 .mask-body .mask-content').html('您已经参与过啦~');
	}

	//拥堵中
	else if(data.data[0].d==name)
	{
		$('.mask3').css('display','block');
		$('.mask3 .mask-body .mask-content').html('太多人啦，前方拥堵中~');
	}

	is_allow_click = true;
}



/**** 关闭遮罩层 ****/
  document.querySelector(".js-close").addEventListener("click",function(){
    $('.mask1').css('display','none');
  },false)

  document.querySelector(".js-close2").addEventListener("click",function(){
    $('.mask2').css('display','none');
  },false)

  document.querySelector(".know").addEventListener("click",function(){
    $('.mask3').css('display','none');
  },false)

/**** 关闭遮罩层 ****/
