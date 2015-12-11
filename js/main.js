/*
Theme Name: Oli
Description: Coming Soon
Author: Bluminethemes
Theme URI: http://bluminethemes.com/preview/themeforest/html/oli/
Author URI: http://themeforest.net/user/Bluminethemes
Version: 1.3.1
*/

(function ($) {
	"use strict";

	/* BOOTSTRAP FIX FOR WINPHONE 8 AND IE10 */
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement("style");
		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport{width:auto!important}"
			)
		);
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
	}

	function detectIE() {
		if ($.browser.msie && $.browser.version == 9) {
			return true;
		}
		if ($.browser.msie && $.browser.version == 8) {
			return true;
		}
		return false;
	}

	function getWindowWidth() {
		return Math.max( $(window).width(), window.innerWidth);
	}

	function getWindowHeight() {
		return Math.max( $(window).height(), window.innerHeight);
	}


	// BEGIN WINDOW.LOAD FUNCTION
	$(window).load(function() {

		/* ------------------------------------------------------------------------ */
		/*	PRELOADER
		/* ------------------------------------------------------------------------ */
		var preloaderDelay = 350,
			preloaderFadeOutTime = 800;

		function hidePreloader() {
			var loadingAnimation = $('#loading-animation'),
				preloader = $('#preloader');

			loadingAnimation.fadeOut();
			preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
		}

		hidePreloader();

	});
	
	
                

	//BEGIN DOCUMENT.READY FUNCTION
	jQuery(document).ready(function($) {

		$.browser.chrome = $.browser.webkit && !!window.chrome;
		$.browser.safari = $.browser.webkit && !window.chrome;

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('body').addClass('mobile');
		}

		if ($.browser.chrome) {
			$('body').addClass('chrome');
		}

		if ($.browser.safari) {
			$('body').addClass('safari');
		}
        
        


		/* REFRESH WAYPOINTS */
		function refreshWaypoints() {
			setTimeout(function() {
				$.waypoints('refresh');
			}, 1000);   
		}


		/* ANIMATED ELEMENTS */	
		if( !$('body').hasClass('mobile') ) {

			$('.animated').appear();

			if( detectIE() ) {
				$('.animated').css({
					'display':'block',
					'visibility': 'visible'
				});
			} else {
				$('.animated').on('appear', function() {
					var elem = $(this);
					var animation = elem.data('animation');
					if ( !elem.hasClass('visible') ) {
						var animationDelay = elem.data('animation-delay');
						if ( animationDelay ) {
							setTimeout(function(){
								elem.addClass( animation + " visible" );
							}, animationDelay);
						} else {
							elem.addClass( animation + " visible" );
						}
					}
				});
				
                
                
				/* Starting Animation on Load */
				$(window).load(function() {
					$('.onstart').each( function() {
						var elem = $(this);
						if ( !elem.hasClass('visible') ) {
							var animationDelay = elem.data('animation-delay');
							var animation = elem.data('animation');
							if ( animationDelay ) {
								setTimeout(function(){
									elem.addClass( animation + " visible" );
								}, animationDelay);
							} else {
								elem.addClass( animation + " visible" );
							}
						}
					});
               });
				
				
               
				
			}

		}
        

		/* FULLPAGE */	
		$('#fullpage').fullpage({
			anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', 'lastPage'],
			menu: '#menu',
			scrollingSpeed: 800,
			autoScrolling: true,
			scrollBar: true,
			easing: 'easeInQuart',
			resize : false,
			paddingTop: '80px',
			paddingBottom: '80px',
			responsive: 1000,
		});

		$('a.go-slide').on( 'click', function() {
			var elem = $(this),
				slideID = elem.data('slide');
				
			$.fn.fullpage.moveTo(slideID);
		});
		
		if( $('body').hasClass('mobile') ) {
			$('#main-nav a').on( 'click', function() {
				$('.navbar-toggle').trigger('click');
			});
		};

        
        
        
        

		/* BACKGROUNDS */	
		function initPageBackground() {
			if($('body').hasClass('image-background')) { // IMAGE BACKGROUND

				$("body").backstretch([
					""
				]);

			} else if( $('body').hasClass('slideshow-background') ) { // SLIDESHOW BACKGROUND

				$("body").backstretch([
					"",
					"",
					""
				], {duration: 3000, fade: 1200});

			} else if($('body').hasClass('youtube-background')) { // YOUTUBE VIDEO BACKGROUND
				if($('body').hasClass('mobile')) {

					// Default background on mobile devices
					$("body").backstretch([
						""
					]);

				} else {
					$(".player").each(function() {
						$(".player").mb_YTPlayer();
					});
				}
			} else if($('body').hasClass('youtube-list-background')) { // YOUTUBE LIST VIDEOS BACKGROUND
				if($('body').hasClass('mobile')) {

					// Default background on mobile devices
					$("body").backstretch([
						""
					]);

				} else {

					var videos = [
						{videoURL: "0pXYp72dwl0",containment:'body',autoPlay:true, mute:true, startAt:0,opacity:1, loop:false, ratio:"4/3", addRaster:true},
						{videoURL: "9d8wWcJLnFI",containment:'body',autoPlay:true, mute:true, startAt:0,opacity:1, loop:false, ratio:"4/3", addRaster:false},
						{videoURL: "nam90gorcPs",containment:'body',autoPlay:true, mute:true, startAt:0,opacity:1, loop:false, ratio:"4/3", addRaster:true}
					];

					$(".player").YTPlaylist(videos, true);

				}
			} else if($('body').hasClass('mobile')) { // MOBILE BACKGROUND - Image background instead of video on mobile devices
				if($('body').hasClass('video-background')) {

					// Default background on mobile devices
					$("body").backstretch([
						""
					]);

				}	
			}
		}

		initPageBackground();


		/* RESPONSIVE VIDEO - FITVIDS */
		$(".video-container").fitVids();


		/* FLEXSLIDER */
		$('.flexslider').flexslider({
			animation: "fade",
			animationLoop: true,
			slideshowSpeed: 7000,
			animationSpeed: 600,
			controlNav: false,
			directionNav: false,
			keyboard: false,
			start: function(slider){
				$('body').removeClass('loading');
			}
		});


		/* COUNTDOWN */
		$('#clock').countdown('2015/09/1 12:00:00').on('update.countdown', function(event) {
			var $this = $(this).html(event.strftime('<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div><div class="counter-box"><div class="number">%H</div><span>Hours</span></div><div class="counter-box"><div class="number">%M</div><span>Minutes</span></div><div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
			));
		});


		/* MAILCHIMP */
		$('.mailchimp').ajaxChimp({
			callback: mailchimpCallback,
			url: "mailchimp-post-url" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
		});

		function mailchimpCallback(resp) {
			 if (resp.result === 'success') {
				$('.success-message').html(resp.msg).fadeIn(1000);
				$('.error-message').fadeOut(500);

			} else if(resp.result === 'error') {
				$('.error-message').html(resp.msg).fadeIn(1000);
			}  
		}


		/* Start Javascript for Subscription Form */
		$('.subscription-form').submit(function(event) {
			var email = $('#email').val();
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

			$.ajax({
				url:'subscribe.php',
				type :'POST',
				dataType:'json',
				data: {'email': email},

				success: function(data){
					if(data.error){
						$('.error-message').fadeIn();
					}else{
						$('.success-message').fadeIn();
						$(".error-message").hide();
					}
				}
			});
			return false;
		});

		$('#email').focus(function(){
			$('.error-message').fadeOut();
			$('.success-message').fadeOut();
		});

		$('#email').keydown(function(){
			$('.error-message').fadeOut();
			$('.success-message').fadeOut();
		});

		$("#email").on( 'click', function() {
			$("#email").val('');
		});


		/* PLACEHOLDER */
		$('input, textarea').placeholder();


		/* CONTACT FORM */
		function initContactForm() {

			var scrollElement = $('html,body'),
				contactForm = $('.contact-form'),
				form_msg_timeout;

			contactForm.on( 'submit', function() {

				var requiredFields = $(this).find('.required'),
					formFields = $(this).find('input, textarea'),
					formData = contactForm.serialize(),
					formAction = $(this).attr('action'),
					formSubmitMessage = $('.response-message');

				requiredFields.each(function() {

					if( $(this).val() === "" ) {

						$(this).addClass('input-error');

					} else {

						$(this).removeClass('input-error');
					}

				});

				function validateEmail(email) { 
					var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return exp.test(email);
				}

				var emailField = $('.contact-form-email');

				if( !validateEmail(emailField.val()) ) {

					emailField.addClass("input-error");

				}

				if ($(".contact-form :input").hasClass("input-error")) {
					return false;
				} else {

					clearTimeout(form_msg_timeout);

					$.post(formAction, formData, function(data) {
						formSubmitMessage.text(data);

						formFields.val('');

						form_msg_timeout = setTimeout(function() {
							formSubmitMessage.slideUp();
						}, 5000);
					});

				}

				return false;

			});

		}
		initContactForm();
		
		
		//Menu 18
		$('#openModelEspumaImg').click(function() {
			document.getElementById("rbMiniRolo").click();
		});
		
		
		$('#rbRolo').click(function() {
			$("#rightImage").attr('src', 'images/18/ravel.jpg');
			/*document.getElementById('rbRolo').style.fontSize = '1.2em';
			document.getElementById('rbMiniRolo').style.fontSize = '1.0em';*/
			document.getElementById('rbRolo').style.fontWeight = 'bold';
			document.getElementById('rbMiniRolo').style.fontWeight = 'normal';
			document.getElementById("tr1td1").innerText = '01MRA6';
			document.getElementById("tr1td2").innerText = '60';
			document.getElementById("tr1td3").innerText = '16';
			document.getElementById("tr2td1").innerText = '01MRA11';
			document.getElementById("tr2td2").innerText = '100';
			document.getElementById("tr2td3").innerText = '16';
			document.getElementById("tr3td1").innerText = '01RA60';
			document.getElementById("tr3td2").innerText = '60';
			document.getElementById("tr3td3").innerText = '45';
			document.getElementById("tr4td1").innerText = '01RA150';
			document.getElementById("tr4td2").innerText = '150';
			document.getElementById("tr4td3").innerText = '45';
			document.getElementById("tr5td1").innerText = '01RA180';
			document.getElementById("tr5td2").innerText = '180';
			document.getElementById("tr5td3").innerText = '45';
			document.getElementById("tr6td1").innerText = '01RA220';
			document.getElementById("tr6td2").innerText = '220';
			document.getElementById("tr6td3").innerText = '45';
			document.getElementById("tr7td1").innerText = '01RA250';
			document.getElementById("tr7td2").innerText = '250';
			document.getElementById("tr7td3").innerText = '45';
			
		});
							   
		$('#rbMiniRolo').click(function() {
			$("#rightImage").attr('src', 'images/18/angora.jpg');
			/*document.getElementById('rbRolo').style.fontSize = '1.0em';
			document.getElementById('rbMiniRolo').style.fontSize = '1.2em';*/
			document.getElementById('rbRolo').style.fontWeight = 'normal';
			document.getElementById('rbMiniRolo').style.fontWeight = 'bold';
			document.getElementById("tr1td1").innerText = 'asd';
			document.getElementById("tr1td2").innerText = '1';
			document.getElementById("tr1td3").innerText = '2';
			document.getElementById("tr2td1").innerText = 'asd';
			document.getElementById("tr2td2").innerText = 'MiniRolo';
			document.getElementById("tr2td3").innerText = 'MiniRolo';
			document.getElementById("tr3td1").innerText = 'MiniRolo';
			document.getElementById("tr3td2").innerText = 'MiniRolo';
			document.getElementById("tr3td3").innerText = 'MiniRolo';
			document.getElementById("tr4td1").innerText = 'MiniRolo';
			document.getElementById("tr4td2").innerText = 'MiniRolo';
			document.getElementById("tr4td3").innerText = 'MiniRolo';
			document.getElementById("tr5td1").innerText = 'MiniRolo';
			document.getElementById("tr5td2").innerText = 'MiniRolo';
			document.getElementById("tr5td3").innerText = 'MiniRolo';
			document.getElementById("tr6td1").innerText = 'MiniRolo';
			document.getElementById("tr6td2").innerText = 'MiniRolo';
			document.getElementById("tr6td3").innerText = 'MiniRolo';
			document.getElementById("tr7td1").innerText = 'MiniRolo';
			document.getElementById("tr7td2").innerText = 'MiniRolo';
			document.getElementById("tr7td3").innerText = 'MiniRolo';
			
		});
		
		$('#18Angora').click(function() {
			$("#rightImage").attr('src', 'images/18/angora.jpg');
			document.getElementById("rightTitle").innerText = 'Angora';
			document.getElementById("rightDesc").innerText = 'Esta é a descrição do angora';
		});
		
		$('#18Ravel').click(function() {
			$("#rightImage").attr('src', 'images/18/ravel.jpg');
			document.getElementById("rightTitle").innerText = 'Ravel';
			document.getElementById("rightDesc").innerText = 'Esta é a descrição do ravel';
		});
		
		$('#18Antigota').click(function() {
			$("#rightImage").attr('src', 'images/18/antigota.jpg');
			document.getElementById("rightTitle").innerText = 'Antigota';
			document.getElementById("rightDesc").innerText = 'Esta é a descrição do Antigota';
		});
		$('#18Microfibra').click(function() {
			$("#rightImage").attr('src', 'images/18/microfibra.jpg');
			document.getElementById("rightTitle").innerText = 'Microfibra';
			document.getElementById("rightDesc").innerText = 'Esta é a descrição do Microfibra';
		});
  
	
		//Menu 30
	
		$('#30Ravel').click(function() {
			$("#rightImage30").attr('src', 'images/30/ravel.JPG');
			document.getElementById("rightTitle30").innerText = 'ravel';
			document.getElementById("rightDesc30").innerText = 'Esta é a descrição do ravel';
		});
		
		$('#30Antigota').click(function() {
			$("#rightImage30").attr('src', 'images/30/antigota.JPG');
			document.getElementById("rightTitle30").innerText = 'antigota';
			document.getElementById("rightDesc30").innerText = 'Esta é a descrição do antigota';
		});
		
		$('#30Angora').click(function() {
			$("#rightImage30").attr('src', 'images/30/angora.JPG');
			document.getElementById("rightTitle30").innerText = 'angora';
			document.getElementById("rightDesc30").innerText = 'Esta é a descrição do angora';
		});
		$('#30Microfibra').click(function() {
			$("#rightImage30").attr('src', 'images/30/microfibra.JPG');
			document.getElementById("rightTitle30").innerText = 'microfibra';
			document.getElementById("rightDesc30").innerText = 'Esta é a descrição do microfibra';
		});
	
		//Menu 45
		
		$('#45Junior').click(function() {
			$("#rightImage45").attr('src', 'images/45/junior.JPG');
			document.getElementById("rightTitle45").innerText = 'junior';
			document.getElementById("rightDesc45").innerText = 'Esta é a descrição do junior';
		});
		
		$('#45Angora').click(function() {
			$("#rightImage45").attr('src', 'images/45/angora.JPG');
			document.getElementById("rightTitle45").innerText = 'angora';
			document.getElementById("rightDesc45").innerText = 'Esta é a descrição do angora';
		});
		
		$('#45Super').click(function() {
			$("#rightImage45").attr('src', 'images/45/super.jpg');
			document.getElementById("rightTitle45").innerText = 'super';
			document.getElementById("rightDesc45").innerText = 'Esta é a descrição do super';
		});
		$('#45Merino').click(function() {
			$("#rightImage45").attr('src', 'images/45/merino.JPG');
			document.getElementById("rightTitle45").innerText = 'merino';
			document.getElementById("rightDesc45").innerText = 'Esta é a descrição do merino';
		});
		$('#45Cromado').click(function() {
			$("#rightImage45").attr('src', 'images/45/cromado.JPG');
			document.getElementById("rightTitle45").innerText = 'cromado';
			document.getElementById("rightDesc45").innerText = 'Esta é a descrição do cromado';
		});
		
		$('#45Ravel').click(function() {
			$("#rightImage45").attr('src', 'images/45/ravel.JPG');
			document.getElementById("rightTitle45").innerText = 'ravel';
			document.getElementById("rightDesc45").innerText = 'Esta é a descrição do ravel';
		});
		
		$('#45Antigota').click(function() {
			$("#rightImage45").attr('src', 'images/45/antigota.JPG');
			document.getElementById("rightTitle45").innerText = 'antigota';
			document.getElementById("rightDesc45").innerText = 'Esta é a descrição do antigota';
		});
		$('#45AntigotaVerde').click(function() {
			$("#rightImage45").attr('src', 'images/45/antigotaVerde.JPG');
			document.getElementById("rightTitle45").innerText = 'Antigota Verde';
			document.getElementById("rightDesc45").innerText = 'Esta é a descrição do Antigota Verde';
		});
		$('#45Rugo').click(function() {
			$("#rightImage45").attr('src', 'images/45/rugo.JPG');
			document.getElementById("rightTitle45").innerText = 'Rugo';
			document.getElementById("rightDesc45").innerText = 'Esta é a descrição do Rugo';
		});

	
	   //Menu 50
	   
	   $('#50Junior').click(function() {
			$("#rightImage50").attr('src', 'images/50/junior.JPG');
			document.getElementById("rightTitle50").innerText = 'junior';
			document.getElementById("rightDesc50").innerText = 'Esta é a descrição do junior';
		});
		
		$('#50Ravel').click(function() {
			$("#rightImage50").attr('src', 'images/50/ravel.JPG');
			document.getElementById("rightTitle50").innerText = 'ravel';
			document.getElementById("rightDesc50").innerText = 'Esta é a descrição do ravel';
		});
		$('#50Antigota').click(function() {
			$("#rightImage50").attr('src', 'images/50/antigota.JPG');
			document.getElementById("rightTitle50").innerText = 'antigota';
			document.getElementById("rightDesc50").innerText = 'Esta é a descrição do antigota';
		});
		$('#50Merino').click(function() {
			$("#rightImage50").attr('src', 'images/50/merino.JPG');
			document.getElementById("rightTitle50").innerText = 'merino';
			document.getElementById("rightDesc50").innerText = 'Esta é a descrição do merino';
		});
		
		$('#50AntigotaVerde').click(function() {
			$("#rightImage50").attr('src', 'images/50/antigotaVerde.JPG');
			document.getElementById("rightTitle50").innerText = 'antigotaVerde';
			document.getElementById("rightDesc50").innerText = 'Esta é a descrição do antigotaVerde';
		});
		
		
		// Menu Canto
		
		$('#CantoAntigota').click(function() {
			$("#rightImageC").attr('src', 'images/Canto/antigota.JPG');
			document.getElementById("rightTitleC").innerText = 'antigota';
			document.getElementById("rightDescC").innerText = 'Esta é a descrição do antigota';
		});
		$('#CantoRavel').click(function() {
			$("#rightImageC").attr('src', 'images/Canto/ravel.JPG');
			document.getElementById("rightTitleC").innerText = 'ravel';
			document.getElementById("rightDescC").innerText = 'Esta é a descrição do ravel';
		});
		
		//Menu Acolchoados
		
		$('#AcolchoadoAntigotaSuper').click(function() {
			$("#rightImageA").attr('src', 'images/Acolchoados/antigotaSuper.JPG');
			document.getElementById("rightTitleA").innerText = 'antigotaSuper';
			document.getElementById("rightDescA").innerText = 'Esta é a descrição do antigotaSuper';
		});
		$('#AcolchoadoMerino').click(function() {
			$("#rightImageA").attr('src', 'images/Acolchoados/merino.JPG');
			document.getElementById("rightTitleA").innerText = 'merino';
			document.getElementById("rightDescA").innerText = 'Esta é a descrição do merino';
		});
		$('#AcolchoadoMicrofibra').click(function() {
			$("#rightImageA").attr('src', 'images/Acolchoados/microfibra.JPG');
			document.getElementById("rightTitleA").innerText = 'microfibra';
			document.getElementById("rightDescA").innerText = 'Esta é a descrição do microfibra';
		});
		$('#AcolchoadoRavel').click(function() {
			$("#rightImageA").attr('src', 'images/Acolchoados/ravel.JPG');
			document.getElementById("rightTitleA").innerText = 'ravel';
			document.getElementById("rightDescA").innerText = 'Esta é a descrição do ravel';
		});
		
	});
	
	//Menu Acessórios
	
		$('#AcessoriosArmacoes').click(function() {
			$("#rightImageAc").attr('src', 'images/Acessorios/armacoes.JPG');
			document.getElementById("rightTitleAc").innerText = 'armacoes';
			document.getElementById("rightDescAc").innerText = 'Esta é a descrição do armacoes';
		});
		
		$('#AcessoriosEspatulas').click(function() {
			$("#rightImageAc").attr('src', 'images/Acessorios/espatulas.JPG');
			document.getElementById("rightTitleAc").innerText = 'espatulas';
			document.getElementById("rightDescAc").innerText = 'Esta é a descrição do espatulas';
		});
		$('#AcessoriosTabuleiros').click(function() {
			$("#rightImageAc").attr('src', 'images/Acessorios/tabuleiros.JPG');
			document.getElementById("rightTitleAc").innerText = 'tabuleiros';
			document.getElementById("rightDescAc").innerText = 'Esta é a descrição do tabuleiros';
		});
		$('#AcessoriosCoberturas').click(function() {
			$("#rightImageAc").attr('src', 'images/Acessorios/coberturas.JPG');
			document.getElementById("rightTitleAc").innerText = 'coberturas';
			document.getElementById("rightDescAc").innerText = 'Esta é a descrição do coberturas';
		});
		
		$('#AcessoriosCabosExtensiveis').click(function() {
			$("#rightImageAc").attr('src', 'images/Acessorios/cabosExtensiveis.JPG');
			document.getElementById("rightTitleAc").innerText = 'cabosExtensiveis';
			document.getElementById("rightDescAc").innerText = 'Esta é a descrição do cabosExtensiveis';
		});

    
    
	
	

//END DOCUMENT.READY FUNCTION
	
	
	
	

})(jQuery);