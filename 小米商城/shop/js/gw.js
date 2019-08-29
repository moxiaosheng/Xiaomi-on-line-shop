window.onload = function(){
	var pager = document.getElementsByClassName("pager");
	var carList= document.querySelector(".xm-carousel-list");
	var more =document.querySelectorAll(".more");
	var checkbox =document.querySelectorAll(".checkbox");
	var goods =document.querySelectorAll(".goods-item");
	var btnlike =document.querySelectorAll(".btn-like");
	var btnbuy =document.querySelectorAll(".btn-buy");
	//猜你喜欢的左右滚动
		for(var i = 0;i<pager.length;i++){
			pager[i].index=i;
			pager[i].onclick=function(){
				for(var j=0;j<pager.length;j++){
					pager[j].classList.remove("pager-active");
				}
				this.classList.add("pager-active")
				carList.style.marginLeft=-1226*this.index+"px";
			}
		}
		//分类栏展开和收缩
		for(var i =0;i<more.length;i++){
			more[i].onclick=function(){
				if(this.parentNode.clientHeight<50){
					this.parentNode.style.height=this.previousElementSibling.clientHeight+"px";
				}else{
					this.parentNode.style.height=46+"px";
				}
			}
		}
		//评价，特惠，有货的勾选框
		function chec(ele){
			for(var i= 0;i<ele.length;i++){
				ele[i].parentNode.index=1;
				ele[i].parentNode.onclick=function(){
					if(this.index==1){
						this.firstElementChild.style.backgroundColor="#e53935";
					}else{
						this.firstElementChild.style.backgroundColor="#fff";
					}
					this.index*=-1;
				}
			}
		}
		chec(checkbox);
		for(var i=0;i<goods.length;i++){
			goods[i].index=i;
			goods[i].onmouseover=function(){
				btnlike[this.index].style.opacity=1;
				btnbuy[this.index].style.opacity=1;
				btnlike[this.index].firstElementChild.onmouseover=function(){
					this.nextElementSibling.style.opacity=1;
				}
				btnbuy[this.index].lastElementChild.onmouseover=function(){
					this.previousElementSibling.style.opacity=1;
				}
			}
			goods[i].onmouseout=function(){
				btnlike[this.index].style.opacity=0;
				btnbuy[this.index].style.opacity=0;
				btnlike[this.index].firstElementChild.onmouseout=function(){
					this.nextElementSibling.style.opacity=0;
				}
				btnbuy[this.index].lastElementChild.onmouseout=function(){
					this.previousElementSibling.style.opacity=0;
				}
			}
		}
		
}