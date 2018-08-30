window.onload = function(){
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

	 
	 $(".img_mask").on({
	 	mouseover : function(){
			$(".big_box").show();
			$(".float_layer").show();
		},
		mouseout : function(){
			$(".big_box").hide();
			$(".float_layer").hide();
		},
		mousemove : function(e){
			var l = e.pageX - $(".mete_top").offset().left - ($(".float_layer").width() / 2)
	    var t = e.pageY - $(".mete_top").offset().top - ($(".float_layer").height() / 2)
	    if (l < 0) {
	        l = 0
	    }
	    if (l > $(this).width() - $(".float_layer").width()) {
	        l = $(this).width() - $(".float_layer").width()
	    }
	    if (t < 0) {
	        t = 0
	    }
	    if (t > $(this).height() - $(".float_layer").height()) {
	        t = $(this).height() - $(".float_layer").height()
	    }
	
	    $(".float_layer").css({
	        "left": l,
	        "top": t
	    })
	    var pX = l / ($(".img_mask").width() - $(".float_layer").width())
	    var pY = t / ($(".img_mask").height() - $(".float_layer").height())
	    $(".big_box img").css({
	        "left": -pX * ($(".big_box img").width() - $(".big_box").width()),
	        "top": -pY * ($(".big_box img").height() - $(".big_box").height())
	    })
		}
		
	 })
	 
	 
	 $(".del_num").click(function(){
	 		var num = $("#num_box").val();
	 		if(num <= 1){
	 			num = 1;
	 		}else{
	 			$("#num_box").val(--num);
	 			$(".xg").hide()
	 		}
	 		
	 })
	 $(".add_num").click(function(){
	 		var num = $("#num_box").val();
	 		if(num >= 5){
	 			num = 5;
	 			$(".xg").show();
	 		}else{
	 			
	 			$("#num_box").val(++num);
	 			
	 		}
	 })
	 
	 $(".num_box").blur(function(){
	 		var num = parseInt($("#num_box").val());
	 		if(num){
	 			if(num <= 1){
		 			num = 1;
		 			$(".xg").hide()
		 			$("#num_box").val(num);
		 		}else if(num >= 5){
		 			num = 5;
		 			$(".xg").show();
		 			$("#num_box").val(num);
		 		}else{
		 				$(".xg").hide()
		 				$("#num_box").val(num);
		 		}
	 		}else{
	 			$("#num_box").val(1);
	 		}
	 		
	 })
	 
$("#aside").on({
		click : function(){
		 
		},
		mouseover : function(){
			$("#aside").css("opacity",1);
			$(this).children().css("color","red");
		},
		mouseout : function(){
			$("#aside").css("opacity",0.75);
			$(this).children().css("color","#a1a1a1");
		}
	},"li")	 

	 
	 
	 
$(".aside_go_top").on({
		click : function(){
		  $('html,body').animate({scrollTop:0},300);
		},
		mouseover : function(){
			
		},
		mouseout : function(){
			
		}
	})	 

$(".kefu_talk").on({
	mouseover : function(){
		$(this).html("客服在线");
		$(this).css({"background":"#ff7424","color":"#fff","font-size":12,"line-height": "44px","text-align":"center"});
	},
	mouseout : function(){
//		$(this).html("<a href="javascript:;" class="iconfont icon-kefu1 aside_kefu"></a>");
		$(this).html('<a href="javascript:;" class="iconfont icon-kefu1 aside_kefu"></a>');
		$(this).css({"background":"#fff","color":"#a1a1a1"})
	}
	
})

$(".aside_app").on({
	mouseover : function(){
		$(".app_box").show();
	},
	mouseout : function(){
		$(".app_box").hide();
	}
})
	 
	 


$(".buy_btn").click(function(e){
		var goodId = $(".colorSelect").attr("link");
		var goodName = $('.colorSelect').children().first().val();
		var goodPrice =  parseInt($(".colorSelect").attr("price"));
		var goodSize = $(".sizeSelect").children().children("span").html();
		var goodSrc = $('.colorSelect').children("a").children().first().children("img").attr("src");
		var goodNum = parseInt($(".set_num input").val());
		var id = goodId + goodSize;
		var cartStr = $.cookie("cartyq") ? $.cookie("cartyq") : "";
		var cartObj = convertCartStrToObj(cartStr);
		if(id in cartObj){
				if(cartObj[id].num + goodNum >= 5){
						if(confirm("购物车单件单尺码最多不能超过五件。是否查看购物车？")){
							location.href = "cart.html";						}
				}else{
					cartObj[id].num += goodNum;
					fly();
				}
				
		}else{
			cartObj[id] = {
				name : goodName,
				price : goodPrice,
				size : goodSize,
				src : goodSrc,
				num : goodNum
			};
			fly();
		}
		cartStr = convertObjToCartStr(cartObj);
//		$.cookie("cartyq",cartStr,{expires : 7,path:"/"});
		var date = new Date();
		date.setDate(date.getDate() + 7);
		document.cookie = "cartyq=" + cartStr + ";expires="+ date +";path="/"";
		
		
		
		
	
		
})

//飞入购物车的效果
		function fly(){
			var cloneImg = $('.colorSelect').children("a").children().first().children("img").clone().css({width:50,height:50});
					cloneImg.fly({
						start : {
							top : $('.colorSelect').children("a").children().first().children("img").offset().top,
							left :$('.colorSelect').children("a").children().first().children("img").offset().left
						
						},
						end :{
							top : $(".aside_shopping").offset().top,
							left : $(".aside_shopping").offset().left,
							width:0,
							height:0
						},
						autoPlay : true,
						onEnd : function(){
							cloneImg.remove();
						}
					})
					
		}

	function convertCartStrToObj(cartStr){
				//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
//				"img1,碎花衬衫,59，S,images/mkmin.jpg,1:img2,韩范衬衫,69，S,images/lsmin.jpg,2"
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				//img1,碎花衬衫,56.00,XL,images/mkmin.jpg,2
				if(!cartStr){
					return {};
				}
				var goods = cartStr.split(":");
				var obj = {};
				for(var i = 0; i < goods.length; i ++){
					var data = goods[i].split(",");
					console.log(data);
					obj[data[0]] = {
						name : data[1],
						price : parseFloat(data[2]),
						size : data[3],
						src : data[4],
						num : parseInt(data[5])
					}
				}
				return obj;
		}

function convertObjToCartStr(obj){
					/* {
					 * 	img1 : {
					 * 		name : "碎花衬衫",
								price : 59.00,
								size : S,
								src : img/2.jpg,
								num : 1
					 * },
					 * sp2 :{
						  	name : "碎花衬衫",
								price : 59.00,
								size : S,
								src : img/2.jpg,
								num : 1
					 * }
					 * }
					 */
					var cartStr = "";
					//遍历对象
					for(var id in obj){
						if(cartStr){
							cartStr += ":";
						}
						//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
						cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].size + "," + obj[id].src + "," + obj[id].num;
					}
					return cartStr;
			}

	 
	 
	 
	
	
	
}




