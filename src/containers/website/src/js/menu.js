$(function(){
	//菜单
	var screenH = $(window).height();	//屏幕高度
	var screenW = $(window).width();
	screenH = screenH > screenW * 3/2 ? screenH : screenW * 3/2;
	
	var dontShowMenu = false;
	var dontHideMenu = false;
	$("#menu-icon").on("tap click", function(e){
		if(!dontShowMenu){
			dontHideMenu = true;
			$("#menu").height(screenH);
			setTimeout(function() {
				dontHideMenu = false;
			}, 500);
		}
	});
	$("#close-btn").on("tap click", function(e){
		if(!dontHideMenu){
			dontShowMenu = true;
			$("#menu").height(0);
			setTimeout(function() {
				dontShowMenu = false;
			}, 500);
		}
	});
	$("#menu").on("touchmove", function(e){
		return false;
	});
})