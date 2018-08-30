window.onload = function(){
	
	//倒计时
	function aimsTime(aims,ele){
		var now = new Date();//当前时间
		var isjx=0;
		function GetServerTime(aimsTime){
				var d= now.getYear()+"/"+now.getMonth()+"/"+now.getDate()+ ' ' + aimsTime;//设置目标时间为节点
				var urodz = new Date(d); 
				now.setTime(now.getTime()+250); 
				days = (urodz - now) / 1000 / 60 / 60 / 24; 
				daysRound = Math.floor(days); 
				hours = (urodz - now) / 1000 / 60 / 60 - (24 * daysRound); 
				hoursRound = Math.floor(hours); 
				minutes = (urodz - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound); 
				minutesRound = Math.floor(minutes); 
				seconds = (urodz - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound); 
				secondsRound = Math.round(seconds);			 
				if((hoursRound==0 && minutesRound==0 && secondsRound==0)){//都等于0 说明过了目标时间
					isjx=1;
				}
				if(hoursRound < 10) hoursRound = '0'+ hoursRound;	//按照两位数格式显示时间
				if(minutesRound < 10) minutesRound = '0'+ minutesRound;
				if(secondsRound < 10) secondsRound = '0'+ secondsRound;
				//判断今天还是明天
				if(isjx==0 && (parseFloat(now.toTimeString().substr(0,2)+ now.toTimeString().substr(3,3).substr(0,2)+now.toTimeString().substr(6,7) )<=162959)){
				   document.getElementById(ele).innerHTML =  hoursRound + "小时" + minutesRound + "分" + secondsRound + '秒'; 
				}else  {
				   document.getElementById(ele).innerHTML = hoursRound + "小时" + minutesRound + "分" + secondsRound + '秒'; 
				}
		}
	 setInterval(function(){ GetServerTime(aims)},250);
	}
	function getOverTime(timeEle){
		return document.getElementById(timeEle).innerHTML;
	}	
	aimsTime(getOverTime('atime01'),'timeOver01')
	
	
	
	
	
	
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
	
	
	
	
}


	
	

	
