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

		//tooltip form-steps
		// $('.tooltip .close-tootltip').click(function() {
		// 	$(this).parents('.tooltip').fadeOut();
		// });
		$('.btn-tooltip').click(function(e) {
			var __this = e.target;
			
			if($(__this).is('.icon-close-tooltip')) {
				$(__this).parents('.tooltip').fadeOut(300);
			} else {
				$(this).find('.tooltip').fadeIn(300);
			}
		});
		// /tooltip form-steps

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

	// home-banner
	$('.f_banner__slider').slick()
	// end home-banner
	// .form-steps
	// global all step
	function stepsHead(step) {
		console.log('hl');
		// if(step == 'two') {
		// 	$('.form-steps .form-steps__head .head').removeClass('active').fadeOut(0);
		// 	$('.form-steps .form-steps__head .head[data-step=one]').addClass('active').fadeIn(300);
		// 	return;
		// }
		if($('.form-steps .form-steps__head .head[data-step='+ step +']').is('.active')) {
			return;
		}
		$('.form-steps .form-steps__head .head').removeClass('active').fadeOut(0);
		$('.form-steps .form-steps__head .head[data-step='+ step +']').addClass('active').fadeIn(300);
	}

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
			$(".form-steps .form-steps__content .question_"+ step).fadeIn(300).addClass('active');
			stepsHead(step);
		}
	});
	function blockImageTextDescr(bool, attr) {
		if(bool) {
			$(".form-steps .question_one .block-image .description div").removeClass('active');
			$(".form-steps .question_one .block-image .description div[data-tab-active="+ attr +"]").fadeIn(300).addClass('active');
			console.log('true', bool);
		} else {
			$(".form-steps .question_one .block-image .description div").eq(0).addClass('active');
			console.log('false', bool);
		}
	}
	function activeBreadcStep(tag) {
		$('.form-steps .form-steps__breadc .item').removeClass('active');
		$('.form-steps .form-steps__breadc .item[data-step='+ tag +']').attr('data-done', true);
		$('.form-steps .form-steps__breadc .item[data-step='+ tag +']').addClass('active');
	}
	function validStep(tag) {
		var field = $('.form-steps '+ tag +' .check-valid').length;
		var fieldValid = $('.form-steps '+ tag +' .check-valid.valid').length;
		if(fieldValid == field) {
			$('.form-steps '+ tag +' .next').addClass('activation');
		} else {
			$('.form-steps '+ tag +' .next').removeClass('activation');
		}
	}
	function checkField(step) {
		$(".form-steps " + step).on('input', 'input, select', function() {
			validStep(step);
			var __this = $(this);
			setTimeout(function() {
				$(__this).trigger('blur', validStep(step));
				$(__this).trigger('focus', validStep(step));
			}, 100);
		});
	}
	function activeNextBtn(tag, fade, show) {
		$('.form-steps .question_'+ tag + ' .next').click(function() {
			if($(this).is('.activation')) {
				$('.form-steps .question_'+ fade).fadeOut(0);
				$('.form-steps .question_'+ show).fadeIn(300).addClass('active');
				// active next breadcrumb
				activeBreadcStep(show);
				if(show == 'five') {
					$('.question_six').fadeIn(300).addClass('active');
				}
				if($(window).width() <= 575) {
					if(show == 'four') {
						$('.form-steps__breadc .item[data-done=true]').addClass('done');
					}
				}
			} else {
				$("form.form-steps").validate({
					rules: {
						cuesta_vivenda: {
							required: true,
							minlength: 2,
							digits: true
						},
						ahorros_compra: {
							required: true,
							minlength: 2,
							digits: true
						},
						que_provincia: {//select
							required: true
						},
						que_municipio: {//select
							required: true,
						},
						cuantos_edad: {
							required: true,
							minlength: 2,
							digits: true
						},
						cuantos_situacion: {//select
							required: true,
						},
						cuantos_laboral: {//select
							required: true,
						},
						cuantos_sueldo: {
							required: true,
							minlength: 2,
							digits: true
						},
						cuantos_donde: {//select
							required: true
						},
						cuantos_edad1: {
							required: true,
							minlength: 2,
							digits: true
						},
						cuantos_situacion1: {//select
							required: true,
						},
						cuantos_laboral1: {//select
							required: true,
						},
						cuantos_sueldo1: {//select
							required: true,
						},
						cuantos_donde1: {//select
							required: true,
						},
						cuantos_edad2: {
							required: true,
							minlength: 2,
							digits: true
						},
						situacion_laboral: {
							required: true,
						},
						cuantos_laboral2: {//select
							required: true,
						},
						cuantos_sueldo2: {
							required: true,
							minlength: 2,
							digits: true
						},
						cuantos_donde2: {//select
							required: true,
						},
						capital_pendiente_one: {
							required: true,
							minlength: 2,
							digits: true
						},
						cuota_mensual_one: {
							required: true,
							minlength: 2,
							digits: true
						},
						capital_pendiente: {
							required: true,
							minlength: 2,
							digits: true
						},
						cuota_mensual: {
							required: true,
							minlength: 5,
							digits: true
						},
						capital_pendiente1: {
							required: true,
							minlength: 2,
							digits: true
						},
						cuota_mensual1: {
							required: true,
							digits: true
						},//form send
						name: {
							required: true,
							minlength: 2
						},
						apellidos: {
							required: true,
						},
						email: {
							required: true,
							email: true
						},
						phone: {
							required: true,
							digits: true
						},
						horario_contacto: {//select
							required: true,
						}
					},
					messages: {
						firstname: "Please enter your firstname",
						email: "Please enter a valid email address",
						agree: "Please accept our policy",
					}
				});
				$(this).submit();
			}
			stepsHead(show);
		});
	}
	function activeNextBtnPrevChoice(tag, fade, show) {
		$('.form-steps .question_'+ tag + ' .next').click(function() {
			if($(this).is('.activation')) {
				$('.form-steps .question_'+ fade).fadeOut(0);
				$('.form-steps .question_'+ show).fadeIn(300).addClass('active');

				var attr = $(this).parents('.question').find('.tab .item button.active').attr('data-action-titular');
				$('.form-steps .question_'+ show + ' .add-block').fadeOut(0);
				$('.form-steps .question_'+ show + ' .add-block[data-action-titular='+ attr +']').fadeIn(300);

				// active next breadcrumb
				activeBreadcStep(show);

				stepsHead(show);
			} else {
				$(this).submit();
			}
		});
	}
	function choiceNoReturnPrev(current, prev) {
		$('.form-steps .question_'+ current).fadeOut(0).removeClass('active');
		$('.form-steps .question_'+ prev).fadeIn(300).addClass('active');
	}
	//activeNextBtnPrevChoice('three', attr);
	// step one
	$(".form-steps .question_one .tab .item button").click(function(e) {
		e.preventDefault();
		var attr = $(this).attr('data-tab-active');
		if($(this).is('.active')) return;
		$(".form-steps .question_one .tab .item button").removeClass('active');
		$(this).addClass('active');
		if(attr == 'tengo-elegida') {
			$(".form-steps .question_one div[data-tab-active="+ attr +"]").fadeIn(300).addClass('active');
			// show image descr text
			blockImageTextDescr(true, attr);
		} else {
			$(".form-steps .question_one div[data-tab-active=tengo-elegida]").fadeOut(0).removeClass('active');
			$(".form-steps .question_one").fadeOut(0).removeClass('active');
			$(".form-steps .question_two").fadeIn(300).addClass('active');
			// show image descr text
			blockImageTextDescr(false, attr);
			// active next breadcrumb
			activeBreadcStep('two');

			stepsHead('two');
		}
	});
	// fieldCheck action valid or error
	checkField('.question_one');
	// after click active button hide current block show next block
	activeNextBtn('one', 'one', 'two');
	// /step one
	// step two
	var block;
	$(".form-steps .question_two .tab .item button").click(function(e) {
		e.preventDefault();
		var attr = $(this).attr('data-action-titular');
		if($(this).is('.active')) return;
		$(".form-steps .question_two .tab .item button").removeClass('active');
		$(this).addClass('active');
		if(attr == 'false') {
			$(".form-steps .question_two .titular-dos").fadeOut(0).removeClass('active');
			$(".form-steps .question_two .titular-un").fadeIn(300).addClass('active');
			// next step three remove content because need required
			if(!$('.question_three div').is('.titular-one')) {
				$('.question_three .relative-three').prepend(block);
			}
			block = $('.question_three .titular-two').clone(true, true);
			$('.question_three .titular-two').remove();
			// fieldCheck action valid or error
			checkField('.question_two .titular-un');
		} else {
			$(".form-steps .question_two .titular-un").fadeOut(0).removeClass('active');
			$(".form-steps .question_two .titular-dos").fadeIn(300).addClass('active');
			// next step three remove content because need required
			if(!$('.question_three div').is('.titular-two')) {
				$('.question_three .relative-three').prepend(block);
			}
			block = $('.question_three .titular-one').clone(true, true);
			$('.question_three .titular-one').remove();
			// fieldCheck action valid or error
			checkField('.question_two .titular-dos');
		}
	});
	// fieldCheck action valid or error
	//checkField('.question_two');
	// after click active button hide current block show next block
	//activeNextBtn('two', 'two', 'three');
	activeNextBtnPrevChoice('two', 'two', 'three');
	// /step two
	// step three
	var firstTitular, secondTitular;
	$(".form-steps .question_three .tab .item").on('click', 'button', function(e) {
		e.preventDefault();
		var attr = $(this).attr('data-action-titular');
		if($(this).is('.active')) return;
		$(this).parents('.tab').find('.item button').removeClass('active');
		$(".form-steps .question_three .tab_content-next").fadeIn(300);
		$(this).addClass('active');
		if(attr == 'false') {
			$(this).parents('.content-titulars').find('.tab_content').fadeOut(0);
			$(this).parents('.content-titulars').find('.tab_content .block-content').removeClass('active');
			
			if($(this).attr('data-titular-block') == 'first') {
				firstTitular = $(this).parents('.content-titulars').find('.tab_content').clone(true, true);

				var questionTwo = $(this).parents('.titular-two').find('.content-titulars').length;
				if(questionTwo == 2) {
					var questionNo = $(this).parents('.titular-two').find('.tab .item button[data-action-titular=false].active').length;
					if(questionNo == 2) {
						choiceNoReturnPrev('three', 'two');
					}
				} else {
					choiceNoReturnPrev('three', 'two');
				}
			}
			if($(this).attr('data-titular-block') == 'second') {
				var questionNo = $(this).parents('.titular-two').find('.tab .item button[data-action-titular=false].active').length;
				if(questionNo == 2) {
					choiceNoReturnPrev('three', 'two');
				}
				secondTitular = $(this).parents('.content-titulars').find('.tab_content').clone(true, true);
				
			}
			$(this).parents('.content-titulars').find('.tab_content').remove();

			
			// fieldCheck action valid or error
			checkField('.question_three .titular-one');
		} else {
			if($(this).attr('data-titular-block') == 'first') {
				$(this).parents('.content-titulars').append(firstTitular);
			}
			if($(this).attr('data-titular-block') == 'second') {
				$(this).parents('.content-titulars').append(secondTitular);
			}

			$(this).parents('.content-titulars').find('.tab_content .block-content').addClass('active');
			$(this).parents('.content-titulars').find('.tab_content').fadeIn(300);
			
			// fieldCheck action valid or error
			checkField('.question_three .titular-two');
		}
	});
	// fieldCheck action valid or error
	checkField('.question_three');
	// after click active button hide current block show next block
	activeNextBtn('three', 'three', 'four');
	// /step three
	// step four
	// fieldCheck action valid or error
	checkField('.question_four');
	// after click active button hide current block show next block
	activeNextBtn('four', 'four', 'five');
	// /step four
	// /.form-steps


});
