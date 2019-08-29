$(function(){
    //显示下拉列表
    $(".nav").on("mousemove",function(eve){//鼠标移动到nav中
        var e = eve || event;
        var target = e.target || e.srcElement;
        if(target.nodeName == "A" && target.getAttribute("name") != "xmPhone"){ //获取触发元素标签A 不触发元素xmPhone
            $(".hide_nav").stop().slideDown(200);//停止当前元素其他动画立即执行滑动的动画效果
        }
    })
    
    $(".nav").on("mouseout",function(eve){
        var e = eve || event;
        var target = e.target || e.srcElement;
        if(target.nodeName == "A" && target.getAttribute("name") != "xmPhone"){
            var timer = setTimeout(clock,10)
            function clock(){
            $(".hide_nav").stop().slideUp(200);//高度变化（向上减小）来动态地隐藏所有匹配的元素
            }
        }
        $(".hide_nav").on("mousemove",function(){ //鼠标移动到hide_nav上时保持动画显示
            clearTimeout(timer)
        })
        $(".hide_nav").on("mouseout",function(){ //鼠标离开到hide_nav上时退出动画显示
            timer = setTimeout(clock,10)
        })
    })
    
    var index=0;//当前的图片序号
    var $len = $(".banner li").size();//获取图片的数量
//  console.log($len)
    var toggle = true;
    var timer;//设置定时定时器的名字，方便后面关闭
 
    autoplay();  //自动轮播
 
//增加鼠标移上去暂停功能
    $(".banner img").hover(function(){
        clearTimeout(timer);
        
    },function(){
        index = index >0 ? (--index) : ($len-1);//后退一个
        toggle = true;
        autoplay();  
    });
    
	
	$(".banner img").on("mouseover",function(){
		$("#toLeft").css({opacity:1});
        $("#toRight").css({opacity:1});
	})
	
	
    //鼠标移出箭头隐藏
    $(".banner img").on("mouseout",function(){
    	$("#toLeft").css({opacity:0});
    	$("#toRight").css({opacity:0});
    })
    
    $("#toLeft").on("mouseover",function(){
    	$("#toLeft").css({opacity:1});
    	$("#toRight").css({opacity:1});
    })
    
    $("#toRight").on("mouseover",function(){
    	$("#toRight").css({opacity:1});
    	$("#toLeft").css({opacity:1});
    })
    
    
    
    
    //点击下标 圆点
    $(".dotted").on("mouseover","li",function(){
        clearTimeout(timer);
        index = $(this).index(".dotted li");
        toggle = false;
        autoplay();  
    });
    
    //鼠标以上 图片暂停
    $("#toLeft").mousemove(function(){
        clearTimeout(timer);
    })
    $("#toRight").mousemove(function(){
        clearTimeout(timer);
    })

    //点击向左图标根据cur进行上一个图片处理
    $("#toLeft").click(function(){
//      $("#toLeft").opacity()
        $(".banner img").show();
        index = index > 0 ? (--index) : ($len-2);
        changeTo( index );
        //clearTimeout(timer);
    });
 
    //点击向右图标根据cur进行上一个图片处理
    $("#toRight").click(function(){
//       clearTimeout(timer);
         $(".banner img").show();
         index = index<( $len-2 ) ? (++index) : 0;
         changeTo( index );
         //clearTimeout(timer);
    });
    
    //自动轮播函数
     function autoplay() {
     	$(".banner img").eq(index).fadeIn(300).siblings().fadeOut(300)
        $(".banner img").hide();
        $(".banner img:eq("+index+")").show();
        $(".dotted li").css('background-color','rgba(52, 52, 52, 0.3)');
        $(".dotted li:eq("+index+")").css('background-color','rgba(255,255,255,1)');
        if(toggle){
            timer = setTimeout(autoplay,2000);
        }
         index = index < ( $len-2 ) ? (++index) : 0;//当加到6时再把index变为0，也就是第一张图片
     }
 
		
     //点击左右箭头图片切换函数
    function changeTo( num ){
        $(".banner img").hide();
        $(".banner img:eq("+num+")").show();
        $(".dotted li").css('background-color','rgba(52, 52, 52, 0.3)');
        $(".dotted li:eq("+num+")").css('background-color','rgba(255,255,255,0.8)');
    }
 
    $(function(){
    
  //显示banner图二级菜单 图片
    $(".nav_ul").on("mousemove",function(eve){
        
        var e = eve || event;
        var target = e.target || e.srcElement;
        
        if(target.nodeName == "LI"){
            $(target).addClass("nav_ul").siblings().removeClass("nav_ul");
            $(target).children("img").show();
        }
    })
    
    $(".nav_ul").on("mouseout",function(eve){
        
        var e = eve || event;
        var target = e.target || e.srcElement;
        
        if(target.nodeName == "LI"){
            var timer = setTimeout(function(){
                $(target).children("img").hide();
            },10)
        }   
        $(".nav_ul").on("mousemove",function(eve){
            var e = eve || event;
            var target = e.target || e.srcElement;
            
            if(target.nodeName == "IMG"){
                clearTimeout(timer);
            }   
        })
    })
    $(".nav_ul").on("mouseout",function(eve){
        var e = eve || event;
        var target = e.target || e.srcElement;
            
        if(target.nodeName == "IMG"){
            $(target).hide();
            }   
        })   
    })

    //点击购物车下拉效果

    $(".banner_gwc1").on("mousemove",function(){
        $('.banner_gwc2').stop().slideDown().css({ 'box-shadow':'-5px 4px 4px -5px #292929'});
        $(this).css({'color':'#ff6700',"background":"#fff"});
        //$(this).css({"background":"#fff"})
    })
    $(".banner_gwc1").on("mouseout",function(){
        $('.banner_gwc2').stop().slideUp();
        $(this).css({"background":" #424242"});

    })
    $(".banner_gwc2").on("mousemove",function(){
        $(this).stop().show();
        $('.banner_gwc1').css({"background":" #fff"});
    })
    $(".banner_gwc2").on("mouseout",function(){
        $(this).stop().slideUp();
        //$('.gwc1').css('color','#fff');
        $('.banner_gwc1').css({"background":" #424242",'color':'#fff'});
    })
    

 	
 });

 
