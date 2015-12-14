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
		$('#openModelAngoraImg').click(function() {
			document.getElementById("rbMiniRoloAngora").click();
		});
		
		
		$('#rbRoloAngora').click(function() {
			$("#rightImageAngora").attr('src', 'images/18/ravel.JPG');
			document.getElementById('rbRoloAngora').style.fontSize = '1.0em';
			document.getElementById('rbCRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbCMiniRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbRoloAngora').style.fontWeight = 'bold';
			document.getElementById('rbCRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbRoloAngora').style.color = '#FFF';
			document.getElementById('rbMiniRoloAngora').style.color = '#FFF';
			document.getElementById('rbCRoloAngora').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAngora').style.color = '#FFF';
			document.getElementById("ul1li1tr1td1").innerText = '01RA60';
			document.getElementById("ul1li1tr1td2").innerText = 'Rolo';
			document.getElementById("ul1li1tr1td3").innerText = '60';
			document.getElementById("ul1li1tr1td4").innerText = '45';
			document.getElementById("ul1li1tr2td1").innerText = '01RA150';
			document.getElementById("ul1li1tr2td2").innerText = 'Rolo';
			document.getElementById("ul1li1tr2td3").innerText = '150';
			document.getElementById("ul1li1tr2td4").innerText = '45';
			document.getElementById("ul1li1tr3td1").innerText = '01RA180';
			document.getElementById("ul1li1tr3td2").innerText = 'Rolo';
			document.getElementById("ul1li1tr3td3").innerText = '180';
			document.getElementById("ul1li1tr3td4").innerText = '45';
			document.getElementById("ul1li1tr4td1").innerText = '01RA220';
			document.getElementById("ul1li1tr4td2").innerText = 'Rolo';
			document.getElementById("ul1li1tr4td3").innerText = '220';
			document.getElementById("ul1li1tr4td4").innerText = '45';
			document.getElementById("ul1li1tr5td1").innerText = '01RA250';
			document.getElementById("ul1li1tr5td2").innerText = 'Rolo';
			document.getElementById("ul1li1tr5td3").innerText = '250';
			document.getElementById("ul1li1tr5td4").innerText = '45';
		});
		$('#rbCRoloAngora').click(function() {
			$("#rightImageAngora").attr('src', 'images/18/ravel.JPG');
			document.getElementById('rbRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAngora').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbCMiniRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAngora').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbRoloAngora').style.color = '#FFF';
			document.getElementById('rbMiniRoloAngora').style.color = '#FFF';
			document.getElementById('rbCRoloAngora').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAngora').style.color = '#FFF';
			document.getElementById("ul1li1tr1td1").innerText = '01CA60';
			document.getElementById("ul1li1tr1td2").innerText = 'Carga';
			document.getElementById("ul1li1tr1td3").innerText = '60';
			document.getElementById("ul1li1tr1td4").innerText = '45';
			document.getElementById("ul1li1tr2td1").innerText = '01CA150';
			document.getElementById("ul1li1tr2td2").innerText = 'Carga';
			document.getElementById("ul1li1tr2td3").innerText = '150';
			document.getElementById("ul1li1tr2td4").innerText = '45';
			document.getElementById("ul1li1tr3td1").innerText = '01CA180';
			document.getElementById("ul1li1tr3td2").innerText = 'Carga';
			document.getElementById("ul1li1tr3td3").innerText = '180';
			document.getElementById("ul1li1tr3td4").innerText = '45';
			document.getElementById("ul1li1tr4td1").innerText = '01CA220';
			document.getElementById("ul1li1tr4td2").innerText = 'Carga';
			document.getElementById("ul1li1tr4td3").innerText = '220';
			document.getElementById("ul1li1tr4td4").innerText = '45';
			document.getElementById("ul1li1tr5td1").innerText = '01CA250';
			document.getElementById("ul1li1tr5td2").innerText = 'Carga';
			document.getElementById("ul1li1tr5td3").innerText = '250';
			document.getElementById("ul1li1tr5td4").innerText = '45';
		});
		

							   
		$('#rbMiniRoloAngora').click(function() {
			$("#rightImageAngora").attr('src', 'images/18/angora.JPG');
			document.getElementById('rbRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloAngora').style.fontSize = '1.0em';
			document.getElementById('rbCMiniRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAngora').style.fontWeight = 'bold';
			document.getElementById('rbCMiniRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbRoloAngora').style.color = '#FFF';
			document.getElementById('rbMiniRoloAngora').style.color = '#FFF';
			document.getElementById('rbCRoloAngora').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAngora').style.color = '#FFF';
			document.getElementById("ul1li1tr1td1").innerText = '01RSM2205';
			document.getElementById("ul1li1tr1td2").innerText = 'Mini Rolo';
			document.getElementById("ul1li1tr1td3").innerText = '60';
			document.getElementById("ul1li1tr1td4").innerText = '16';
			document.getElementById("ul1li1tr2td1").innerText = '01MRANGC10';
			document.getElementById("ul1li1tr2td2").innerText = 'Mini Rolo';
			document.getElementById("ul1li1tr2td3").innerText = '100';
			document.getElementById("ul1li1tr2td4").innerText = '16';
			document.getElementById("ul1li1tr3td1").innerText = '01MRANGL10';
			document.getElementById("ul1li1tr3td2").innerText = 'Mini Rolo (Armação Longa)';
			document.getElementById("ul1li1tr3td3").innerText = '100';
			document.getElementById("ul1li1tr3td4").innerText = '16';
			document.getElementById("ul1li1tr4td1").innerText = '01CMDRA12';
			document.getElementById("ul1li1tr4td2").innerText = 'Mini Rolo';
			document.getElementById("ul1li1tr4td3").innerText = '120';
			document.getElementById("ul1li1tr4td4").innerText = '30';
			document.getElementById("ul1li1tr5td1").innerText = '01CMDRA15';
			document.getElementById("ul1li1tr5td2").innerText = 'Mini Rolo';
			document.getElementById("ul1li1tr5td3").innerText = '150';
			document.getElementById("ul1li1tr5td4").innerText = '30';
			
		});
		
		
		$('#rbCMiniRoloAngora').click(function() {
			$("#rightImageAngora").attr('src', 'images/18/angora.JPG');
			document.getElementById('rbRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbCMiniRoloAngora').style.fontSize = '1.0em';
			document.getElementById('rbRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloAngora').style.fontWeight = 'bold';
			document.getElementById('rbRoloAngora').style.color = '#FFF';
			document.getElementById('rbMiniRoloAngora').style.color = '#FFF';
			document.getElementById('rbCRoloAngora').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAngora').style.color = '#FFF';
			document.getElementById("ul1li1tr1td1").innerText = '01CIANG6';
			document.getElementById("ul1li1tr1td2").innerText = 'Carga Rolo';
			document.getElementById("ul1li1tr1td3").innerText = '60';
			document.getElementById("ul1li1tr1td4").innerText = '16';
			document.getElementById("ul1li1tr2td1").innerText = '01CIANG';
			document.getElementById("ul1li1tr2td2").innerText = 'Carga Rolo';
			document.getElementById("ul1li1tr2td3").innerText = '100';
			document.getElementById("ul1li1tr2td4").innerText = '16';
			document.getElementById("ul1li1tr3td1").innerText = '01CIANG16';
			document.getElementById("ul1li1tr3td2").innerText = 'Carga Rolo';
			document.getElementById("ul1li1tr3td3").innerText = '160';
			document.getElementById("ul1li1tr3td4").innerText = '16';
			document.getElementById("ul1li1tr4td1").innerText = '012CMRA6';
			document.getElementById("ul1li1tr4td2").innerText = 'Pack 2 unidades';
			document.getElementById("ul1li1tr4td3").innerText = '60';
			document.getElementById("ul1li1tr4td4").innerText = '16';
			document.getElementById("ul1li1tr5td1").innerText = '012CMRA11';
			document.getElementById("ul1li1tr5td2").innerText = 'Pack 2 unidades';
			document.getElementById("ul1li1tr5td3").innerText = '100';
			document.getElementById("ul1li1tr5td4").innerText = '16';
			document.getElementById("ul1li1tr6td1").innerText = '012CMRA16';
			document.getElementById("ul1li1tr6td2").innerText = 'Pack 2 unidades';
			document.getElementById("ul1li1tr6td3").innerText = '150';
			document.getElementById("ul1li1tr6td4").innerText = '16';
			document.getElementById("ul1li1tr7td1").innerText = '01CXANG';
			document.getElementById("ul1li1tr7td2").innerText = 'Blister 10 unidades';
			document.getElementById("ul1li1tr7td3").innerText = '100';
			document.getElementById("ul1li1tr7td4").innerText = '16';
			document.getElementById("ul1li1tr8td1").innerText = '012CMDRA12';
			document.getElementById("ul1li1tr8td2").innerText = 'Pack 2 Unidades';
			document.getElementById("ul1li1tr8td3").innerText = '120';
			document.getElementById("ul1li1tr8td4").innerText = '30';
			document.getElementById("ul1li1tr9td1").innerText = '012CMDRA15';
			document.getElementById("ul1li1tr9td2").innerText = 'Pack 2 Unidades';
			document.getElementById("ul1li1tr9td3").innerText = '150';
			document.getElementById("ul1li1tr9td4").innerText = '30';
		});
		
		
		
		//Antigota
		$('#openModelAntigotaImg').click(function() {
			document.getElementById("rbMiniRoloAntigota").click();
		});
		
		
		$('#rbRoloAntigota').click(function() {
			$("#rightImageAntigota").attr('src', 'images/18/ravel.JPG');
			document.getElementById('rbRoloAntigota').style.fontSize = '1.2em';
			document.getElementById('rbMiniRoloAntigota').style.fontSize = '1.0em';
			document.getElementById('rbRoloAntigota').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbRoloAntigota').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigota').style.color = '#FFF';
			document.getElementById("ul1li2tr1td1").innerText = '01RANT180';
			document.getElementById("ul1li2tr1td2").innerText = 'Rolo Antigota';
			document.getElementById("ul1li2tr1td3").innerText = '180';
			document.getElementById("ul1li2tr1td4").innerText = '45';
			document.getElementById("ul1li2tr2td1").innerText = '01RANT220';
			document.getElementById("ul1li2tr2td2").innerText = 'Rolo Antigota';
			document.getElementById("ul1li2tr2td3").innerText = '220';
			document.getElementById("ul1li2tr2td4").innerText = '45';
			document.getElementById("ul1li2tr3td1").innerText = '01RANT250';
			document.getElementById("ul1li2tr3td2").innerText = 'Rolo Antigota';
			document.getElementById("ul1li2tr3td3").innerText = '250';
			document.getElementById("ul1li2tr3td4").innerText = '45';
			document.getElementById("ul1li2tr4td1").innerText = '01CANT180';
			document.getElementById("ul1li2tr4td2").innerText = 'Carga Antigota';
			document.getElementById("ul1li2tr4td3").innerText = '180';
			document.getElementById("ul1li2tr4td4").innerText = '45';
			document.getElementById("ul1li2tr5td1").innerText = '01CANT220';
			document.getElementById("ul1li2tr5td2").innerText = 'Carga Antigota';
			document.getElementById("ul1li2tr5td3").innerText = '220';
			document.getElementById("ul1li2tr5td4").innerText = '45';
			document.getElementById("ul1li2tr6td1").innerText = '01CANT250';
			document.getElementById("ul1li2tr6td2").innerText = 'Carga Antigota';
			document.getElementById("ul1li2tr6td3").innerText = '250';
			document.getElementById("ul1li2tr6td4").innerText = '45';
			document.getElementById("ul1li2tr7td1").innerText = '01RANT1805';
			document.getElementById("ul1li2tr7td2").innerText = 'Rolo Antigota';
			document.getElementById("ul1li2tr7td3").innerText = '180';
			document.getElementById("ul1li2tr7td4").innerText = '50';
			document.getElementById("ul1li2tr8td1").innerText = '01RANT2205';
			document.getElementById("ul1li2tr8td2").innerText = 'Rolo Antigota';
			document.getElementById("ul1li2tr8td3").innerText = '220';
			document.getElementById("ul1li2tr8td4").innerText = '50';
			document.getElementById("ul1li2tr9td1").innerText = '01RANT2505';
			document.getElementById("ul1li2tr9td2").innerText = 'Rolo Antigota';
			document.getElementById("ul1li2tr9td3").innerText = '250';
			document.getElementById("ul1li2tr9td4").innerText = '50';
			document.getElementById("ul1li2tr10td1").innerText = '01CANT1805';
			document.getElementById("ul1li2tr10td2").innerText = 'Carga Antigota';
			document.getElementById("ul1li2tr10td3").innerText = '180';
			document.getElementById("ul1li2tr10td4").innerText = '50';
			document.getElementById("ul1li2tr11td1").innerText = '01CANT2205';
			document.getElementById("ul1li2tr11td2").innerText = 'Carga Antigota';
			document.getElementById("ul1li2tr11td3").innerText = '220';
			document.getElementById("ul1li2tr11td4").innerText = '50';
			document.getElementById("ul1li2tr12td1").innerText = '01CANT2505';
			document.getElementById("ul1li2tr12td2").innerText = 'Carga Antigota';
			document.getElementById("ul1li2tr12td3").innerText = '250';
			document.getElementById("ul1li2tr12td4").innerText = '50';
			
		});

							   
		$('#rbMiniRoloAntigota').click(function() {
			$("#rightImageAntigota").attr('src', 'images/18/Antigota.JPG');
			document.getElementById('rbRoloAntigota').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloAntigota').style.fontSize = '1.2em';
			document.getElementById('rbRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAntigota').style.fontWeight = 'bold';
			document.getElementById('rbRoloAntigota').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigota').style.color = '#FFF';
			document.getElementById("ul1li2tr1td1").innerText = '01MRANTC6';
			document.getElementById("ul1li2tr1td2").innerText = 'Mini Rolo';
			document.getElementById("ul1li2tr1td3").innerText = '60';
			document.getElementById("ul1li2tr1td4").innerText = '16';
			document.getElementById("ul1li2tr2td1").innerText = '01MRANTC10';
			document.getElementById("ul1li2tr2td2").innerText = 'Mini Rolo';
			document.getElementById("ul1li2tr2td3").innerText = '100';
			document.getElementById("ul1li2tr2td4").innerText = '16';
			document.getElementById("ul1li2tr3td1").innerText = '01CIANT6';
			document.getElementById("ul1li2tr3td2").innerText = 'Carga Antigota';
			document.getElementById("ul1li2tr3td3").innerText = '60';
			document.getElementById("ul1li2tr3td4").innerText = '16';
			document.getElementById("ul1li2tr4td1").innerText = '01CIANT';
			document.getElementById("ul1li2tr4td2").innerText = 'Carga Antigora';
			document.getElementById("ul1li2tr4td3").innerText = '100';
			document.getElementById("ul1li2tr4td4").innerText = '16';
			document.getElementById("ul1li2tr5td1").innerText = '012CMRANT6';
			document.getElementById("ul1li2tr5td2").innerText = 'Pack 2 unidades';
			document.getElementById("ul1li2tr5td3").innerText = '60';
			document.getElementById("ul1li2tr5td4").innerText = '16';
			document.getElementById("ul1li2tr6td1").innerText = '012CMRANT11';
			document.getElementById("ul1li2tr6td2").innerText = 'Pack 2 unidades';
			document.getElementById("ul1li2tr6td3").innerText = '100';
			document.getElementById("ul1li2tr6td4").innerText = '16';
			document.getElementById("ul1li2tr7td1").innerText = '012CMRANT6';
			document.getElementById("ul1li2tr7td2").innerText = 'Pack 2 unidades';
			document.getElementById("ul1li2tr7td3").innerText = '150';
			document.getElementById("ul1li2tr7td4").innerText = '16';
			document.getElementById("ul1li2tr8td1").innerText = '01CXANT';
			document.getElementById("ul1li2tr8td2").innerText = 'Blister 10 unidades';
			document.getElementById("ul1li2tr8td3").innerText = '150';
			document.getElementById("ul1li2tr8td4").innerText = '16';
			
			document.getElementById("ul1li2tr9td1").innerText = '01CMDRANT12';
			document.getElementById("ul1li2tr9td2").innerText = 'Mini Rolo';
			document.getElementById("ul1li2tr9td3").innerText = '120';
			document.getElementById("ul1li2tr9td4").innerText = '30';
			document.getElementById("ul1li2tr10td1").innerText = '01CMDRANT15';
			document.getElementById("ul1li2tr10td2").innerText = 'Mini Rolo';
			document.getElementById("ul1li2tr10td3").innerText = '150';
			document.getElementById("ul1li2tr10td4").innerText = '30';
			document.getElementById("ul1li2tr11td1").innerText = '012CMDRANT12';
			document.getElementById("ul1li2tr11td2").innerText = 'Pack 2 unidades';
			document.getElementById("ul1li2tr11td3").innerText = '120';
			document.getElementById("ul1li2tr11td4").innerText = '30';
			document.getElementById("ul1li2tr12td1").innerText = '012CMDRANT15';
			document.getElementById("ul1li2tr12td2").innerText = 'Pack 2 unidades';
			document.getElementById("ul1li2tr12td3").innerText = '150';
			document.getElementById("ul1li2tr12td4").innerText = '30';
			
			
		});
		
		
		
		
		//Antigota Verde
		$('#openModelAntigotaVImg').click(function() {
			document.getElementById("rbMiniRoloAntigotaV").click();
		});
		
		
		$('#rbRoloAntigotaV').click(function() {
			$("#rightImageAntigotaV").attr('src', 'images/18/ravel.JPG');
			document.getElementById('rbRoloAntigotaV').style.fontSize = '1.2em';
			document.getElementById('rbMiniRoloAntigotaV').style.fontSize = '1.0em';
			document.getElementById('rbRoloAntigotaV').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloAntigotaV').style.fontWeight = 'normal';
			document.getElementById('rbRoloAntigotaV').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigotaV').style.color = '#FFF';
			document.getElementById("ul1li3tr1td1").innerText = '01RANTV180';
			document.getElementById("ul1li3tr1td2").innerText = 'Rolo Antigota Verde';
			document.getElementById("ul1li3tr1td3").innerText = '180';
			document.getElementById("ul1li3tr1td4").innerText = '45';
			document.getElementById("ul1li3tr2td1").innerText = '01RANTV220';
			document.getElementById("ul1li3tr2td2").innerText = 'Rolo Antigota Verde';
			document.getElementById("ul1li3tr2td3").innerText = '220';
			document.getElementById("ul1li3tr2td4").innerText = '45';
			document.getElementById("ul1li3tr3td1").innerText = '01RANTV250';
			document.getElementById("ul1li3tr3td2").innerText = 'Rolo Antigota Verde';
			document.getElementById("ul1li3tr3td3").innerText = '250';
			document.getElementById("ul1li3tr3td4").innerText = '45';
			document.getElementById("ul1li3tr4td1").innerText = '01CANTV180';
			document.getElementById("ul1li3tr4td2").innerText = 'Carga Antigota Verde';
			document.getElementById("ul1li3tr4td3").innerText = '180';
			document.getElementById("ul1li3tr4td4").innerText = '45';
			document.getElementById("ul1li3tr5td1").innerText = '01CANTV220';
			document.getElementById("ul1li3tr5td2").innerText = 'Carga Antigota Verde';
			document.getElementById("ul1li3tr5td3").innerText = '220';
			document.getElementById("ul1li3tr5td4").innerText = '45';
			document.getElementById("ul1li3tr6td1").innerText = '01CANTV250';
			document.getElementById("ul1li3tr6td2").innerText = 'Carga Antigota Verde';
			document.getElementById("ul1li3tr6td3").innerText = '250';
			document.getElementById("ul1li3tr6td4").innerText = '45';
			document.getElementById("ul1li3tr7td1").innerText = '01RANTV1805';
			document.getElementById("ul1li3tr7td2").innerText = 'Rolo Antigota Verde';
			document.getElementById("ul1li3tr7td3").innerText = '180';
			document.getElementById("ul1li3tr7td4").innerText = '50';
			document.getElementById("ul1li3tr8td1").innerText = '01RANTV2205';
			document.getElementById("ul1li3tr8td2").innerText = 'Rolo Antigota Verde';
			document.getElementById("ul1li3tr8td3").innerText = '220';
			document.getElementById("ul1li3tr8td4").innerText = '50';
			document.getElementById("ul1li3tr9td1").innerText = '01RANTV2505';
			document.getElementById("ul1li3tr9td2").innerText = 'Rolo Antigota Verde';
			document.getElementById("ul1li3tr9td3").innerText = '250';
			document.getElementById("ul1li3tr9td4").innerText = '50';
			document.getElementById("ul1li3tr10td1").innerText = '01CANTV1805';
			document.getElementById("ul1li3tr10td2").innerText = 'Carga Antigota Verde';
			document.getElementById("ul1li3tr10td3").innerText = '180';
			document.getElementById("ul1li3tr10td4").innerText = '50';
			document.getElementById("ul1li3tr11td1").innerText = '01CANTV2205';
			document.getElementById("ul1li3tr11td2").innerText = 'Carga Antigota Verde';
			document.getElementById("ul1li3tr11td3").innerText = '220';
			document.getElementById("ul1li3tr11td4").innerText = '50';
			document.getElementById("ul1li3tr12td1").innerText = '01CANTV2505';
			document.getElementById("ul1li3tr12td2").innerText = 'Carga Antigota Verde';
			document.getElementById("ul1li3tr12td3").innerText = '250';
			document.getElementById("ul1li3tr12td4").innerText = '50';
			
		});

							   
		$('#rbMiniRoloAntigotaV').click(function() {
			$("#rightImageAntigotaV").attr('src', 'images/18/AntigotaV.JPG');
			document.getElementById('rbRoloAntigotaV').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloAntigotaV').style.fontSize = '1.2em';
			document.getElementById('rbRoloAntigotaV').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAntigotaV').style.fontWeight = 'bold';
			document.getElementById('rbRoloAntigotaV').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigotaV').style.color = '#FFF';
			document.getElementById("ul1li3tr1td1").innerText = '';
			document.getElementById("ul1li3tr1td2").innerText = '';
			document.getElementById("ul1li3tr1td3").innerText = '';
			document.getElementById("ul1li3tr1td4").innerText = '';
			document.getElementById("ul1li3tr2td1").innerText = '';
			document.getElementById("ul1li3tr2td2").innerText = '';
			document.getElementById("ul1li3tr2td3").innerText = '';
			document.getElementById("ul1li3tr2td4").innerText = '';
			document.getElementById("ul1li3tr3td1").innerText = '';
			document.getElementById("ul1li3tr3td2").innerText = '';
			document.getElementById("ul1li3tr3td3").innerText = '';
			document.getElementById("ul1li3tr3td4").innerText = '';
			document.getElementById("ul1li3tr4td1").innerText = '';
			document.getElementById("ul1li3tr4td2").innerText = '';
			document.getElementById("ul1li3tr4td3").innerText = '';
			document.getElementById("ul1li3tr4td4").innerText = '';
			document.getElementById("ul1li3tr5td1").innerText = '';
			document.getElementById("ul1li3tr5td2").innerText = '';
			document.getElementById("ul1li3tr5td3").innerText = '';
			document.getElementById("ul1li3tr5td4").innerText = '';
			document.getElementById("ul1li3tr6td1").innerText = '';
			document.getElementById("ul1li3tr6td2").innerText = '';
			document.getElementById("ul1li3tr6td3").innerText = '';
			document.getElementById("ul1li3tr6td4").innerText = '';
			document.getElementById("ul1li3tr7td1").innerText = '';
			document.getElementById("ul1li3tr7td2").innerText = '';
			document.getElementById("ul1li3tr7td3").innerText = '';
			document.getElementById("ul1li3tr7td4").innerText = '';
			
		});
    
    
	
		//Menu 18
		$('#openModelCromadoImg').click(function() {
			document.getElementById("rbMiniRoloCromado").click();
		});
		
		
		$('#rbRoloCromado').click(function() {
			$("#rightImageCromado").attr('src', 'images/18/ravel.JPG');
			document.getElementById('rbRoloCromado').style.fontSize = '1.2em';
			document.getElementById('rbMiniRoloCromado').style.fontSize = '1.0em';
			document.getElementById('rbRoloCromado').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloCromado').style.fontWeight = 'normal';
			document.getElementById('rbRoloCromado').style.color = '#FFF';
			document.getElementById('rbMiniRoloCromado').style.color = '#FFF';
			document.getElementById("ul1li4tr1td1").innerText = '01RPC180';
			document.getElementById("ul1li4tr1td2").innerText = 'Rolo Cromado';
			document.getElementById("ul1li4tr1td3").innerText = '180';
			document.getElementById("ul1li4tr1td4").innerText = '45';
			document.getElementById("ul1li4tr2td1").innerText = '01RPC220';
			document.getElementById("ul1li4tr2td2").innerText = 'Rolo Cromado';
			document.getElementById("ul1li4tr2td3").innerText = '220';
			document.getElementById("ul1li4tr2td4").innerText = '45';
			document.getElementById("ul1li4tr3td1").innerText = '01RPC250';
			document.getElementById("ul1li4tr3td2").innerText = 'Rolo Cromado';
			document.getElementById("ul1li4tr3td3").innerText = '250';
			document.getElementById("ul1li4tr3td4").innerText = '45';
			document.getElementById("ul1li4tr4td1").innerText = '01CPC180';
			document.getElementById("ul1li4tr4td2").innerText = 'Carga Cromado';
			document.getElementById("ul1li4tr4td3").innerText = '180';
			document.getElementById("ul1li4tr4td4").innerText = '45';
			document.getElementById("ul1li4tr5td1").innerText = '01CPC220';
			document.getElementById("ul1li4tr5td2").innerText = 'Carga Cromado';
			document.getElementById("ul1li4tr5td3").innerText = '220';
			document.getElementById("ul1li4tr5td4").innerText = '45';
			document.getElementById("ul1li4tr6td1").innerText = '01CPC250';
			document.getElementById("ul1li4tr6td2").innerText = 'Carga Cromado';
			document.getElementById("ul1li4tr6td3").innerText = '250';
			document.getElementById("ul1li4tr6td4").innerText = '45';
			document.getElementById("ul1li4tr7td1").innerText = '';
			document.getElementById("ul1li4tr7td2").innerText = '';
			document.getElementById("ul1li4tr7td3").innerText = '';
			document.getElementById("ul1li4tr7td4").innerText = '';
			
		});

							   
		$('#rbMiniRoloCromado').click(function() {
			$("#rightImageCromado").attr('src', 'images/18/Cromado.JPG');
			document.getElementById('rbRoloCromado').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloCromado').style.fontSize = '1.2em';
			document.getElementById('rbRoloCromado').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloCromado').style.fontWeight = 'bold';
			document.getElementById('rbRoloCromado').style.color = '#FFF';
			document.getElementById('rbMiniRoloCromado').style.color = '#FFF';
			document.getElementById("ul1li4tr1td1").innerText = '';
			document.getElementById("ul1li4tr1td2").innerText = '';
			document.getElementById("ul1li4tr1td3").innerText = '';
			document.getElementById("ul1li4tr1td4").innerText = '';
			document.getElementById("ul1li4tr2td1").innerText = '';
			document.getElementById("ul1li4tr2td2").innerText = '';
			document.getElementById("ul1li4tr2td3").innerText = '';
			document.getElementById("ul1li4tr2td4").innerText = '';
			document.getElementById("ul1li4tr3td1").innerText = '';
			document.getElementById("ul1li4tr3td2").innerText = '';
			document.getElementById("ul1li4tr3td3").innerText = '';
			document.getElementById("ul1li4tr3td4").innerText = '';
			document.getElementById("ul1li4tr4td1").innerText = '';
			document.getElementById("ul1li4tr4td2").innerText = '';
			document.getElementById("ul1li4tr4td3").innerText = '';
			document.getElementById("ul1li4tr4td4").innerText = '';
			document.getElementById("ul1li4tr5td1").innerText = '';
			document.getElementById("ul1li4tr5td2").innerText = '';
			document.getElementById("ul1li4tr5td3").innerText = '';
			document.getElementById("ul1li4tr5td4").innerText = '';
			document.getElementById("ul1li4tr6td1").innerText = '';
			document.getElementById("ul1li4tr6td2").innerText = '';
			document.getElementById("ul1li4tr6td3").innerText = '';
			document.getElementById("ul1li4tr6td4").innerText = '';
			document.getElementById("ul1li4tr7td1").innerText = '';
			document.getElementById("ul1li4tr7td2").innerText = '';
			document.getElementById("ul1li4tr7td3").innerText = '';
			document.getElementById("ul1li4tr7td4").innerText = '';
			
		});
		
		
		//Espuma
		$('#openModelEspumaImg').click(function() {
			document.getElementById("rbMiniRoloEspuma").click();
		});
		
		
		$('#rbRoloEspuma').click(function() {
			$("#rightImageEspuma").attr('src', 'images/18/ravel.JPG');
			document.getElementById('rbRoloEspuma').style.fontSize = '1.2em';
			document.getElementById('rbMiniRoloEspuma').style.fontSize = '1.0em';
			document.getElementById('rbRoloEspuma').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbRoloEspuma').style.color = '#FFF';
			document.getElementById('rbMiniRoloEspuma').style.color = '#FFF';
			document.getElementById("ul2li1tr1td1").innerText = '01REC';
			document.getElementById("ul2li1tr1td2").innerText = 'Rolo Espnuma Canto';
			document.getElementById("ul2li1tr1td3").innerText = '';
			document.getElementById("ul2li1tr1td4").innerText = '75';
			document.getElementById("ul2li1tr2td1").innerText = '01CEC';
			document.getElementById("ul2li1tr2td2").innerText = 'Carga Espuma Canto';
			document.getElementById("ul2li1tr2td3").innerText = '';
			document.getElementById("ul2li1tr2td4").innerText = '75';
			document.getElementById("ul2li1tr3td1").innerText = '';
			document.getElementById("ul2li1tr3td2").innerText = '';
			document.getElementById("ul2li1tr3td3").innerText = '';
			document.getElementById("ul2li1tr3td4").innerText = '';
			document.getElementById("ul2li1tr4td1").innerText = '';
			document.getElementById("ul2li1tr4td2").innerText = '';
			document.getElementById("ul2li1tr4td3").innerText = '';
			document.getElementById("ul2li1tr4td4").innerText = '';
			document.getElementById("ul2li1tr5td1").innerText = '';
			document.getElementById("ul2li1tr5td2").innerText = '';
			document.getElementById("ul2li1tr5td3").innerText = '';
			document.getElementById("ul2li1tr5td4").innerText = '';
			document.getElementById("ul2li1tr6td1").innerText = '';
			document.getElementById("ul2li1tr6td2").innerText = '';
			document.getElementById("ul2li1tr6td3").innerText = '';
			document.getElementById("ul2li1tr6td4").innerText = '';
			document.getElementById("ul2li1tr7td1").innerText = '';
			document.getElementById("ul2li1tr7td2").innerText = '';
			document.getElementById("ul2li1tr7td3").innerText = '';
			document.getElementById("ul2li1tr7td4").innerText = '';
			
		});

							   
		$('#rbMiniRoloEspuma').click(function() {
			$("#rightImageEspuma").attr('src', 'images/18/Espuma.JPG');
			document.getElementById('rbRoloEspuma').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloEspuma').style.fontSize = '1.2em';
			document.getElementById('rbRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloEspuma').style.fontWeight = 'bold';
			document.getElementById('rbRoloEspuma').style.color = '#FFF';
			document.getElementById('rbMiniRoloEspuma').style.color = '#FFF';
			document.getElementById("ul2li1tr1td1").innerText = '01MRE6';
			document.getElementById("ul2li1tr1td2").innerText = 'Mini Rolo';
			document.getElementById("ul2li1tr1td3").innerText = '60';
			document.getElementById("ul2li1tr1td4").innerText = '16';
			document.getElementById("ul2li1tr2td1").innerText = '01MRE';
			document.getElementById("ul2li1tr2td2").innerText = 'Mini Rolo';
			document.getElementById("ul2li1tr2td3").innerText = '110';
			document.getElementById("ul2li1tr2td4").innerText = '16';
			document.getElementById("ul2li1tr3td1").innerText = '01CE5';
			document.getElementById("ul2li1tr3td2").innerText = 'Carga Mini Rolo';
			document.getElementById("ul2li1tr3td3").innerText = '60';
			document.getElementById("ul2li1tr3td4").innerText = '16';
			document.getElementById("ul2li1tr4td1").innerText = '01CE11';
			document.getElementById("ul2li1tr4td2").innerText = 'Carga Mini Rolo';
			document.getElementById("ul2li1tr4td3").innerText = '110';
			document.getElementById("ul2li1tr4td4").innerText = '16';
			document.getElementById("ul2li1tr5td1").innerText = '01CE16';
			document.getElementById("ul2li1tr5td2").innerText = 'Carga Mini Rolo';
			document.getElementById("ul2li1tr5td3").innerText = '150';
			document.getElementById("ul2li1tr5td4").innerText = '16';
			document.getElementById("ul2li1tr6td1").innerText = '012CMRE6';
			document.getElementById("ul2li1tr6td2").innerText = 'Pack 2 unidades';
			document.getElementById("ul2li1tr6td3").innerText = '60';
			document.getElementById("ul2li1tr6td4").innerText = '16';
			document.getElementById("ul2li1tr7td1").innerText = '012CMRE11';
			document.getElementById("ul2li1tr7td2").innerText = 'Pack 2 unidades';
			document.getElementById("ul2li1tr7td3").innerText = '110';
			document.getElementById("ul2li1tr7td4").innerText = '16';
			document.getElementById("ul2li1tr8td1").innerText = '012CMRE15';
			document.getElementById("ul2li1tr8td2").innerText = 'Pack 2 unidades';
			document.getElementById("ul2li1tr8td3").innerText = '150';
			document.getElementById("ul2li1tr8td4").innerText = '16';
			
			document.getElementById("ul2li1tr9td1").innerText = '01CXE';
			document.getElementById("ul2li1tr9td2").innerText = 'Blister 10 unidades';
			document.getElementById("ul2li1tr9td3").innerText = '110';
			document.getElementById("ul2li1tr9td4").innerText = '16';
			document.getElementById("ul2li1tr10td1").innerText = '01CXER';
			document.getElementById("ul2li1tr10td2").innerText = 'Blister 10 unidades (Topo Redondo)';
			document.getElementById("ul2li1tr10td3").innerText = '110';
			document.getElementById("ul2li1tr10td4").innerText = '16';
			
		});
		
		
		
		//JUNIOR
		$('#openModelJuniorImg').click(function() {
			document.getElementById("rbMiniRoloJunior").click();
		});
		
		
		$('#rbRoloJunior').click(function() {
			$("#rightImageJunior").attr('src', 'images/18/ravel.JPG');
			document.getElementById('rbRoloJunior').style.fontSize = '1.2em';
			document.getElementById('rbMiniRoloJunior').style.fontSize = '1.0em';
			document.getElementById('rbRoloJunior').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbRoloJunior').style.color = '#FFF';
			document.getElementById('rbMiniRoloJunior').style.color = '#FFF';
			document.getElementById("ul2li2tr1td1").innerText = '01RJ60';
			document.getElementById("ul2li2tr1td2").innerText = 'Rolo Júnior';
			document.getElementById("ul2li2tr1td3").innerText = '60';
			document.getElementById("ul2li2tr1td4").innerText = '45';
			document.getElementById("ul2li2tr2td1").innerText = '01RJ150';
			document.getElementById("ul2li2tr2td2").innerText = 'Rolo Júnior';
			document.getElementById("ul2li2tr2td3").innerText = '150';
			document.getElementById("ul2li2tr2td4").innerText = '45';
			document.getElementById("ul2li2tr3td1").innerText = '01RJ180';
			document.getElementById("ul2li2tr3td2").innerText = 'Rolo Júnior';
			document.getElementById("ul2li2tr3td3").innerText = '180';
			document.getElementById("ul2li2tr3td4").innerText = '45';
			document.getElementById("ul2li2tr4td1").innerText = '01RJ220';
			document.getElementById("ul2li2tr4td2").innerText = 'Rolo Júnior';
			document.getElementById("ul2li2tr4td3").innerText = '220';
			document.getElementById("ul2li2tr4td4").innerText = '45';
			document.getElementById("ul2li2tr5td1").innerText = '01RJ250';
			document.getElementById("ul2li2tr5td2").innerText = 'Rolo Júnior';
			document.getElementById("ul2li2tr5td3").innerText = '250';
			document.getElementById("ul2li2tr5td4").innerText = '45';
			
			document.getElementById("ul2li2tr6td1").innerText = '01CJ60';
			document.getElementById("ul2li2tr6td2").innerText = 'Carga Júnior';
			document.getElementById("ul2li2tr6td3").innerText = '60';
			document.getElementById("ul2li2tr6td4").innerText = '45';
			document.getElementById("ul2li2tr7td1").innerText = '01CJ150';
			document.getElementById("ul2li2tr7td2").innerText = 'Carga Júnior';
			document.getElementById("ul2li2tr7td3").innerText = '150';
			document.getElementById("ul2li2tr7td4").innerText = '45';
			document.getElementById("ul2li2tr8td1").innerText = '01CJ180';
			document.getElementById("ul2li2tr8td2").innerText = 'Carga Júnior';
			document.getElementById("ul2li2tr8td3").innerText = '180';
			document.getElementById("ul2li2tr8td4").innerText = '45';
			document.getElementById("ul2li2tr9td1").innerText = '01CJ220';
			document.getElementById("ul2li2tr9td2").innerText = 'Carga Júnior';
			document.getElementById("ul2li2tr9td3").innerText = '220';
			document.getElementById("ul2li2tr9td4").innerText = '45';
			document.getElementById("ul2li2tr10td1").innerText = '01CJ250';
			document.getElementById("ul2li2tr10td2").innerText = 'Carga Júnior';
			document.getElementById("ul2li2tr10td3").innerText = '250';
			document.getElementById("ul2li2tr10td4").innerText = '45';
			
			document.getElementById("ul2li2tr11td1").innerText = '01RJ1805';
			document.getElementById("ul2li2tr11td2").innerText = 'Rolo Júnior';
			document.getElementById("ul2li2tr11td3").innerText = '180';
			document.getElementById("ul2li2tr11td4").innerText = '50';
			document.getElementById("ul2li2tr12td1").innerText = '01RJ2205';
			document.getElementById("ul2li2tr12td2").innerText = 'Rolo Júnior';
			document.getElementById("ul2li2tr12td3").innerText = '220';
			document.getElementById("ul2li2tr12td4").innerText = '50';
			document.getElementById("ul2li2tr13td1").innerText = '01RJ2505';
			document.getElementById("ul2li2tr13td2").innerText = 'Rolo Júnior';
			document.getElementById("ul2li2tr13td3").innerText = '250';
			document.getElementById("ul2li2tr13td4").innerText = '50';
			
			document.getElementById("ul2li2tr11td1").innerText = '01CJ1805';
			document.getElementById("ul2li2tr11td2").innerText = 'Carga Júnior';
			document.getElementById("ul2li2tr11td3").innerText = '180';
			document.getElementById("ul2li2tr11td4").innerText = '50';
			document.getElementById("ul2li2tr12td1").innerText = '01CJ2205';
			document.getElementById("ul2li2tr12td2").innerText = 'Carga Júnior';
			document.getElementById("ul2li2tr12td3").innerText = '220';
			document.getElementById("ul2li2tr12td4").innerText = '50';
			document.getElementById("ul2li2tr13td1").innerText = '01CJ2505';
			document.getElementById("ul2li2tr13td2").innerText = 'Carga Júnior';
			document.getElementById("ul2li2tr13td3").innerText = '250';
			document.getElementById("ul2li2tr13td4").innerText = '50';
			
			
		});

							   
		$('#rbMiniRoloJunior').click(function() {
			$("#rightImageJunior").attr('src', 'images/18/Junior.JPG');
			document.getElementById('rbRoloJunior').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloJunior').style.fontSize = '1.2em';
			document.getElementById('rbRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloJunior').style.fontWeight = 'bold';
			document.getElementById('rbRoloJunior').style.color = '#FFF';
			document.getElementById('rbMiniRoloJunior').style.color = '#FFF';
			document.getElementById("ul2li2tr1td1").innerText = '';
			document.getElementById("ul2li2tr1td2").innerText = '';
			document.getElementById("ul2li2tr1td3").innerText = '';
			document.getElementById("ul2li2tr1td4").innerText = '';
			document.getElementById("ul2li2tr2td1").innerText = '';
			document.getElementById("ul2li2tr2td2").innerText = '';
			document.getElementById("ul2li2tr2td3").innerText = '';
			document.getElementById("ul2li2tr2td4").innerText = '';
			document.getElementById("ul2li2tr3td1").innerText = '';
			document.getElementById("ul2li2tr3td2").innerText = '';
			document.getElementById("ul2li2tr3td3").innerText = '';
			document.getElementById("ul2li2tr3td4").innerText = '';
			document.getElementById("ul2li2tr4td1").innerText = '';
			document.getElementById("ul2li2tr4td2").innerText = '';
			document.getElementById("ul2li2tr4td3").innerText = '';
			document.getElementById("ul2li2tr4td4").innerText = '';
			document.getElementById("ul2li2tr5td1").innerText = '';
			document.getElementById("ul2li2tr5td2").innerText = '';
			document.getElementById("ul2li2tr5td3").innerText = '';
			document.getElementById("ul2li2tr5td4").innerText = '';
			document.getElementById("ul2li2tr6td1").innerText = '';
			document.getElementById("ul2li2tr6td2").innerText = '';
			document.getElementById("ul2li2tr6td3").innerText = '';
			document.getElementById("ul2li2tr6td4").innerText = '';
			document.getElementById("ul2li2tr7td1").innerText = '';
			document.getElementById("ul2li2tr7td2").innerText = '';
			document.getElementById("ul2li2tr7td3").innerText = '';
			document.getElementById("ul2li2tr7td4").innerText = '';
			
		});
		
		
		
		
		//Microfibra
		$('#openModelMicrofibraImg').click(function() {
			document.getElementById("rbMiniRoloMicrofibra").click();
		});
		
		
		$('#rbRoloMicrofibra').click(function() {
			$("#rightImageMicrofibra").attr('src', 'images/18/ravel.JPG');
			document.getElementById('rbRoloMicrofibra').style.fontSize = '1.2em';
			document.getElementById('rbMiniRoloMicrofibra').style.fontSize = '1.0em';
			document.getElementById('rbRoloMicrofibra').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloMicrofibra').style.fontWeight = 'normal';
			document.getElementById('rbRoloMicrofibra').style.color = '#FFF';
			document.getElementById('rbMiniRoloMicrofibra').style.color = '#FFF';
			document.getElementById("ul2li3tr1td1").innerText = '01RMIC180';
			document.getElementById("ul2li3tr1td2").innerText = 'Rolo Microfibra';
			document.getElementById("ul2li3tr1td3").innerText = '180';
			document.getElementById("ul2li3tr1td4").innerText = '45';
			document.getElementById("ul2li3tr2td1").innerText = '01RMIC220';
			document.getElementById("ul2li3tr2td2").innerText = 'Rolo Microfibra';
			document.getElementById("ul2li3tr2td3").innerText = '220';
			document.getElementById("ul2li3tr2td4").innerText = '45';
			document.getElementById("ul2li3tr3td1").innerText = '01RMIC250';
			document.getElementById("ul2li3tr3td2").innerText = 'Rolo Microfibra';
			document.getElementById("ul2li3tr3td3").innerText = '250';
			document.getElementById("ul2li3tr3td4").innerText = '45';
			document.getElementById("ul2li3tr4td1").innerText = '01CMIC180';
			document.getElementById("ul2li3tr4td2").innerText = 'Carga Microfibra';
			document.getElementById("ul2li3tr4td3").innerText = '180';
			document.getElementById("ul2li3tr4td4").innerText = '45';
			document.getElementById("ul2li3tr5td1").innerText = '01CMIC220';
			document.getElementById("ul2li3tr5td2").innerText = 'Carga Microfibra';
			document.getElementById("ul2li3tr5td3").innerText = '220';
			document.getElementById("ul2li3tr5td4").innerText = '45';
			document.getElementById("ul2li3tr6td1").innerText = '01CMIC250';
			document.getElementById("ul2li3tr6td2").innerText = 'Carga Microfibra';
			document.getElementById("ul2li3tr6td3").innerText = '250';
			document.getElementById("ul2li3tr6td4").innerText = '45';
			document.getElementById("ul2li3tr7td1").innerText = '';
			document.getElementById("ul2li3tr7td2").innerText = '';
			document.getElementById("ul2li3tr7td3").innerText = '';
			document.getElementById("ul2li3tr7td4").innerText = '';
			
		});

							   
		$('#rbMiniRoloMicrofibra').click(function() {
			$("#rightImageMicrofibra").attr('src', 'images/18/Microfibra.JPG');
			document.getElementById('rbRoloMicrofibra').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloMicrofibra').style.fontSize = '1.2em';
			document.getElementById('rbRoloMicrofibra').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloMicrofibra').style.fontWeight = 'bold';
			document.getElementById('rbRoloMicrofibra').style.color = '#FFF';
			document.getElementById('rbMiniRoloMicrofibra').style.color = '#FFF';
			document.getElementById("ul2li3tr1td1").innerText = '01CMDRMIC12';
			document.getElementById("ul2li3tr1td2").innerText = 'Mini Rolo';
			document.getElementById("ul2li3tr1td3").innerText = '120';
			document.getElementById("ul2li3tr1td4").innerText = '30';
			document.getElementById("ul2li3tr2td1").innerText = '01CMDRMIC15';
			document.getElementById("ul2li3tr2td2").innerText = 'Mini Rolo';
			document.getElementById("ul2li3tr2td3").innerText = '150';
			document.getElementById("ul2li3tr2td4").innerText = '30';
			document.getElementById("ul2li3tr3td1").innerText = '012CMDRMIC12';
			document.getElementById("ul2li3tr3td2").innerText = 'Carga Mini Rolo';
			document.getElementById("ul2li3tr3td3").innerText = '120';
			document.getElementById("ul2li3tr3td4").innerText = '30';
			document.getElementById("ul2li3tr4td1").innerText = '012CMDRMIC15';
			document.getElementById("ul2li3tr4td2").innerText = 'Carga Mini Rolo';
			document.getElementById("ul2li3tr4td3").innerText = '150';
			document.getElementById("ul2li3tr4td4").innerText = '30';
			document.getElementById("ul2li3tr5td1").innerText = '';
			document.getElementById("ul2li3tr5td2").innerText = '';
			document.getElementById("ul2li3tr5td3").innerText = '';
			document.getElementById("ul2li3tr5td4").innerText = '';
			document.getElementById("ul2li3tr6td1").innerText = '';
			document.getElementById("ul2li3tr6td2").innerText = '';
			document.getElementById("ul2li3tr6td3").innerText = '';
			document.getElementById("ul2li3tr6td4").innerText = '';
			document.getElementById("ul2li3tr7td1").innerText = '';
			document.getElementById("ul2li3tr7td2").innerText = '';
			document.getElementById("ul2li3tr7td3").innerText = '';
			document.getElementById("ul2li3tr7td4").innerText = '';
			
		});
		
		
		
		//Ravel
		$('#openModelRavelImg').click(function() {
			document.getElementById("rbMiniRoloRavel").click();
		});
		
		
		$('#rbRoloRavel').click(function() {
			$("#rightImageRavel").attr('src', 'images/18/ravel.JPG');
			document.getElementById('rbRoloRavel').style.fontSize = '1.2em';
			document.getElementById('rbMiniRoloRavel').style.fontSize = '1.0em';
			document.getElementById('rbRoloRavel').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbRoloRavel').style.color = '#FFF';
			document.getElementById('rbMiniRoloRavel').style.color = '#FFF';
			document.getElementById("ul2li4tr1td1").innerText = '01RRA180';
			document.getElementById("ul2li4tr1td2").innerText = 'Rolo Ravel';
			document.getElementById("ul2li4tr1td3").innerText = '180';
			document.getElementById("ul2li4tr1td4").innerText = '45';
			document.getElementById("ul2li4tr2td1").innerText = '01RRA220';
			document.getElementById("ul2li4tr2td2").innerText = 'Rolo Ravel';
			document.getElementById("ul2li4tr2td3").innerText = '220';
			document.getElementById("ul2li4tr2td4").innerText = '45';
			document.getElementById("ul2li4tr3td1").innerText = '01RRA250';
			document.getElementById("ul2li4tr3td2").innerText = 'Rolo Ravel';
			document.getElementById("ul2li4tr3td3").innerText = '250';
			document.getElementById("ul2li4tr3td4").innerText = '45';
			document.getElementById("ul2li4tr4td1").innerText = '01CRA180';
			document.getElementById("ul2li4tr4td2").innerText = 'Carga Ravel';
			document.getElementById("ul2li4tr4td3").innerText = '180';
			document.getElementById("ul2li4tr4td4").innerText = '45';
			document.getElementById("ul2li4tr5td1").innerText = '01CRA220';
			document.getElementById("ul2li4tr5td2").innerText = 'Carga Ravel';
			document.getElementById("ul2li4tr5td3").innerText = '220';
			document.getElementById("ul2li4tr5td4").innerText = '45';
			document.getElementById("ul2li4tr6td1").innerText = '01CRA250';
			document.getElementById("ul2li4tr6td2").innerText = 'Carga Ravel';
			document.getElementById("ul2li4tr6td3").innerText = '250';
			document.getElementById("ul2li4tr6td4").innerText = '45';
			document.getElementById("ul2li4tr7td1").innerText = '01RRA1805';
			document.getElementById("ul2li4tr7td2").innerText = 'Rolo Ravel';
			document.getElementById("ul2li4tr7td3").innerText = '180';
			document.getElementById("ul2li4tr7td4").innerText = '50';
			document.getElementById("ul2li4tr8td1").innerText = '01RRA2205';
			document.getElementById("ul2li4tr8td2").innerText = 'Rolo Ravel';
			document.getElementById("ul2li4tr8td3").innerText = '220';
			document.getElementById("ul2li4tr8td4").innerText = '50';
			document.getElementById("ul2li4tr9td1").innerText = '01RRA2505';
			document.getElementById("ul2li4tr9td2").innerText = 'Rolo Ravel';
			document.getElementById("ul2li4tr9td3").innerText = '250';
			document.getElementById("ul2li4tr9td4").innerText = '50';
			document.getElementById("ul2li4tr10td1").innerText = '01CRA1805';
			document.getElementById("ul2li4tr10td2").innerText = 'Carga Ravel';
			document.getElementById("ul2li4tr10td3").innerText = '180';
			document.getElementById("ul2li4tr10td4").innerText = '50';
			document.getElementById("ul2li4tr11td1").innerText = '01CRA2205';
			document.getElementById("ul2li4tr11td2").innerText = 'Carga Ravel';
			document.getElementById("ul2li4tr11td3").innerText = '220';
			document.getElementById("ul2li4tr11td4").innerText = '50';
			document.getElementById("ul2li4tr12td1").innerText = '01CRA2505';
			document.getElementById("ul2li4tr12td2").innerText = 'Carga Ravel';
			document.getElementById("ul2li4tr12td3").innerText = '250';
			document.getElementById("ul2li4tr12td4").innerText = '50';
			
		});

							   
		$('#rbMiniRoloRavel').click(function() {
			$("#rightImageRavel").attr('src', 'images/18/Ravel.JPG');
			document.getElementById('rbRoloRavel').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloRavel').style.fontSize = '1.2em';
			document.getElementById('rbRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRavel').style.fontWeight = 'bold';
			document.getElementById('rbRoloRavel').style.color = '#FFF';
			document.getElementById('rbMiniRoloRavel').style.color = '#FFF';
			document.getElementById("ul2li4tr1td1").innerText = '01CMDRRA12';
			document.getElementById("ul2li4tr1td2").innerText = 'Mini Rolo';
			document.getElementById("ul2li4tr1td3").innerText = '120';
			document.getElementById("ul2li4tr1td4").innerText = '30';
			document.getElementById("ul2li4tr2td1").innerText = '01CMDRRA15';
			document.getElementById("ul2li4tr2td2").innerText = 'Mini Rolo';
			document.getElementById("ul2li4tr2td3").innerText = '150';
			document.getElementById("ul2li4tr2td4").innerText = '30';
			document.getElementById("ul2li4tr3td1").innerText = '012CMDRRA12';
			document.getElementById("ul2li4tr3td2").innerText = 'Carga Mini Rolo';
			document.getElementById("ul2li4tr3td3").innerText = '120';
			document.getElementById("ul2li4tr3td4").innerText = '30';
			document.getElementById("ul2li4tr4td1").innerText = '012CMDRRA15';
			document.getElementById("ul2li4tr4td2").innerText = 'Carga Mini Rolo';
			document.getElementById("ul2li4tr4td3").innerText = '150';
			document.getElementById("ul2li4tr4td4").innerText = '30';
			document.getElementById("ul2li4tr5td1").innerText = '';
			document.getElementById("ul2li4tr5td2").innerText = '';
			document.getElementById("ul2li4tr5td3").innerText = '';
			document.getElementById("ul2li4tr5td4").innerText = '';
			document.getElementById("ul2li4tr6td1").innerText = '';
			document.getElementById("ul2li4tr6td2").innerText = '';
			document.getElementById("ul2li4tr6td3").innerText = '';
			document.getElementById("ul2li4tr6td4").innerText = '';
			document.getElementById("ul2li4tr7td1").innerText = '';
			document.getElementById("ul2li4tr7td2").innerText = '';
			document.getElementById("ul2li4tr7td3").innerText = '';
			document.getElementById("ul2li4tr7td4").innerText = '';
			
		});
		
		
		
		//Rugo
		$('#openModelRugoImg').click(function() {
			document.getElementById("rbMiniRoloRugo").click();
		});
		
		
		$('#rbRoloRugo').click(function() {
			$("#rightImageRugo").attr('src', 'images/18/Rugo.JPG');
			document.getElementById('rbRoloRugo').style.fontSize = '1.2em';
			document.getElementById('rbMiniRoloRugo').style.fontSize = '1.0em';
			document.getElementById('rbRoloRugo').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbRoloRugo').style.color = '#FFF';
			document.getElementById('rbMiniRoloRugo').style.color = '#FFF';
			document.getElementById("ul3li1tr1td1").innerText = '01RR60';
			document.getElementById("ul3li1tr1td2").innerText = 'Rolo Rugo';
			document.getElementById("ul3li1tr1td3").innerText = '60';
			document.getElementById("ul3li1tr1td4").innerText = '45';
			document.getElementById("ul3li1tr2td1").innerText = '01RR180';
			document.getElementById("ul3li1tr2td2").innerText = 'Rolo Rugo';
			document.getElementById("ul3li1tr2td3").innerText = '180';
			document.getElementById("ul3li1tr2td4").innerText = '45';
			document.getElementById("ul3li1tr3td1").innerText = '01RR220';
			document.getElementById("ul3li1tr3td2").innerText = 'Rolo Rugo';
			document.getElementById("ul3li1tr3td3").innerText = '220';
			document.getElementById("ul3li1tr3td4").innerText = '45';
			document.getElementById("ul3li1tr4td1").innerText = '01RR1250';
			document.getElementById("ul3li1tr4td2").innerText = 'Rolo Rugo';
			document.getElementById("ul3li1tr4td3").innerText = '250';
			document.getElementById("ul3li1tr4td4").innerText = '45';
			document.getElementById("ul3li1tr5td1").innerText = '01RRC';
			document.getElementById("ul3li1tr5td2").innerText = 'Rolo Rugo Canto';
			document.getElementById("ul3li1tr5td3").innerText = '';
			document.getElementById("ul3li1tr5td4").innerText = '45';
			document.getElementById("ul3li1tr6td1").innerText = '01CR60';
			document.getElementById("ul3li1tr6td2").innerText = 'Carga Rugo';
			document.getElementById("ul3li1tr6td3").innerText = '60';
			document.getElementById("ul3li1tr6td4").innerText = '45';
			document.getElementById("ul3li1tr7td1").innerText = '01CR180';
			document.getElementById("ul3li1tr7td2").innerText = 'Carga Rugo';
			document.getElementById("ul3li1tr7td3").innerText = '180';
			document.getElementById("ul3li1tr7td4").innerText = '45';
			document.getElementById("ul3li1tr8td1").innerText = '01CR220';
			document.getElementById("ul3li1tr8td2").innerText = 'Carga Rugo';
			document.getElementById("ul3li1tr8td3").innerText = '220';
			document.getElementById("ul3li1tr8td4").innerText = '45';
			document.getElementById("ul3li1tr9td1").innerText = '01CR250';
			document.getElementById("ul3li1tr9td2").innerText = 'Carga Rugo';
			document.getElementById("ul3li1tr9td3").innerText = '250';
			document.getElementById("ul3li1tr9td4").innerText = '45';
			document.getElementById("ul3li1tr10td1").innerText = '01CRC';
			document.getElementById("ul3li1tr10td2").innerText = 'Carga Rugo Canto';
			document.getElementById("ul3li1tr10td3").innerText = '';
			document.getElementById("ul3li1tr10td4").innerText = '45';
			
		});

							   
		$('#rbMiniRoloRugo').click(function() {
			$("#rightImageRugo").attr('src', 'images/18/Rugo.JPG');
			document.getElementById('rbRoloRugo').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloRugo').style.fontSize = '1.2em';
			document.getElementById('rbRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRugo').style.fontWeight = 'bold';
			document.getElementById('rbRoloRugo').style.color = '#FFF';
			document.getElementById('rbMiniRoloRugo').style.color = '#FFF';
			document.getElementById("ul3li1tr1td1").innerText = '01MRR11';
			document.getElementById("ul3li1tr1td2").innerText = 'Mini Rolo';
			document.getElementById("ul3li1tr1td3").innerText = '110';
			document.getElementById("ul3li1tr1td4").innerText = '16';
			document.getElementById("ul3li1tr2td1").innerText = '01CIR';
			document.getElementById("ul3li1tr2td2").innerText = 'Carga Mini Rolo';
			document.getElementById("ul3li1tr2td3").innerText = '110';
			document.getElementById("ul3li1tr2td4").innerText = '16';
			document.getElementById("ul3li1tr3td1").innerText = '012CMRR11';
			document.getElementById("ul3li1tr3td2").innerText = 'Pack 2 unidades';
			document.getElementById("ul3li1tr3td3").innerText = '110';
			document.getElementById("ul3li1tr3td4").innerText = '16';
			document.getElementById("ul3li1tr4td1").innerText = '01CXR';
			document.getElementById("ul3li1tr4td2").innerText = 'Blister 10 unidades';
			document.getElementById("ul3li1tr4td3").innerText = '110';
			document.getElementById("ul3li1tr4td4").innerText = '16';
			document.getElementById("ul3li1tr5td1").innerText = '';
			document.getElementById("ul3li1tr5td2").innerText = '';
			document.getElementById("ul3li1tr5td3").innerText = '';
			document.getElementById("ul3li1tr5td4").innerText = '';
			document.getElementById("ul3li1tr6td1").innerText = '';
			document.getElementById("ul3li1tr6td2").innerText = '';
			document.getElementById("ul3li1tr6td3").innerText = '';
			document.getElementById("ul3li1tr6td4").innerText = '';
			document.getElementById("ul3li1tr7td1").innerText = '';
			document.getElementById("ul3li1tr7td2").innerText = '';
			document.getElementById("ul3li1tr7td3").innerText = '';
			document.getElementById("ul3li1tr7td4").innerText = '';
			
		});
	
		
		
		//Super
		$('#openModelSuperImg').click(function() {
			document.getElementById("rbMiniRoloSuper").click();
		});
		
		
		$('#rbRoloSuper').click(function() {
			$("#rightImageSuper").attr('src', 'images/18/Super.JPG');
			document.getElementById('rbRoloSuper').style.fontSize = '1.2em';
			document.getElementById('rbMiniRoloSuper').style.fontSize = '1.0em';
			document.getElementById('rbRoloSuper').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbRoloSuper').style.color = '#FFF';
			document.getElementById('rbMiniRoloSuper').style.color = '#FFF';
			document.getElementById("ul3li2tr1td1").innerText = '01RS180';
			document.getElementById("ul3li2tr1td2").innerText = 'Rolo Super';
			document.getElementById("ul3li2tr1td3").innerText = '180';
			document.getElementById("ul3li2tr1td4").innerText = '45';
			document.getElementById("ul3li2tr2td1").innerText = '01RS220';
			document.getElementById("ul3li2tr2td2").innerText = 'Rolo Super';
			document.getElementById("ul3li2tr2td3").innerText = '220';
			document.getElementById("ul3li2tr2td4").innerText = '45';
			document.getElementById("ul3li2tr3td1").innerText = '01RS250';
			document.getElementById("ul3li2tr3td2").innerText = 'Rolo Super';
			document.getElementById("ul3li2tr3td3").innerText = '250';
			document.getElementById("ul3li2tr3td4").innerText = '45';
			document.getElementById("ul3li2tr4td1").innerText = '01CS180';
			document.getElementById("ul3li2tr4td2").innerText = 'Carga Super';
			document.getElementById("ul3li2tr4td3").innerText = '180';
			document.getElementById("ul3li2tr4td4").innerText = '45';
			document.getElementById("ul3li2tr5td1").innerText = '01CS220';
			document.getElementById("ul3li2tr5td2").innerText = 'Carga Super';
			document.getElementById("ul3li2tr5td3").innerText = '220';
			document.getElementById("ul3li2tr5td4").innerText = '45';
			document.getElementById("ul3li2tr6td1").innerText = '01CS250';
			document.getElementById("ul3li2tr6td2").innerText = 'Carga Super';
			document.getElementById("ul3li2tr6td3").innerText = '250';
			document.getElementById("ul3li2tr6td4").innerText = '45';
			document.getElementById("ul3li2tr7td1").innerText = '';
			document.getElementById("ul3li2tr7td2").innerText = '';
			document.getElementById("ul3li2tr7td3").innerText = '';
			document.getElementById("ul3li2tr7td4").innerText = '';
			
		});

							   
		$('#rbMiniRoloSuper').click(function() {
			$("#rightImageSuper").attr('src', 'images/18/Super.JPG');
			document.getElementById('rbRoloSuper').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloSuper').style.fontSize = '1.2em';
			document.getElementById('rbRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloSuper').style.fontWeight = 'bold';
			document.getElementById('rbRoloSuper').style.color = '#FFF';
			document.getElementById('rbMiniRoloSuper').style.color = '#FFF';
			document.getElementById("ul3li2tr1td1").innerText = '';
			document.getElementById("ul3li2tr1td2").innerText = '';
			document.getElementById("ul3li2tr1td3").innerText = '';
			document.getElementById("ul3li2tr1td4").innerText = '';
			document.getElementById("ul3li2tr2td1").innerText = '';
			document.getElementById("ul3li2tr2td2").innerText = '';
			document.getElementById("ul3li2tr2td3").innerText = '';
			document.getElementById("ul3li2tr2td4").innerText = '';
			document.getElementById("ul3li2tr3td1").innerText = '';
			document.getElementById("ul3li2tr3td2").innerText = '';
			document.getElementById("ul3li2tr3td3").innerText = '';
			document.getElementById("ul3li2tr3td4").innerText = '';
			document.getElementById("ul3li2tr4td1").innerText = '';
			document.getElementById("ul3li2tr4td2").innerText = '';
			document.getElementById("ul3li2tr4td3").innerText = '';
			document.getElementById("ul3li2tr4td4").innerText = '';
			document.getElementById("ul3li2tr5td1").innerText = '';
			document.getElementById("ul3li2tr5td2").innerText = '';
			document.getElementById("ul3li2tr5td3").innerText = '';
			document.getElementById("ul3li2tr5td4").innerText = '';
			document.getElementById("ul3li2tr6td1").innerText = '';
			document.getElementById("ul3li2tr6td2").innerText = '';
			document.getElementById("ul3li2tr6td3").innerText = '';
			document.getElementById("ul3li2tr6td4").innerText = '';
			document.getElementById("ul3li2tr7td1").innerText = '';
			document.getElementById("ul3li2tr7td2").innerText = '';
			document.getElementById("ul3li2tr7td3").innerText = '';
			document.getElementById("ul3li2tr7td4").innerText = '';
			
		});
		
		
		//Merino
		$('#openModelMerinoImg').click(function() {
			document.getElementById("rbMiniRoloMerino").click();
		});
		
		
		$('#rbRoloMerino').click(function() {
			$("#rightImageMerino").attr('src', 'images/18/Merino.JPG');
			document.getElementById('rbRoloMerino').style.fontSize = '1.2em';
			document.getElementById('rbMiniRoloMerino').style.fontSize = '1.0em';
			document.getElementById('rbRoloMerino').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloMerino').style.fontWeight = 'normal';
			document.getElementById('rbRoloMerino').style.color = '#FFF';
			document.getElementById('rbMiniRoloMerino').style.color = '#FFF';
			document.getElementById("ul3li3tr1td1").innerText = '01RSM180';
			document.getElementById("ul3li3tr1td2").innerText = 'Rolo Merino';
			document.getElementById("ul3li3tr1td3").innerText = '180';
			document.getElementById("ul3li3tr1td4").innerText = '45';
			document.getElementById("ul3li3tr2td1").innerText = '01RSM220';
			document.getElementById("ul3li3tr2td2").innerText = 'Rolo Merino';
			document.getElementById("ul3li3tr2td3").innerText = '220';
			document.getElementById("ul3li3tr2td4").innerText = '45';
			document.getElementById("ul3li3tr3td1").innerText = '01RSM250';
			document.getElementById("ul3li3tr3td2").innerText = 'Rolo Merino';
			document.getElementById("ul3li3tr3td3").innerText = '250';
			document.getElementById("ul3li3tr3td4").innerText = '45';
			document.getElementById("ul3li3tr4td1").innerText = '01CSM180';
			document.getElementById("ul3li3tr4td2").innerText = 'Carga Merino';
			document.getElementById("ul3li3tr4td3").innerText = '180';
			document.getElementById("ul3li3tr4td4").innerText = '45';
			document.getElementById("ul3li3tr5td1").innerText = '01CSM220';
			document.getElementById("ul3li3tr5td2").innerText = 'Carga Merino';
			document.getElementById("ul3li3tr5td3").innerText = '220';
			document.getElementById("ul3li3tr5td4").innerText = '45';
			document.getElementById("ul3li3tr6td1").innerText = '01CSM250';
			document.getElementById("ul3li3tr6td2").innerText = 'Carga Merino';
			document.getElementById("ul3li3tr6td3").innerText = '250';
			document.getElementById("ul3li3tr6td4").innerText = '45';
			document.getElementById("ul3li3tr7td1").innerText = '01RSM1805';
			document.getElementById("ul3li3tr7td2").innerText = 'Rolo Merino';
			document.getElementById("ul3li3tr7td3").innerText = '180';
			document.getElementById("ul3li3tr7td4").innerText = '50';
			document.getElementById("ul3li3tr8td1").innerText = '01RSM2205';
			document.getElementById("ul3li3tr8td2").innerText = 'Rolo Merino';
			document.getElementById("ul3li3tr8td3").innerText = '220';
			document.getElementById("ul3li3tr8td4").innerText = '50';
			document.getElementById("ul3li3tr9td1").innerText = '01RSM2505';
			document.getElementById("ul3li3tr9td2").innerText = 'Rolo Merino';
			document.getElementById("ul3li3tr9td3").innerText = '250';
			document.getElementById("ul3li3tr9td4").innerText = '50';
			document.getElementById("ul3li3tr7td1").innerText = '01CSM1805';
			document.getElementById("ul3li3tr7td2").innerText = 'Carga Merino';
			document.getElementById("ul3li3tr7td3").innerText = '180';
			document.getElementById("ul3li3tr7td4").innerText = '50';
			document.getElementById("ul3li3tr8td1").innerText = '01CSM2205';
			document.getElementById("ul3li3tr8td2").innerText = 'Carga Merino';
			document.getElementById("ul3li3tr8td3").innerText = '220';
			document.getElementById("ul3li3tr8td4").innerText = '50';
			document.getElementById("ul3li3tr9td1").innerText = '01CSM2505';
			document.getElementById("ul3li3tr9td2").innerText = 'Carga Merino';
			document.getElementById("ul3li3tr9td3").innerText = '250';
			document.getElementById("ul3li3tr9td4").innerText = '50';
			
		});

							   
		$('#rbMiniRoloMerino').click(function() {
			$("#rightImageMerino").attr('src', 'images/18/Merino.JPG');
			document.getElementById('rbRoloMerino').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloMerino').style.fontSize = '1.2em';
			document.getElementById('rbRoloMerino').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloMerino').style.fontWeight = 'bold';
			document.getElementById('rbRoloMerino').style.color = '#FFF';
			document.getElementById('rbMiniRoloMerino').style.color = '#FFF';
			document.getElementById("ul3li3tr1td1").innerText = '';
			document.getElementById("ul3li3tr1td2").innerText = '';
			document.getElementById("ul3li3tr1td3").innerText = '';
			document.getElementById("ul3li3tr1td4").innerText = '';
			document.getElementById("ul3li3tr2td1").innerText = '';
			document.getElementById("ul3li3tr2td2").innerText = '';
			document.getElementById("ul3li3tr2td3").innerText = '';
			document.getElementById("ul3li3tr2td4").innerText = '';
			document.getElementById("ul3li3tr3td1").innerText = '';
			document.getElementById("ul3li3tr3td2").innerText = '';
			document.getElementById("ul3li3tr3td3").innerText = '';
			document.getElementById("ul3li3tr3td4").innerText = '';
			document.getElementById("ul3li3tr4td1").innerText = '';
			document.getElementById("ul3li3tr4td2").innerText = '';
			document.getElementById("ul3li3tr4td3").innerText = '';
			document.getElementById("ul3li3tr4td4").innerText = '';
			document.getElementById("ul3li3tr5td1").innerText = '';
			document.getElementById("ul3li3tr5td2").innerText = '';
			document.getElementById("ul3li3tr5td3").innerText = '';
			document.getElementById("ul3li3tr5td4").innerText = '';
			document.getElementById("ul3li3tr6td1").innerText = '';
			document.getElementById("ul3li3tr6td2").innerText = '';
			document.getElementById("ul3li3tr6td3").innerText = '';
			document.getElementById("ul3li3tr6td4").innerText = '';
			document.getElementById("ul3li3tr7td1").innerText = '';
			document.getElementById("ul3li3tr7td2").innerText = '';
			document.getElementById("ul3li3tr7td3").innerText = '';
			document.getElementById("ul3li3tr7td4").innerText = '';
			
		});
		
		
		
		//Menu 18
		$('#openModelAcessoriosImg').click(function() {
			document.getElementById("rbMiniRoloAcessorios").click();
		});
		
		
		$('#rbRoloAcessorios').click(function() {
			$("#rightImageAcessorios").attr('src', 'images/18/Acessorios.JPG');
			document.getElementById('rbRoloAcessorios').style.fontSize = '1.2em';
			document.getElementById('rbMiniRoloAcessorios').style.fontSize = '1.0em';
			document.getElementById('rbRoloAcessorios').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloAcessorios').style.fontWeight = 'normal';
			document.getElementById('rbRoloAcessorios').style.color = '#FFF';
			document.getElementById('rbMiniRoloAcessorios').style.color = '#FFF';
			document.getElementById("ul3li4tr1td1").innerText = '';
			document.getElementById("ul3li4tr1td2").innerText = '';
			document.getElementById("ul3li4tr1td3").innerText = '';
			document.getElementById("ul3li4tr1td4").innerText = '';
			document.getElementById("ul3li4tr2td1").innerText = '';
			document.getElementById("ul3li4tr2td2").innerText = '';
			document.getElementById("ul3li4tr2td3").innerText = '';
			document.getElementById("ul3li4tr2td4").innerText = '';
			document.getElementById("ul3li4tr3td1").innerText = '';
			document.getElementById("ul3li4tr3td2").innerText = '';
			document.getElementById("ul3li4tr3td3").innerText = '';
			document.getElementById("ul3li4tr3td4").innerText = '';
			document.getElementById("ul3li4tr4td1").innerText = '';
			document.getElementById("ul3li4tr4td2").innerText = '';
			document.getElementById("ul3li4tr4td3").innerText = '';
			document.getElementById("ul3li4tr4td4").innerText = '';
			document.getElementById("ul3li4tr5td1").innerText = '';
			document.getElementById("ul3li4tr5td2").innerText = '';
			document.getElementById("ul3li4tr5td3").innerText = '';
			document.getElementById("ul3li4tr5td4").innerText = '';
			document.getElementById("ul3li4tr6td1").innerText = '';
			document.getElementById("ul3li4tr6td2").innerText = '';
			document.getElementById("ul3li4tr6td3").innerText = '';
			document.getElementById("ul3li4tr6td4").innerText = '';
			document.getElementById("ul3li4tr7td1").innerText = '';
			document.getElementById("ul3li4tr7td2").innerText = '';
			document.getElementById("ul3li4tr7td3").innerText = '';
			document.getElementById("ul3li4tr7td4").innerText = '';
			
		});

							   
		$('#rbMiniRoloAcessorios').click(function() {
			$("#rightImageAcessorios").attr('src', 'images/Menu18/Acessorios.JPG');
			document.getElementById('rbRoloAcessorios').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloAcessorios').style.fontSize = '1.2em';
			document.getElementById('rbRoloAcessorios').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAcessorios').style.fontWeight = 'bold';
			document.getElementById('rbRoloAcessorios').style.color = '#FFF';
			document.getElementById('rbMiniRoloAcessorios').style.color = '#FFF';
			document.getElementById("ul3li4tr1td1").innerText = '';
			document.getElementById("ul3li4tr1td2").innerText = '';
			document.getElementById("ul3li4tr1td3").innerText = '';
			document.getElementById("ul3li4tr1td4").innerText = '';
			document.getElementById("ul3li4tr2td1").innerText = '';
			document.getElementById("ul3li4tr2td2").innerText = '';
			document.getElementById("ul3li4tr2td3").innerText = '';
			document.getElementById("ul3li4tr2td4").innerText = '';
			document.getElementById("ul3li4tr3td1").innerText = '';
			document.getElementById("ul3li4tr3td2").innerText = '';
			document.getElementById("ul3li4tr3td3").innerText = '';
			document.getElementById("ul3li4tr3td4").innerText = '';
			document.getElementById("ul3li4tr4td1").innerText = '';
			document.getElementById("ul3li4tr4td2").innerText = '';
			document.getElementById("ul3li4tr4td3").innerText = '';
			document.getElementById("ul3li4tr4td4").innerText = '';
			document.getElementById("ul3li4tr5td1").innerText = '';
			document.getElementById("ul3li4tr5td2").innerText = '';
			document.getElementById("ul3li4tr5td3").innerText = '';
			document.getElementById("ul3li4tr5td4").innerText = '';
			document.getElementById("ul3li4tr6td1").innerText = '';
			document.getElementById("ul3li4tr6td2").innerText = '';
			document.getElementById("ul3li4tr6td3").innerText = '';
			document.getElementById("ul3li4tr6td4").innerText = '';
			document.getElementById("ul3li4tr7td1").innerText = '';
			document.getElementById("ul3li4tr7td2").innerText = '';
			document.getElementById("ul3li4tr7td3").innerText = '';
			document.getElementById("ul3li4tr7td4").innerText = '';
			
		});
		

//END DOCUMENT.READY FUNCTION
	});
	
	
	

})(jQuery);