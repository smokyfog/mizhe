
window.onload=function(){
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
}//onload结束

//<p >发布时间为<span id="atime01">12:00</span></p>
//<p>剩余<span id="timeOver01">00:00:00</span>公布</p>
//<!--<p>发布时间为<span id="atime02">14:00</span></p>-->
//<!--<p>剩余<span id="timeOver02">00:00:00</span>公布</p>-->
