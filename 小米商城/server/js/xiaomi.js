
	
//     //var navTupian = document.getElementById("nav-tupian");

//var index = 0;
//console.log($('#nav-tupian').children())
//setInterval(function(){
//		//navTupian.style.left = - 1226 * index + "px";
//$('#nav-tupian').children().eq(index).fadeIn().siblings().fadeOut();
//		if(index==3){
//			index=0;
//		}else{
//			index++;
//		}
//	},2000);


    //头的轮播图
	var navTupian = document.getElementById("nav-tupian");
 	setInterval(autoPlay,2000);
	
	var index = 0;
	function autoPlay(){
		navTupian.style.left = - 1226 * index  + "px";
		if(index == 3){
			index = 0;
		}else{
			index++;
		}
	}


		//鼠标移到上面向上的特效
		var  tction = document.querySelectorAll(".tction");	
		for (var i = 0; i < tction.length; i++) {
			
			tction[i].onmouseover = function(){	
				this.style.top = -10 + "px";
			}
			tction[i].onmouseout = function(){			
				this.style.top = 0 + "px";
			}
			
		}
		
		
		
		
		//选项卡
var conthead =document.getElementById("content-head");
var minnilong = document.getElementsByClassName("minnilong");
var conter = document.getElementById("content-conter");
var pp =conter.children;
 conthead.onmouseover = function(eve){
 	var e = eve||eveht;
 	var target=e.target||e.srcElement;
	for(var i=0;i<minnilong.length;i++){
		minnilong[i].index=i;
		minnilong[i].classList.remove("on");
		for (var j = 0; j < pp.length; j++) {
			pp[j].style.display='none';
		}
   		//if(target.nodeName.toLowerCase() == "minnilong"){
			//for (var i = 0; i < minnilong.length; i++) {
				//minnilong[i].className = "";
				//conthead[i].style.display = "none";
			//}
			//target.className = "on";
			//conthead[target.getAttribute("index")].style.display = "block";
		//}
	}
	target.classList.add("on");
	pp[target.index].style.display="block";
	
 }
 	
 
