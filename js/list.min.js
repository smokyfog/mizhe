function load(){
	$.getJSON('json/nvzhuang.json',function(arr){
					for(var i = 0,len = arr.length;i < len;i ++){
						$('.goods_show').append(`
							<div class="goods_item">
								<a href="">
									<dl>
										<dt>
											<img src="${arr[i].src}" alt="${arr[i].alt}"/>
											<div class="goods_zz">
												${arr[i].zz}
											</div>
										</dt>
										<dd>
											<span class="goods_money"><span class="goods_min">￥</span>${arr[i].big}<span class="goods_cen">${arr[i].tiny}</span></span>
											<div class="goods_dz">
												<span class="goods_dz_t">${arr[i].dz}</span>
												<span class="goods_jg">${arr[i].price}</span>
											</div>
											<span class="goods_qgrs">${arr[i].num}</span>
											<span class="goods_qqg">去抢购</span>
										</dd>
									</dl>
								</a>
							</div>
						`);
					}
		})




}
	

$.getJSON('json/nvzhuang.json',function(arr){
					for(var i = 0,len = arr.length;i < len;i ++){
						$('.goods_show').append(`
							<div class="goods_item">
								<a href="">
									<dl>
										<dt>
											<img src="${arr[i].src}" alt="${arr[i].alt}"/>
											<div class="goods_zz">
												${arr[i].zz}
											</div>
										</dt>
										<dd>
											<span class="goods_money"><span class="goods_min">￥</span>${arr[i].big}<span class="goods_cen">${arr[i].tiny}</span></span>
											<div class="goods_dz">
												<span class="goods_dz_t">${arr[i].dz}</span>
												<span class="goods_jg">${arr[i].price}</span>
											</div>
											<span class="goods_qgrs">${arr[i].num}</span>
											<span class="goods_qqg">去抢购</span>
										</dd>
									</dl>
								</a>
							</div>
						`);
					}
})





	
	
