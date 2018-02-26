
//商旅优惠 - 机票酒店选项卡
$(function(){

	$('.list-2 li').click(function(){

		$('.list-2 li').attr('class','');
		$('.input-list').css('display','none');
      
		$(this).attr('class','active');
		$('.input-list').eq($(this).index()).css('display','block');

	});

    //城市列表 弹出
    $('.inwi').click(function(){
    	$('.city-list').css('display','block');
    });
    
//  $('body').click(function(){
//  	$('.city-list').css('display','none');   //问题： 怎么通过点击    body 关闭它！ 而保证 点击自身 还是有效果的。
//  });
    

	//城市列表切换 - 选项卡
	$('.city-nav li').click(function(){

		$('.city-nav li').attr('class','');
		$('.hot-list').css('display','none');

		$(this).attr('class','hover');
		$('.hot-list').eq($(this).index()).css('display','block');
	});


	// 此处有问题。。                 当点击任意城市名称时  为何 .inwi的value值  都是 北京 ！
	$('.hot-list div').click(function(){

		var city = $('.hot-list div').html();

		$('.inwi').val(city);

	});

});