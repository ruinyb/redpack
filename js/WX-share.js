
var url=location.href.split('#')[0];
$.ajax({
	type : "get",
	url : " ",
	data:{},
	success : function(data){
		wx.config({
			debug: true,
			appId: data.appid,
			timestamp: data.timestamp,//生成签名的时间戳
			nonceStr: data.nonceStr,//生成签名的随机字符串
			signature: data.signature,//签名
			jsApiList: [//需要调用的JS接口列表
				'checkJsApi',//判断当前客户端版本是否支持指定JS接口
				'onMenuShareTimeline',//分享给好友
				'onMenuShareAppMessage'//分享到朋友圈
			]
		});
		wx.ready(function() {
			wx.error(function (res) {
				console.log(res.errMsg);
			});
			var shareContent={
				title: data.title,
				desc: data.desc,
				link: url,
				imgUrl:data.imgUrl,
			}
			wx.onMenuShareAppMessage(shareContent)//分享朋友
			wx.onMenuShareTimeline(shareContent)//分享朋友圈
		});
	},
	error: function(xhr, status, error) {
		console.log(status);
		//alert(xhr.responseText);
	}
})


