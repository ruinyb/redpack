$(document).ready(function(){
   //查询别人的红包记录
  $.ajax({
      type: "get",
      url:  "",
      data:{},
    success:function(data){   
        if (data.result.status=='fail'){
          alert('错误信息');
          return;
        }else{
          
        }
      }
  });

});