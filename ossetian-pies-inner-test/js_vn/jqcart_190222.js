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
				.on('click','.jqcart-del-item',actions.delFromCart)
				.on('submit','.jqcart-orderform',actions.sendOrder)
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
				if(cartData.hasOwnProperty(id)){
					cartData[id].count+=cnt;
				}else{
					itemData.count=cnt;
					itemData.cnt = cnt;
					$(this).parents('.my-inner-cart').find('.my-inner-cart__prices-select-items').each(function(n){
						if ($(this).hasClass('my-inner-cart__prices-select-items--check')) {							
							selectedWeight = 800 + (3-n)*200;
							itemData.id = id + (3-n)+ 1 + '';
						}
					});		

					itemData.img = items[id].img.src;
					itemData.alt = items[id].img.alt;					
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
			line=$that.closest('.jqcart-tr'),
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
			manually=$that.hasClass('jqcart-amount'),
			amount=+(manually?$that.val():$that.data('incr')),
			itemId=$that.closest('.jqcart-tr').data('id');
			cartData=actions.getStorage();
			if(manually){
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
			}
			actions.setStorage(cartData);
			actions.recalcSum();
			return false;
		},
		recalcSum:function(){
			var subtotal=0,
			amount,
			sum=0,
			totalCnt=0;
			$('.jqcart-tr').each(function(){
				amount=+$('.jqcart-amount',this).val();
				sum=Math.ceil((amount*$('.jqcart-price',this).text())*100)/100;
				$('.jqcart-sum',this).html(sum+' '+opts.currency);
				subtotal=Math.ceil((subtotal+sum)*100)/100;totalCnt+=amount;
			});
			$('.jqcart-subtotal strong').text(subtotal);
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
			for(key in cartData){
				if(cartData.hasOwnProperty(key)){
					sum=Math.ceil((cartData[key].count*cartData[key].price)*100)/100;
					subtotal=Math.ceil((subtotal+sum)*100)/100;
					orderPreview+='<div class="jqcart-tr" data-id="'+cartData[key].id+'">';
					orderPreview+='<div class="jqcart-small-td">'+cartData[key].id+'</div>';
					orderPreview+='<div class="jqcart-small-td jqcart-item-img"><img src="'+cartData[key].img+'" alt=""></div>';
					orderPreview+='<div class="jqcart-name">'+cartData[key].title+'</div>';
					orderPreview+='<div class="jqcart-price">'+cartData[key].price+'</div>';
					orderPreview+='<div><span class="jqcart-incr" data-incr="-1">&#8211;</span><input type="text" class="jqcart-amount" value="'+cartData[key].count+'"><span class="jqcart-incr" data-incr="1">+</span></div>';
					orderPreview+='<div class="jqcart-sum">'+sum+' '+opts.currency+'</div>';
					orderPreview+='<div class="jqcart-small-td"><span class="jqcart-del-item"></span></div>';
					orderPreview+='</div>';
				}
			}
			orderPreview+='</div></div>';
			orderPreview+='<div class="jqcart-subtotal">Итого: <strong>'+subtotal+'</strong> '+opts.currency+'</div>';
			cartHtml=subtotal?(orderPreview+orderform):'<h2 class="jqcart-empty-cart">Корзина пуста</h2>';
			$(modal).appendTo('body').find('.jqcart-checkout').html(cartHtml);$("input[type='tel']").mask("+7(999)999-99-99");
		},
		showProcess:function(item){
			$(".jqcart-layout-info").fadeOut(200).remove();
			$('body').append('<div class="jqcart-layout-info">'+'<div class="jqcart-content-info">'+item.title+' в количестве '+item.cnt+' шт <br>добавлен в корзину'+'</div>'+'</div>');
			$('.jqcart-layout-info').fadeIn(200);
			setTimeout(function(){
				$('.jqcart-layout-info').fadeOut(600);
				$('.jqcart-layout-info').remove();},2000);
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
			var inputname=$form.find("input[name=user_name]");
			if((inputname.val()=="")&&valid){
				valid=false;
				inputname.attr("style","border:1px #E82C2C solid!important");
				inputname.val('Вы забыли ввести имя');
				setTimeout(function(){
					inputname.val('');
					inputname.focus();
					inputname.attr("style","border: 1px #C0C0C0 solid;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius: 3px;");
				},1000);
			}
			var inputphone=$form.find("input[name=user_phone]");
			if((inputphone.val()=="")&&valid){
				valid=false;
				inputphone.attr("style","border:1px #E82C2C solid!important");
				inputphone.val('Вы забыли указать телефон');
				setTimeout(function(){
					inputphone.val('');
					inputphone.focus();
					inputphone.attr("style","border: 1px #C0C0C0 solid;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius: 3px;");
				},1000);
			}
			if(!valid)
				return false;
			$.ajax({
				url:opts.handler,
				type:'POST',
				dataType:'json',
				data:{orderlist:$.param(actions.getStorage()),user_name:$form.find("input[name=user_name]").val(),user_phone:$form.find("input[name=user_phone]").val(),address:$form.find("input[name=user_address]").val(),comment:$form.find("textarea[name=user_comment]").val()},
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
			return false;
		},
		getStorage:function(){
			return JSON.parse(DB.getItem('jqcart_r165783987'));
		}
	};
	var methods={
		clearCart:function(){DB.removeItem('jqcart_r165783987');
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