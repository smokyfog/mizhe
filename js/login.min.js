$(function(){
$("#form_btn").click(function(){
		var tel = parseInt($("#form_tel").val());
		var pwd = $("#form_pwd").val();
		var yquserStr = $.cookie("yquser") ? $.cookie("yquser") : "";
		var yquserObj = convertYquserStrToObj(yquserStr);
		
		if(tel in yquserObj && yquserObj[tel] == pwd){
			if($("#rember_me").prop("checked")){
				$.cookie("user",tel,{expires : 7,path:"/"});
			}else{
//				$.cookie("user",tel);
				document.cookie = "user=" + tel;
			}
			alert("登录成功")
			location.href = "index.html";
			
		}else{
			alert("登录失败");
			location.reload(true);
		}
		
	})

function convertYquserStrToObj(yquserStr){
				//17834385969：p-123456,15854807672:qwerty
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				if(!yquserStr){
					return {};
				}
				var goods = yquserStr.split(",");
				var obj = {};
				for(var i = 0; i < goods.length; i ++){
					var data = goods[i].split(":");
					//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					obj[data[0]] = data[1];
				}
				return obj;
}		
	
	
	
	
	
	
})

	


window.onload = function(){
	
	











//	
//	var verifyCode = new GVerify("v_container");
//
//		document.getElementById("form_btn").onclick = function(){
//			var res = verifyCode.validate(document.getElementById("form_yzm").value);
//			if(res ){
//				console.log("验证正确");
//				var tel = parseInt($("#form_tel").val());
//				var pwd = $("#form_pwd").val();
//				var yquserStr = $.cookie("yquser") ? $.cookie("yquser") : "";
//				var yquserObj = convertYquserStrToObj(yquserStr);
//				if(tel in yquserObj){
//					alert("该手机号已经被注册")
//				}else{
//					yquserObj[tel] = pwd;
//				
//				yquserStr = convertObjToYquserStr(yquserObj);
//		//		$.cookie("yquser",yquserStr,{expires : 7,path:"/"});
//				var date = new Date();
//				date.setDate(date.getDate() + 7);
//				document.cookie = "yquser=" + yquserStr + ";expires="+ date +";path="/"";
//				alert("恭喜您注册成功")
//				}
//				
//			}else{
//				console.log("验证错误");
//			}
//		}
//
//
//
////	$("#btn").click(function(){
////		var tel = parseInt($("#form_tel").val());
////		var pwd = $("form_pwd").val();
////		var yquserStr = $.cookie("yquser") ? $.cookie("yquser") : "";
////		var yquserObj = convertYquserStrToObj(yquserStr);
////		if(tel in yquserObj){
////			console.log("该手机号已经被注册")
////		}else{
////			yquserObj[tel] = pwd;
////		
////		yquserStr = convertObjToYquserStr(yquserObj);
//////		$.cookie("yquser",yquserStr,{expires : 7,path:"/"});
////		var date = new Date();
////		date.setDate(date.getDate() + 7);
////		document.cookie = "yquser=" + yquserStr + ";expires="+ date +";path="/"";
////		}
////	})
////	
//
//	

//	
//	
//	
//	function convertObjToYquserStr(obj){
//		//17834385969：p-123456,15854807672:qwerty
//		var yquserStr = "";
//		for(var yquser in obj){
//			if(yquserStr){
//				yquserStr += ",";
//			}
//			yquserStr += yquser + ':' + obj[yquser];
//			
//			
//		}
//		return yquserStr;
//	}
//	
	




















	
}	
