window.onload=function(){
	var view=document.getElementById("J_sliderView");
	var viimg=view.children;
	var ulink=document.querySelectorAll(".ui-pager-link");
	
	
	var index=0;
	setInterval(autoplay,2000);
	function autoplay(){
		if(index==3){
			index=0;
		}else{
			index++;
		}
		for (var i = 0; i < viimg.length; i++) {

			viimg[i].style.zIndex="0";
			ulink[i].style.backgroundColor="#ccc"
		}

		viimg[index].style.zIndex="50";
		ulink[index].style.backgroundColor="#707070";
	}	
}
