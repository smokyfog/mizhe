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
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 





}

