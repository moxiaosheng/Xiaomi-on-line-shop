//var timer = null;//定时器公有了，在做多物体运动时，每做一次动画会把上一个物体的动画清除
//解决办法将定时器私有化
function animate(ele,attr,target,speedTime){
	//ele是一个元素对象，对象下可以定义自己的私有属性
	//将定时器保存在当前 的元素对象下就可以了
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var current = 0;//保存属性的当前值
		if(attr === "opacity"){
			current = param(ele,attr) * 100;//获取透明度的当前值 扩大100倍处理
		}else{
			current = parseInt(param(ele,attr));
		}
		var speed = (target - current) / 10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(target == current){
			clearInterval(ele.timer);
		}else{
			if(attr === "opacity"){
				ele.style[attr] = (current + speed) / 100;
			}else{
				ele.style[attr] = current + speed + "px";
			}
		}
	},speedTime);
};
function param(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];//返回的是带单位的字符串
}