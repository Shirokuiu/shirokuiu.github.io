"use strict"
function brandSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.brand__slider';
	items = items || 6;
	navContainer = navContainer || '';
	navText = navText || ['', ''];
	if(elem){
		$(elem).owlCarousel({
			nav: true,
			navContainer: navContainer,
			navText: navText,
			items: items,
			animateIn: animationIn,
			animateOut: animationOut,
			loop: true,
			URLhashListener: true,
      startPosition: 'URLHash',
			dots: true,
			dotsEach: true,
			dotsContainer: '',
			navText: navText,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1025: {
					items: 6
				}
			}
		});
	}
}

function basket() {
	$('.basket').on('click', function(){
		$('html').addClass('overflow');
	});

	jQuery(function($){
		$(document).mouseup(function (e){
			var div = $(".jqcart-checkout");
			if (!div.is(e.target)
			    && div.has(e.target).length === 0) {
				$('html').removeClass('overflow');
			}
		});
	});
}

//rating
function rating() {
	var btn = $('.review__rating-item');
	console.log(123);
	btn.on('click', function(){
		if($(this).hasClass('active')){

		}else {
			var item = '.review__rating';
			var status = $(this).closest(item).attr('data-status');

			$(this).closest(item).attr('data-status', 'check');
			var counter = parseInt($(this).find('.ratingCount').html());
			counter++;
			$(this).find('.ratingCount').html(counter);

			if(status){
				counter = parseInt($(this).siblings().find('.ratingCount').html());
				counter--;
				$(this).siblings().find('.ratingCount').html(counter);
			}

			$(this).addClass('active').siblings().removeClass('active');
		}
	});
}

window.onload = function() {
	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	brandSlider();

	//other
	basket();
	rating();

	$('#popular_slider').slick({
	   slidesToShow:5,
	   slidesToScroll:1,
	   prevArrow:'<i class="slick-arrow slick-prev material-icons">keyboard_arrow_left</i>',
	   nextArrow:'<i class="slick-arrow slick-next material-icons">keyboard_arrow_right</i>',
	   responsive: [
	      {
	         breakpoint: 1441,
	         settings: {
	           slidesToShow: 4,
	           slidesToScroll: 1,
	         }
	       },

	      {
	        breakpoint: 1025,
	        settings: {
	          slidesToShow: 3,
	          slidesToScroll: 1,
	        }
	      },

	      {
	         breakpoint: 769,
	         settings: {
	           slidesToShow: 2,
	           slidesToScroll: 1,
	         }
	      },

	      {
	         breakpoint: 426,
	         settings: {
	           slidesToShow: 1,
	           slidesToScroll: 1,
	         }
	      },
	   ]
	});



	$('#hamburger').on('click',function(e){
	   e.preventDefault();

	   $('#mob-menu').toggleClass('active');
	})

	$(document).ready(function() {
	    $('.minus').click(function () {
	        var $input = $(this).parent().find('input');
	        var count = parseInt($input.val()) - 1;
	        count = count < 1 ? 1 : count;
	        $input.val(count);
	        $input.change();
	        return false;
	    });
	    $('.plus').click(function () {
	        var $input = $(this).parent().find('input');
	        $input.val(parseInt($input.val()) + 1);
	        $input.change();
	        return false;
	    });
	});

	var $unique = $('input[type="checkbox"]');
		$unique.click(function() {
			$unique.filter(':checked').not(this).removeAttr('checked');
	});

	$("body").on("click", "a.nav-price, a.nav-delivery, a.nav-akcii, a.first-pirog, a.link_menu", function(){
		var idtop = $($(this).attr("href")).offset().top;
		$('html,body').animate({scrollTop: idtop}, 500);
		return false;
	});
};
