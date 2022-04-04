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
	if($('body').is('#calcula-tu-nueva-hipoteca')) {
		var headerTopHeight = $('header .header-top').outerHeight();
		var headerMainHeight = $('header .header-main').outerHeight();
		$('#calcula-tu-nueva-hipoteca main').css('padding-top', headerTopHeight + headerMainHeight +'px');
	}
	if($('body').is('#mejora-tu-hipoteca')) {
		var headerTopHeight = $('header .header-top').outerHeight();
		var headerMainHeight = $('header .header-main').outerHeight();
		$('#mejora-tu-hipoteca main').css('padding-top', headerTopHeight + headerMainHeight +'px');
	}
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

	// home-banner
	$('.f_banner__slider .slick-slider').slick({
		// autoplay: true,
		items: 1,
		dots: true,
		infinite: true,
        speed: 500,
        fade: !0,
        cssEase: 'linear',
	})
	// end home-banner

	// scroll fixed header
	// if($(this).scrollTop() > 23) {
	// 	$('header').addClass("fixed");
	// }
	if($('body .f_form').length > 0) {
		var fForm = $('.f_form').offset().top;
		var fFormHeight = $('.f_form').outerHeight();
	} else {
		var fForm = 0;
	}
	if($('body .f_banner.home .block-form.block-form-btn').length > 0) {
		$('.f_mobile-btn').remove();
	}
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

		var heightShadow = $('.f_banner.block-shadow .slide img').height();
		$('.f_banner.block-shadow .mobile-box-shadow').css('height', heightShadow + 'px');
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
			   if ((scroll_top > last_scroll_top) && (scroll_top > top_display)) {
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
	$('.f_banner .block-form').eq(0).find('form').submit(function(e) {
		e.preventDefault();
	});
	$('.f_banner .block-form').eq(0).find('form').validate({
		rules: {
			ingresos_mensuales: {
				required: true,
				digits: true
			},
			gastos_mensuales: {
				required: true,
				digits: true
			},
			years_user: {
				required: true,
			}
		},
		submitHandler: function() {
			$('.f_banner .block-form').eq(0).fadeOut();
			$('.f_banner .block-form').eq(1).fadeIn(300);
		}
	});
	// global all step
	// step question question_six
	$('.form-steps-procents-interes .right .block-switcher input').change(function() {
		var attr = $(this).attr('name');
		if(attr == 'interes-procent') {
			$('.form-steps-procents-interes .left .procents-interes').remove();
			$('.form-steps-procents-interes .left').append('<span class="procents-interes w-100 d-flex align-items-center"><input type="number" min="1" max="100" value="1" name="procents-interes-variable" class="procents-interes-var">%</span>');
		}
	});
	function inputRange() {
	    var inputRagne = document.querySelectorAll('input[type=range]');
	    var sum = document.querySelector('.range-sum');

	    //let roots = document.querySelector('.block-form .form-block .form-body .range-line');

	    inputRagne.forEach(function(item) {
	        item.addEventListener('input', function(e) {
	            var result = sum.getAttribute('data-range', e.target.name);
	            var max = e.target.getAttribute('max');
	            document.querySelector('.range-sum[data-range=' + e.target.name +'] span').textContent = e.target.value;

	            var now = (e.target.value / max) * 100;

	            $(e.target).parent().css('--background-line', now.toFixed() + "%");
	            $(e.target).parent().css('--background-line-end', now.toFixed() + "%");
	        });
	        var max = $(item).attr('max');
	        var now = ($(item).val() / max) * 100;
	        $(item).parent().css('--background-line', now.toFixed() + "%");
	        $(item).parent().css('--background-line-end', now.toFixed() + "%");
	    });
	}
	jQuery.extend(jQuery.validator.messages, {
		required: "Debes completar el campo",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Por favor introduzca solo dígitos",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		accept: "Please enter a value with a valid extension.",
		maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
		minlength: jQuery.validator.format("Please enter at least {0} characters."),
		rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
		range: jQuery.validator.format("Please enter a value between {0} and {1}."),
		max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
		min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
	});
	
	$("form.form-steps").validate({
		rules: {
			coste_vivienda: {
				digits: true
			},
			aportacion: {
				digits: true
			},
			edad: {
				digits: true
			},	
			sueldo: {
				digits: true
			},	
			capital_pendiente: {
				digits: true
			},		
			cuota_mensual: {
				digits: true
			},
			edad_1: {
				digits: true
			},	
			sueldo_1: {
				digits: true
			},	
			capital_pendiente_1: {
				digits: true
			},		
			cuota_mensual_1: {
				digits: true
			},	
			edad_2: {
				digits: true
			},	
			sueldo_2: {
				digits: true
			},	
			capital_pendiente_2: {
				digits: true
			},		
			cuota_mensual_2: {
				digits: true
			},																	
			firstname: {
				required: true,
				minlength: 2
			},
			lastname: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				digits: true
			},
			horario_contacto: {
				required: true,
			}
		},
		messages: {
			firstname: "Por favor introduzca su nombre",
			lastname: "Por favor introduzca su apelllido",
			email: "Por favor introduzca un e-mail válido",
			phone: "Por favor introduzca un teléfono válido",
			horario_contacto: "Por favor introduzca un horario de contacto",
			agree: "Por favor acepte la política de privacidad",
		}
	}); 
	function stepsHead(step) {
		
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

		} else {
			$(".form-steps .question_one .block-image .description div").eq(0).addClass('active');
		}
	}
	function activeBreadcStep(tag) {
		if(tag == 'five') {
			if($('.form-steps .form-steps__breadc .item[data-step=four]').is('.active')) return;
		}
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
			if($(__this).attr('type') == 'radio') {
				$(__this).parents('.block-switcher').find('input[type=radio]').removeClass('valid check-valid');
				$(__this).addClass('check-valid');
				$(__this).addClass('valid');
				validStep(step);
			}
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


				if(show == 'five') { // MOSTRAR RESULTADOS.

					// OCULTANDO CAMPOS

		            //$('.form-steps__content .question_one .tab_content:not(.active)').remove();
					$('.form-steps__content .question_two .tab_content > div:not(.active)').remove();

					// Create our number formatter.
					var formatter = new Intl.NumberFormat('es-ES', {
					  style: 'currency',
					  currency: 'EUR',

					});



					// RECOGIDA DE DATOS
					
		            var formData = $("#nueva-hipoteca-form").serialize();
		           
		            var data = { };

		            $.each($('form').serializeArray(), function() {
		                data[this.name] = this.value;
		            });    


		            // KILLER QUESTIONS

		            var KQ = false;
		            var reason = '';

		            // La aportación debe de ser >= 10% del precio de compra.

		            if(!KQ && data['aportacion'] != "" && data['coste_vivienda'] != ""){

		            	if (data['aportacion'] < (data['coste_vivienda'] * 0.10)){

		            		KQ = true;
		            		reason = 'La aportación debe de ser mayor o igual al 10% del precio de compra.';
		            	}

		            }

		           // Si los dos titutalers son temporales o desempleados no es viable.

		            if(!KQ && data['situacion_laboral_1'] != "" && data['situacion_laboral_2'] != "" ){

		            	if ( (data['situacion_laboral_1'] == 'temporal' || data['situacion_laboral_1'] == 'desempleado') && (data['situacion_laboral_2'] == 'temporal' || data['situacion_laboral_2'] == 'desempleado') ){

		            		KQ = true;
		            		reason = 'No es viable 1 .';

		            	}

		            }

		            else if(!KQ && data['situacion_laboral'] != ""){

		            	if( (data['situacion_laboral'] == 'temporal' || data['situacion_laboral'] == 'desempleado') ){

		            		KQ = true;
		            		reason = 'No es viable 2.';

		            	}

		            }

		            // Si los ingresos són < que el 40% del endeudamiento una vez restados los préstamos, no es viable.

		            if(!KQ){

			            // TRAMO DE GASTOS

			            var notorio, ITP, registro, gestoria, tasacion;

			            if(data['coste_vivienda'] > 0 && data['coste_vivienda'] <= 100000){

			            	notorio = 1000;
			            	ITP = 0.10 * data['coste_vivienda'];
			            	registro = 300;
			            	gestoria = 300;
			            	tasacion = 400;
			            }

			            else if(data['coste_vivienda'] > 100000 && data['coste_vivienda'] <= 200000 ){

			            	notorio = 1200;
			            	ITP = 0.10 * data['coste_vivienda'];
			            	registro = 400;
			            	gestoria = 300;
			            	tasacion = 500;

			            }

			            else if(data['coste_vivienda'] > 200000 && data['coste_vivienda'] <= 400000 ){


			            	notorio = 1300;
			            	ITP = 0.10 * data['coste_vivienda'];
			            	registro = 500;
			            	gestoria = 300;
			            	tasacion = 500;


			            }

			            else if(data['coste_vivienda'] > 400000 ){


			            	notorio = 1400;
			            	ITP = 0.10 * data['coste_vivienda'];
			            	registro = 600;
			            	gestoria = 300;
			            	tasacion = 600;

			            }

			            var gastos = notorio + ITP + registro + gestoria + tasacion;

			            // CALCULADORA

			            var ingresos_mensuales,gastos_mensuales,years_user; 

			            // Ingresos Mensuales del Usuario

						if(data['sueldo_1'] != "" ) ingresos_mensuales = data['sueldo_1'] + data['sueldo_2'];

						else if(data['sueldo'] != "") ingresos_mensuales = data['sueldo'];

						// Gastos Mensuales del Usuario

						if(data['cuota_mensual_1'] != "") gastos_mensuales = data['cuota_mensual_1'] + data['cuota_mensual_2'];

						else if(data['cuota_mensual'] != "") gastos_mensuales = data['cuota_mensual'];

						// Años que el Usuario ha dado por el ojal al mundo
						
						if(data['edad_1'] != "") years_user = Math.min(data['edad_1'], data['edad_2']);

						else if(data['edad'] != "") years_user = data['edad'];          

						var plazo_max = 75 - years_user;

						if (plazo_max > 40) plazo_max = 40;
						
						var plazo_min = 9;

						//var plazo = plazo_max; 

						var plazo = 30;

						var interes  = 0.01;

						var periodicidad = 12;

						var n_pagos = periodicidad*plazo;

						var tasa = interes/periodicidad;

						//var cuota_maxima = Math.round(calcular_cuota_mes(ingresos_mensuales,gastos_mensuales) * 100) / 100;
						//var prestamo_maximo = Math.round(calcular_capital_maximo(cuota_maxima,tasa,n_pagos) * 100) / 100;

						var prestamo_maximo = data['coste_vivienda'];

						var couta_inicial = Math.round(calcular_cuota_maxima(tasa,n_pagos,prestamo_maximo) * 100) / 100;


						// INTECTANDO DATOS.

						$('.c-cuota').text(formatter.format(couta_inicial));
						$('.c-interes').text("1");
						$('.c-anos').text("30");
						$('.c-hipoteca').text(formatter.format(data['coste_vivienda']));

			            $('.c-gastos').text(formatter.format(gastos));
			            $('.c-aportacion').text(formatter.format(data['aportacion']));

			            $("[name='precio_compra']").attr("max",data['coste_vivienda']);
			            $(".range-sum.pc").html('<span>'+data['coste_vivienda']+'</span>€');

			            // MOSTRANDO PANTALLA
			            
		            	$('.reject-hipoteca').remove();
		            	$('.question_six').fadeIn(300).addClass('active');
		            	// form step six input range
		            	inputRange();

		            	// OPCION RECALCULAR 90%

		            	$('#recalcular').click(function(){

		            	// VARIABLE AUXILIAR
	
		            	var coste_vivienda = data['coste_vivienda'] * 0.90;
		            	prestamo_maximo = coste_vivienda;

		            	couta_inicial = Math.round(calcular_cuota_maxima(tasa,n_pagos,prestamo_maximo) * 100) / 100;

						// INTECTANDO DATOS.

						$('.c-cuota').text(formatter.format(couta_inicial));
						$('.c-hipoteca').text(formatter.format(coste_vivienda));

		            	});

		            	// OPCION RECALCULAR 90%

		            	$('#recalcular-all').click(function(){

		  				

		  				plazo = $("[name='plazo']").val();
		  				n_pagos = periodicidad*plazo;

		  				prestamo_maximo = $("[name='precio_compra']").val();
		  				couta_inicial = Math.round(calcular_cuota_maxima(tasa,n_pagos,prestamo_maximo) * 100) / 100;

		  				var aportacion = $("[name='r-aportacion']").val();

						$('.c-cuota').text(formatter.format(couta_inicial));
						$('.c-interes').text("1");
						$('.c-anos').text(plazo);
						$('.c-hipoteca').text(formatter.format(prestamo_maximo));
			            $('.c-aportacion').text(formatter.format(aportacion));



		            	});


		            }
		            else{

		            	$('.form-steps__content .question_five .row > div:first-child').remove();
		            	$('.form-steps__content .question .result-no').remove();
		            	$('.reject-hipoteca').fadeIn(300).addClass('active');
		            	$('.question_six').fadeIn(300).addClass('active');
		            	// form step six input range
		            	inputRange();

		            }



		            	
		          
		

		            // REALIZANDO PETICIÓN

		            /*$.ajax({
		                type : 'POST',
		                url : '/',
		                data : formData,
		                dataType : 'json',
		                encode : true,
		                success: function (data, status, xhr) {
		                   //console.log('status: ' + status + ', data: ' + data);
		                },
		                error: function (jqXhr, textStatus, errorMessage) {
		                    // console.log('Error' + errorMessage);
		                    // console.log('Error' + JSON.stringify(jqXhr));
		                    // console.log('Error' + errorMessage);
		                }
		            })
		            .done(function(data) {

						console.log(data);
		    
		            });
					*/


				}
				if($(window).width() <= 575) {
					if(show == 'four') {
						$('.form-steps__breadc .item[data-done=true]').addClass('done');
					}
					var top = $(this).parents('.form-steps__content').offset().top;
					$('html, body').animate({
						scrollTop: top+"px"
					});
				}
			} else {
				$(this).submit();
			}
			stepsHead(show);
		});
	}

	// CALCULAR CUOTA MES

	function calcular_cuota_mes(ingresos_mensuales,gastos_mensuales){

	 
		return (ingresos_mensuales-gastos_mensuales)*0.4;

	}

	// CALCULAR CAPITAL MÁXIMO


	function calcular_capital_maximo(cuota_max,tasa,n_pagos){

		var capital_max = cuota_max*(Math.pow((1+tasa),n_pagos)-1)/(tasa*Math.pow((1+tasa),n_pagos));

		return capital_max;

	}

	// CALCULAR CUOTA MÁXIMA

	function calcular_cuota_maxima(tasa,n_pagos,capital_inicial){


		var cuota_max = tasa*Math.pow((1+tasa),n_pagos)*capital_inicial/(Math.pow((1+tasa),n_pagos)-1);

		return cuota_max;


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
				
				if($(window).width() <= 575) {
					var top = $(this).parents('.form-steps__content').offset().top;
					$('html, body').animate({
						scrollTop: top+"px"
					});
				}
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
	$(".form-steps .question_one .tab .item label").click(function(e) {
		//e.preventDefault();
		var attr = $(this).attr('data-tab-active');
		if($(this).is('.active')) return;
		$(".form-steps .question_one .tab .item label").removeClass('active');
		$(this).addClass('active');

		// if(attr == 'tengo-elegida') {
		// 	$(".form-steps .question_one div[data-tab-active="+ attr +"]").fadeIn(300).addClass('active');
		// 	// show image descr text
		// 	blockImageTextDescr(true, attr);
		// } else {
		// 	$(".form-steps .question_one div[data-tab-active=tengo-elegida]").fadeOut(0).removeClass('active');
		// 	$(".form-steps .question_one").fadeOut(0).removeClass('active');
		// 	$(".form-steps .question_two").fadeIn(300).addClass('active');
		// 	// show image descr text
		// 	blockImageTextDescr(false, attr);
		// 	// active next breadcrumb
		// 	activeBreadcStep('two');

		// 	stepsHead('two');
		// }
		
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
						//choiceNoReturnPrev('three', 'two');
						activeNextBtn('three', 'three', 'four');
					}
				} else {
					//choiceNoReturnPrev('three', 'two');
					$('.tab_content-next .block-btn .next').addClass('activation');
					//activeNextBtn('three', 'three', 'four');
					$('.tab_content-next .block-btn .next.activation').trigger('click');
				}
			}
			if($(this).attr('data-titular-block') == 'second') {
				var questionNo = $(this).parents('.titular-two').find('.tab .item button[data-action-titular=false].active').length;
				// if(questionNo == 2) {
				// 	choiceNoReturnPrev('three', 'two');
				// }
				secondTitular = $(this).parents('.content-titulars').find('.tab_content').clone(true, true);
				///
				$('.tab_content-next .block-btn .next').addClass('activation');
				$('.tab_content-next .block-btn .next.activation').trigger('click');
				activeNextBtn('three', 'three', 'four');
				
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
	// step question question_six
	inputRange();
});
