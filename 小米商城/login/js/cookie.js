//设置cookie函数
function setCookie(key, value, day){
    //获取当前时间
    var now = new Date();
    //设置当前时间的天数+需要增加的天数
    now.setDate(now.getDate()+day);
    document.cookie = key+'='+value+';'+'expires='+ now;
}
//获取指定的cookie的key 获取value
function getCookie(key){
   var arr =  document.cookie.split(';');
    //遍历这个数组
    for(var i=0;i<arr.length;i++){
        //再次将数组分割为数组。第一个值为Key 第二个值为value
       var arr2 =  arr[i].split('=');
       if(arr2[0].trim()==key){ //这个地方可能会有空格
           return arr2[1];
       }
    }
    return;
}
//删除cookie
function removeCookie(key){
    setCookie(key,1,-1);
}