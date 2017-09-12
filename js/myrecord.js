$(document).ready(function(){

  //用户信息
	$.ajax({
      type: "get",
      url:  "",
      data:{},
    success:function(data){  	
    	if (data.result.status=='fail'){
          alert('错误信息');
          return;
        }else{
    //获取用户名
 		$('.container-fluid .userName span').html();
    //获取用户头像
		$('.container-fluid .user').css({'background-image':'url(' + "./image/4.jpg" + ')'}); 
		//获取总金额	
		$('.container-fluid .money .sum').html();
		//红包数
		$('.container-fluid .hb-number p').html();
		//手气最佳数
		$('.container-fluid .lucky p').html();
    }
      }
  });

   //查询我的红包记录
  $.ajax({
      type: "get",
      url:  "",
      data:{},
    success:function(data){   
        if (data.result.status=='fail'){
          alert('错误信息');
          return;
        }else{
          //获取第几轮
          $('.footer .hbRecord li .start .round').html();
          //我某轮领取了多少元
          $('.footer .hbRecord li .start .round-money').html();
          //本轮共多少元
          $('.footer .hbRecord li .benlun .benlun-money').html();
          //多少时间被抢光
          $('.footer .hbRecord li .benlun .time').html();
        }
      }
  });
});