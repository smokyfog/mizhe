
$(function(){
	
	
	

	
	
})

window.onload = function()
{
	
    $(".top_tk").on({
        mouseenter : function () {

            $(".top_tk_c").slideDown(100),
            $(".top_tk_b").slideDown(100),
            $(".top_tk").css("border","1px solid #ccc")
        },
        mouseleave : function () {
            $(".top_tk").css("border","none"),
            $(".top_tk_c").slideUp(100),
            $(".top_tk_b").slideUp(100),
            $(".top_tk_t").css("height","26")
        }
    })
    $(".top_login").click(function(){
    	location.href = "login.html";
    })
    $(".top_zc,.banner_btn1").click(function(){
    	location.href = "register.html";
    })


    $(".top_tk").on({
        mouseover : function () {
            $(this).css("backgroundColor","#eee");
        },
        mouseout : function () {
            $(this).css("backgroundColor","#fafafa");
        }
    },"div")
	
	 $(".top_r_last").on({
	        mouseenter : function () {
	            $(".top_r_gz").slideDown(100),
	            $(".top_r_gz").css("z-index",99999),
				$(".top_r_last").css("border-right","1px solid #ccc")
	        },
	        mouseleave : function () {
	            $(".top_r_gz").slideUp(100),
				$(".top_r_last").css({"border":"none"})
	        }
	})
	 
//	 $(".side_hb,.side_app").mouseover(function(){
//	 	
//	 })

	 	$(".side_hb,.side_app").on({
	 		mouseover : function(){
	 			$(".side_hb").css("background-color","#222");
	 			$('.side_app').css("display","block");
	 		},
	 		mouseout : function(){
	 			$(".side_hb").css("background-color" ,"#fafafa");
	 			$('.side_app').css("display","none");
	 			
	 		}
	 })
	 	

	 
	
	
	$(document).scroll(function(){
		if($(document).scrollTop() >= 180){
			$(".fhtop").css("display","block");
			$(".side_top1").css("display","block");
			$(".side_top").css("display","none");
			$(".side_con").css({"position" : "fixed","top": 0,"left": 50+"%","margin-left" : -648 + "px","z-index":9999});
		}else if($(document).scrollTop() < 180){
			$(".fhtop").css("display","none");
			$(".side_top").css("display","block");
			$(".side_top1").css("display","none");
			$(".side_con").css({"position" : "absolute","top": 0,"left": -145+"px","margin-left" : 0});
		}
	})
	
	$(".fhtop").on({
		click : function(){
		  $('html,body').animate({scrollTop:0},300);
		},
		mouseover : function(){
			$(this).css("background-position","-98px -437px");
			$(this).html("回顶部")
		},
		mouseout : function(){
			$(this).css("background-position","-18px -437px");
			$(this).html("")
		}
	})
	point_item();
function point_item(){
	$(".goods_item").on({
		mouseover : function(){
			$(this).find(".goods_qgrs").hide();
			$(this).find(".goods_qqg").css("display","inline-block");
			$(this).find(".goods_zz").css("display","block");
			$(this).find("img").css("opacity",0.7);
		},
		mouseout : function(){
			$(this).find(".goods_qgrs").show();
			$(this).find(".goods_qqg").css("display","none");
			$(this).find(".goods_zz").css("display","none");
			$(this).find("img").css("opacity",1);
			
		}
	})
}
	
	
	

	
	
	var res = /^1(3|5|6|7|8|9)\d{9}$/;
	var tel = false;
	$("#form_tel").blur(function(){
		if(res.test($(this).val())){
			$(".dl_tel").css("display","none")
			tel = true;
		}else{
			$(".dl_tel").css("display","inline")
			tel = false;
		}
	})
	
	var re1 = /^\w{6,18}$/;
	var pwd = false;
	$("#form_pwd").blur(function(){
		if(re1.test($(this).val())){
			$(".dl_pwd").css("display","none")
			pwd = true;
		}else{
			$(".dl_pwd").css("display","inline")
			pwd = false;
		}
	})
	

	var pwd2 = false;
	$("#form_qrmm").blur(function(){
		if($(this).val() === $("#form_pwd").val()){
			$(".dl_pwd2").css("display","none")
			pwd2 = true;
		}else{
			$(".dl_pwd2").css("display","inline")
			pwd2 = false;
		}
	})
	
	
	
	var verifyCode = new GVerify("v_container");

		document.getElementById("form_btn").onclick = function(){
			var res = verifyCode.validate(document.getElementById("form_yzm").value);
			if(res ){
				console.log("验证正确");
				var tel = parseInt($("#form_tel").val());
				var pwd = $("#form_pwd").val();
				var yquserStr = $.cookie("yquser") ? $.cookie("yquser") : "";
				var yquserObj = convertYquserStrToObj(yquserStr);
				if(tel in yquserObj){
					alert("该手机号已经被注册")
				}else{
					yquserObj[tel] = pwd;
				
				yquserStr = convertObjToYquserStr(yquserObj);
		//		$.cookie("yquser",yquserStr,{expires : 7,path:"/"});
				var date = new Date();
				date.setDate(date.getDate() + 7);
				document.cookie = "yquser=" + yquserStr + ";expires="+ date +";path="/"";
				alert("恭喜您注册成功")
				location.href = "login.html"
				}
				
			}else{
				console.log("验证错误");
			}
		}



//	$("#btn").click(function(){
//		var tel = parseInt($("#form_tel").val());
//		var pwd = $("form_pwd").val();
//		var yquserStr = $.cookie("yquser") ? $.cookie("yquser") : "";
//		var yquserObj = convertYquserStrToObj(yquserStr);
//		if(tel in yquserObj){
//			console.log("该手机号已经被注册")
//		}else{
//			yquserObj[tel] = pwd;
//		
//		yquserStr = convertObjToYquserStr(yquserObj);
////		$.cookie("yquser",yquserStr,{expires : 7,path:"/"});
//		var date = new Date();
//		date.setDate(date.getDate() + 7);
//		document.cookie = "yquser=" + yquserStr + ";expires="+ date +";path="/"";
//		}
//	})
//	

	
	function convertYquserStrToObj(yquserStr){
				//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
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
	
	
	
	function convertObjToYquserStr(obj){
		//17834385969：p-123456,15854807672:qwerty
		var yquserStr = "";
		for(var yquser in obj){
			if(yquserStr){
				yquserStr += ",";
			}
			yquserStr += yquser + ':' + obj[yquser];
			
			
		}
		return yquserStr;
	}
	
	




















	
}	
