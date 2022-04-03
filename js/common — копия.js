//= ../../node_modules/bootstrap/js/dist/index.js
'use strict';
// $(function() {
// 	$(document).ready(function() {
// 		if($(window).width() < 991 && $(window).width() > 675) {
// 			var block = $('.move-mobile-logo');
// 			var gran = $('.move-to-logotype');
// 			$('.move-to-logotype').remove();
// 			$('.move-mobile-logo').remove();
// 			$('.footer-section__bottom .after-block').after(block);
// 			$('.footer-section__bottom .after-block').append(gran);

// 			var btn = $('header .btn');
// 			$('header .btn').remove();
// 			$('header .d-lg-none').after(btn);
// 			$('header .navbar-nav + .btn').removeClass('d-md-none d-none');
// 		}
// 		///
// 		if($(this).scrollTop() > 100) {
// 			$('header').addClass("fixed-bg");
// 		}
// 		$(document).scroll(function(e) {
// 			if($(this).scrollTop() > 100) {
// 				$('header').addClass("fixed-bg");
// 			} else {
// 				$('header').removeClass("fixed-bg");
// 			}
// 		});
		
// 		if(document.cookie.match('accept')) {
// 			$('#cookie').fadeOut(0);
// 			$('footer').removeClass('cookie');
// 		} else {
// 			setTimeout(function(){$('#cookie').fadeIn(300);}, 2000);
// 		}

// 		// Custom JS
// 		$('.navbar-nav a[href^="#"], header button.btn, .informate .btn').click(function(e) {
// 			e.preventDefault();
// 			var __this;
// 			if($(this)[0].nodeName == 'BUTTON') {
// 				__this = '#' + $(this).attr('data-href');
// 			} else {
// 				__this = $(this).attr('href');
// 			}
// 			if($('body').find(__this).length == false) return false;
// 			$('html, body').animate({scrollTop: $(__this).offset().top+'px'});
// 			__this = null;
// 			return false;
// 		});

// 		// $('.block-video-btn .btn-video, .block-video-btn .btn-video-second').click(function(e) {
// 		// 	e.preventDefault();
// 		// 	$('#video-gallery').lightGallery({
// 		// 		autoplay: true,
// 		// 	}); 
// 		// 	$('#video-gallery1').lightGallery({
// 		// 		autoplay: true,
// 		// 	}); 
// 		// });
// 		function initGallery(id) {
// 			$(id).lightGallery({
// 				autoplay: true,
// 			});
// 		};
// 		// initGallery('#video-gallery');
// 		// initGallery('#video-gallery1');

// 		$('.block-video-btn').on('click', '.btn-video, .btn-video-second', function(e) {
// 			e.preventDefault();
// 			initGallery('#video-gallery');
// 			initGallery('#video-gallery1');
// 		});
			
// 		$("#cookie .btn-accetp-cookie").click(function(e) {
// 			if(document.cookie.match('accept')) {
// 				$('#cookie').fadeOut(0);
// 				$('footer').removeClass('cookie');
// 			} else {
// 				document.cookie = 'accept=true';
// 				$('#cookie').fadeOut(0);
// 				$('footer').removeClass('cookie');
// 			}
// 		});
// 	});

// 	// on table and mobile 
// 	if($(window).width() < 991) {
// 		function f_scroll() {

// 		   last_scroll_top = 0;
// 		   top_display = 100;

// 		   $(window).off('scroll')
// 		   $(window).on('scroll', function(){

// 			   var scroll_top = $(this).scrollTop();

// 			   if ((scroll_top > last_scroll_top) && (scroll_top >top_display)) {
// 				   //downscroll code
// 				   $('.js-header').addClass('has-transform-header');
// 				   $('.js-footer').addClass('has-transform-footer');
// 			   } else {
// 				   $('.js-header').removeClass('has-transform-header');
// 				   $('.js-footer').removeClass('has-transform-footer');
// 			   }

// 			   last_scroll_top = scroll_top;
// 		   });

