function setCookie(key,val,days){
	var nowDate = new Date();//保存本地时间
	nowDate.setDate(nowDate.getDate() + days);//设置过期时间
	document.cookie = key + "=" + val + "; expires=" + nowDate.toString();
}


function getCookie(key){
	var arr = document.cookie.split(";");//获取当前域名的所有的cookie,以;分割成数组;
	for(var i = 0; i < arr.length; i++){//遍历数组，获取所有的值；
		var arr2 = arr[i].split("=");//然后将数组里面的每个键值的＝截取
		if(arr2[0].trim() == key){//最后将左右的空格截取，然后判断当前的键与传入的键是否一致
			return arr2[1];//如果一致，则将这一个返回出来；
		}
	}
	return "";//如果没有找到一致的值，则返回一个空字符串；
}

function removeCookie(key){
	return setCookie(key,1,-1);
}
