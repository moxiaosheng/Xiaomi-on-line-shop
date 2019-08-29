//通过id名称获取元素对象
function $id(idName){
	return document.getElementById(idName);
}
//随机获取min-max的随机整数
function getRand(min,max){
	return parseInt(Math.random()*(max-min+1)+min);
}
//判断一个数是否是素数
function isPrime(num){
	for (var i = 2; i < num; i++) {
		if(num % i == 0){
			return false;
		}
	}
	return true;
}
//判断一个数在数组中是否存在
function hsEleInArr(arr,num){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === num){
			return true;
		}
	}
	return false;
}
//获取十六进制随机颜色值
function getColor(){
	var color = "#";
	var str = "0123456789abcdef";
	var rand;
	for (var i = 0; i < 6; i++) {
		rand = getRand(0,15);
		color += str.charAt(rand);
	}
	return color;
}

//获取四位数的随机验证码
function getYZM(num){
	//数字，字母（大小写字母）
	//随机从ASCII中获取数字字母
	//从48-122之间获取一个随机数
	//这个随机数包含了一些特殊字符
	//排除特殊字符 的ASCII码
	//通过ASCII码获取对应字符。
	//获取num次
	var rand,ch;
	var yzm = "";
	for (var i = 0; i < num; i++) {
		//从48-122之间获取一个随机数
		rand = getRand(48,122);
		if((rand >= 58 && rand <= 64) || (rand >= 91 && rand <= 96)){//排除特殊字符 的ASCII码
			i--;
		}else{
			//通过ASCII码获取对应字符。
			ch = String.fromCharCode(rand);
			//console.log(typeof ch);
			yzm += ch;
		}
	}
	return yzm;
}

//封装一个时间函数，将时间本地化输出
function dateToString(date){
	
	var str = "";
	var weekArr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var f = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();//0-6
	
	str += y + "年" + getDb(m) + "月" + getDb(d) + "号 ";
	str +=  getDb(h) + ":" + getDb(f) + ":" + getDb(s) + " ";
	str += weekArr[w];
	
	//m是一个个位数，在个位数前加0；
	//封装一个前面加的方法
	return str;
}
function getDb(num){
	//小于10的数，前面加0
	return num < 10 ? "0" + num : num;
}
//获取两个时间对象的时间差的秒数
function getDifTime(startTime,endTime){
	return (endTime.getTime() - startTime.getTime()) / 1000;
}

//兼容ie8通过className获取元素对象集合。
function getElesByClassName(className){
	var elesArr = [];//保存所有以className命名的元素集合
	//通过标签名称获取页面所有的元素集合
	var allEle = document.getElementsByTagName("*");
	//遍历所有元素对象
	for (var i = 0; i < allEle.length; i++) {
		//判断每一个元素是否包含了className命名的元素对象，
		if(allEle[i].className === className){
			//如果有，把这个元素对象push到一个新数组 中
			elesArr.push(allEle[i]);
		}
	}
	//console.log(allEle);
	//返回这个新数组
	return elesArr;
}
//封装一个函数，获取所有的元素节点
function getChidren(parentNode){
	//获取 所有的子节点
	var children = parentNode.childNodes;
	var nodeArr = [];
	//遍历所有的子节点
	for (var i = 0; i < children.length; i++) {
		//判断是否是元素节点
		if(children[i].nodeType == 1){
			//如果是元素节点，保存到nodeArr中
			nodeArr.push(children[i]);
		}
	}
	//返回nodeArr
	return nodeArr;
}
//添加新节点到目标节点的后面
function insertAfter(newNode,target){
	//获取target的父节点
	var supNode = target.parentNode;
	var children = getChidren(supNode); 
	//判断 target是否是父节点的最后一个子元素节点
	if(children[children.length-1] === target){
		//如果是：将新节点添加到父节点的最后
		supNode.appendChild(newNode);
	}else{
		//如果不是：说明target一定有下一个兄弟元素节点
		//将新节点添加到下一个兄弟元素节点的前面
		supNode.insertBefore(newNode,target.nextSibling);
	}
}
//兼容ie8获取事件对象的button属性
function getButton(eve){
	//如果eve不是undefined说明就是高版本的浏览器
	if(eve){//
		//高版本浏览器
		return eve.button;
	}else{
		//ie8下执行
		var but = window.event.button;
		switch(but){
			case 1:
				return 0;
			case 4:
				return 1;
			case 2:
				return 2;
		}
	}
}
//兼容ie8实现阻止事件冒泡
function stopProp(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
}
//兼容ie8实现阻止事件事件默认行为
function preventDef(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}
//兼容ie8实现事件监听
function addEvent(ele,event,callBack){
	//fn = function(){alert(1)};
	//ele.addEventListener(event,fn);
	if(ele.addEventListener){//现代浏览器
		ele.addEventListener(event,callBack);
	}else{//ie8
		ele.attachEvent("on" + event,callBack);
	}
}
//兼容ie8获取事件对象的page属性
function getPage(e){//e.兼容好的事件对象
	var sleft = document.documentElement.scrollLeft || document.body.scrollLeft;
	var stop = document.documentElement.scrollTop || document.body.scrollTop;
	return {
		x : e.clientX + sleft,
		y : e.clientY + stop
	}
}
//兼容ie8去掉字符串的左右空格
function myTrim(str){
	//return str.replace(/^\s+/,"");//去掉left
	//return str.replace(/\s+$/,"");//去掉right
	return str.replace(/^\s+|\s+$/g,"");//去掉前后空格
}