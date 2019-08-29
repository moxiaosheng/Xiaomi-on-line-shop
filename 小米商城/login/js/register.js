
var zhFlag = false;
var mmFlag = false;
var yueFlag = false;
var zh = document.getElementById('zh')

var mm = document.getElementById('mm')

var zhReg = /^1[3-9]\d{9}$/;
var mmReg = /^[\d]{6,}$/;

zh.onblur = function() {
	if (checkZhName()) {
		zhFlag = true
	} else {
		zhFlag = false
	}
}

function checkZhName() {
	var zVal = zh.value;
	if (zhReg.test(zVal)) {
		return true;
	}
	return false;
}

mm.onblur = function() {
	if (checkMmName()) {
		mmFlag = true
	} else {
		mmFlag = false
	}
}

function checkMmName() {
	var mVal = mm.value;
	if (mmReg.test(mVal)) {
		return true;
	}
	return false;
}
var yue = document.getElementById('yue');
yue.onclick = function(){
	yueFlag = true
}
var next = document.getElementById('next');

next.onclick = function() {
	if (mmFlag && zhFlag && yueFlag) {
		if (localStorage.getItem($('#zh').val())) {
			alert('该账号已经被注册');
			return;
		}
		alert('恭喜你:' + $('#zh').val() + '注册成功')
		window.location.href = 'login.html';
		return true;
	} else {
		alert("请正确填写手机号和密码")
		return false;

	}
}