// 		   /*actions botons message and call*/ 

		   
// 		   var $window = $(window);
// 		   var maxWidth = 600; /* <--- Custom size here*/

// 		   $window.on('scroll resize', function(){

// 			   if ($(window).width() <= maxWidth) {  
// 				   $('.js-input-focus').on('focusin', function() {
// 					   $('.js-header').addClass('has-transform-header');
// 					   $('.js-footer').addClass('has-transform-footer');
// 				   });

// 				   $('.js-input-focus').on('focusout', function(){
// 					   $('.js-header').removeClass('has-transform-header');
// 					   $('.js-footer').removeClass('has-transform-footer');
// 				   });


// 			   }   

// 		   });

// 		}
// 		f_scroll();
// 	}

// });

$(document).ready(function() {
	var minHeight = $('.f_banner .slide img').height();
	$('.f_banner').css('min-height', minHeight - 120 + 'px');
	$('.tab-block .tab-block_item .item-title').on('click', function() {
		if(!$(this).hasClass('active')) {
			$('.tab-block .tab-block_item .item-title').removeClass('active');
			$(this).addClass('active');
			return;
		} else {
			$(this).removeClass('active');
		}
	});
	// scroll fixed header
	// if($(this).scrollTop() > 23) {
	// 	$('header').addClass("fixed");
	// }
	var fForm = $('.f_form').offset().top;
	var fFormHeight = $('.f_form').outerHeight();
	$(document).scroll(function(e) {
		if($(window).width() > 991) {
			if($(this).scrollTop() > 23) {
				$('header').addClass("fixed");
			} else {
				$('header').removeClass("fixed");
			}
		}
		if(window.pageYOffset >= fForm) {
			$('.f_mobile-btn').removeClass('fixed');
		}
		// if($(this).scrollTop() > 23) {
		// 	$('header').addClass("fixed");
		// 	$('.f_mobile-btn').addClass("fixed");
		// } else {
		// 	$('header').removeClass("fixed");
		// 	$('.f_mobile-btn').removeClass("fixed");
		// }
	});
	if($(window).width() < 991) {

		$('.f_clients__slider .item .block-avatar').append('<div class="block"></div>');
		var ratingFedback = $('.f_clients__slider .item .rating');
		var titleFedback = $('.f_clients__slider .item .block-content h4');
		var block = $('.f_clients__slider .item .block-avatar .block');
		
		for(var i = 0; i < block.length; i++) {
			var item = ratingFedback[i];
			var title = titleFedback[i];

			block[i].append(title);
			block[i].append(item);
		}


		$(".mobile-menu-btn").click(function() {
			var target = $(this);
			if(target.is('.menu-active')) {
				$(this).removeClass("menu-active");
				$(this).parents('.header-mobile').removeClass('show');
			} else {
				$(this).addClass("menu-active");
				$(this).parents('.header-mobile').addClass('show');
			}
		});
		$('.f_specialist .info').append('<div><span class="ler-mas">Leer más</span></div>');
		$('.f_specialist .ler-mas').click(function() {
			$(this).parents('.info').find('p').css('max-height', 'auto');
		});

		//
		function f_scroll() {
		   last_scroll_top = 0;
		   top_display = 100;
		   $(window).off('scroll');
		   $(window).on('scroll', function(){
		   		if($('header .header-mobile .mobile-menu-btn').is('.menu-active')) return;
			   var scroll_top = $(this).scrollTop();
				if(scroll_top < 23) {
					$('header').addClass("start");
					$('header').removeClass('top-position');
				}
			   if ((scroll_top > last_scroll_top) && (scroll_top >top_display)) {
				   //downscroll code
				   //$('header').addClass('fixed');
			   		
				   $('header').addClass('top-position');
				   $('header').addClass('fixed');

					if((window.pageYOffset + fFormHeight) >= fForm) {
						$('.f_mobile-btn').slideDown(300);
						$('.f_mobile-btn').removeClass('fixed');
					} else {
				   		$('.f_mobile-btn').addClass('fixed');
					}
				   $('header').removeClass("start");
			   } else {
				   $('header').removeClass('fixed');
				   $('.f_mobile-btn').removeClass('fixed');
			   }

			   last_scroll_top = scroll_top;
		   });

		   /*actions botons message and call*/ 
		   
		   var $window = $(window);
		   var maxWidth = 600; /* <--- Custom size here*/
		   $window.on('scroll resize', function(){

			   if ($(window).width() <= maxWidth) {  
				   $('.js-input-focus').on('focusin', function() {
					   $('header').addClass('fixed');
					   $('.f_mobile-btn').addClass('fixed');
				   });

				   $('.js-input-focus').on('focusout', function(){
					   $('header').removeClass('fixed');
					   $('.f_mobile-btn').removeClass('fixed');
				   });


			   }   

		   });

		}
		f_scroll();
		//
	}

	// .form-steps
	// $('.form-steps__content .question .tab .item button').click(function(e) {
	// 	e.preventDefault();
	// 	var _this = $(this).attr('data-tab-active');
	// 	var _thisStep = $(this).attr('data-step');

	// 	if(_this === undefined) {
	// 		$('.tab_content').fadeOut(0);
	// 		$('.form-steps .form-steps__breadc .item').removeClass('active');
	// 		$('.form-steps .form-steps__content .question').removeClass('active');

	// 		$('.form-steps .form-steps__breadc .item[data-step='+ _thisStep +']').addClass('active');
	// 		$('.form-steps .form-steps__content .question[data-step='+ _thisStep +']').addClass('active');
	// 	}

	// 	if($(this).is('active')) return
	// 	$('.form-steps__content .question .tab .item button').removeClass('active');
		
	// 	$(this).addClass('active');
	// 	$('.tab_content[data-tab-active='+ _this +']').fadeIn(300);
	// 	console.log(_this);
	// });
	//$('.form-steps .form-steps__content button.next').attr('disabled', true);
	$('.form-steps__content .question .tab_content select').attr('data-select', false);
	$('.form-steps .form-steps__breadc .item').attr('data-done', false);
	$('.form-steps .form-steps__breadc .item').eq(0).attr('data-done', true);
	$('.form-steps .form-steps__breadc .item').click(function () {
		var _this = $(this);
		var step = _this.attr('data-step');
		if(_this.is('.active')) return;
		if(_this.attr('data-done') == 'true') {
			$('.form-steps .form-steps__breadc .item').removeClass('active');
			_this.addClass('active');
			$(".form-steps .form-steps__content .question").fadeOut(0).removeClass('active');
			$(".form-steps .form-steps__content .question[data-step="+ step +"]").fadeIn(300).addClass('active');
		}
	});

	
	var datosTitularItem = 0;
	function actionFirstQuestion(button, content, step) {
		$(button).on('click', function(e) {
			e.preventDefault();
			var _this = $(this).attr('data-tab-active');
			var _thisStep = $(this).attr('data-step');
			switch(step) {
				case 3:
					if($('.form-steps .form-steps__head .head[data-step=three]').is('.active')) {
						return;
					}
					$('.form-steps .form-steps__head .head').removeClass('active').fadeOut(0);
					$('.form-steps .form-steps__head .head[data-step=three]').addClass('active').fadeIn(300);
					// show block step 3
					if(datosTitularItem !== undefined) {
						var attr = $('.question_two .tab button.active').attr('data-action-titular');
						console.log(attr);
						$('.form-steps__content .question_three .add-block').fadeOut(0);
						$('.form-steps__content .question_three div[data-action-titular='+ attr +']').fadeIn(300);
						var questionThreeContent = $('.form-steps__content .question_three .content-titulars');
						// $('.form-steps__content .question_three .content-titulars').remove();
						// for(var i = 0; i < datosTitularItem; i++) {
						// 	$('.form-steps__content .question_three div[data-titular-prev=true] .add-block').append(questionThreeContent.clone(true, true));
						// 	$('.form-steps__content .question_three .content-titulars').eq(i).find('.main-title span').text(i+1);
						// }
						actionThreeQuestion('.form-steps__content .question_three .tab button', '.form-steps__content .question_three .tab_content .block-content');

					}
					break;
				case 4:
					if($('.form-steps .form-steps__head .head[data-step=four]').is('.active')) {
						return;
					}
					$('.form-steps .form-steps__head .head').removeClass('active').fadeOut(0);
					$('.form-steps .form-steps__head .head[data-step=four]').addClass('active').fadeIn(300);
					$('.form-steps .form-steps__head .head').removeClass('active').fadeOut(0);
					$('.form-steps .form-steps__head .head[data-step=four]').addClass('active').fadeIn(300);
					break;
			}

			if(_this === undefined) {
				//$('.tab_content').fadeOut(0);
				$(".form-steps__content .question_one .tab_content").fadeOut(0);
				$('.form-steps .form-steps__breadc .item').removeClass('active');
				$('.form-steps .form-steps__content .question').removeClass('active');

				$('.form-steps .form-steps__breadc .item[data-step='+ _thisStep +']').attr('data-done', true);
				$('.form-steps .form-steps__breadc .item[data-step='+ _thisStep +']').addClass('active');
				$('.form-steps .form-steps__content .question[data-step='+ _thisStep +']').fadeIn(300).addClass('active');
			}

			if($(this).is('active')) return;
			$(button).removeClass('active');
			
			$(this).addClass('active');
			$('.tab_content[data-tab-active='+ _this +']').fadeIn(300);
		});
	}
	actionFirstQuestion('.form-steps__content .question_one .tab button', '.form-steps__content .question_one .tab_content');
	
	//actionFirstQuestion('.form-steps__content .question_two .tab_content-next .next.activation', '.form-steps__content .question_three .tab_content', 3);
	// actionFirstQuestion('.form-steps__content .question_three .tab_content-next .next', '.form-steps__content .question_three .tab_content', 4);

	function actionTitular(tab, content) {
		var block = $('.form-steps__content .question_two .tab_content');
		// $('.form-steps__content .question_two .tab_content__one').remove();
		// var item = 1;
		// var counts = 0;
		// function count(bool) {
		// 	var count = 1;
		// 	if(bool) {
		// 		return counts += count;
		// 	} else {
		// 		if(counts <= 0) return counts = 0;
		// 		return counts -= count;
		// 	}
		// }
		$(tab).click(function(e) {
			e.preventDefault();
			var attrAction = $(this).attr('data-action-titular');
			if($(this).is('.active')) return;
			if(attrAction == 'false') {
				// count(false);
				$(tab).removeClass('active');
				$(this).addClass('active');
				$(".form-steps__content .question_two .titular-dos").fadeOut(0);
				$(".form-steps__content .question_two .titular-un").fadeIn(300);
				// if($('.form-steps__content .question_two .tab_content .block-content').length == 1) {
				// 	$('.form-steps__content .question_two .tab_content .block-content').remove();
				// 	$('.form-steps__content .question_two .tab_content-next').fadeOut(0);
				// 	return item = 0;
				// }
				// $(content).remove();
				//return item == 1 ? item = 1 : item  -= 1;
			} else {
				$(tab).removeClass('active');
				$(this).addClass('active');
				$(".form-steps__content .question_two .titular-un").fadeOut(0);
				$(".form-steps__content .question_two .titular-dos").fadeIn(300);
				// $('.form-steps__content .question_two .tab_content').fadeIn(300);
				// $('.form-steps__content .question_two .tab_content-next').fadeIn(300);
				// var text = count(true);
				// $(block).find('.main-title span').text(text);
				// $('.form-steps__content .question_two .tab_content').append(block.clone(true, true));
				//item += 1;
				//return item;
			}
			// datosTitularItem = $('.form-steps__content .question_two .tab_content .block-content').length;

		});
	}
	actionTitular('.form-steps__content .question_two .tab button', '.form-steps__content .question_two .tab_content .block-content:last-child');

	function actionThreeQuestion(button, content, step) {
		$(button).on('click', function(e) {
			e.preventDefault();
			var _this = $(this).attr('data-action-titular');
			var _thisStep = $(this).attr('data-step');
			$(this).parents('.tab').find('button').removeClass('active');
			$(this).addClass('active');
			$('.form-steps__content .question_three .tab_content-next').fadeIn(300);
			if(_this == 'true') {
				$(this).parents('.content-titulars').find('.tab_content').fadeIn(300);
				$(this).addClass('active');
				//$(content).fadeIn(300).addClass('active').css('display', 'flex');
				$(this).parents('.content-titulars').find('.tab_content .block-content').fadeIn(300).css('display', 'flex');
			} else {
				$(this).parents('.content-titulars').find('.tab_content').fadeOut(0).removeClass('active')
			}
		});
	}
	actionThreeQuestion('.form-steps__content .question_three .tab button', '.form-steps__content .question_three .tab_content .block-content');
	function actionFourQuestion(button, content) {
		$(button).click(function(e) {
			e.preventDefault();
			$('.form-steps .form-steps__content .question').removeClass('active').fadeOut(0);
			$('.form-steps .form-steps__content .question_six').fadeIn(300).addClass('active');
			$(content).fadeIn(300).addClass('active');
			console.log('click');
		});
	}
	// actionFourQuestion('.form-steps .form-steps__content .question_four .block-btn .next', '.form-steps .form-steps__content .question_five');

	/// 
	///
	// required form 

		function activationNextButton(button) {
			$(button).addClass('activation');
			actionFirstQuestion('.form-steps__content .question_one .next.activation', '.form-steps__content .question_one .tab_content');

			actionFirstQuestion('.form-steps__content .question_two .block-btn .next.activation', '.form-steps__content .question_three .tab_content', 3);

			actionFirstQuestion('.form-steps__content .question_three .next.activation', '.form-steps__content .question_three .tab_content', 4);

			actionFourQuestion('.form-steps .form-steps__content .question_four .block-btn .next.activation', '.form-steps .form-steps__content .question_five');
		}
		function iterateTag(tag) {
			var el = $(tag);
			for(var i = 0; i < el.length; i++) {
				var item = el[i];
				if($(item).attr('data-select') == 'true') {
					return i;
				}
			}
		}
		// var fiedRequired = [];
		// function requiredField(list) {
		// 	list.forEach(function(item) {
		// 		var name = $(item).attr('name');
		// 		fiedRequired.push({
		// 			name: {
		// 				val: $(item).val(),
		// 				data_select: $(item).attr('data-select')
		// 			}
		// 		});
		// 	});
		// 	return fiedRequired;
		// }
		function requiredField(activeNextBtn, input, select, bool) {
			var input1 = $(input);
			var select1 = $(select);
			if(input1.val().length > 3 && !input1.parent().is('.error') && select == true) {
				console.log('action click');				
				activationNextButton(activeNextBtn);
				return;
			}
			if(input1.val().length > 3 && !input1.parent().is('.error') && select1.attr('data-select') != 'false') {
				activationNextButton(activeNextBtn);
			}
		}
		$('.form-steps .form-steps__content').on('input', 'select', function() {
			$(this).attr('data-select', true);
			$(this).parents('.border-gradient').removeClass('error');
			//iterateTag('.form-steps .form-steps__content .question_one select');
			var active = $('.form-steps__content .question.active').attr('data-step');
			if(active == 'one') {
				requiredField('.question_one .tab_content .next', '.question_one .tab_content input', '.question_one .tab_content select');
				console.log('one');
			}
			if(active == 'second') {
				requiredField('.question_two .titular-un .next', '.question_two .titular-un input', '.question_two .titular-un select');
				requiredField('.question_two .titular-dos .next', '.question_two .titular-dos input', '.question_two .titular-dos select');

				console.log('second');
			}
			if(active == 'three') {
				requiredField('.question_three .next', '.question_three input', true);
				console.log('three');
			}
			if(active == 'four') {
				requiredField('.question_four .next', '.question_four input', true);
				console.log('four');
			}
			
		});
		function forReq(element, type) {
			for(var i = 0; i < element.length; i++) {
				var item = element[i];
				if(type == 'input') {
					if($(item).val().length < 3) {
						$(item).parent().addClass('error');
					} else {
						$(item).parent().removeClass('error');
					}
				}
				if(type == 'select') {
					if($(item).attr('data-select') !== 'true') {
						$(item).parents('.border-gradient').addClass('error');
					}
				}
			}
		}
		$('.question_one .next').on('click', function() {
			//var elem = requiredField(['.question_one input', '.question_one select']);
			var input = $('.question_one .tab_content input');
			var select = $('.question_one .tab_content select');
			forReq(input, 'input');
			forReq(select, 'select');
		});
		$('.question_two .titular-un').on('click', '.next', function() {
			//var elem = requiredField(['.question_two input', '.question_two select']);
			var input = $('.question_two .tab_content .titular-un input');
			var select = $('.question_two .tab_content .titular-un select');
			forReq(input, 'input');
			forReq(select, 'select');
			console.log('two');
		});
		$('.question_two .titular-dos').on('click', '.next', function() {
			//var elem = requiredField(['.question_two input', '.question_two select']);
			var input = $('.question_two .tab_content .titular-dos input');
			var select = $('.question_two .tab_content .titular-dos select');
			forReq(input, 'input');
			forReq(select, 'select');
			console.log('two 2');
		});
		$('.question_three').on('click', '.next', function() {
			//var elem = requiredField(['.question_three input', '.question_three select']);
			var input = $('.question_three .tab_content input');
			// var select = $('.question_three .tab_content select');
			forReq(input, 'input');
			// forReq(select, 'select');
		});
		$('.question_four').on('click', '.next', function(e) {
			e.preventDefault();
			//var elem = requiredField(['.question_four input', '.question_four select']);
			var input = $('.question_four .tab_content input');
			var select = $('.question_four .tab_content select');
			forReq(input, 'input');
			forReq(select, 'select');
		});

		$('.question_one').on('input', 'input', function() {
			var _this = $(this);
			requiredField('.question_one .tab_content .next', '.question_one .tab_content input', '.question_one .tab_content select');
			if(_this.val().length > 3) {
				_this.parent().removeClass('error');
			} else {
				_this.parent().addClass('error');
				$('.question_one .tab_content .next').removeClass('activation');
			}
		});

		$('.question_two').on('input', 'input', function() {
			var _this = $(this);
			requiredField('.question_two .tab_content .next', '.question_two .tab_content input', '.question_two .tab_content select');
			if(_this.val().length > 3) {
				_this.parent().removeClass('error');
			} else {
				_this.parent().addClass('error');
				$('.question_two .tab_content .next').removeClass('activation');
			}
		});
		$('.question_three').on('input', 'input', function() {
			var _this = $(this);
			requiredField('.question_three .tab_content .next', '.question_three .tab_content input', true);
			if(_this.val().length > 3) {
				_this.parent().removeClass('error');
				requiredField('.question_three .next', '.question_three input', true);
			} else {
				_this.parent().addClass('error');
				$('.question_three .next').removeClass('activation');
			}
		});
		$('.question_four').on('input', 'input', function() {
			var _this = $(this);
			requiredField('.question_four .tab_content .next', '.question_four .tab_content input', '.question_four .tab_content select');
			if(_this.val().length > 3) {
				_this.parent().removeClass('error');
			} else {
				_this.parent().addClass('error');
				$('.question_four .tab_content .next').removeClass('activation');
			}
		});
	// /.form-steps
});
