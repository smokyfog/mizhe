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
	 
	
	 
	 
	 var cartStr = $.cookie("cartyq") ? $.cookie("cartyq") : "";
	 var cartObj = convertCartStrToObj(cartStr);
	
	for(var id in cartObj) {
		var good = cartObj[id];
		var str = `
				<li>
					<span class="item_select">
						<input type="checkbox" name="" id="choose" value="" />
					</span>
					
					<span class="item_img">
						<img src="${good.src}"/>
					</span>
					<span class="item_name">
						${good.name}
					</span>
					<span class="item_size">
						${good.size}
					</span>
					<span class="item_price">
						${good.price}
						.00
					</span>
					<span class="item_num">
						<div class="set_num">
							<a href="javasceipt:;" class="del_num num_op"><i class="">-</i></a>
							<input type="text" class="num_box"  value="${good.num}" />
							<a href="javasceipt:;" class="add_num num_op"><i class="">+</i></a>
						</div>
					</span>
					<span class="item_sum">
						${good.price*good.num}
					</span>
					<span class="item_operate">
						<a href="">X</a>
					</span>
				</li>
		
		`
		$(".item_box").append(str);
		
		
	}	


//$(".del_num").click(function(){
//	 		var num = $("#num_box").val();
//	 		if(num <= 1){
//	 			num = 1;
//	 		}else{
//	 			$("#num_box").val(--num);
////	 			$(".xg").hide()
//	 		}
//	 		
//})
$(".del_num").each(function(index,value){
	$(value).click(function(){
		
		var num = $(value).next().val();
	 		if(num <= 1){
	 			num = 1;
	 			$(value).parent().parent().next().html(1 * pri);
	 		}else{
	 			$(value).next().val(--num);
	 			var pri = parseInt($(value).parent().parent().prev().html()) 
		 		$(value).parent().parent().next().html(num * pri);
//	 			$(".xg").hide()
	 		}
	 		var pri = parseInt($(value).parent().parent().prev().html()) 
		 	$(value).parent().parent().next().html(num * pri);
	})
})

$(".add_num").each(function(index,value){
	$(value).click(function(){
		
		var num = $(value).prev().val();
	 		if(num >= 5){
	 			num = 5;
	 			$(value).parent().parent().next().html(5 * pri);
	 		}else{
	 			$(value).prev().val(++num);
	 			var pri = parseInt($(value).parent().parent().prev().html()) 
		 		$(value).parent().parent().next().html(num * pri);
//	 			$(".xg").hide()
	 		}
	 		var pri = parseInt($(value).parent().parent().prev().html()) 
		 		$(value).parent().parent().next().html(num * pri);
	})
})

//	 $(".add_num").click(function(){
//	 		var num = $(".num_box").val();
//	 		if(num >= 5){
//	 			num = 5;
////	 			$(".xg").show();
//	 		}else{
//	 			
//	 			$(".num_box").val(++num);
//	 			
//	 		}
//	 })
$(".num_box").each(function(index,value){
	$(value).blur(function(){
	 		var num = parseInt($(value).val());
//	 		alert(num);
	 		if(num){
	 			if(num <= 1){
		 			num = 1;
//		 			$(".xg").hide()
		 			$(value).val(num);
		 			var pri = parseInt($(value).parent().parent().prev().html()) 
		 			$(value).parent().parent().next().html(num * pri);
		 		}else if(num > 5){
		 			num = 5;
//		 			$(".xg").show();
					$(value).val(num);
					var pri = parseInt($(value).parent().parent().prev().html()) 
		 			$(value).parent().parent().next().html(num * pri);
					alert("每款单尺码最多购买五件")
		 		}else{
//		 				$(".xg").hide()
		 				$(value).val(num);
		 				var pri = parseInt($(value).parent().parent().prev().html()) 
		 				$(value).parent().parent().next().html(num * pri);
		 		}
	 		}else{
	 			$(value).val(1);
	 			var pri = parseInt($(value).parent().parent().prev().html()) 
		 			$(value).parent().parent().next().html(pri);
	 		}
	 		
	 })
	
})
//	 $(".num_box").blur(function(){
//	 		var num = parseInt($("#num_box").val());
//	 		if(num){
//	 			if(num <= 1){
//		 			num = 1;
////		 			$(".xg").hide()
//		 			$(".num_box").val(num);
//		 		}else if(num >= 5){
//		 			num = 5;
////		 			$(".xg").show();
//		 			$(".num_box").val(num);
//		 		}else{
////		 				$(".xg").hide()
//		 				$(".num_box").val(num);
//		 		}
//	 		}else{
//	 			$(".num_box").val(1);
//	 		}
//	 		
//	 })








}

$(function(){
	
	
})





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