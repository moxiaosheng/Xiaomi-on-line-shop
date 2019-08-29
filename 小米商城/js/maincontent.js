$(function(){
 	//热门 ，电影影音 鼠标移入切换效果
 	$(".list_two").on("mouseover",function(){
 		$(".movie_two").show();
 		$(".movie_one").hide();
 	})
 	
 	$(".list_one").on("mouseover",function(){
 		$(".movie_two").hide();
 		$(".movie_one").show();
 	})
 	
 	
 	
   	//热门出现，切换效果
   	$(".topic_one").on("mouseover",function(){
   		$(".home_list_two").show();
   		$(".home_one").hide();
   	})
   	

   	$(".topic_two").on("mouseover",function(){
   		$(".home_list_two").hide();
   		$(".home_one").show();
   	})
   	
   	
   	
   	//轮播图效果
   	var index=0;//当前的图片序号
    var $len = $(".lbta ul").size();//获取图片的数量
    var toggle = true;
    var timer;//设置定时定时器的名字，方便后面关闭
 
    autoplay();  //自动轮播
 
	//增加鼠标移上去暂停功能
    $(".lbta ul").hover(function(){
        clearTimeout(timer);
        
    },function(){
        index = index >0 ? (--index) : ($len-1);//后退一个
        toggle = true;
        autoplay();  
    });
    
    //鼠标以上 图片暂停
    $(".lbta").mousemove(function(){
        clearTimeout(timer);
    })
    $(".lbta").mousemove(function(){
        clearTimeout(timer);
    })

    //点击向左图标根据cur进行上一个图片处理
    $("#toLeftoo").click(function(){
//      $("#toLeft").opacity()
        $(".lbta ul").show();
        index = index > 0 ? (--index) : 2;
        changeTo( index );
        //clearTimeout(timer);
    });
 
    //点击向右图标根据cur进行下一个图片处理
    $("#toRightoo").click(function(){
//       clearTimeout(timer);
         $(".lbta ul").show();
         index = index< 2 ? (++index) : 0;
         changeTo( index );
         //clearTimeout(timer);
    });
    
    //自动轮播函数
     function autoplay() {
     	$(".lbta ul").eq(index).siblings(300).siblings().siblings(300)
        $(".lbta ul").hide();
        $(".lbta ul:eq("+index+")").show();
        if(toggle){
            timer = setTimeout(autoplay,2000);
        }
         index = index < 2 ? (++index) : 0;//当加到6时再把index变为0，也就是第一张图片
     }
 
		
     //点击左右箭头图片切换函数
    function changeTo( num ){
        $(".lbta ul").hide();
        $(".lbta ul:eq("+num+")").show();
    }
 	
 });//jq结束
 
 	//计时器效果
 window.onload = function(){
		var shi = document.getElementById("shi");
		var min = document.getElementById("min");
		var mz = document.getElementById("mz");
		var nowDate = new Date();//活动开始时间
	    var endDate = new Date("2020/7/6 17:57:00");
		var s = getDiffTime(nowDate,endDate);
		  
		function playGame(){
		var hours = s/60/60;
		var d = db(parseInt((hours/24)));
		var h = db(parseInt((hours/24-d)*24));
		var m = db(parseInt(((hours/24-d)*24-h)*60));
		var miao = db(parseInt((((hours/24-d)*24-h)*60-m)*60));
//					showTime.innerHTML = "距商品结束还剩"+d+"天"+h+"时"+m+"分"+miao+"秒";
		shi.innerHTML = h;
		min.innerHTML = m;
		mz.innerHTML = miao;
        }
        
        function db(num){
			return num < 10 ? "0" + num : num;
		}
		
		var timer = setInterval(function(){
		s--;
		playGame();
		if(s<0){
			clearInterval(timer);
		}
	   },1000);
 }
