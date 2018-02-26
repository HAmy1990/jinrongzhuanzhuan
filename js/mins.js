

$(function(){
    
//首页导航

    var ie6 = /msie 6/i.test(navigator.userAgent);
    var tableDv = $('#navbg');
    var st;
    tableDv.attr('otop', tableDv.offset().top); //存储原来的距离顶部的距离
    $(window).scroll(function () {
        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if (st >= parseInt(tableDv.attr('otop'))) {
            if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
                tableDv.css({ position: 'absolute', top: st });
            }
            else if (tableDv.css('position') != 'fixed') tableDv.css({ 'position': 'fixed', top: 0 });
        } else if (tableDv.css('position') != 'static') tableDv.css({ 'position': 'static' });
    });


// 收益计算器
    
    //弹出计算器
    var popup=$('.popup');

    $('.js-click').on('click',function(){

    	popup.css('display','block');
    	$('.shade').css('display','block')
    	popup.css('left',($(window).width()-popup.outerWidth())/2);
    	popup.css('top',($(window).height()-popup.outerHeight())/2);
    });

    //关闭计算器
    $('#shut').on('click',function(){
    	popup.css('display','none');
    	$('.shade').css('display','none');
    });


    // 计算收益

    $('#count').on('click',function(){

      //通过parseInt 函数将 字符串 转换成整数 数字
      var oinvest = parseInt($('#invest').val());//投资金额
      var ayear = parseInt($('#year').val());  //年利率
      var odeadline = parseInt($('#deadline').val());//期限
      var oearnings=$('#earnings');//收益
      var ototal=$('#total');//本息
    
      var oyear = ayear/100;  
      var jieguo = oinvest*oyear/365*odeadline;//将小数点 转换成整数
      var data = parseInt(jieguo);    //收益的值
      var data_ototal = data+oinvest;//本息的值
      
      oearnings.html(data);
      ototal.html(data_ototal);

    });

// 首页热销产品进度条  
    // 1
    function rate(){
         var opercent = parseInt($('#percent1').text()); //百分比率
         var rate_le = $('.rate-le').width();//灰条的宽度

         var n1=10;

         var r_bwidth = rate_le/n1+'px';   //计算出蓝条的宽度
        
         $('.rate-blue1').css('width',r_bwidth); 
    };
    rate();
    
    // 2
    function rate2(){
         var opercent = parseInt($('#percent2').text()); //百分比率
         var rate_le = $('.rate-le').width();//灰条的宽度

         var n1 = opercent*4/opercent;

         var r_bwidth = rate_le/n1+'px';   //计算出 蓝条的 宽度
        
         $('.rate-blue2').css('width',r_bwidth); 
    };
    rate2();

    // 3
    function rate3(){
         var opercent = parseInt($('#percent3').text()); //百分比率
         var rate_le = $('.rate-le').width();//灰条的宽度

         var n1 = opercent/100;   
        
         var r_bwidth = rate_le*n1+'px';  //计算出  蓝条的宽度
        
         $('.rate-blue3').css('width',r_bwidth); 
    };
    rate3();


//右侧QQ客服栏
    //移入展开
    $('.on-line-service').on('mouseover',function(){
        $('.service').css('right','0');
    });
    //移入QQ客服展开
    $('.textr').on('mouseover',function(){
        $('.service').css('right','0');
    });


    //点击body收缩
    $('body').on('click',function(){
        $('.service').css('right','-150px');
    });

});



