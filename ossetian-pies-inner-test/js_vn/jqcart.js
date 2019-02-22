;(function($){
	'use strict';
	var DB,
	cartData,
	items,
	itemData,
	orderPreview='',
	totalCnt=0,
	visibleLabel=false,
	label=$('<div class="result">Итого: <b class="summ">0</b> руб.</div><a href="#" class="button">Корзина</a>'),
	modal='<div class="jqcart-layout"><div class="jqcart-checkout">123</div></div>',
	orderform='<p class="jqcart-cart-title">Контактная информация:</p><form class="jqcart-orderform"><div><label>ФИО:</label><input type="text" name="user_name"></div><div><label>Телефон:</label><input type="tel" name="user_phone"></div><div><label>Адрес:</label><input type="text" name="user_address"></div><div><label>Коментарий:</label><textarea name="user_comment"></textarea></div><div><input type="submit" value="Отправить заказ"><input type="reset" value="Вернуться к покупкам"></div></form>';
	var opts={
		buttons:'.add_item',
		oneclickbuy:'.button-click-buy',
		cartLabel:'body',
		visibleLabel:false,
		openByAdding:false,
		handler:'/',
		currency:'$'};
	var actions={
		init:function(o){
			var style = document.createElement('link');
		    style.rel   = 'stylesheet';
		    style.type  = 'text/css';
		    style.href  = '/basket/static/css/main.css';
		    document.head.appendChild(style);
			try{
				var x='test-localstorage-'+Date.now();
				localStorage.setItem(x,x);
				var y=localStorage.getItem(x);
				localStorage.removeItem(x);
				if(y!==x){
					throw new Error();
				}
				DB=localStorage;
			}catch(e){
				DB=new MemoryStorage('my-app');
			};
			$.ajax ({
		        url: '/datas/',
		        type: 'post',
		        dataType: 'json',
		        data: {param:'getdatas'},
		        error: function() {
		          console.log('Error');
		        },
		        success: function(resp) {
		          if (resp) {
		            DB.setItem('jqcart_r165783987', resp); 
		            actions.recalcTotal();
		          }        
		        },
		    });
			opts=$.extend(opts,o);
			cartData=actions.getStorage();
			if(cartData!==null&&Object.keys(cartData).length){
				for(var key in cartData){
					if(cartData.hasOwnProperty(key)){
						totalCnt+=cartData[key].count;
					}
				}
				visibleLabel=true;
			}
			label.prependTo(opts.cartLabel)[visibleLabel||opts.visibleLabel?'show':'hide']()
			.on('click',actions.openCart).find('.jqcart-total-cnt').text(totalCnt);
			$(document)
				.on('click',opts.buttons,actions.addToCart)
				.on('click',opts.oneclickbuy,actions.add1clickToCart)
				.on('click','.jqcart-layout',function(e){
					if(e.target===this){actions.hideCart();}
				})
				.on('click','.jqcart-incr',actions.changeAmount)
				.on('input keyup','.jqcart-amount',actions.changeAmount)
				.on('click','.calc.d-c-js button',actions.changeAmount)
				.on('click','.calc.m-c-js button',actions.changeAmount)
				.on('click','.jqcart-del-item',actions.delFromCart)
				.on('click','button.exit',actions.delFromCart)
				.on('click','button.exit-mobile',actions.delFromCart)
				.on('submit','.jqcart-orderform',actions.sendOrder)
				.on('submit','.my-basket__form',actions.sendOrder)
				.on('reset','.jqcart-orderform',actions.hideCart)
				.on('click','.jqcart-print-order',actions.printOrder)
				.on('click','.my-inner-cart__prices-select-calculate-add',actions.addToCart);
			if(actions.getStorage())actions.recalcTotal();
			$.ajax({
		        url: '/blocks/pies/',
		        dataType: 'json',
		        method: 'post',
		        data: {method:'list'},
		        success: function(resp) {
		          items = resp;
		        }        
		    });
		    return false;
		},
		addToCart:function(e){
			e.preventDefault();
			if ($(this).hasClass('my-inner-cart__prices-select-calculate-add')) {
				console.log('Hello');
				var id,cnt,selectedWeight,itemData={};
				id = $(this).parents('.my-inner-cart').data('id');
				cnt = $(this).parents('.my-inner-cart').find('.my-inner-cart__prices-select-calculate-val').text()*1;
				if(typeof id==='undefined'){
					console.log('Отсутствует ID товара');
					return false;
				}
				cartData=actions.getStorage()||{};
				$(this).parents('.my-inner-cart').find('.my-inner-cart__prices-select-items').each(function(n){
						if ($(this).hasClass('my-inner-cart__prices-select-items--check')) {							
							selectedWeight = 800 + (3-n)*200;
							itemData.id = id + (3-n)+ 1 + '';
						}
					});	
				if(cartData.hasOwnProperty(itemData.id)){
					itemData.count=cnt;
					itemData.cnt = cnt;
					itemData.img = '/'+items[id].img.src;
					/*itemData.alt = items[id].img.alt;	*/				
					itemData.title = items[id].name + ' ' + selectedWeight + ' г.';
					itemData.price = items[id].prices[selectedWeight];
					cartData[itemData.id].count+=cnt;
				}else{
					itemData.count=cnt;
					itemData.cnt = cnt;
					itemData.img = '/'+items[id].img.src;
					/*itemData.alt = items[id].img.alt;	*/				
					itemData.title = items[id].name + ' ' + selectedWeight + ' г.';
					itemData.price = items[id].prices[selectedWeight];
					cartData[itemData.id] = itemData;
				}
				actions.setStorage(cartData);
				actions.changeTotalCnt(itemData.cnt);
				actions.recalcTotal();
				actions.showProcess(itemData);
				label.show();
				if(opts.openByAdding){
					actions.openCart();
				}
			}
			else {
				itemData=$(this).data();
				if(typeof itemData.id==='undefined'){
					console.log('Отсутствует ID товара');
					return false;
				}
				cartData=actions.getStorage()||{};
				if(cartData.hasOwnProperty(itemData.id)){
					cartData[itemData.id].count+=itemData.cnt;
				}else{
					itemData.count=itemData.cnt;cartData[itemData.id]=itemData;
				}
				actions.setStorage(cartData);
				actions.changeTotalCnt(itemData.cnt);
				actions.recalcTotal();
				actions.showProcess(itemData);
				label.show();
				if(opts.openByAdding){
					actions.openCart();
				}
			}
			return false;
		},
		add1clickToCart:function(e){
			e.preventDefault();
			itemData=$(this).parents('tr.tr').find('a.button.button-quick-buy.short').data();
			var weight=$(this).data('weight');
			var offset=2;
			if(weight==1200)offset=3;
			else if(weight==1400)offset=4;
			itemData.id=Math.floor(itemData.id*1/1000)*1000+offset;
			itemData.count=1;
			itemData.cnt=1;
			itemData.title=$(this).parents('tr.tr').find('td').first().text()+weight+" г.";
			itemData.price=itemData.variant[weight];
			if(typeof itemData.id==='undefined'){
				console.log('Отсутствует ID товара');
				return false;
			}
			cartData=actions.getStorage()||{};
			if(cartData.hasOwnProperty(itemData.id)){
				cartData[itemData.id].count+=itemData.cnt;
			}
			else{
				itemData.count=itemData.cnt;cartData[itemData.id]=itemData;
			}
			actions.setStorage(cartData);
			actions.changeTotalCnt(itemData.cnt);
			actions.recalcTotal();
			actions.showProcess(itemData);
			itemData.id=Math.floor(itemData.id*1/1000)*1000;
			label.show();
			if(opts.openByAdding){
				actions.openCart();
			}
			return false;
		},
		delFromCart:function(){
			var $that=$(this),
			line=$that.parents('.cart-tr'),
			itemId=line.data('id');
			cartData=actions.getStorage();
			actions.changeTotalCnt(-cartData[itemId].count);
			delete cartData[itemId];
			actions.setStorage(cartData);
			line.remove();
			actions.recalcSum();
			return false;
		},
		changeAmount:function(){
			var $that=$(this),
			//manually=$that.hasClass('jqcart-amount'),
			//amount=+(manually?$that.val():$that.data('incr')),
			amount = $that.siblings('p').text()*1;
			if ($that.hasClass('minus')) {
				amount--;
			}
			else {
				amount++;
			}
			var itemId=$that.parents('tr.cart-tr').data('id');
			cartData=actions.getStorage();
			cartData[itemId].count=(amount<1)?1:amount;
			$that.siblings('p').text(cartData[itemId].count);
			$that.parents('.cart-tr').find('.calc.m-c-js p').text(cartData[itemId].count);
			$that.parents('.cart-tr').find('.calc.d-c-js p').text(cartData[itemId].count);
			/*if(manually){
				cartData[itemId].count=isNaN(amount)||amount<1?1:amount;
			}
			else{
				cartData[itemId].count+=amount;
			}
			if(cartData[itemId].count<1){
				cartData[itemId].count=1;
			}
			if(manually){
				$that.val(cartData[itemId].count);
			}
			else{
				$that.siblings('input').val(cartData[itemId].count);
			}*/
			actions.setStorage(cartData);
			actions.recalcSum();
			return false;
		},
		recalcSum:function(){
			var subtotal=0,
			amount,
			sum=0,
			totalCnt=0;
			$('.cart-tr').each(function(){
				amount=+$('.calc.d-c-js p',this).text()*1;
				sum=Math.ceil((amount*$('.d-p-js span',this).text())*100)/100;
				$('.d-s-js span',this).text(sum);
				$('.m-s-js span',this).text(sum);
				subtotal=Math.ceil((subtotal+sum)*100)/100;totalCnt+=amount;
			});
			$('.sum span').text(subtotal);
			$('.basket b.summ').text(subtotal);
			$('.jqcart-total-cnt').text(totalCnt);
			if(totalCnt<=0){actions.hideCart();
				if(!opts.visibleLabel){
					label.hide();
				}
			}
			return false;
		},
		recalcTotal:function(){
			var subtotal=0,
			key,
			sum=0;
			cartData=actions.getStorage();
			for(key in cartData){
				if(cartData.hasOwnProperty(key)){
					sum=Math.ceil((cartData[key].count*cartData[key].price)*100)/100;
					subtotal=Math.ceil((subtotal+sum)*100)/100;
				}
			}
			$('.basket b.summ').text(subtotal);
		},
		changeTotalCnt:function(n){
			var cntOutput=$('.jqcart-total-cnt');
			cntOutput.text((+cntOutput.text()+n));
			return false;
		},
		openCart:function(){
			var subtotal=0,
			cartHtml='';
			cartData=actions.getStorage();
			orderPreview='<p class="jqcart-cart-title">Корзина</p><div class="jqcart-table-wrapper"><div class="jqcart-manage-order"><div class="jqcart-thead"><div>ID</div><div></div><div>Наименование</div><div>Цена</div><div>Кол-во</div><div>Сумма</div><div></div></div>';
			var key,
			sum=0;
			/*for(key in cartData){
				if(cartData.hasOwnProperty(key)){
					sum=Math.ceil((cartData[key].count*cartData[key].price)*100)/100;
					subtotal=Math.ceil((subtotal+sum)*100)/100;
					orderPreview+='<div class="jqcart-tr" data-id="'+cartData[key].id+'">';
					orderPreview+='<div class="jqcart-small-td">'+cartData[key].id+'</div>';
					orderPreview+='<div class="jqcart-small-td jqcart-item-img"><img src="'+cartData[key].img+'" alt=""></div>';
					orderPreview+='<div class="jqcart-name">'+cartData[key].title+'</div>';
					orderPreview+='<div class="jqcart-price">'+cartData[key].price+'</div>';
					orderPreview+='<div><span class="jqcart-incr" data-incr="-1">&#8211;</span><input type="text" class="jqcart-amount" value=""><span class="jqcart-incr" data-incr="1">+</span></div>';
					orderPreview+='<div class="jqcart-sum">'+sum+' '+opts.currency+'</div>';
					orderPreview+='<div class="jqcart-small-td"><span class="jqcart-del-item"></span></div>';
					orderPreview+='</div>';
				}
			}*/
			orderPreview+='</div></div>';
			orderPreview+='<div class="jqcart-subtotal">Итого: <strong>'+subtotal+'</strong> '+opts.currency+'</div>';
			cartHtml=subtotal?(orderPreview+orderform):'<h2 class="jqcart-empty-cart">Корзина пуста</h2>';
			orderPreview = '<div class="my-basket">'+
								'<div class="container">'+
									'<h1>Ваша корзина</h1>'+
										'<div class="my-basket__table">'+
											'<table>'+
												'<thead>'+
													'<tr class="head">'+
														'<th>ID</th>'+
														'<th>Наименование</th>'+
														'<th>Цена</th>'+
														'<th>Кол-во</th>'+
														'<th>Сумма</th>'+
													'</tr>'+
												'</thead>'+
												'<tbody>';
			for(key in cartData){
				if(cartData.hasOwnProperty(key)){
					sum=Math.ceil((cartData[key].count*cartData[key].price)*100)/100;
					subtotal=Math.ceil((subtotal+sum)*100)/100;
					orderPreview +=					
													'<tr class="cart-tr" data-id="'+cartData[key].id+'">'+
														'<td>'+
															'<p class="d-w-js">'+cartData[key].id+'</p>'+
														'</td>'+
														'<td>'+
															'<div class="wrap">'+
																'<img src="'+cartData[key].img+'" alt="Картинка">'+
																'<p>'+cartData[key].title+'</p>'+
																'<div class="mobile">'+
																	'<button class="exit-mobile" type="button"></button>'+
																	'<div class="weight">'+
																		'<p>ID</p>'+
																		'<p class="m-w-js"></p>'+
																	'</div>'+
																	'<div class="basic-price">'+
																		'<p>Цена</p>'+
																		'<p class="m-p-js"><span>'+cartData[key].price+'</span>руб.</p>'+
																	'</div>'+
																	'<div class="calc-wrap">'+
																		'<p class="tit">Кол-во</p>'+
																		'<div class="calc m-c-js">'+
																			'<button class="minus" type="button"></button>'+
																			'<p>'+cartData[key].count+'</p>'+
																			'<button class="plus" type="button"></button>'+
																		'</div>'+
																	'</div>'+
																	'<div class="total-price">'+
																		'<p>Сумма</p>'+
																		'<p class="m-s-js"><span>'+sum+'</span>руб.</p>'+
																	'</div>'+
																'</div>'+
															'</div>'+
														'</td>'+
														'<td>'+
															'<p class="d-p-js"><span>'+cartData[key].price+'</span>руб.</p>'+
														'</td>'+
														'<td>'+
															'<div class="calc d-c-js">'+
																'<button class="minus" type="button"></button>'+
																'<p>'+cartData[key].count+'</p>'+
																'<button class="plus" type="button"></button>'+
															'</div>'+
														'</td>'+
														'<td>'+
															'<p class="d-s-js"><span>'+sum+'</span>руб.</p>'+
															'<button class="exit" type="button">'+
																'<svg class="icon" width="21.29px" height="24px">'+
																	'<use xlink:href="#delete"></use>'+
																'</svg>'+
															'</button>'+
														'</td>'+
													'</tr>';
				}
			}	

			orderPreview +=				'</tbody>'+
											'</table>'+
											'<div class="row"><a id="morePies" href="#">Вернуться к покупкам</a>'+
												'<div class="total">'+
													'<p class="tit">Итого к оплате:</p>'+
													'<p class="sum"><span>' + subtotal + '</span>руб.</p>'+
												'</div>'+
											'</div>'+
										'</div>'+
										'<form class="my-basket__form" action="action.php">'+
											'<p>Контактная информация:</p>'+
											'<ul>'+
												'<li>'+
													'<input type="text" placeholder="Имя">'+
													'<span class="i">'+
														'<svg class="icon" width="20.79px" height="24px">'+
															'<use xlink:href="#male"></use>'+
														'</svg>'+
													'</span>'+
												'</li>'+
												'<li>'+
													'<input class="tel" type="tel">'+
													'<span class="i">'+
														'<svg class="icon" width="24px" height="24px">'+
															'<use xlink:href="#call"></use>'+
														'</svg>'+
													'</span>'+
												'</li>'+
												'<li>'+
													'<input type="text" placeholder="Адрес">'+
													'<span class="i">'+
														'<svg class="icon" width="24px" height="23.54px">'+
															'<use xlink:href="#placeholder"></use>'+
														'</svg>'+
													'</span>'+
												'</li>'+
												'<li>'+
													'<input type="text" placeholder="Комментарий">'+
                                    			'</li>'+
                                    			'<li>'+
                                    				'<button type="submit">'+
                                    					'<span>Отправить заказ</span>'+
                                    				'</button>'+
                                    			'</li>'+
                                    		'</ul>'+
                                    		'<div class="privacy">'+
                                    			'<label>'+
                                    				'<input type="checkbox" checked>'+
                                    				'<span class="indicator">'+
                                    					'<span class="i">'+
	                                    					'<svg class="icon" width="12px" height="9.14px">'+
	                                    						'<use xlink:href="#check-symbol"></use>'+
	                                    					'</svg>'+
	                                    				'</span>'+
	                                    			'</span>'+
	                                    			'<span>С условиями конфендициальности ознакомлен</span>'+
	                                    		'</label>'+
	                                    	'</div>'+
	                                    '</form>'+
	                                '</div>'+
	                            '</div>'+
	                            '<svg xmlns="http://www.w3.org/2000/svg" style="border: 0 !important; clip: rect(0 0 0 0) !important; height: 1px !important; margin: -1px !important; overflow: hidden !important; padding: 0 !important; position: absolute !important; width: 1px !important;" class="root-svg-symbols-element">'+
        							'<symbol id="call" viewBox="0 0 24 24">'+
        								'<title>call</title>'+
        								'<g class="cls-2">'+
        									'<path class="cls-3" d="M23.37 18.51l-4.86-3.24a1.42 1.42 0 0 0-1.9.31L15.2 17.4a.6.6 0 0 1-.78.16l-.27-.15a16.27 16.27 0 0 1-4.24-3.33 16.33 16.33 0 0 1-3.32-4.23l-.15-.27a.61.61 0 0 1 .16-.78l1.82-1.41a1.42 1.42 0 0 0 .31-1.9L5.49.63A1.41 1.41 0 0 0 3.58.2l-2 1.22a2.87 2.87 0 0 0-1.33 1.7c-.73 2.67-.18 7.26 6.59 14C12.23 22.55 16.24 24 19 24a7.09 7.09 0 0 0 1.88-.25 2.86 2.86 0 0 0 1.7-1.31l1.22-2a1.41 1.41 0 0 0-.43-1.93zM23.11 20l-1.22 2a2.07 2.07 0 0 1-1.22.95c-2.46.68-6.76.12-13.26-6.39S.34 5.79 1 3.33a2.07 2.07 0 0 1 1-1.22L4 .89a.61.61 0 0 1 .83.19l1.75 2.64 1.48 2.21a.62.62 0 0 1-.13.82L6.11 8.17A1.4 1.4 0 0 0 5.73 10l.14.26a17 17 0 0 0 3.47 4.42 17 17 0 0 0 4.42 3.47l.26.14a1.4 1.4 0 0 0 1.8-.37l1.41-1.82a.62.62 0 0 1 .82-.13l4.86 3.24a.61.61 0 0 1 .2.79zM13.6 4a6.81 6.81 0 0 1 6.8 6.8.4.4 0 0 0 .8 0 7.61 7.61 0 0 0-7.6-7.6.4.4 0 1 0 0 .8z"/>'+
						                    '<path class="cls-3" d="M13.6 6.4a4.4 4.4 0 0 1 4.4 4.4.4.4 0 0 0 .8 0 5.21 5.21 0 0 0-5.2-5.2.4.4 0 1 0 0 .8z" />'+
                    						'<path class="cls-3" d="M13.6 8.8a2 2 0 0 1 2 2 .4.4 0 1 0 .8 0A2.8 2.8 0 0 0 13.6 8a.4.4 0 1 0 0 .8z" />'+
                						'</g>'+
                					'</symbol>'+
                					'<symbol id="check-symbol" viewBox="0 0 12 9.14">'+
                						'<title>check-symbol</title>'+
                						'<path class="cls-1" d="M3.82 7.23L1 4.37l-1 1 3.82 3.82L12 .96l-1-1z" />'+
                					'</symbol>'+
                					'<symbol id="delete" viewBox="0 0 21.29 24">'+
                						'<title>delete</title>'+
                						'<path class="cls-1" d="M19.78 6.77H4.22a.62.62 0 0 0-.46.15.52.52 0 0 0-.15.46L5.2 21.32a3 3 0 0 0 3 2.68H16a3 3 0 0 0 3.08-2.77L20.4 7.32a.52.52 0 0 0-.15-.4.62.62 0 0 0-.47-.15zm-1.94 14.4a1.78 1.78 0 0 1-1.84 1.6H8.25a1.75 1.75 0 0 1-1.82-1.57L4.89 8h14.22zM22 2.77h-6.31v-1A1.72 1.72 0 0 0 14 0h-4a1.72 1.72 0 0 0-1.69 1.69v1.09H2A.62.62 0 0 0 2 4h20a.62.62 0 1 0 0-1.23zm-7.57-1v1H9.54v-1a.49.49 0 0 1 .46-.54h4a.49.49 0 0 1 .53.46.48.48 0 0 1-.07.09z" transform="translate(-1.35)" />'+
            						'</symbol>'+
            						'<symbol id="male" viewBox="0 0 20.79 24">'+
            							'<title>male</title>'+
            							'<g class="cls-2">'+
            								'<path class="cls-3" d="M13.99 16.8h-1.2v-1.27a6 6 0 0 0 2.68-4c.82-.24 1.31-1.45 1.31-2.36a1.44 1.44 0 0 0-1-1.51 3.59 3.59 0 0 0-3.19-6 5.2 5.2 0 0 0-8 6.62 1.52 1.52 0 0 0-.61 1.32c0 .94.53 2.21 1.41 2.38a6 6 0 0 0 2.59 3.54v1.28H6.79a6.79 6.79 0 0 0-6.8 6.8.4.4 0 0 0 .39.4h20a.4.4 0 0 0 .4-.4 6.8 6.8 0 0 0-6.79-6.8zm-5.2.67V16h.11l.47.17.18.06a6.16 6.16 0 0 0 .65.15h.37a6.14 6.14 0 0 0 .65-.15l.18-.06.48-.17h.11v1.51l-1 1.33h-1.2zm6.8-7v-2c.27.1.4.34.4.74a2.4 2.4 0 0 1-.41 1.29zM8.79.82a4.4 4.4 0 0 1 3.35 1.55.4.4 0 0 0 .39.13 2.8 2.8 0 0 1 2.76 4.57v-.06l-.18-.27-.06-.08-.29-.35-.07-.08-.31-.32-.11-.1-.43-.39a14 14 0 0 0-1.21-.93.4.4 0 0 0-.46 0l-2.2 1.65a5.2 5.2 0 0 1-3.1 1.06h-.33l-.21.05-.21.09a1.58 1.58 0 0 0-.74.66A4.4 4.4 0 0 1 8.79.82zm-4 8.79a.7.7 0 0 1 .34-.71l.06.1v1.97a2.4 2.4 0 0 1-.4-1.36zm1.31 1.91a5 5 0 0 1-.11-1.05V8.8a.76.76 0 0 1 0-.22.78.78 0 0 1 .1-.2.8.8 0 0 1 .16-.16.81.81 0 0 1 .2-.1.79.79 0 0 1 .33-.12h.09a6 6 0 0 0 3.6-1.24l1.91-1.45c.21.15.55.41.9.71l.3.26a3.84 3.84 0 0 1 1.17 1.56.71.71 0 0 1 0 .17v2.45a4.62 4.62 0 0 1 0 .69A5.21 5.21 0 0 1 12.19 15a5.08 5.08 0 0 1-1.74.63h-.07a5.2 5.2 0 0 1-4.23-4.08zm-3.55 7.84a6 6 0 0 1 4.24-1.76h1.2a.4.4 0 0 0 .08.24l1.09 1.46-.71 3.9H.81a6 6 0 0 1 1.74-3.84zm6.72 3.84l.65-3.6h.93l.65 3.6zm3.05 0l-.71-3.9 1-1.38.06-.08a.4.4 0 0 0 .08-.24h1.2a6 6 0 0 1 6 5.6z"/>'+
                						'</g>'+
                					'</symbol>'+
                					'<symbol id="placeholder" viewBox="0 0 24 23.54">'+
                						'<title>placeholder</title>'+
                						'<path class="cls-1" d="M12.14 10.2a2.75 2.75 0 1 0-2.75-2.75 2.75 2.75 0 0 0 2.75 2.75zm0-4.71a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />'+
                						'<path class="cls-1" d="M19.7 14.52h-2.81l1.2-1.75a8.57 8.57 0 0 0-.7-10.59 7.52 7.52 0 0 0-10.64 0A8.57 8.57 0 0 0 6 12.77l1.2 1.74H4.3l-4.3 9h24zm-13-2.2a7.74 7.74 0 0 1 .6-9.55 6.74 6.74 0 0 1 9.53 0 7.75 7.75 0 0 1 .62 9.57l-5.38 7.77-3.87-5.59zm-1.88 3h3l4.28 6.18 4.28-6.18h2.86l3.52 7.45H1.24z"/>'+
                					'</symbol>'+
                				'</svg>';
                				cartHtml=subtotal?orderPreview:'<h2 class="jqcart-empty-cart">Корзина пуста</h2>';
			$(modal).appendTo('body').find('.jqcart-checkout').html(cartHtml);$("input[type='tel']").mask("+7(999)999-99-99");
			$('#morePies').click(function(e){
				e.preventDefault();
				actions.hideCart();
			});

		},
		showProcess:function(item){
			$(".my-basket__popup").fadeOut(200).remove();
			//$('body').append('<div class="jqcart-layout-info">'+'<div class="jqcart-content-info">'+item.title+' в количестве '+item.cnt+' шт <br>добавлен в корзину'+'</div>'+'</div>');
			var info = '<div class="my-basket__popup">'+
	                       	'<div class="my-basket__popup-cont">'+
	                       		'<button type="button"></button>'+
	                       		'<div class="img">'+
	                       			'<img src="'+item.img+'" alt="Картинка">'+
	                       		'</div>'+
	                       		'<span>'+item.title+' в количестве '+item.cnt+' шт добавлен в корзину</span>'+
	                        '</div>'+
	                    '</div>';
	        $('body').append(info);
			$('.my-basket__popup').fadeIn(200);
			setTimeout(function(){
				$('.my-basket__popup').fadeOut(600);
				$('.my-basket__popup').remove();},2000);
		},
		hideCart:function(){
			$('.jqcart-layout').fadeOut('fast',function(){
				$(this).remove();
			});
			return false;
		},
		sendOrder:function(e){
			e.preventDefault();
			var $form=$(this);
			var valid=true;
			var inputname=$form.find('input:eq(0)');
			if((inputname.val()=="")&&valid){
				valid=false;
				inputname.attr("style","border:2px #E82C2C solid!important");
				inputname.val('Вы забыли ввести имя');
				setTimeout(function(){
					inputname.val('');
					inputname.focus();
					inputname.attr("style","border: 1px solid #dfdfdf;");
				},1000);
			}
			var inputphone=$form.find('input:eq(1)');
			if((inputphone.val()=="")&&valid){
				valid=false;
				inputphone.attr("style","border:2px #E82C2C solid!important");
				inputphone.val('Вы забыли указать телефон');
				setTimeout(function(){
					inputphone.val('');
					inputphone.focus();
					inputphone.attr("style","border: 1px solid #dfdfdf;");
				},1000);
			}
			if(!valid)
				return false;
			$.ajax({
				url:opts.handler,
				type:'POST',
				dataType:'json',
				data:{orderlist:$.param(actions.getStorage()),user_name:$form.find('input:eq(0)').val(),user_phone:$form.find('input:eq(1)').val(),address:$form.find('input:eq(2)').val(),comment:$form.find('input:eq(3)').val()},
				error:function(){

				},
				success:function(resp){
					yaCounter46272669.reachGoal('ORDER');
					$('.jqcart-checkout').html('<p style="margin:30px;">'+resp.message+'</p>');
					$('.basket b.summ').text(0);
					if(!resp.errors){
						setTimeout(methods.clearCart,3000);
					}
				}
			});
		},
		printOrder:function(){
			var data=$(this).closest('.jqcart-checkout').prop('outerHTML');
			if(!data){
				return false;
			}
			var win=window.open('','Печать заказа','width='+screen.width+',height='+screen.height),
			cssHref=$(win.opener.document).find('link[href$="jqcart.css"]').attr('href'),
			d=new Date(),
			curDate=('0'+d.getDate()).slice(-2)+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+d.getFullYear()+' '+('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)+':'+('0'+d.getSeconds()).slice(-2);
			win.document.write('<html><head><title>Заказ '+curDate+'</title>');
			win.document.write('<link rel="stylesheet" href="'+cssHref+'" type="text/css" />');
			win.document.write('</head><body >');
			win.document.write(data);
			win.document.write('</body></html>');
			setTimeout(function(){
				win.document.close();
				win.focus();
				win.print();
				win.close();
			},100);
			return true;
		},
		setStorage:function(o){
			DB.setItem('jqcart_r165783987',JSON.stringify(o));
			$.ajax ({
		        url: '/datas/',
		        type: 'post',
		        dataType: 'json',
		        data: {data:JSON.stringify(o),param:'setdatas'},
		        error: function() {
		          console.log('Error');
		        },
		        success: function() {
		          console.log('Success');
		        },
		    });
			return false;
		},
		getStorage:function(){
			return JSON.parse(DB.getItem('jqcart_r165783987'));
		}
	};
	var methods={
		clearCart:function(){DB.removeItem('jqcart_r165783987');
		$.ajax ({
	        url: '/datas/',
	        type: 'post',
	        dataType: 'json',
	        data: {param:'clearCart'},
	        error: function() {
	          console.log('Error');
	        },
	        success: function() {
	          console.log('Success');
	        },
	    });
		label[opts.visibleLabel?'show':'hide']().find('.jqcart-total-cnt').text(0);
		actions.hideCart();
	},
	openCart:actions.openCart,
	printOrder:actions.printOrder,
	test:function(){
		actions.getStorage();
	}
};
$.jqCart=function(opts){
	if(methods[opts]){
		return methods[opts].apply(this,Array.prototype.slice.call(arguments,1));
	}else if(typeof opts==='object'||!opts){
		return actions.init.apply(this,arguments);
	}else{
		$.error('Метод с именем "'+opts+'" не существует!');
	}
};
})(jQuery);