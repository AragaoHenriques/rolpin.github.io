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
			document.getElementById("rbRoloAngora").click();
		});
		
		
		$('#rbRoloAngora').click(function() {
			$("#rightImageAngora").attr('src', 'images/angora/rolo_500_375.jpg');
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
			
            document.getElementById("ul1li1tr1").style.display = 'table-row';
			document.getElementById("ul1li1tr1td1").innerText ='0064';
			document.getElementById("ul1li1tr1td2").innerText = 'Rolo Angorá 60 mm ';
			document.getElementById("ul1li1tr1td3").innerText = '45';
            document.getElementById("ul1li1tr1td4").innerText = '60'
			
            document.getElementById("ul1li1tr2").style.display = 'table-row';
			document.getElementById("ul1li1tr2td1").innerText = '0258';
			document.getElementById("ul1li1tr2td2").innerText = 'Rolo Angorá 120 mm';
			document.getElementById("ul1li1tr2td3").innerText = '45';
            document.getElementById("ul1li1tr2td4").innerText = '30'
			
            document.getElementById("ul1li1tr3").style.display = 'table-row';
			document.getElementById("ul1li1tr3td1").innerText = '0065';
			document.getElementById("ul1li1tr3td2").innerText = 'Rolo Angorá 150 mm';
			document.getElementById("ul1li1tr3td3").innerText = '45';
            document.getElementById("ul1li1tr3td4").innerText = '24'
            
            document.getElementById("ul1li1tr4").style.display = 'table-row';
			document.getElementById("ul1li1tr4td1").innerText = '0066';
			document.getElementById("ul1li1tr4td2").innerText = 'Rolo Angorá 180 mm';
			document.getElementById("ul1li1tr4td3").innerText = '45';
            document.getElementById("ul1li1tr4td4").innerText = '60'
            
            document.getElementById("ul1li1tr5").style.display = 'table-row';
			document.getElementById("ul1li1tr5td1").innerText = '0067';
			document.getElementById("ul1li1tr5td2").innerText = 'Rolo Angorá 220 mm';
			document.getElementById("ul1li1tr5td3").innerText = '45';
            document.getElementById("ul1li1tr5td4").innerText = '55'
            
            document.getElementById("ul1li1tr6").style.display = 'table-row';
            document.getElementById("ul1li1tr6td1").innerText = '0068';
			document.getElementById("ul1li1tr6td2").innerText = 'Rolo Angorá 250 mm';
			document.getElementById("ul1li1tr6td3").innerText = '45';
            document.getElementById("ul1li1tr6td4").innerText = '50';
            
			
            document.getElementById("ul1li1tr7").style.display = 'none';
            document.getElementById("ul1li1tr7td1").innerText = '';
			document.getElementById("ul1li1tr7td2").innerText = '';
			document.getElementById("ul1li1tr7td3").innerText = '';
            document.getElementById("ul1li1tr7td4").innerText = '';
            
            
            document.getElementById("ul1li1tr8").style.display = 'none';
			document.getElementById("ul1li1tr8td1").innerText = '';
			document.getElementById("ul1li1tr8td2").innerText = '';
			document.getElementById("ul1li1tr8td3").innerText = '';
            document.getElementById("ul1li1tr8td4").innerText = '';
            
            document.getElementById("ul1li1tr9").style.display = 'none';
			document.getElementById("ul1li1tr9td1").innerText = '';
			document.getElementById("ul1li1tr9td2").innerText = '';
			document.getElementById("ul1li1tr9td3").innerText = '';
            document.getElementById("ul1li1tr9td4").innerText = '';
            
            document.getElementById("ul1li1tr10").style.display = 'none';
            document.getElementById("ul1li1tr10td1").innerText = '';
			document.getElementById("ul1li1tr10td2").innerText = '';
			document.getElementById("ul1li1tr10td3").innerText = '';
            document.getElementById("ul1li1tr10td4").innerText = '';
            
            document.getElementById("ul1li1tr11").style.display = 'none';
            document.getElementById("ul1li1tr11td1").innerText = '';
			document.getElementById("ul1li1tr11td2").innerText = '';
			document.getElementById("ul1li1tr11td3").innerText = '';
            document.getElementById("ul1li1tr11td4").innerText = '';
            
            document.getElementById("ul1li1tr12").style.display = 'none';
            document.getElementById("ul1li1tr12td1").innerText = '';
			document.getElementById("ul1li1tr12td2").innerText = '';
			document.getElementById("ul1li1tr12td3").innerText = '';
            document.getElementById("ul1li1tr12td4").innerText = '';
            
            document.getElementById("ul1li1tr13").style.display = 'none';
            document.getElementById("ul1li1tr13td1").innerText = '';
			document.getElementById("ul1li1tr13td2").innerText = '';
			document.getElementById("ul1li1tr13td3").innerText = '';
            document.getElementById("ul1li1tr13td4").innerText = '';
            
            document.getElementById("ul1li1tr14").style.display = 'none';
            document.getElementById("ul1li1tr14td1").innerText = '';
			document.getElementById("ul1li1tr14td2").innerText = '';
			document.getElementById("ul1li1tr14td3").innerText = '';
            document.getElementById("ul1li1tr14td4").innerText = '';
		});
		$('#rbCRoloAngora').click(function() {
			$("#rightImageAngora").attr('src', 'images/angora/carga_500_375.jpg');
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
			
            document.getElementById("ul1li1tr1").style.display = 'table-row';
			document.getElementById("ul1li1tr1td1").innerText ='0021';
			document.getElementById("ul1li1tr1td2").innerText = 'Carga Angorá 60 mm';
			document.getElementById("ul1li1tr1td3").innerText = '45';
            document.getElementById("ul1li1tr1td4").innerText = '';
		
            document.getElementById("ul1li1tr2").style.display = 'table-row';
			document.getElementById("ul1li1tr2td1").innerText = '0259';
			document.getElementById("ul1li1tr2td2").innerText = 'Carga Angorá 120 mm';
			document.getElementById("ul1li1tr2td3").innerText = '45';
            document.getElementById("ul1li1tr2td4").innerText = '';
		
            document.getElementById("ul1li1tr3").style.display = 'table-row';
			document.getElementById("ul1li1tr3td1").innerText = '0022';
			document.getElementById("ul1li1tr3td2").innerText = 'Carga Angorá 150 mm';
			document.getElementById("ul1li1tr3td3").innerText = '45';
            document.getElementById("ul1li1tr3td4").innerText = '';

            document.getElementById("ul1li1tr4").style.display = 'table-row';
			document.getElementById("ul1li1tr4td1").innerText = '0023';
			document.getElementById("ul1li1tr4td2").innerText = 'Carga Angorá 180 mm';
			document.getElementById("ul1li1tr4td3").innerText = '45';
            document.getElementById("ul1li1tr4td4").innerText = '';

            document.getElementById("ul1li1tr5").style.display = 'table-row';
			document.getElementById("ul1li1tr5td1").innerText = '0024';
			document.getElementById("ul1li1tr5td2").innerText = 'Carga Angorá 220 mm';
			document.getElementById("ul1li1tr5td3").innerText = '45';
            document.getElementById("ul1li1tr5td4").innerText = '';

            document.getElementById("ul1li1tr6").style.display = 'table-row';
            document.getElementById("ul1li1tr6td1").innerText = '0025';
			document.getElementById("ul1li1tr6td2").innerText = 'Carga Angorá 250 mm';
			document.getElementById("ul1li1tr6td3").innerText = '45';
			document.getElementById("ul1li1tr6td4").innerText = '';  
			
            document.getElementById("ul1li1tr7").style.display = 'none';
			document.getElementById("ul1li1tr7td1").innerText = '';
			document.getElementById("ul1li1tr7td2").innerText = '';
			document.getElementById("ul1li1tr7td3").innerText = '';
			document.getElementById("ul1li1tr7td4").innerText = '';
			
            document.getElementById("ul1li1tr8").style.display = 'none';
			document.getElementById("ul1li1tr8td1").innerText = '';
			document.getElementById("ul1li1tr8td2").innerText = '';
			document.getElementById("ul1li1tr8td3").innerText = '';
			document.getElementById("ul1li1tr8td4").innerText = '';
			
            document.getElementById("ul1li1tr9").style.display = 'none';
			document.getElementById("ul1li1tr9td1").innerText = '';
			document.getElementById("ul1li1tr9td2").innerText = '';
			document.getElementById("ul1li1tr9td3").innerText = '';
			document.getElementById("ul1li1tr9td4").innerText = '';
            
            document.getElementById("ul1li1tr10").style.display = 'none';
            document.getElementById("ul1li1tr10td1").innerText = '';
			document.getElementById("ul1li1tr10td2").innerText = '';
			document.getElementById("ul1li1tr10td3").innerText = '';
            document.getElementById("ul1li1tr10td4").innerText = '';
            
            document.getElementById("ul1li1tr11").style.display = 'none';
            document.getElementById("ul1li1tr11td1").innerText = '';
			document.getElementById("ul1li1tr11td2").innerText = '';
			document.getElementById("ul1li1tr11td3").innerText = '';
            document.getElementById("ul1li1tr11td4").innerText = '';
            
            document.getElementById("ul1li1tr12").style.display = 'none';
            document.getElementById("ul1li1tr12td1").innerText = '';
			document.getElementById("ul1li1tr12td2").innerText = '';
			document.getElementById("ul1li1tr12td3").innerText = '';
            document.getElementById("ul1li1tr12td4").innerText = '';
            
            document.getElementById("ul1li1tr13").style.display = 'none';
            document.getElementById("ul1li1tr13td1").innerText = '';
			document.getElementById("ul1li1tr13td2").innerText = '';
			document.getElementById("ul1li1tr13td3").innerText = '';
            document.getElementById("ul1li1tr13td4").innerText = '';
            
            document.getElementById("ul1li1tr14").style.display = 'none';
            document.getElementById("ul1li1tr14td1").innerText = '';
			document.getElementById("ul1li1tr14td2").innerText = '';
			document.getElementById("ul1li1tr14td3").innerText = '';
            document.getElementById("ul1li1tr14td4").innerText = '';
		});
		

							   
		$('#rbMiniRoloAngora').click(function() {
			$("#rightImageAngora").attr('src', 'images/angora/mini_500_375.jpg');
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
            
            document.getElementById("ul1li1tr1").style.display = 'table-row';
			document.getElementById("ul1li1tr1td1").innerText = '0173';
			document.getElementById("ul1li1tr1td2").innerText = 'Mini Angorá 60 mm';
			document.getElementById("ul1li1tr1td3").innerText = '16';
	        document.getElementById("ul1li1tr1td4").innerText = '';
           
            document.getElementById("ul1li1tr2").style.display = 'table-row';
			document.getElementById("ul1li1tr2td1").innerText = '0174';
			document.getElementById("ul1li1tr2td2").innerText = 'Mini Angorá 100 mm';
			document.getElementById("ul1li1tr2td3").innerText = '16';
            document.getElementById("ul1li1tr2td4").innerText = '40';

            document.getElementById("ul1li1tr3").style.display = 'table-row';
			document.getElementById("ul1li1tr3td1").innerText = '0175';
			document.getElementById("ul1li1tr3td2").innerText = 'Mini Angorá 150 mm';
			document.getElementById("ul1li1tr3td3").innerText = '16';
            document.getElementById("ul1li1tr3td4").innerText = '';

            document.getElementById("ul1li1tr4").style.display = 'table-row';
			document.getElementById("ul1li1tr4td1").innerText = '0253';
			document.getElementById("ul1li1tr4td2").innerText = 'Midi Angorá 120 mm';
			document.getElementById("ul1li1tr4td3").innerText = '30';
            document.getElementById("ul1li1tr4td4").innerText = '35';
			
            document.getElementById("ul1li1tr5").style.display = 'table-row';
			document.getElementById("ul1li1tr5td1").innerText = '0254';
			document.getElementById("ul1li1tr5td2").innerText = 'Midi Angorá 150 mm';
			document.getElementById("ul1li1tr5td3").innerText = '30';
            document.getElementById("ul1li1tr5td4").innerText = '';
			
            document.getElementById("ul1li1tr6").style.display = 'none';
            document.getElementById("ul1li1tr6td1").innerText = '';
			document.getElementById("ul1li1tr6td2").innerText = '';
			document.getElementById("ul1li1tr6td3").innerText = '';
            document.getElementById("ul1li1tr6td4").innerText = '';
			
            document.getElementById("ul1li1tr7").style.display = 'none';
        	document.getElementById("ul1li1tr7td1").innerText = '';
			document.getElementById("ul1li1tr7td2").innerText = '';
			document.getElementById("ul1li1tr7td3").innerText = '';
			document.getElementById("ul1li1tr7td4").innerText = '';

            document.getElementById("ul1li1tr8").style.display = 'none';
			document.getElementById("ul1li1tr8td1").innerText = '';
			document.getElementById("ul1li1tr8td2").innerText = '';
			document.getElementById("ul1li1tr8td3").innerText = '';
			document.getElementById("ul1li1tr8td4").innerText = '';

            document.getElementById("ul1li1tr9").style.display = 'none';
			document.getElementById("ul1li1tr9td1").innerText = '';
			document.getElementById("ul1li1tr9td2").innerText = '';
			document.getElementById("ul1li1tr9td3").innerText = '';
			document.getElementById("ul1li1tr9td4").innerText = '';
            
            document.getElementById("ul1li1tr10").style.display = 'none';
            document.getElementById("ul1li1tr10td1").innerText = '';
			document.getElementById("ul1li1tr10td2").innerText = '';
			document.getElementById("ul1li1tr10td3").innerText = '';
            document.getElementById("ul1li1tr10td4").innerText = '';
            
            document.getElementById("ul1li1tr11").style.display = 'none';
            document.getElementById("ul1li1tr11td1").innerText = '';
			document.getElementById("ul1li1tr11td2").innerText = '';
			document.getElementById("ul1li1tr11td3").innerText = '';
            document.getElementById("ul1li1tr11td4").innerText = '';
            
            document.getElementById("ul1li1tr12").style.display = 'none';
            document.getElementById("ul1li1tr12td1").innerText = '';
			document.getElementById("ul1li1tr12td2").innerText = '';
			document.getElementById("ul1li1tr12td3").innerText = '';
            document.getElementById("ul1li1tr12td4").innerText = '';
            
            document.getElementById("ul1li1tr13").style.display = 'none';
            document.getElementById("ul1li1tr13td1").innerText = '';
			document.getElementById("ul1li1tr13td2").innerText = '';
			document.getElementById("ul1li1tr13td3").innerText = '';
            document.getElementById("ul1li1tr13td4").innerText = '';
            
            document.getElementById("ul1li1tr14").style.display = 'none';
            document.getElementById("ul1li1tr14td1").innerText = '';
			document.getElementById("ul1li1tr14td2").innerText = '';
			document.getElementById("ul1li1tr14td3").innerText = '';
            document.getElementById("ul1li1tr14td4").innerText = '';
            
			
		});
		
		
		$('#rbCMiniRoloAngora').click(function() {
			$("#rightImageAngora").attr('src', 'images/angora/cargaMini_500_375.jpg');
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

            document.getElementById("ul1li1tr1").style.display = 'table-row';
			document.getElementById("ul1li1tr1td1").innerText = '0088';
			document.getElementById("ul1li1tr1td2").innerText = 'Carga Angorá 60 mm';
			document.getElementById("ul1li1tr1td3").innerText = '16';
	        document.getElementById("ul1li1tr1td4").innerText = '';
            
            document.getElementById("ul1li1tr2").style.display = 'table-row';
			document.getElementById("ul1li1tr2td1").innerText = '0089';
			document.getElementById("ul1li1tr2td2").innerText = 'Carga Angorá 100 mm';
			document.getElementById("ul1li1tr2td3").innerText = '16';
            document.getElementById("ul1li1tr2td4").innerText = '';

            document.getElementById("ul1li1tr3").style.display = 'table-row';
			document.getElementById("ul1li1tr3td1").innerText = '0255';
			document.getElementById("ul1li1tr3td2").innerText = 'Carga Angorá 150 mm';
            document.getElementById("ul1li1tr3td3").innerText = '16';
            document.getElementById("ul1li1tr3td4").innerText = '';

            document.getElementById("ul1li1tr4").style.display = 'table-row';
			document.getElementById("ul1li1tr4td1").innerText = '0177';
			document.getElementById("ul1li1tr4td2").innerText = 'Pack 2 Cargas Angorá  60 mm';
			document.getElementById("ul1li1tr4td3").innerText = '16';
            document.getElementById("ul1li1tr4td4").innerText = '';

            document.getElementById("ul1li1tr5").style.display = 'table-row';
			document.getElementById("ul1li1tr5td1").innerText = '0091';
			document.getElementById("ul1li1tr5td2").innerText = 'Pack 2 Cargas Angorá 100 mm';
			document.getElementById("ul1li1tr5td3").innerText = '16';
            document.getElementById("ul1li1tr5td4").innerText = '';
	
            document.getElementById("ul1li1tr6").style.display = 'table-row';
			document.getElementById("ul1li1tr6td1").innerText = '0179';
			document.getElementById("ul1li1tr6td2").innerText = 'Pack 2 Cargas Angorá 150 mm';
			document.getElementById("ul1li1tr6td3").innerText = '16'; 
            document.getElementById("ul1li1tr6td4").innerText = '';

            document.getElementById("ul1li1tr7").style.display = 'table-row';
			document.getElementById("ul1li1tr7td1").innerText = '0256';
			document.getElementById("ul1li1tr7td2").innerText = 'Blister 16 Cargas Angorá 60 mm';
			document.getElementById("ul1li1tr7td3").innerText = '16';
            document.getElementById("ul1li1tr7td4").innerText = '';
            
            document.getElementById("ul1li1tr8").style.display = 'table-row';
            document.getElementById("ul1li1tr8td1").innerText = '0090';
			document.getElementById("ul1li1tr8td2").innerText = 'Blister 10 Cargas Angorá 100 mm';
			document.getElementById("ul1li1tr8td3").innerText = '16';
            document.getElementById("ul1li1tr8td4").innerText = '36 Blisters';

            document.getElementById("ul1li1tr9").style.display = 'table-row';
			document.getElementById("ul1li1tr9td1").innerText = '0201';
			document.getElementById("ul1li1tr9td2").innerText = 'Carga Angorá 120 mm';
			document.getElementById("ul1li1tr9td3").innerText = '30';
            document.getElementById("ul1li1tr9td4").innerText = '';

            document.getElementById("ul1li1tr10").style.display = 'table-row';
			document.getElementById("ul1li1tr10td1").innerText = '0202';
			document.getElementById("ul1li1tr10td2").innerText = 'Carga Angora 150 mm';
			document.getElementById("ul1li1tr10td3").innerText = '30';
            document.getElementById("ul1li1tr10td4").innerText = '';

            document.getElementById("ul1li1tr11").style.display = 'table-row';
            document.getElementById("ul1li1tr11td1").innerText = '0205';
			document.getElementById("ul1li1tr11td2").innerText = 'Pack 2 Cargas Angora 120 mm';
			document.getElementById("ul1li1tr11td3").innerText = '30';
            document.getElementById("ul1li1tr11td4").innerText = '';
            
            document.getElementById("ul1li1tr12").style.display = 'table-row';
            document.getElementById("ul1li1tr12td1").innerText = '0206';
			document.getElementById("ul1li1tr12td2").innerText = 'Pack 2 Cargas Angora 150 mm';
			document.getElementById("ul1li1tr12td3").innerText = '30';
            document.getElementById("ul1li1tr12td4").innerText = '';
            
            document.getElementById("ul1li1tr13").style.display = 'table-row';
            document.getElementById("ul1li1tr13td1").innerText = '0203';
			document.getElementById("ul1li1tr13td2").innerText = 'Blister 10 Cargas Angora 120 mm';
			document.getElementById("ul1li1tr13td3").innerText = '30';
            document.getElementById("ul1li1tr13td4").innerText = '';
            
            document.getElementById("ul1li1tr14").style.display = 'table-row';
            document.getElementById("ul1li1tr14td1").innerText = '0204';
			document.getElementById("ul1li1tr14td2").innerText = 'Blister 6 Cargas Angora 150 mm';
			document.getElementById("ul1li1tr14td3").innerText = '30';
            document.getElementById("ul1li1tr14td4").innerText = '';
		});
		
		
		
		//Antigota
		$('#openModelAntigotaImg').click(function() {
			document.getElementById("rbRoloAntigota").click();
		});
		
		
		$('#rbRoloAntigota').click(function() {
			$("#rightImageAntigota").attr('src', 'images/antigota/rolo_500_375.jpg');
			document.getElementById('rbRoloAntigota').style.fontSize = '1.0em';
			document.getElementById('rbCRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbCMiniRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbRoloAntigota').style.fontWeight = 'bold';
			document.getElementById('rbCRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCRoloAntigota').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAntigota').style.color = '#FFF';
            
            document.getElementById("ul1li2tr1").style.display = 'table-row';
			document.getElementById("ul1li2tr1td1").innerText = '0058';
			document.getElementById("ul1li2tr1td2").innerText = 'Rolo Antigota 180 mm';
			document.getElementById("ul1li2tr1td3").innerText = '45';
			document.getElementById("ul1li2tr1td4").innerText = '60';

            document.getElementById("ul1li2tr2").style.display = 'table-row';
			document.getElementById("ul1li2tr2td1").innerText = '0059';
			document.getElementById("ul1li2tr2td2").innerText = 'Rolo Antigota 220 mm';
			document.getElementById("ul1li2tr2td3").innerText = '45';
			document.getElementById("ul1li2tr2td4").innerText = '55';
			
            document.getElementById("ul1li2tr3").style.display = 'table-row';
			document.getElementById("ul1li2tr3td1").innerText = '0060';
			document.getElementById("ul1li2tr3td2").innerText = 'Rolo Antigota 250 mm';
			document.getElementById("ul1li2tr3td3").innerText = '45';
			document.getElementById("ul1li2tr3td4").innerText = '50';
		
            document.getElementById("ul1li2tr4").style.display = 'table-row';
			document.getElementById("ul1li2tr4td1").innerText = '0143';
			document.getElementById("ul1li2tr4td2").innerText = 'Rolo Antigota 180 mm';
			document.getElementById("ul1li2tr4td3").innerText = '50';
			document.getElementById("ul1li2tr4td4").innerText = '55';
			
            document.getElementById("ul1li2tr5").style.display = 'table-row';
			document.getElementById("ul1li2tr5td1").innerText = '0144';
			document.getElementById("ul1li2tr5td2").innerText = 'Rolo Antigota 220 mm';
			document.getElementById("ul1li2tr5td3").innerText = '50';
			document.getElementById("ul1li2tr5td4").innerText = '50';
			
            document.getElementById("ul1li2tr6").style.display = 'table-row';
			document.getElementById("ul1li2tr6td1").innerText = '0145';
			document.getElementById("ul1li2tr6td2").innerText = 'Rolo Antigota 250 mm';
			document.getElementById("ul1li2tr6td3").innerText = '50';
			document.getElementById("ul1li2tr6td4").innerText = '45';

            document.getElementById("ul1li2tr7").style.display = 'none';
			document.getElementById("ul1li2tr7td1").innerText = '';
			document.getElementById("ul1li2tr7td2").innerText = '';
			document.getElementById("ul1li2tr7td3").innerText = '';
			document.getElementById("ul1li2tr7td4").innerText = '';
			
            document.getElementById("ul1li2tr8").style.display = 'none';
			document.getElementById("ul1li2tr8td1").innerText = '';
			document.getElementById("ul1li2tr8td2").innerText = '';
			document.getElementById("ul1li2tr8td3").innerText = '';
			document.getElementById("ul1li2tr8td4").innerText = '';
            
            document.getElementById("ul1li2tr9").style.display = 'none';
            document.getElementById("ul1li2tr9td1").innerText = '';
			document.getElementById("ul1li2tr9td2").innerText = '';
			document.getElementById("ul1li2tr9td3").innerText = '';
			document.getElementById("ul1li2tr9td4").innerText = '';
			
            document.getElementById("ul1li2tr10").style.display = 'none';
			document.getElementById("ul1li2tr10td1").innerText = '';
			document.getElementById("ul1li2tr10td2").innerText = '';
			document.getElementById("ul1li2tr10td3").innerText = '';
			document.getElementById("ul1li2tr10td4").innerText = '';
            
            document.getElementById("ul1li2tr11").style.display = 'none';
            document.getElementById("ul1li2tr11td1").innerText = '';
			document.getElementById("ul1li2tr11td2").innerText = '';
			document.getElementById("ul1li2tr11td3").innerText = '';
			document.getElementById("ul1li2tr11td4").innerText = '';
            
            document.getElementById("ul1li2tr12").style.display = 'none';
            document.getElementById("ul1li2tr12td1").innerText = '';
			document.getElementById("ul1li2tr12td2").innerText = '';
			document.getElementById("ul1li2tr12td3").innerText = '';
			document.getElementById("ul1li2tr12td4").innerText = '';
		});
        
        $('#rbCRoloAntigota').click(function() {
			$("#rightImageAntigota").attr('src', 'images/antigota/carga_500_375.jpg');
			document.getElementById('rbRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAntigota').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbCMiniRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAntigota').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCRoloAntigota').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAntigota').style.color = '#FFF';
            
            document.getElementById("ul1li2tr1").style.display = 'table-row';
			document.getElementById("ul1li2tr1td1").innerText = '0015';
			document.getElementById("ul1li2tr1td2").innerText = 'Carga Antigota 180 mm';
			document.getElementById("ul1li2tr1td3").innerText = '45';
	     	document.getElementById("ul1li2tr1td4").innerText = '';
			
            document.getElementById("ul1li2tr2").style.display = 'table-row';
			document.getElementById("ul1li2tr2td1").innerText = '0016';
			document.getElementById("ul1li2tr2td2").innerText = 'Carga Antigota 220 mm';
			document.getElementById("ul1li2tr2td3").innerText = '45';
		    document.getElementById("ul1li2tr2td4").innerText = '';
			
            document.getElementById("ul1li2tr3").style.display = 'table-row';
			document.getElementById("ul1li2tr3td1").innerText = '0017';
			document.getElementById("ul1li2tr3td2").innerText = 'Carga Antigota 250 mm';
			document.getElementById("ul1li2tr3td3").innerText = '45';
			document.getElementById("ul1li2tr3td4").innerText = '';

            document.getElementById("ul1li2tr4").style.display = 'table-row';
			document.getElementById("ul1li2tr4td1").innerText = '0125';
			document.getElementById("ul1li2tr4td2").innerText = 'Carga Antigota 180 mm';
			document.getElementById("ul1li2tr4td3").innerText = '50';
			document.getElementById("ul1li2tr4td4").innerText = '';
	
            document.getElementById("ul1li2tr5").style.display = 'table-row';
			document.getElementById("ul1li2tr5td1").innerText = '0126';
			document.getElementById("ul1li2tr5td2").innerText = 'Carga Antigota 220 mm';
			document.getElementById("ul1li2tr5td3").innerText = '50';
			document.getElementById("ul1li2tr5td4").innerText = '';
	
            document.getElementById("ul1li2tr6").style.display = 'table-row';
		    document.getElementById("ul1li2tr6td1").innerText = '0127';
			document.getElementById("ul1li2tr6td2").innerText = 'Carga Antigota 250 mm';
			document.getElementById("ul1li2tr6td3").innerText = '50';
			document.getElementById("ul1li2tr6td4").innerText = '';
	
            document.getElementById("ul1li2tr7").style.display = 'none';
            document.getElementById("ul1li2tr7td1").innerText = '';
			document.getElementById("ul1li2tr7td2").innerText = '';
			document.getElementById("ul1li2tr7td3").innerText = '';
			document.getElementById("ul1li2tr7td4").innerText = '';
            
			document.getElementById("ul1li2tr8").style.display = 'none';
			document.getElementById("ul1li2tr8td1").innerText = '';
			document.getElementById("ul1li2tr8td2").innerText = '';
			document.getElementById("ul1li2tr8td3").innerText = '';
			document.getElementById("ul1li2tr8td4").innerText = '';
					
            document.getElementById("ul1li2tr9").style.display = 'none';
			document.getElementById("ul1li2tr9td1").innerText = '';
			document.getElementById("ul1li2tr9td2").innerText = '';
			document.getElementById("ul1li2tr9td3").innerText = '';
			document.getElementById("ul1li2tr9td4").innerText = '';
			
            document.getElementById("ul1li2tr10").style.display = 'none';
			document.getElementById("ul1li2tr10td1").innerText = '';
			document.getElementById("ul1li2tr10td2").innerText = '';
			document.getElementById("ul1li2tr10td3").innerText = '';
			document.getElementById("ul1li2tr10td4").innerText = '';
            
            document.getElementById("ul1li2tr11").style.display = 'none';
            document.getElementById("ul1li2tr11td1").innerText = '';
			document.getElementById("ul1li2tr11td2").innerText = '';
			document.getElementById("ul1li2tr11td3").innerText = '';
			document.getElementById("ul1li2tr11td4").innerText = '';
            
            document.getElementById("ul1li2tr12").style.display = 'none';
            document.getElementById("ul1li2tr12td1").innerText = '';
			document.getElementById("ul1li2tr12td2").innerText = '';
			document.getElementById("ul1li2tr12td3").innerText = '';
			document.getElementById("ul1li2tr12td4").innerText = '';
		});

							   
		$('#rbMiniRoloAntigota').click(function() {
			$("#rightImageAntigota").attr('src', 'images/antigota/mini_500_375.jpg');
			document.getElementById('rbRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloAntigota').style.fontSize = '1.0em';
			document.getElementById('rbCMiniRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAntigota').style.fontWeight = 'bold';
			document.getElementById('rbCMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCRoloAntigota').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAntigota').style.color = '#FFF';
            
            document.getElementById("ul1li2tr1").style.display = 'table-row';
			document.getElementById("ul1li2tr1td1").innerText = '0180';
			document.getElementById("ul1li2tr1td2").innerText = 'Mini Antigota 60 mm';
			document.getElementById("ul1li2tr1td3").innerText = '16';
			document.getElementById("ul1li2tr1td4").innerText = '';
		
            document.getElementById("ul1li2tr2").style.display = 'table-row';
			document.getElementById("ul1li2tr2td1").innerText = '0181';
			document.getElementById("ul1li2tr2td2").innerText = 'Mini Antigota 100 mm';
			document.getElementById("ul1li2tr2td3").innerText = '16';
			document.getElementById("ul1li2tr2td4").innerText = '40';
	
            document.getElementById("ul1li2tr3").style.display = 'table-row';
			document.getElementById("ul1li2tr3td1").innerText = '0182';
			document.getElementById("ul1li2tr3td2").innerText = 'Mini Antigota 150 mm';
			document.getElementById("ul1li2tr3td3").innerText = '16';
			document.getElementById("ul1li2tr3td4").innerText = '';

            document.getElementById("ul1li2tr4").style.display = 'table-row';
			document.getElementById("ul1li2tr4td1").innerText = '0256';
			document.getElementById("ul1li2tr4td2").innerText = 'Midi Antigota 120 mm';
			document.getElementById("ul1li2tr4td3").innerText = '30';
			document.getElementById("ul1li2tr4td4").innerText = '35';
	
            document.getElementById("ul1li2tr5").style.display = 'table-row';
            document.getElementById("ul1li2tr5td1").innerText = '0257';
			document.getElementById("ul1li2tr5td2").innerText = 'Midi Antigota 150 mm';
			document.getElementById("ul1li2tr5td3").innerText = '30';
			document.getElementById("ul1li2tr5td4").innerText = '';
	
            document.getElementById("ul1li2tr6").style.display = 'none';
			document.getElementById("ul1li2tr6td1").innerText = '';
			document.getElementById("ul1li2tr6td2").innerText = '';
			document.getElementById("ul1li2tr6td3").innerText = '';
			document.getElementById("ul1li2tr6td4").innerText = '';

            document.getElementById("ul1li2tr7").style.display = 'none';
			document.getElementById("ul1li2tr7td1").innerText = '';
			document.getElementById("ul1li2tr7td2").innerText = '';
			document.getElementById("ul1li2tr7td3").innerText = '';
			document.getElementById("ul1li2tr7td4").innerText = '';
			
            document.getElementById("ul1li2tr8").style.display = 'none';
			document.getElementById("ul1li2tr8td1").innerText = '';
			document.getElementById("ul1li2tr8td2").innerText = '';
			document.getElementById("ul1li2tr8td3").innerText = '';
			document.getElementById("ul1li2tr8td4").innerText = '';
            
            document.getElementById("ul1li2tr9").style.display = 'none';
            document.getElementById("ul1li2tr9td1").innerText = '';
			document.getElementById("ul1li2tr9td2").innerText = '';
			document.getElementById("ul1li2tr9td3").innerText = '';
			document.getElementById("ul1li2tr9td4").innerText = '';
            
            document.getElementById("ul1li2tr10").style.display = 'none';
		    document.getElementById("ul1li2tr10td1").innerText = '';
			document.getElementById("ul1li2tr10td2").innerText = '';
			document.getElementById("ul1li2tr10td3").innerText = '';
			document.getElementById("ul1li2tr10td4").innerText = '';
            
            document.getElementById("ul1li2tr11").style.display = 'none';
            document.getElementById("ul1li2tr11td1").innerText = '';
			document.getElementById("ul1li2tr11td2").innerText = '';
			document.getElementById("ul1li2tr11td3").innerText = '';
			document.getElementById("ul1li2tr11td4").innerText = '';
            
            document.getElementById("ul1li2tr12").style.display = 'none';
            document.getElementById("ul1li2tr12td1").innerText = '';
			document.getElementById("ul1li2tr12td2").innerText = '';
			document.getElementById("ul1li2tr12td3").innerText = '';
			document.getElementById("ul1li2tr12td4").innerText = '';
		});
        
        
        $('#rbCMiniRoloAntigota').click(function() {
			$("#rightImageAntigota").attr('src', 'images/antigota/cargaMini_500_375.jpg');
			document.getElementById('rbRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbCMiniRoloAntigota').style.fontSize = '1.0em';
			document.getElementById('rbRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloAntigota').style.fontWeight = 'bold';
			document.getElementById('rbRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCRoloAntigota').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAntigota').style.color = '#FFF';
            
            document.getElementById("ul1li2tr1").style.display = 'table-row';
			document.getElementById("ul1li2tr1td1").innerText = '0092';
			document.getElementById("ul1li2tr1td2").innerText = 'Carga Antigota 60 mm';
			document.getElementById("ul1li2tr1td3").innerText = '16';
			document.getElementById("ul1li2tr1td4").innerText = '';
            
            document.getElementById("ul1li2tr2").style.display = 'table-row';
			document.getElementById("ul1li2tr2td1").innerText = '0093';
			document.getElementById("ul1li2tr2td2").innerText = 'Carga Antigota 100 mm';
			document.getElementById("ul1li2tr2td3").innerText = '16';
			document.getElementById("ul1li2tr2td4").innerText = '';

            document.getElementById("ul1li2tr3").style.display = 'table-row';
			document.getElementById("ul1li2tr3td1").innerText = '0184';
			document.getElementById("ul1li2tr3td2").innerText = 'Pack 2 Cargas Antigota 60 mm';
			document.getElementById("ul1li2tr3td3").innerText = '16';
			document.getElementById("ul1li2tr3td4").innerText = '';

            document.getElementById("ul1li2tr4").style.display = 'table-row';
			document.getElementById("ul1li2tr4td1").innerText = '0095';
			document.getElementById("ul1li2tr4td2").innerText = 'Pack 2 Cargas Antigota 100 mm';
			document.getElementById("ul1li2tr4td3").innerText = '16';
			document.getElementById("ul1li2tr4td4").innerText = '';
		
            document.getElementById("ul1li2tr5").style.display = 'table-row';
			document.getElementById("ul1li2tr5td1").innerText = '0185';
			document.getElementById("ul1li2tr5td2").innerText = 'Pack 2 Cargas Antigota 150 mm';
			document.getElementById("ul1li2tr5td3").innerText = '16';
			document.getElementById("ul1li2tr5td4").innerText =  '';
			
            document.getElementById("ul1li2tr6").style.display = 'table-row';
			document.getElementById("ul1li2tr6td1").innerText = '0094';		
			document.getElementById("ul1li2tr6td2").innerText = 'Blister 10 Cargas Antigota 100 mm';
			document.getElementById("ul1li2tr6td3").innerText = '16';
			document.getElementById("ul1li2tr6td4").innerText = '36 Blisters';
		
            document.getElementById("ul1li2tr7").style.display = 'table-row';
			document.getElementById("ul1li2tr7td1").innerText = '0257';
			document.getElementById("ul1li2tr7td2").innerText = 'Blister 16 Cargas Antigota 60 mm';
			document.getElementById("ul1li2tr7td3").innerText = '16';
			document.getElementById("ul1li2tr7td4").innerText = '';

            document.getElementById("ul1li2tr8").style.display = 'table-row';
			document.getElementById("ul1li2tr8td1").innerText = '0207';
			document.getElementById("ul1li2tr8td2").innerText = 'Carga Antigota 120 mm';
			document.getElementById("ul1li2tr8td3").innerText = '30';
			document.getElementById("ul1li2tr8td4").innerText = '';
					
            document.getElementById("ul1li2tr9").style.display = 'table-row';
            document.getElementById("ul1li2tr9td1").innerText = '0208';
			document.getElementById("ul1li2tr9td2").innerText = 'Carga Antigota 150 mm';
			document.getElementById("ul1li2tr9td3").innerText = '30';
			document.getElementById("ul1li2tr9td4").innerText = '';
            
            document.getElementById("ul1li2tr10").style.display = 'table-row';
            document.getElementById("ul1li2tr10td1").innerText = '0211';
			document.getElementById("ul1li2tr10td2").innerText = 'Pack 2 Cargas Antigota 120 mm';
			document.getElementById("ul1li2tr10td3").innerText = '30';
			document.getElementById("ul1li2tr10td4").innerText = '';
            
            document.getElementById("ul1li2tr11").style.display = 'table-row';
            document.getElementById("ul1li2tr11td1").innerText = '0209';
			document.getElementById("ul1li2tr11td2").innerText = 'Blister 10 Cargas Antigota 120 mm';
			document.getElementById("ul1li2tr11td3").innerText = '30';
			document.getElementById("ul1li2tr11td4").innerText = '';
            
            document.getElementById("ul1li2tr12").style.display = 'table-roW';
            document.getElementById("ul1li2tr12td1").innerText = '0210';
			document.getElementById("ul1li2tr12td2").innerText = 'Blister 6 Cargas Antigota 150 mm';
			document.getElementById("ul1li2tr12td3").innerText = '30';
			document.getElementById("ul1li2tr12td4").innerText = '';
		});
		
		
		
		
		//Antigota Verde
		$('#openModelAntigotaVImg').click(function() {
			document.getElementById("rbRoloAntigotaV").click();
		});
		
		
		$('#rbRoloAntigotaV').click(function() {
			$("#rightImageAntigotaV").attr('src', 'images/antigotaV/rolo_500_375.jpg');
			document.getElementById('rbRoloAntigotaV').style.fontSize = '1.0em';
			document.getElementById('rbCRoloAntigotaV').style.fontSize = '0.8em';
			document.getElementById('rbRoloAntigotaV').style.fontWeight = 'bold';
			document.getElementById('rbCRoloAntigotaV').style.fontWeight = 'normal';
			document.getElementById('rbRoloAntigotaV').style.color = '#FFF';
			document.getElementById('rbCRoloAntigotaV').style.color = '#FFF';
			document.getElementById("ul1li3tr1td1").innerText = '0061';
			document.getElementById("ul1li3tr1td2").innerText = 'Rolo Antigota Verde 180 mm';
			document.getElementById("ul1li3tr1td3").innerText = '45';
			document.getElementById("ul1li3tr1td4").innerText = '60';
			
			document.getElementById("ul1li3tr2td1").innerText = '0062';
			document.getElementById("ul1li3tr2td2").innerText = 'Rolo Antigota Verde 220 mm';
			document.getElementById("ul1li3tr2td3").innerText = '45';
			document.getElementById("ul1li3tr2td4").innerText = '55';
				
			document.getElementById("ul1li3tr3td1").innerText = '0063';
			document.getElementById("ul1li3tr3td2").innerText = 'Rolo Antigota Verde 250 mm';
			document.getElementById("ul1li3tr3td3").innerText = '45';
			document.getElementById("ul1li3tr3td4").innerText = '50';

			document.getElementById("ul1li3tr4td1").innerText = '0146';
			document.getElementById("ul1li3tr4td2").innerText = 'Rolo Antigota Verde 180 mm';
			document.getElementById("ul1li3tr4td3").innerText = '50';
			document.getElementById("ul1li3tr4td4").innerText = '55';
		
			document.getElementById("ul1li3tr5td1").innerText = '0147';
			document.getElementById("ul1li3tr5td2").innerText = 'Rolo Antigota Verde 220 mm';
			document.getElementById("ul1li3tr5td3").innerText = '50';
			document.getElementById("ul1li3tr5td4").innerText = '50';
		
			document.getElementById("ul1li3tr6td1").innerText = '0148';
			document.getElementById("ul1li3tr6td2").innerText = 'Rolo Antigota Verde 250 mm';
			document.getElementById("ul1li3tr6td3").innerText = '50';
			document.getElementById("ul1li3tr6td4").innerText = '45';
		
		});
        
        $('#rbCRoloAntigotaV').click(function() {
			$("#rightImageAntigotaV").attr('src', 'images/antigotaV/carga_500_375.jpg');
			document.getElementById('rbRoloAntigotaV').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAntigotaV').style.fontSize = '1.0em';
			document.getElementById('rbRoloAntigotaV').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAntigotaV').style.fontWeight = 'bold';
			document.getElementById('rbRoloAntigotaV').style.color = '#FFF';
			document.getElementById('rbCRoloAntigotaV').style.color = '#FFF';
			document.getElementById("ul1li3tr1td1").innerText = '0018';
			document.getElementById("ul1li3tr1td2").innerText = 'Carga Antigota Verde 180 mm';
			document.getElementById("ul1li3tr1td3").innerText = '45';
			document.getElementById("ul1li3tr1td4").innerText = '';

			document.getElementById("ul1li3tr2td1").innerText = '0019';
			document.getElementById("ul1li3tr2td2").innerText = 'Carga Antigota Verde 220 mm';
			document.getElementById("ul1li3tr2td3").innerText = '45';
			document.getElementById("ul1li3tr2td4").innerText = '';
			
			document.getElementById("ul1li3tr3td1").innerText = '0020';
			document.getElementById("ul1li3tr3td2").innerText = 'Carga Antigota Verde 250 mm';
			document.getElementById("ul1li3tr3td3").innerText = '45';
			document.getElementById("ul1li3tr3td4").innerText = '';
			
			document.getElementById("ul1li3tr4td1").innerText = '0128';
			document.getElementById("ul1li3tr4td2").innerText = 'Carga Antigota Verde 180 mm';
			document.getElementById("ul1li3tr4td3").innerText = '50';
			document.getElementById("ul1li3tr4td4").innerText = '';
			
			document.getElementById("ul1li3tr5td1").innerText = '0129';
			document.getElementById("ul1li3tr5td2").innerText = 'Carga Antigota Verde 220 mm';
			document.getElementById("ul1li3tr5td3").innerText = '50';
			document.getElementById("ul1li3tr5td4").innerText = '';
		
			document.getElementById("ul1li3tr6td1").innerText = '0130';  
			document.getElementById("ul1li3tr6td2").innerText = 'Carga Antigota Verde 250 mm';
			document.getElementById("ul1li3tr6td3").innerText = '50';
			document.getElementById("ul1li3tr6td4").innerText = '';
		
			
		});

							   
		/*$('#rbMiniRoloAntigotaV').click(function() {
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
        
        $('#rbCMiniRoloAntigotaV').click(function() {
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
			
		});*/
    
    
	
		//Menu 18
		$('#openModelCromadoImg').click(function() {
			document.getElementById("rbRoloCromado").click();
		});
		
		
		$('#rbRoloCromado').click(function() {
			$("#rightImageCromado").attr('src', 'images/cromado/rolo_500_375.jpg');
			document.getElementById('rbRoloCromado').style.fontSize = '1.0em';
			document.getElementById('rbCRoloCromado').style.fontSize = '0.8em';
			document.getElementById('rbRoloCromado').style.fontWeight = 'bold';
			document.getElementById('rbCRoloCromado').style.fontWeight = 'normal';
			document.getElementById('rbRoloCromado').style.color = '#FFF';
			document.getElementById('rbCRoloCromado').style.color = '#FFF';
			
			document.getElementById("ul1li4tr1td1").innerText = '0055';
			document.getElementById("ul1li4tr1td2").innerText = 'Rolo Cromado 180 mm';
			document.getElementById("ul1li4tr1td3").innerText = '45';
			document.getElementById("ul1li4tr1td4").innerText = '60'
			
			document.getElementById("ul1li4tr2td1").innerText = '0056';
			document.getElementById("ul1li4tr2td2").innerText = 'Rolo Cromado 220 mm';
			document.getElementById("ul1li4tr2td3").innerText = '45';
			document.getElementById("ul1li4tr2td4").innerText = '55'
	
			document.getElementById("ul1li4tr3td1").innerText = '0054';
			document.getElementById("ul1li4tr3td2").innerText = 'Rolo Cromado 25 0mm';
			document.getElementById("ul1li4tr3td3").innerText = '45';
			document.getElementById("ul1li4tr3td4").innerText = '50'
			
		});
        
        $('#rbCRoloCromado').click(function() {
			$("#rightImageCromado").attr('src', 'images/cromado/carga_500_375.jpg');
			document.getElementById('rbRoloCromado').style.fontSize = '0.8em';
			document.getElementById('rbCRoloCromado').style.fontSize = '1.0em';
			document.getElementById('rbRoloCromado').style.fontWeight = 'normal';
			document.getElementById('rbCRoloCromado').style.fontWeight = 'bold';
			document.getElementById('rbRoloCromado').style.color = '#FFF';
			document.getElementById('rbCRoloCromado').style.color = '#FFF';
			
			document.getElementById("ul1li4tr1td1").innerText = '0012';
			document.getElementById("ul1li4tr1td2").innerText = 'Carga Cromado 180 mm';
			document.getElementById("ul1li4tr1td3").innerText = '45';
			document.getElementById("ul1li4tr1td4").innerText = ''
	
			document.getElementById("ul1li4tr2td1").innerText = '0013';
			document.getElementById("ul1li4tr2td2").innerText = 'Carga Cromado 220 mm';
			document.getElementById("ul1li4tr2td3").innerText = '45';
			document.getElementById("ul1li4tr2td4").innerText = ''

			document.getElementById("ul1li4tr3td1").innerText = '0014';
			document.getElementById("ul1li4tr3td2").innerText = 'Carga Cromado 250 mm';
			document.getElementById("ul1li4tr3td3").innerText = '45';
			document.getElementById("ul1li4tr3td4").innerText = ''
			
		});

		/*					   
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
		 */
		
		//Espuma
		$('#openModelEspumaImg').click(function() {
			document.getElementById("rbRoloEspuma").click();
		});
		
		
		$('#rbRoloEspuma').click(function() {
			$("#rightImageEspuma").attr('src', 'images/espuma/rolo_500_375.jpg');
			document.getElementById('rbRoloEspuma').style.fontSize = '1.0em';
            document.getElementById('rbCRoloEspuma').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloEspuma').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloEspuma').style.fontSize = '0.8em';
			document.getElementById('rbRoloEspuma').style.fontWeight = 'bold';
            document.getElementById('rbCRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbRoloEspuma').style.color = '#FFF';
            document.getElementById('rbCRoloEspuma').style.color = '#FFF';
			document.getElementById('rbMiniRoloEspuma').style.color = '#FFF';
			document.getElementById('rbCMiniRoloEspuma').style.color = '#FFF';
			document.getElementById("ul2li1tr1td1").innerText = '0080';
			document.getElementById("ul2li1tr1td2").innerText = 'Rolo Espuma Canto';
			document.getElementById("ul2li1tr1td3").innerText = '75';
			document.getElementById("ul2li1tr1td4").innerText = '24';
			
			document.getElementById("ul2li1tr2td1").innerText = '';
			document.getElementById("ul2li1tr2td2").innerText = '';
			document.getElementById("ul2li1tr2td3").innerText = '';
			document.getElementById("ul2li1tr2td4").innerText = '';
			
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
			
            document.getElementById("ul2li1tr8td1").innerText = '';
			document.getElementById("ul2li1tr8td2").innerText = '';
			document.getElementById("ul2li1tr8td3").innerText = '';
			document.getElementById("ul2li1tr8td4").innerText = '';
            
			document.getElementById("ul2li1tr9td1").innerText = '';
			document.getElementById("ul2li1tr9td2").innerText = '';
			document.getElementById("ul2li1tr9td3").innerText = '';
			document.getElementById("ul2li1tr9td4").innerText = '';
		});
        
        $('#rbCRoloEspuma').click(function() {
			$("#rightImageEspuma").attr('src', 'images/espuma/carga_500_375.jpg');
			document.getElementById('rbRoloEspuma').style.fontSize = '0.8em';
            document.getElementById('rbCRoloEspuma').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloEspuma').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloEspuma').style.fontSize = '0.8em';
			document.getElementById('rbRoloEspuma').style.fontWeight = 'normal';
            document.getElementById('rbCRoloEspuma').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbRoloEspuma').style.color = '#FFF';
            document.getElementById('rbCRoloEspuma').style.color = '#FFF';
			document.getElementById('rbMiniRoloEspuma').style.color = '#FFF';
			document.getElementById('rbCMiniRoloEspuma').style.color = '#FFF';
			document.getElementById("ul2li1tr1td1").innerText = '0037';
			document.getElementById("ul2li1tr1td2").innerText = 'Carga Espuma Canto';
			document.getElementById("ul2li1tr1td3").innerText = '75';
			document.getElementById("ul2li1tr1td4").innerText = '';
			
			document.getElementById("ul2li1tr2td1").innerText = '';
			document.getElementById("ul2li1tr2td2").innerText = '';
			document.getElementById("ul2li1tr2td3").innerText = '';
			document.getElementById("ul2li1tr2td4").innerText = '';
			
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
			
            document.getElementById("ul2li1tr8td1").innerText = '';
			document.getElementById("ul2li1tr8td2").innerText = '';
			document.getElementById("ul2li1tr8td3").innerText = '';
			document.getElementById("ul2li1tr8td4").innerText = '';
         			
            document.getElementById("ul2li1tr9td1").innerText = '';
			document.getElementById("ul2li1tr9td2").innerText = '';
			document.getElementById("ul2li1tr9td3").innerText = '';
			document.getElementById("ul2li1tr9td4").innerText = '';

		});

        
        
		$('#rbMiniRoloEspuma').click(function() {
			$("#rightImageEspuma").attr('src', 'images/espuma/mini_500_375.jpg');
			document.getElementById('rbRoloEspuma').style.fontSize = '0.8em';
            document.getElementById('rbCRoloEspuma').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloEspuma').style.fontSize = '1.0em';
            document.getElementById('rbCMiniRoloEspuma').style.fontSize = '0.8em';
			document.getElementById('rbRoloEspuma').style.fontWeight = 'normal';
            document.getElementById('rbCRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloEspuma').style.fontWeight = 'bold';
			document.getElementById('rbCMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbRoloEspuma').style.color = '#FFF';
            document.getElementById('rbCRoloEspuma').style.color = '#FFF';
			document.getElementById('rbMiniRoloEspuma').style.color = '#FFF';
			document.getElementById('rbCMiniRoloEspuma').style.color = '#FFF';
			document.getElementById("ul2li1tr1td1").innerText = '0244';
			document.getElementById("ul2li1tr1td2").innerText = 'Mini Rolo Espuma 60 mm';
			document.getElementById("ul2li1tr1td3").innerText = '16';
			document.getElementById("ul2li1tr1td4").innerText = '';
		
			document.getElementById("ul2li1tr2td1").innerText = '0229';
			document.getElementById("ul2li1tr2td2").innerText = 'Mini Rolo Espuma 110 mm';
			document.getElementById("ul2li1tr2td3").innerText = '16';
			document.getElementById("ul2li1tr2td4").innerText = '';
		
            document.getElementById("ul2li1tr3td1").innerText = '0260';
			document.getElementById("ul2li1tr3td2").innerText = 'Mini Rolo Espuma 150 mm';
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
			
			document.getElementById("ul2li1tr8td1").innerText = '';
			document.getElementById("ul2li1tr8td2").innerText = '';
			document.getElementById("ul2li1tr8td3").innerText = '';
			document.getElementById("ul2li1tr8td4").innerText = '';
            
            document.getElementById("ul2li1tr9td1").innerText = '';
			document.getElementById("ul2li1tr9td2").innerText = '';
			document.getElementById("ul2li1tr9td3").innerText = '';
			document.getElementById("ul2li1tr9td4").innerText = '';
		});
        
        
        $('#rbCMiniRoloEspuma').click(function() {
			$("#rightImageEspuma").attr('src', 'images/espuma/cargaMini_500_375.jpg');
			document.getElementById('rbRoloEspuma').style.fontSize = '0.8em';
            document.getElementById('rbCRoloEspuma').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloEspuma').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloEspuma').style.fontSize = '1.0em';
			document.getElementById('rbRoloEspuma').style.fontWeight = 'normal';
            document.getElementById('rbCRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloEspuma').style.fontWeight = 'bold';
			document.getElementById('rbRoloEspuma').style.color = '#FFF';
            document.getElementById('rbCRoloEspuma').style.color = '#FFF';
			document.getElementById('rbMiniRoloEspuma').style.color = '#FFF';
			document.getElementById('rbCMiniRoloEspuma').style.color = '#FFF';
            
			document.getElementById("ul2li1tr1td1").innerText = '0096';
			document.getElementById("ul2li1tr1td2").innerText = 'Carga Espuma 60 mm';
			document.getElementById("ul2li1tr1td3").innerText = '16';
			document.getElementById("ul2li1tr1td4").innerText = '';
			
			document.getElementById("ul2li1tr2td1").innerText = '0097';
			document.getElementById("ul2li1tr2td2").innerText = 'Carga Espuma 110 mm';
			document.getElementById("ul2li1tr2td3").innerText = '16';
			document.getElementById("ul2li1tr2td4").innerText = '';
			
			document.getElementById("ul2li1tr3td1").innerText = '0098';
			document.getElementById("ul2li1tr3td2").innerText = 'Carga Espuma 150 mm';
			document.getElementById("ul2li1tr3td3").innerText = '16';
			document.getElementById("ul2li1tr3td4").innerText = '';
			
			document.getElementById("ul2li1tr4td1").innerText = '0233';
			document.getElementById("ul2li1tr4td2").innerText = 'Pack 2 Cargas Espuma 60 mm';
			document.getElementById("ul2li1tr4td3").innerText = '16';
			document.getElementById("ul2li1tr4td4").innerText = '';
			
			document.getElementById("ul2li1tr5td1").innerText = '0232';
			document.getElementById("ul2li1tr5td2").innerText = 'Pack 2 Cargas Espuma 110 mm';
			document.getElementById("ul2li1tr5td3").innerText = '16';
			document.getElementById("ul2li1tr5td4").innerText = '';
	
			document.getElementById("ul2li1tr6td1").innerText = '0251';
			document.getElementById("ul2li1tr6td2").innerText = 'Pack 2 Cargas Espuma 150 mm';
			document.getElementById("ul2li1tr6td3").innerText = '16';
			document.getElementById("ul2li1tr6td4").innerText = '';
			
			document.getElementById("ul2li1tr7td1").innerText = '0261';
			document.getElementById("ul2li1tr7td2").innerText = 'Blister 16 Cargas Espuma 60 mm';
			document.getElementById("ul2li1tr7td3").innerText = '16';
			document.getElementById("ul2li1tr7td4").innerText = '';
			
			document.getElementById("ul2li1tr8td1").innerText = '0231';
			document.getElementById("ul2li1tr8td2").innerText = 'Blister 10 Cargas Espuma 110 mm';
			document.getElementById("ul2li1tr8td3").innerText = '16';
			document.getElementById("ul2li1tr8td4").innerText = '36 Blisters';
		
            document.getElementById("ul2li1tr9td1").innerText = '0252';
			document.getElementById("ul2li1tr9td2").innerText = 'Blister 10 Cargas Espuma 110 mm (Topo Redondo)';
			document.getElementById("ul2li1tr9td3").innerText = '16';
			document.getElementById("ul2li1tr9td4").innerText = '';
			
		});
		
		
		
		//JUNIOR
		$('#openModelJuniorImg').click(function() {
			document.getElementById("rbRoloJunior").click();
		});
		
		
		$('#rbRoloJunior').click(function() {
			$("#rightImageJunior").attr('src', 'images/junior/rolo_500_375.jpg');
			document.getElementById('rbRoloJunior').style.fontSize = '1.0em';
            document.getElementById('rbCRoloJunior').style.fontSize = '0.8em';
			//document.getElementById('rbMiniRoloJunior').style.fontSize = '0.8em';
            //document.getElementById('rbCMiniRoloJunior').style.fontSize = '0.8em';
			document.getElementById('rbRoloJunior').style.fontWeight = 'bold';
            document.getElementById('rbCRoloJunior').style.fontWeight = 'normal';
			//document.getElementById('rbMiniRoloJunior').style.fontWeight = 'normal';
            //document.getElementById('rbCMiniRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbRoloJunior').style.color = '#FFF';
            document.getElementById('rbCRoloJunior').style.color = '#FFF';
			//document.getElementById('rbMiniRoloJunior').style.color = '#FFF';
            //document.getElementById('rbCMiniRoloJunior').style.color = '#FFF';
			
			document.getElementById("ul2li2tr1td1").innerText = '0044';
			document.getElementById("ul2li2tr1td2").innerText = 'Rolo Júnior  60 mm';
			document.getElementById("ul2li2tr1td3").innerText = '45';
			document.getElementById("ul2li2tr1td4").innerText = '60'

			document.getElementById("ul2li2tr2td1").innerText = '0045';
			document.getElementById("ul2li2tr2td2").innerText = 'Rolo Júnior 150 mm';
			document.getElementById("ul2li2tr2td3").innerText = '45';
			document.getElementById("ul2li2tr2td4").innerText = '24'
			
			document.getElementById("ul2li2tr3td1").innerText = '0046';
			document.getElementById("ul2li2tr3td2").innerText = 'Rolo Júnior 180 mm';
			document.getElementById("ul2li2tr3td3").innerText = '45';
			document.getElementById("ul2li2tr3td4").innerText = '60';
			
			document.getElementById("ul2li2tr4td1").innerText = '0047';
			document.getElementById("ul2li2tr4td2").innerText = 'Rolo Júnior 220 mm';
			document.getElementById("ul2li2tr4td3").innerText = '45';
			document.getElementById("ul2li2tr4td4").innerText = '55';
		
			document.getElementById("ul2li2tr5td1").innerText = '0048';
			document.getElementById("ul2li2tr5td2").innerText = 'Rolo Júnior 250 mm';
			document.getElementById("ul2li2tr5td3").innerText = '45';
			document.getElementById("ul2li2tr5td4").innerText = '50';
			
			document.getElementById("ul2li2tr6td1").innerText = '0140';
			document.getElementById("ul2li2tr6td2").innerText = 'Rolo Júnior 180 mm';
			document.getElementById("ul2li2tr6td3").innerText = '50';
			document.getElementById("ul2li2tr6td4").innerText = '55';
			
			document.getElementById("ul2li2tr7td1").innerText = '0141';
			document.getElementById("ul2li2tr7td2").innerText = 'Rolo Júnior 220 mm';
			document.getElementById("ul2li2tr7td3").innerText = '50';
			document.getElementById("ul2li2tr7td4").innerText = '50';
			
			document.getElementById("ul2li2tr8td1").innerText = '0142';
			document.getElementById("ul2li2tr8td2").innerText = 'Rolo Júnior 250 mm';
			document.getElementById("ul2li2tr8td3").innerText = '50';
			document.getElementById("ul2li2tr8td4").innerText = '45';
			
		});
        
        
        $('#rbCRoloJunior').click(function() {
			$("#rightImageJunior").attr('src', 'images/junior/carga_500_375.jpg');
			document.getElementById('rbRoloJunior').style.fontSize = '0.8em';
            document.getElementById('rbCRoloJunior').style.fontSize = '1.0em';
			//document.getElementById('rbMiniRoloJunior').style.fontSize = '0.8em';
            //document.getElementById('rbCMiniRoloJunior').style.fontSize = '0.8em';
			document.getElementById('rbRoloJunior').style.fontWeight = 'normal';
            document.getElementById('rbCRoloJunior').style.fontWeight = 'bold';
			//document.getElementById('rbMiniRoloJunior').style.fontWeight = 'normal';
            //document.getElementById('rbCMiniRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbRoloJunior').style.color = '#FFF';
            document.getElementById('rbCRoloJunior').style.color = '#FFF';
			//document.getElementById('rbMiniRoloJunior').style.color = '#FFF';
            //document.getElementById('rbCMiniRoloJunior').style.color = '#FFF';
			document.getElementById("ul2li2tr1td1").innerText = '0001';
			document.getElementById("ul2li2tr1td2").innerText = 'Carga Júnior  60 mm';
			document.getElementById("ul2li2tr1td3").innerText = '45';
			document.getElementById("ul2li2tr1td4").innerText = '';
			
			document.getElementById("ul2li2tr2td1").innerText = '0002';
			document.getElementById("ul2li2tr2td2").innerText = 'Carga Júnior 150 mm';
			document.getElementById("ul2li2tr2td3").innerText = '45';
			document.getElementById("ul2li2tr2td4").innerText = '';
		
			document.getElementById("ul2li2tr3td1").innerText = '0003';
			document.getElementById("ul2li2tr3td2").innerText = 'Carga Júnior 180 mm';
			document.getElementById("ul2li2tr3td3").innerText = '45';
			document.getElementById("ul2li2tr3td4").innerText = '';
			
			document.getElementById("ul2li2tr4td1").innerText = '0004';
			document.getElementById("ul2li2tr4td2").innerText = 'Carga Júnior 220 mm';
			document.getElementById("ul2li2tr4td3").innerText = '45';
			document.getElementById("ul2li2tr4td4").innerText = '';
			
			document.getElementById("ul2li2tr5td1").innerText = '0005';
			document.getElementById("ul2li2tr5td2").innerText = 'Carga Júnior 250 mm';
			document.getElementById("ul2li2tr5td3").innerText = '45';
			document.getElementById("ul2li2tr5td4").innerText = '';
			
			document.getElementById("ul2li2tr6td1").innerText = '0122';
			document.getElementById("ul2li2tr6td2").innerText = 'Carga Júnior 180 mm';
			document.getElementById("ul2li2tr6td3").innerText = '50';
			document.getElementById("ul2li2tr6td4").innerText = '';
	
			document.getElementById("ul2li2tr7td1").innerText = '0123';
			document.getElementById("ul2li2tr7td2").innerText = 'Carga Júnior 220 mm';
			document.getElementById("ul2li2tr7td3").innerText = '50';
			document.getElementById("ul2li2tr7td4").innerText = '';
	
			document.getElementById("ul2li2tr8td1").innerText = '0124';
			document.getElementById("ul2li2tr8td2").innerText = 'Carga Júnior 250 mm';
			document.getElementById("ul2li2tr8td3").innerText = '50';
			document.getElementById("ul2li2tr8td4").innerText = '';
	
			
			
		});

							   
		/*$('#rbMiniRoloJunior').click(function() {
			$("#rightImageJunior").attr('src', 'images/18/Junior.JPG');
			document.getElementById('rbRoloJunior').style.fontSize = '0.8em';
            document.getElementById('rbCRoloJunior').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloJunior').style.fontSize = '1.0em';
            document.getElementById('rbCMiniRoloJunior').style.fontSize = '0.8em';
			document.getElementById('rbRoloJunior').style.fontWeight = 'normal';
            document.getElementById('rbCRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloJunior').style.fontWeight = 'bold';
            document.getElementById('rbCMiniRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbRoloJunior').style.color = '#FFF';
            document.getElementById('rbCRoloJunior').style.color = '#FFF';
			document.getElementById('rbMiniRoloJunior').style.color = '#FFF';
            document.getElementById('rbCMiniRoloJunior').style.color = '#FFF';
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
        
        $('#rbCMiniRoloJunior').click(function() {
			$("#rightImageJunior").attr('src', 'images/18/Junior.JPG');
			document.getElementById('rbRoloJunior').style.fontSize = '0.8em';
            document.getElementById('rbCRoloJunior').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloJunior').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloJunior').style.fontSize = '1.0em';
			document.getElementById('rbRoloJunior').style.fontWeight = 'normal';
            document.getElementById('rbCRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloJunior').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloJunior').style.fontWeight = 'bold';
			document.getElementById('rbRoloJunior').style.color = '#FFF';
            document.getElementById('rbCRoloJunior').style.color = '#FFF';
			document.getElementById('rbMiniRoloJunior').style.color = '#FFF';
            document.getElementById('rbCMiniRoloJunior').style.color = '#FFF';
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
			
		});*/
		
		
		
		
		//Microfibra
		$('#openModelMicrofibraImg').click(function() {
			document.getElementById("rbRoloMicrofibra").click();
		});
		
		
		$('#rbRoloMicrofibra').click(function() {
			$("#rightImageMicrofibra").attr('src', 'images/microfibra/rolo_500_375.jpg');
			document.getElementById('rbRoloMicrofibra').style.fontSize = '1.0em';
            document.getElementById('rbCRoloMicrofibra').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloMicrofibra').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontSize = '0.8em';
			document.getElementById('rbRoloMicrofibra').style.fontWeight = 'bold';
            document.getElementById('rbCRoloMicrofibra').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontWeight = 'normal';
			document.getElementById('rbRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCRoloMicrofibra').style.color = '#FFF';
			document.getElementById('rbMiniRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCMiniRoloMicrofibra').style.color = '#FFF';
            
			document.getElementById("ul2li3tr1td1").innerText = '0081';
			document.getElementById("ul2li3tr1td2").innerText = 'Rolo Microfibra 180 mm';
			document.getElementById("ul2li3tr1td3").innerText = '45';
			document.getElementById("ul2li3tr1td4").innerText = '60';
			
			document.getElementById("ul2li3tr2td1").innerText = '0082';
			document.getElementById("ul2li3tr2td2").innerText = 'Rolo Microfibra 220 mm';
			document.getElementById("ul2li3tr2td3").innerText = '45';
			document.getElementById("ul2li3tr2td4").innerText = '55';
			
			document.getElementById("ul2li3tr3td1").innerText = '0083';
			document.getElementById("ul2li3tr3td2").innerText = 'Rolo Microfibra 250 mm';
			document.getElementById("ul2li3tr3td3").innerText = '45';
			document.getElementById("ul2li3tr3td4").innerText = '50';
			
		});
        
        
        $('#rbCRoloMicrofibra').click(function() {
			$("#rightImageMicrofibra").attr('src', 'images/microfibra/carga_500_375.jpg');
			document.getElementById('rbRoloMicrofibra').style.fontSize = '0.8em';
            document.getElementById('rbCRoloMicrofibra').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloMicrofibra').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontSize = '0.8em';
			document.getElementById('rbRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbCRoloMicrofibra').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCRoloMicrofibra').style.color = '#FFF';
			document.getElementById('rbMiniRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCMiniRoloMicrofibra').style.color = '#FFF';
            
			document.getElementById("ul2li3tr1td1").innerText = '0038';
			document.getElementById("ul2li3tr1td2").innerText = 'Carga Microfibra 180 mm';
			document.getElementById("ul2li3tr1td3").innerText = '45';
			document.getElementById("ul2li3tr1td4").innerText = '';
			
			document.getElementById("ul2li3tr2td1").innerText = '0039';
			document.getElementById("ul2li3tr2td2").innerText = 'Carga Microfibra 220 mm';
			document.getElementById("ul2li3tr2td3").innerText = '45';
			document.getElementById("ul2li3tr2td4").innerText = '';
			
			document.getElementById("ul2li3tr3td1").innerText = '0040';
			document.getElementById("ul2li3tr3td2").innerText = 'Carga Microfibra 250 mm';
			document.getElementById("ul2li3tr3td3").innerText = '45';
			document.getElementById("ul2li3tr3td4").innerText = '';
			
		});


							   
		$('#rbMiniRoloMicrofibra').click(function() {
			$("#rightImageMicrofibra").attr('src', 'images/microfibra/mini_500_375.jpg');
			document.getElementById('rbRoloMicrofibra').style.fontSize = '0.8em';
            document.getElementById('rbCRoloMicrofibra').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloMicrofibra').style.fontSize = '1.0em';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontSize = '0.8em';
			document.getElementById('rbRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbCRoloMicrofibra').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloMicrofibra').style.fontWeight = 'bold';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCRoloMicrofibra').style.color = '#FFF';
			document.getElementById('rbMiniRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCMiniRoloMicrofibra').style.color = '#FFF';
            
			document.getElementById("ul2li3tr1td1").innerText = '0187';
			document.getElementById("ul2li3tr1td2").innerText = 'Mini Microfibra 60 mm';
			document.getElementById("ul2li3tr1td3").innerText = '16';
			document.getElementById("ul2li3tr1td4").innerText = '';
			
			document.getElementById("ul2li3tr2td1").innerText = '0188';
			document.getElementById("ul2li3tr2td2").innerText = 'Mini Microfibra 100 mm';
			document.getElementById("ul2li3tr2td3").innerText = '16';
			document.getElementById("ul2li3tr2td4").innerText = '40';
			
			document.getElementById("ul2li3tr3td1").innerText = '0189';
			document.getElementById("ul2li3tr3td2").innerText = 'Mini Microfibra 150 mm ';
			document.getElementById("ul2li3tr3td3").innerText = '16';
			document.getElementById("ul2li3tr3td4").innerText = '';	
            
            document.getElementById("ul2li3tr4td1").innerText = '';
			document.getElementById("ul2li3tr4td2").innerText = '';
			document.getElementById("ul2li3tr4td3").innerText = '';
			document.getElementById("ul2li3tr4td4").innerText = '';	
            
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
            
            document.getElementById("ul2li3tr8td1").innerText = '';
			document.getElementById("ul2li3tr8td2").innerText = '';
			document.getElementById("ul2li3tr8td3").innerText = '';
			document.getElementById("ul2li3tr8td4").innerText = '';
            
            document.getElementById("ul2li3tr9td1").innerText = '';
			document.getElementById("ul2li3tr9td2").innerText = '';
			document.getElementById("ul2li3tr9td3").innerText = '';
			document.getElementById("ul2li3tr9td4").innerText = '';
            
            document.getElementById("ul2li3tr10td1").innerText = '';
			document.getElementById("ul2li3tr10td2").innerText = '';
			document.getElementById("ul2li3tr10td3").innerText = '';
			document.getElementById("ul2li3tr10td4").innerText = '';
            
            document.getElementById("ul2li3tr11td1").innerText = '';
			document.getElementById("ul2li3tr11td2").innerText = '';
			document.getElementById("ul2li3tr11td3").innerText = '';
			document.getElementById("ul2li3tr11td4").innerText = '';
            
            document.getElementById("ul2li3tr12td1").innerText = '';
			document.getElementById("ul2li3tr12td2").innerText = '';
			document.getElementById("ul2li3tr12td3").innerText = '';
			document.getElementById("ul2li3tr12td4").innerText = '';
            
            document.getElementById("ul2li3tr13td1").innerText = '';
			document.getElementById("ul2li3tr13td2").innerText = '';
			document.getElementById("ul2li3tr13td3").innerText = '';
			document.getElementById("ul2li3tr13td4").innerText = '';
            
            document.getElementById("ul2li3tr14td1").innerText = '';
			document.getElementById("ul2li3tr14td2").innerText = '';
			document.getElementById("ul2li3tr14td3").innerText = '';
			document.getElementById("ul2li3tr14td4").innerText = '';
          
		});
        
        $('#rbCMiniRoloMicrofibra').click(function() {
			$("#rightImageMicrofibra").attr('src', 'images/microfibra/cargaMini_500_375.jpg');
			document.getElementById('rbRoloMicrofibra').style.fontSize = '0.8em';
            document.getElementById('rbCRoloMicrofibra').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloMicrofibra').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontSize = '1.0em';
			document.getElementById('rbRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbCRoloMicrofibra').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontWeight = 'bold';
            document.getElementById('rbRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCRoloMicrofibra').style.color = '#FFF';
			document.getElementById('rbMiniRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCMiniRoloMicrofibra').style.color = '#FFF';
			document.getElementById("ul2li3tr1td1").innerText = '0262';
			document.getElementById("ul2li3tr1td2").innerText = 'Carga Microfibra 60 mm';
			document.getElementById("ul2li3tr1td3").innerText = '16';
			document.getElementById("ul2li3tr1td4").innerText = '';
		
			document.getElementById("ul2li3tr2td1").innerText = '0248';
			document.getElementById("ul2li3tr2td2").innerText = 'Carga Microfibra 100 mm';
			document.getElementById("ul2li3tr2td3").innerText = '16';
			document.getElementById("ul2li3tr2td4").innerText = '';
	
			document.getElementById("ul2li3tr3td1").innerText = '0263';
			document.getElementById("ul2li3tr3td2").innerText = 'Carga Microfibra 150 mm';
			document.getElementById("ul2li3tr3td3").innerText = '16';
			document.getElementById("ul2li3tr3td4").innerText = '';
		
            document.getElementById("ul2li3tr4td1").innerText = '0191';
			document.getElementById("ul2li3tr4td2").innerText = 'Pack 2 Cargas Microfibra 60 mm';
			document.getElementById("ul2li3tr4td3").innerText = '16';
			document.getElementById("ul2li3tr4td4").innerText = '';
            
            document.getElementById("ul2li3tr5td1").innerText = '0192';
			document.getElementById("ul2li3tr5td2").innerText = 'Pack 2 Cargas Microfibra 100 mm';
			document.getElementById("ul2li3tr5td3").innerText = '16';
			document.getElementById("ul2li3tr5td4").innerText = '';
            
            document.getElementById("ul2li3tr6td1").innerText = '0193';
			document.getElementById("ul2li3tr6td2").innerText = 'Pack 2 Cargas Microfibra 150 mm';
			document.getElementById("ul2li3tr6td3").innerText = '16';
			document.getElementById("ul2li3tr6td4").innerText = '';
            
            document.getElementById("ul2li3tr7td1").innerText = '0264';
			document.getElementById("ul2li3tr7td2").innerText = 'Blister 16 Cargas Microfibra 60 mm';
			document.getElementById("ul2li3tr7td3").innerText = '16';
			document.getElementById("ul2li3tr7td4").innerText = '';
            
            document.getElementById("ul2li3tr8td1").innerText = '0190';
			document.getElementById("ul2li3tr8td2").innerText = 'Blister 10 Cargas Microfibra 100 mm';
			document.getElementById("ul2li3tr8td3").innerText = '16';
			document.getElementById("ul2li3tr8td4").innerText = '';
            
            document.getElementById("ul2li3tr9td1").innerText = '0213';
			document.getElementById("ul2li3tr9td2").innerText = 'Carga Microfibra 120 m';
			document.getElementById("ul2li3tr9td3").innerText = '30';
			document.getElementById("ul2li3tr9td4").innerText = '';
            
            document.getElementById("ul2li3tr10td1").innerText = '0214';
			document.getElementById("ul2li3tr10td2").innerText = 'Carga Microfibra 150 mm';
			document.getElementById("ul2li3tr10td3").innerText = '30';
			document.getElementById("ul2li3tr10td4").innerText = '';
            
            document.getElementById("ul2li3tr11td1").innerText = '0217';
			document.getElementById("ul2li3tr11td2").innerText = 'Pack 2 Cargas Microfibra 120 mm';
			document.getElementById("ul2li3tr11td3").innerText = '30';
			document.getElementById("ul2li3tr11td4").innerText = '';
            
            document.getElementById("ul2li3tr12td1").innerText = '0218';
			document.getElementById("ul2li3tr12td2").innerText = 'Pack 2 Cargas Microfibra 150 mm';
			document.getElementById("ul2li3tr12td3").innerText = '30';
			document.getElementById("ul2li3tr12td4").innerText = '';
            
            document.getElementById("ul2li3tr13td1").innerText = '0215';
			document.getElementById("ul2li3tr13td2").innerText = 'Blister 10 Cargas Microfibra 120 mm';
			document.getElementById("ul2li3tr13td3").innerText = '30';
			document.getElementById("ul2li3tr13td4").innerText = '';
            
            document.getElementById("ul2li3tr14td1").innerText = '0216';
			document.getElementById("ul2li3tr14td2").innerText = 'Blister 6 Cargas Microfibra 150 mm';
			document.getElementById("ul2li3tr14td3").innerText = '30';
			document.getElementById("ul2li3tr14td4").innerText = '';
            
		});
		
		
		
		//Ravel
		$('#openModelRavelImg').click(function() {
			document.getElementById("rbRoloRavel").click();
		});
		
		
		$('#rbRoloRavel').click(function() {
			$("#rightImageRavel").attr('src', 'images/ravel/rolo_500_375.jpg');
			document.getElementById('rbRoloRavel').style.fontSize = '1.0em';
            document.getElementById('rbCRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRavel').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbRoloRavel').style.fontWeight = 'bold';
            document.getElementById('rbCRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRavel').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbRoloRavel').style.color = '#FFF';
            document.getElementById('rbCRoloRavel').style.color = '#FFF';
			document.getElementById('rbMiniRoloRavel').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRavel').style.color = '#FFF';
            
			document.getElementById("ul2li4tr1td1").innerText = '0072';
			document.getElementById("ul2li4tr1td2").innerText = 'Rolo Ravel 180 mm';
			document.getElementById("ul2li4tr1td3").innerText = '45';
			document.getElementById("ul2li4tr1td4").innerText = '60';
			
			document.getElementById("ul2li4tr2td1").innerText = '0073';
			document.getElementById("ul2li4tr2td2").innerText = 'Rolo Ravel 220 mm';
			document.getElementById("ul2li4tr2td3").innerText = '45';
			document.getElementById("ul2li4tr2td4").innerText = '55';
			
			document.getElementById("ul2li4tr3td1").innerText = '0074';
			document.getElementById("ul2li4tr3td2").innerText = 'Rolo Ravel 250 mm';
			document.getElementById("ul2li4tr3td3").innerText = '45';
			document.getElementById("ul2li4tr3td4").innerText = '50';
			
			document.getElementById("ul2li4tr4td1").innerText = '0152';
			document.getElementById("ul2li4tr4td2").innerText = 'Rolo Ravel 180 mm';
			document.getElementById("ul2li4tr4td3").innerText = '50';
			document.getElementById("ul2li4tr4td4").innerText = '55';
			
			document.getElementById("ul2li4tr5td1").innerText = '0153';
			document.getElementById("ul2li4tr5td2").innerText = 'Rolo Ravel 220 mm';
			document.getElementById("ul2li4tr5td3").innerText = '50';
			document.getElementById("ul2li4tr5td4").innerText = '50';
			
			document.getElementById("ul2li4tr6td1").innerText = '0154';
			document.getElementById("ul2li4tr6td2").innerText = 'Rolo Ravel 250 mm';
			document.getElementById("ul2li4tr6td3").innerText = '50';
			document.getElementById("ul2li4tr6td4").innerText = '45';

			
		});
        
        $('#rbCRoloRavel').click(function() {
			$("#rightImageRavel").attr('src', 'images/ravel/carga_500_375.jpg');
			document.getElementById('rbRoloRavel').style.fontSize = '1.0em';
            document.getElementById('rbCRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRavel').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbRoloRavel').style.fontWeight = 'bold';
            document.getElementById('rbCRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRavel').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbRoloRavel').style.color = '#FFF';
            document.getElementById('rbCRoloRavel').style.color = '#FFF';
			document.getElementById('rbMiniRoloRavel').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRavel').style.color = '#FFF';
            
			document.getElementById("ul2li4tr1td1").innerText = '0029';
			document.getElementById("ul2li4tr1td2").innerText = 'Carga Ravel 180 mm';
			document.getElementById("ul2li4tr1td3").innerText = '45';
			document.getElementById("ul2li4tr1td4").innerText = '';
			
			document.getElementById("ul2li4tr2td1").innerText = '0030';
			document.getElementById("ul2li4tr2td2").innerText = 'Carga Ravel 220 mm';
			document.getElementById("ul2li4tr2td3").innerText = '45';
			document.getElementById("ul2li4tr2td4").innerText = '';
			
			document.getElementById("ul2li4tr3td1").innerText = '0031';
			document.getElementById("ul2li4tr3td2").innerText = 'Carga Ravel 250 mm';
			document.getElementById("ul2li4tr3td3").innerText = '45';
			document.getElementById("ul2li4tr3td4").innerText = '';
			
			document.getElementById("ul2li4tr4td1").innerText = '0134';
			document.getElementById("ul2li4tr4td2").innerText = 'Carga Ravel 180 mm';
			document.getElementById("ul2li4tr4td3").innerText = '50';
			document.getElementById("ul2li4tr4td4").innerText = '';
			
			document.getElementById("ul2li4tr5td1").innerText = '0135';
			document.getElementById("ul2li4tr5td2").innerText = 'Carga Ravel 220 mm';
			document.getElementById("ul2li4tr5td3").innerText = '50';
			document.getElementById("ul2li4tr5td4").innerText = '';
			
			document.getElementById("ul2li4tr6td1").innerText = '0136';
			document.getElementById("ul2li4tr6td2").innerText = 'Carga Ravel 250 mm';
			document.getElementById("ul2li4tr6td3").innerText = '50';
			document.getElementById("ul2li4tr6td4").innerText = '';

			
		});


							   
		$('#rbMiniRoloRavel').click(function() {
			$("#rightImageRavel").attr('src', 'images/ravel/mini_500_375.jpg');
			document.getElementById('rbRoloRavel').style.fontSize = '1.0em';
            document.getElementById('rbCRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRavel').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbRoloRavel').style.fontWeight = 'bold';
            document.getElementById('rbCRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRavel').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbRoloRavel').style.color = '#FFF';
            document.getElementById('rbCRoloRavel').style.color = '#FFF';
			document.getElementById('rbMiniRoloRavel').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRavel').style.color = '#FFF';
			document.getElementById("ul2li4tr1td1").innerText = '0265';
			document.getElementById("ul2li4tr1td2").innerText = 'Mini Ravel 60 mm';
			document.getElementById("ul2li4tr1td3").innerText = '16';
			document.getElementById("ul2li4tr1td4").innerText = '';
			
			document.getElementById("ul2li4tr2td1").innerText = '0266';
			document.getElementById("ul2li4tr2td2").innerText = 'Mini Ravel 100 mm';
			document.getElementById("ul2li4tr2td3").innerText = '16';
			document.getElementById("ul2li4tr2td4").innerText = '40';
	
			document.getElementById("ul2li4tr3td1").innerText = '0267';
			document.getElementById("ul2li4tr3td2").innerText = 'Mini Ravel 150 mm';
			document.getElementById("ul2li4tr3td3").innerText = '16';
			document.getElementById("ul2li4tr3td4").innerText = '';
		
			document.getElementById("ul2li4tr4td1").innerText = '';
			document.getElementById("ul2li4tr4td2").innerText = '';
			document.getElementById("ul2li4tr4td3").innerText = '';
			document.getElementById("ul2li4tr4td4").innerText = '';
	
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
			
            document.getElementById("ul2li4tr8td1").innerText = '';
			document.getElementById("ul2li4tr8td2").innerText = '';
			document.getElementById("ul2li4tr8td3").innerText = '';
			document.getElementById("ul2li4tr8td4").innerText = '';
            
            document.getElementById("ul2li4tr9td1").innerText = '';
			document.getElementById("ul2li4tr9td2").innerText = ''
			document.getElementById("ul2li4tr9td3").innerText = '';
			document.getElementById("ul2li4tr9td4").innerText = '';
            
            document.getElementById("ul2li4tr10td1").innerText = '';
			document.getElementById("ul2li4tr10td2").innerText = '';
			document.getElementById("ul2li4tr10td3").innerText = '';
			document.getElementById("ul2li4tr10td4").innerText = '';
            
            document.getElementById("ul2li4tr11td1").innerText = '';
			document.getElementById("ul2li4tr11td2").innerText = '';
			document.getElementById("ul2li4tr11td3").innerText = '';
			document.getElementById("ul2li4tr11td4").innerText = '';
            
            document.getElementById("ul2li4tr12td1").innerText = '';
			document.getElementById("ul2li4tr12td2").innerText = '';
			document.getElementById("ul2li4tr12td3").innerText = '';
			document.getElementById("ul2li4tr12td4").innerText = '';
            
            document.getElementById("ul2li4tr13td1").innerText = '';
			document.getElementById("ul2li4tr13td2").innerText = '';
			document.getElementById("ul2li4tr13td3").innerText = '';
			document.getElementById("ul2li4tr13td4").innerText = '';
            
            document.getElementById("ul2li4tr14td1").innerText = '';
			document.getElementById("ul2li4tr14td2").innerText = '';
			document.getElementById("ul2li4tr14td3").innerText = '';
			document.getElementById("ul2li4tr14td4").innerText = '';
			
		});
        
        $('#rbCMiniRoloRavel').click(function() {
			$("#rightImageRavel").attr('src', 'images/ravel/cargaMini_500_375.jpg');
			document.getElementById('rbRoloRavel').style.fontSize = '1.0em';
            document.getElementById('rbCRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRavel').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbRoloRavel').style.fontWeight = 'bold';
            document.getElementById('rbCRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRavel').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbRoloRavel').style.color = '#FFF';
            document.getElementById('rbCRoloRavel').style.color = '#FFF';
			document.getElementById('rbMiniRoloRavel').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRavel').style.color = '#FFF';
            
			document.getElementById("ul2li4tr1td1").innerText = '0268';
			document.getElementById("ul2li4tr1td2").innerText = 'Carga Ravel 60 mm';
			document.getElementById("ul2li4tr1td3").innerText = '16';
			document.getElementById("ul2li4tr1td4").innerText = '';
			
			document.getElementById("ul2li4tr2td1").innerText = '0269';
			document.getElementById("ul2li4tr2td2").innerText = 'Carga Ravel 100 mm';
			document.getElementById("ul2li4tr2td3").innerText = '16';
			document.getElementById("ul2li4tr2td4").innerText = '';
			
			document.getElementById("ul2li4tr3td1").innerText = '0270';
			document.getElementById("ul2li4tr3td2").innerText = 'Carga Ravel 150 mm';
			document.getElementById("ul2li4tr3td3").innerText = '16';
			document.getElementById("ul2li4tr3td4").innerText = '';
	
			document.getElementById("ul2li4tr4td1").innerText = '0271';
			document.getElementById("ul2li4tr4td2").innerText = 'Pack 2 Cargas Ravel 60 mm';
			document.getElementById("ul2li4tr4td3").innerText = '16';
			document.getElementById("ul2li4tr4td4").innerText = '';
			
			document.getElementById("ul2li4tr5td1").innerText = '0272';
			document.getElementById("ul2li4tr5td2").innerText = 'Pack 2 Cargas Ravel 100 mm';
			document.getElementById("ul2li4tr5td3").innerText = '16';
			document.getElementById("ul2li4tr5td4").innerText = '';
			
			document.getElementById("ul2li4tr6td1").innerText = '0273';
			document.getElementById("ul2li4tr6td2").innerText = 'Pack 2 Cargas Ravel 150 mm';
			document.getElementById("ul2li4tr6td3").innerText = '16';
			document.getElementById("ul2li4tr6td4").innerText = '';
		
            document.getElementById("ul2li4tr7td1").innerText = '0274';
			document.getElementById("ul2li4tr7td2").innerText = 'Blister 16 Cargas Ravel 60 mm';
			document.getElementById("ul2li4tr7td3").innerText = '16';
			document.getElementById("ul2li4tr7td4").innerText = '';
			
            document.getElementById("ul2li4tr8td1").innerText = '0275';
			document.getElementById("ul2li4tr8td2").innerText = 'Blister 10 Cargas Ravel 100 mm';
			document.getElementById("ul2li4tr8td3").innerText = '16';
			document.getElementById("ul2li4tr8td4").innerText = '';
            
            document.getElementById("ul2li4tr9td1").innerText = '0219';
			document.getElementById("ul2li4tr9td2").innerText = 'Carga Ravel 120 mm';
			document.getElementById("ul2li4tr9td3").innerText = '30';
			document.getElementById("ul2li4tr9td4").innerText = '';
            
            document.getElementById("ul2li4tr10td1").innerText = '0220';
			document.getElementById("ul2li4tr10td2").innerText = 'Carga Ravel 150 mm';
			document.getElementById("ul2li4tr10td3").innerText = '30';
			document.getElementById("ul2li4tr10td4").innerText = '';
            
            document.getElementById("ul2li4tr11td1").innerText = '0223';
			document.getElementById("ul2li4tr11td2").innerText = 'Pack 2 Cargas Ravel 120 mm';
			document.getElementById("ul2li4tr11td3").innerText = '30';
			document.getElementById("ul2li4tr11td4").innerText = '';
            
            document.getElementById("ul2li4tr12td1").innerText = '0224';
			document.getElementById("ul2li4tr12td2").innerText = 'Pack 2 Cargas Ravel 150 mm';
			document.getElementById("ul2li4tr12td3").innerText = '30';
			document.getElementById("ul2li4tr12td4").innerText = '';
            
            document.getElementById("ul2li4tr13td1").innerText = '0222';
			document.getElementById("ul2li4tr13td2").innerText = 'Blister 6 Cargas Ravel 120 mm';
			document.getElementById("ul2li4tr13td3").innerText = '30';
			document.getElementById("ul2li4tr13td4").innerText = '';
            
            document.getElementById("ul2li4tr14td1").innerText = '0221';
			document.getElementById("ul2li4tr14td2").innerText = 'Blister 10 Cargas Ravel 150 mm';
			document.getElementById("ul2li4tr14td3").innerText = '30';
			document.getElementById("ul2li4tr14td4").innerText = '';
		});
		
		
		
		//Rugo
		$('#openModelRugoImg').click(function() {
			document.getElementById("rbRoloRugo").click();
		});
		
		
		$('#rbRoloRugo').click(function() {
			$("#rightImageRugo").attr('src', 'images/rugo/rolo_500_375.jpg');
			document.getElementById('rbRoloRugo').style.fontSize = '1.0em';
            document.getElementById('rbCRoloRugo').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRugo').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRugo').style.fontSize = '0.8em';
			document.getElementById('rbRoloRugo').style.fontWeight = 'bold';
            document.getElementById('rbCRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRugo').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbRoloRugo').style.color = '#FFF';
            document.getElementById('rbCRoloRugo').style.color = '#FFF';
			document.getElementById('rbMiniRoloRugo').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRugo').style.color = '#FFF';
            
			document.getElementById("ul3li1tr1td1").innerText = '0075';
			document.getElementById("ul3li1tr1td2").innerText = 'Rolo Rugo 60 mm';
			document.getElementById("ul3li1tr1td3").innerText = '75';
			document.getElementById("ul3li1tr1td4").innerText = '';
			
		
			document.getElementById("ul3li1tr2td1").innerText = '0076';
			document.getElementById("ul3li1tr2td2").innerText = 'Rolo Rugo 180 mm';
			document.getElementById("ul3li1tr2td3").innerText = '75';
			document.getElementById("ul3li1tr2td4").innerText = '';
		
			document.getElementById("ul3li1tr3td1").innerText = '0077';
			document.getElementById("ul3li1tr3td2").innerText = 'Rolo Rugo 220 mm';
			document.getElementById("ul3li1tr3td3").innerText = '75';
			document.getElementById("ul3li1tr3td4").innerText = '';
		
			document.getElementById("ul3li1tr4td1").innerText = '0078';
			document.getElementById("ul3li1tr4td2").innerText = 'Rolo Rugo 250 mm';
			document.getElementById("ul3li1tr4td3").innerText = '75';
			document.getElementById("ul3li1tr4td4").innerText = '';
			
			document.getElementById("ul3li1tr5td1").innerText = '0079';
			document.getElementById("ul3li1tr5td2").innerText = 'Rolo Rugo Canto';
			document.getElementById("ul3li1tr5td3").innerText = '75';
			document.getElementById("ul3li1tr5td4").innerText = '';

			
		});
        
        $('#rbCRoloRugo').click(function() {
			$("#rightImageRugo").attr('src', 'images/rugo/carga_500_375.jpg');
			document.getElementById('rbRoloRugo').style.fontSize = '0.8em';
            document.getElementById('rbCRoloRugo').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloRugo').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRugo').style.fontSize = '0.8em';
			document.getElementById('rbRoloRugo').style.fontWeight = 'normal';
            document.getElementById('rbCRoloRugo').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloRugo').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbRoloRugo').style.color = '#FFF';
            document.getElementById('rbCRoloRugo').style.color = '#FFF';
			document.getElementById('rbMiniRoloRugo').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRugo').style.color = '#FFF';
            
			document.getElementById("ul3li1tr1td1").innerText = '0032';
			document.getElementById("ul3li1tr1td2").innerText = 'Carga Rugo 60 mm';
			document.getElementById("ul3li1tr1td3").innerText = '75';
			document.getElementById("ul3li1tr1td4").innerText = '';
			
			document.getElementById("ul3li1tr2td1").innerText = '0033';
			document.getElementById("ul3li1tr2td2").innerText = 'Carga Rugo 180 mm';
			document.getElementById("ul3li1tr2td3").innerText = '75';
			document.getElementById("ul3li1tr2td4").innerText = '';
			
			document.getElementById("ul3li1tr3td1").innerText = '0034';
			document.getElementById("ul3li1tr3td2").innerText = 'Carga Rugo 220 mm';
			document.getElementById("ul3li1tr3td3").innerText = '75';
			document.getElementById("ul3li1tr3td4").innerText = '';
		
			document.getElementById("ul3li1tr4td1").innerText = '0035';
			document.getElementById("ul3li1tr4td2").innerText = 'Carga Rugo 250 mm';
			document.getElementById("ul3li1tr4td3").innerText = '75';
			document.getElementById("ul3li1tr4td4").innerText = '';
		
			document.getElementById("ul3li1tr5td1").innerText = '0036';
			document.getElementById("ul3li1tr5td2").innerText = 'Carga Rugo Canto';
			document.getElementById("ul3li1tr5td3").innerText = '75';
			document.getElementById("ul3li1tr5td4").innerText = '';
			
		});

							   
		$('#rbMiniRoloRugo').click(function() {
			$("#rightImageRugo").attr('src', 'images/rugo/mini_500_375.jpg');
			document.getElementById('rbRoloRugo').style.fontSize = '0.8em';
            document.getElementById('rbCRoloRugo').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRugo').style.fontSize = '1.0em';
            document.getElementById('rbCMiniRoloRugo').style.fontSize = '0.8em';
			document.getElementById('rbRoloRugo').style.fontWeight = 'normal';
            document.getElementById('rbCRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRugo').style.fontWeight = 'bold';
            document.getElementById('rbCMiniRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbRoloRugo').style.color = '#FFF';
            document.getElementById('rbCRoloRugo').style.color = '#FFF';
			document.getElementById('rbMiniRoloRugo').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRugo').style.color = '#FFF';
            
			document.getElementById("ul3li1tr1td1").innerText = '0235';
			document.getElementById("ul3li1tr1td2").innerText = 'Mini Rugo 110 mm';
			document.getElementById("ul3li1tr1td3").innerText = '16';
			document.getElementById("ul3li1tr1td4").innerText = '';
			
			document.getElementById("ul3li1tr2td1").innerText = '';
			document.getElementById("ul3li1tr2td2").innerText = '';
			document.getElementById("ul3li1tr2td3").innerText = '';
			document.getElementById("ul3li1tr2td4").innerText = '';
		
			document.getElementById("ul3li1tr3td1").innerText = '';
			document.getElementById("ul3li1tr3td2").innerText = '';
			document.getElementById("ul3li1tr3td3").innerText = '';
			document.getElementById("ul3li1tr3td4").innerText = '';
	
			document.getElementById("ul3li1tr4td1").innerText = '';
			document.getElementById("ul3li1tr4td2").innerText = '';
			document.getElementById("ul3li1tr4td3").innerText = '';
			document.getElementById("ul3li1tr4td4").innerText = '';
	
            document.getElementById("ul3li1tr5td1").innerText = '';
			document.getElementById("ul3li1tr5td2").innerText = '';
			document.getElementById("ul3li1tr5td3").innerText = '';
			document.getElementById("ul3li1tr5td4").innerText = '';
		
			
		});
        
        $('#rbCMiniRoloRugo').click(function() {
			$("#rightImageRugo").attr('src', 'images/rugo/cargaMini_500_375.jpg');
			document.getElementById('rbRoloRugo').style.fontSize = '0.8em';
            document.getElementById('rbCRoloRugo').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRugo').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRugo').style.fontSize = '1.0em';
			document.getElementById('rbRoloRugo').style.fontWeight = 'normal';
            document.getElementById('rbCRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRugo').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRugo').style.fontWeight = 'bold';
			document.getElementById('rbRoloRugo').style.color = '#FFF';
            document.getElementById('rbCRoloRugo').style.color = '#FFF';
			document.getElementById('rbMiniRoloRugo').style.color = '#FFF';
            
			document.getElementById("ul3li1tr1td1").innerText = '0245';
			document.getElementById("ul3li1tr1td2").innerText = 'Carga Rugo 110 mm';
			document.getElementById("ul3li1tr1td3").innerText = '16';
			document.getElementById("ul3li1tr1td4").innerText = '';
		
			document.getElementById("ul3li1tr2td1").innerText = '0246';
			document.getElementById("ul3li1tr2td2").innerText = 'Pack 2 Cargas Rugo 110 mm';
			document.getElementById("ul3li1tr2td3").innerText = '16';
			document.getElementById("ul3li1tr2td4").innerText = '';
			
			document.getElementById("ul3li1tr3td1").innerText = '0236';
			document.getElementById("ul3li1tr3td2").innerText = 'Blister 10 Cargas Rugo 110 mm';
			document.getElementById("ul3li1tr3td3").innerText = '16'; 
			document.getElementById("ul3li1tr3td4").innerText = '';
	
			document.getElementById("ul3li1tr4td1").innerText = '';
			document.getElementById("ul3li1tr4td2").innerText = '';
			document.getElementById("ul3li1tr4td3").innerText = '';
			document.getElementById("ul3li1tr4td4").innerText = '';

            document.getElementById("ul3li1tr5td1").innerText = '';
			document.getElementById("ul3li1tr5td2").innerText = '';
			document.getElementById("ul3li1tr5td3").innerText = '';
			document.getElementById("ul3li1tr5td4").innerText = '';

			
		});
	
		
		
		//Super
		$('#openModelSuperImg').click(function() {
			document.getElementById("rbRoloSuper").click();
		});
		
		
		$('#rbRoloSuper').click(function() {
			$("#rightImageSuper").attr('src', 'images/super/rolo_500_375.jpg');
			document.getElementById('rbRoloSuper').style.fontSize = '1.0em';
            document.getElementById('rbCRoloSuper').style.fontSize = '0.8em';
			//document.getElementById('rbMiniRoloSuper').style.fontSize = '0.8em';
            //document.getElementById('rbCMiniRoloSuper').style.fontSize = '0.8em';
			document.getElementById('rbRoloSuper').style.fontWeight = 'bold';
            document.getElementById('rbCRoloSuper').style.fontWeight = 'normal';
			//document.getElementById('rbMiniRoloSuper').style.fontWeight = 'normal';
            //document.getElementById('rbCMiniRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbRoloSuper').style.color = '#FFF';
            document.getElementById('rbCRoloSuper').style.color = '#FFF';
			//document.getElementById('rbMiniRoloSuper').style.color = '#FFF';
            //document.getElementById('rbCMiniRoloSuper').style.color = '#FFF';
            
			document.getElementById("ul3li2tr1td1").innerText = '0049';
			document.getElementById("ul3li2tr1td2").innerText = 'Rolo Super 180 mm';
			document.getElementById("ul3li2tr1td3").innerText = '45';
			document.getElementById("ul3li2tr1td4").innerText = '60'
            
			document.getElementById("ul3li2tr2td1").innerText = '0050';
			document.getElementById("ul3li2tr2td2").innerText = 'Rolo Super 220 mm';
			document.getElementById("ul3li2tr2td3").innerText = '45';
		    document.getElementById("ul3li2tr2td4").innerText = '55';
            
			document.getElementById("ul3li2tr3td1").innerText = '0051';
			document.getElementById("ul3li2tr3td2").innerText = 'Rolo Super 250 mm';
			document.getElementById("ul3li2tr3td3").innerText = '45';
			document.getElementById("ul3li2tr3td4").innerText = '50';
			
		});
        
        
        $('#rbCRoloSuper').click(function() {
			$("#rightImageSuper").attr('src', 'images/super/carga_500_375.jpg');
			document.getElementById('rbRoloSuper').style.fontSize = '0.8em';
            document.getElementById('rbCRoloSuper').style.fontSize = '1.0em';
			//document.getElementById('rbMiniRoloSuper').style.fontSize = '0.8em';
            //document.getElementById('rbCMiniRoloSuper').style.fontSize = '0.8em';
			document.getElementById('rbRoloSuper').style.fontWeight = 'normal';
            document.getElementById('rbCRoloSuper').style.fontWeight = 'bold';
			//document.getElementById('rbMiniRoloSuper').style.fontWeight = 'normal';
            //document.getElementById('rbCMiniRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbRoloSuper').style.color = '#FFF';
            document.getElementById('rbCRoloSuper').style.color = '#FFF';
			//document.getElementById('rbMiniRoloSuper').style.color = '#FFF';
            //document.getElementById('rbCMiniRoloSuper').style.color = '#FFF';
            
			document.getElementById("ul3li2tr1td1").innerText = '0006';
			document.getElementById("ul3li2tr1td2").innerText = 'Carga Super 180 mm';
			document.getElementById("ul3li2tr1td3").innerText = '45';
			document.getElementById("ul3li2tr1td4").innerText = '';
			
			document.getElementById("ul3li2tr2td1").innerText = '0007';
			document.getElementById("ul3li2tr2td2").innerText = 'Carga Super 220 mm';
			document.getElementById("ul3li2tr2td3").innerText = '45';
			document.getElementById("ul3li2tr2td4").innerText = '';
			
			document.getElementById("ul3li2tr3td1").innerText = '0008';
			document.getElementById("ul3li2tr3td2").innerText = 'Carga Super 250 mm';
			document.getElementById("ul3li2tr3td3").innerText = '45';
			document.getElementById("ul3li2tr3td4").innerText = '';
		
			
		});

		/*					   
		$('#rbMiniRoloSuper').click(function() {
			$("#rightImageSuper").attr('src', 'images/18/Super.JPG');
			document.getElementById('rbRoloSuper').style.fontSize = '1.0em';
            document.getElementById('rbCRoloSuper').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloSuper').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloSuper').style.fontSize = '0.8em';
			document.getElementById('rbRoloSuper').style.fontWeight = 'bold';
            document.getElementById('rbCRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloSuper').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbRoloSuper').style.color = '#FFF';
            document.getElementById('rbCRoloSuper').style.color = '#FFF';
			document.getElementById('rbMiniRoloSuper').style.color = '#FFF';
            document.getElementById('rbCMiniRoloSuper').style.color = '#FFF';
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
		
        
        $('#rbCMiniRoloSuper').click(function() {
			$("#rightImageSuper").attr('src', 'images/18/Super.JPG');
			document.getElementById('rbRoloSuper').style.fontSize = '1.0em';
            document.getElementById('rbCRoloSuper').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloSuper').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloSuper').style.fontSize = '0.8em';
			document.getElementById('rbRoloSuper').style.fontWeight = 'bold';
            document.getElementById('rbCRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloSuper').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbRoloSuper').style.color = '#FFF';
            document.getElementById('rbCRoloSuper').style.color = '#FFF';
			document.getElementById('rbMiniRoloSuper').style.color = '#FFF';
            document.getElementById('rbCMiniRoloSuper').style.color = '#FFF';
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
			
		});*/
        
		
		//Merino
		$('#openModelMerinoImg').click(function() {
			document.getElementById("rbRoloMerino").click();
		});
		
		
		$('#rbRoloMerino').click(function() {
			$("#rightImageMerino").attr('src', 'images/merino/rolo_500_375.jpg');
			document.getElementById('rbRoloMerino').style.fontSize = '1.0em';
            document.getElementById('rbCRoloMerino').style.fontSize = '0.8em';
			//document.getElementById('rbMiniRoloMerino').style.fontSize = '0.8em';
            //document.getElementById('rbCMiniRoloMerino').style.fontSize = '0.8em';
			document.getElementById('rbRoloMerino').style.fontWeight = 'bold';
            document.getElementById('rbCRoloMerino').style.fontWeight = 'normal';
			//document.getElementById('rbMiniRoloMerino').style.fontWeight = 'normal';
            //document.getElementById('rbCMiniRoloMerino').style.fontWeight = 'normal';
			document.getElementById('rbRoloMerino').style.color = '#FFF';
            document.getElementById('rbCRoloMerino').style.color = '#FFF';
			//document.getElementById('rbMiniRoloMerino').style.color = '#FFF';
            //document.getElementById('rbCMiniRoloMerino').style.color = '#FFF';
            
			document.getElementById("ul3li3tr1td1").innerText = '0069';
			document.getElementById("ul3li3tr1td2").innerText = 'Rolo Merino 180 mm';
			document.getElementById("ul3li3tr1td3").innerText = '45';
			document.getElementById("ul3li3tr1td4").innerText = '60';
            
			document.getElementById("ul3li3tr2td1").innerText = '0070';
			document.getElementById("ul3li3tr2td2").innerText = 'Rolo Merino 220 mm';
			document.getElementById("ul3li3tr2td3").innerText = '45';
			document.getElementById("ul3li3tr2td4").innerText = '55';
            
			document.getElementById("ul3li3tr3td1").innerText = '0071';
			document.getElementById("ul3li3tr3td2").innerText = 'Rolo Merino 250 mm';
			document.getElementById("ul3li3tr3td3").innerText = '45';
			document.getElementById("ul3li3tr3td4").innerText = '50';
            
			document.getElementById("ul3li3tr4td1").innerText = '0155';
			document.getElementById("ul3li3tr4td2").innerText = 'Rolo Merino 180 mm';
			document.getElementById("ul3li3tr4td3").innerText = '50';
			document.getElementById("ul3li3tr4td4").innerText = '55';
            
			document.getElementById("ul3li3tr5td1").innerText = '0156';
			document.getElementById("ul3li3tr5td2").innerText = 'Rolo Merino 220 mm';
			document.getElementById("ul3li3tr5td3").innerText = '50';
			document.getElementById("ul3li3tr5td4").innerText = '50';
            
			document.getElementById("ul3li3tr6td1").innerText = '0157';
			document.getElementById("ul3li3tr6td2").innerText = 'Rolo Merino 250 mm';
			document.getElementById("ul3li3tr6td3").innerText = '50';
			document.getElementById("ul3li3tr6td4").innerText = '45';
			
		});

			
        $('#rbCRoloMerino').click(function() {
			$("#rightImageMerino").attr('src', 'images/merino/carga_500_375.jpg');
			document.getElementById('rbRoloMerino').style.fontSize = '0.8em';
            document.getElementById('rbCRoloMerino').style.fontSize = '1.0em';
			//document.getElementById('rbMiniRoloMerino').style.fontSize = '0.8em';
            //document.getElementById('rbCMiniRoloMerino').style.fontSize = '0.8em';
			document.getElementById('rbRoloMerino').style.fontWeight = 'normal';
            document.getElementById('rbCRoloMerino').style.fontWeight = 'bold';
			//document.getElementById('rbMiniRoloMerino').style.fontWeight = 'normal';
            //document.getElementById('rbCMiniRoloMerino').style.fontWeight = 'normal';
			document.getElementById('rbRoloMerino').style.color = '#FFF';
            document.getElementById('rbCRoloMerino').style.color = '#FFF';
			//document.getElementById('rbMiniRoloMerino').style.color = '#FFF';
            //document.getElementById('rbCMiniRoloMerino').style.color = '#FFF';
            
			document.getElementById("ul3li3tr1td1").innerText = '0026';
			document.getElementById("ul3li3tr1td2").innerText = 'Carga Merino 180 mm';
			document.getElementById("ul3li3tr1td3").innerText = '45';
			document.getElementById("ul3li3tr1td4").innerText = '';
            
			document.getElementById("ul3li3tr2td1").innerText = '0027';
			document.getElementById("ul3li3tr2td2").innerText = 'Carga Merino 220 mm';
			document.getElementById("ul3li3tr2td3").innerText = '45';
			document.getElementById("ul3li3tr2td4").innerText = '';
            
			document.getElementById("ul3li3tr3td1").innerText = '0028';
			document.getElementById("ul3li3tr3td2").innerText = 'Carga Merino 250 mm';
			document.getElementById("ul3li3tr3td3").innerText = '45';
			document.getElementById("ul3li3tr3td4").innerText = '';
            
			document.getElementById("ul3li3tr4td1").innerText = '0137';
			document.getElementById("ul3li3tr4td2").innerText = 'Carga Merino 180 mm';
			document.getElementById("ul3li3tr4td3").innerText = '50';
			document.getElementById("ul3li3tr4td4").innerText = '';
            
			document.getElementById("ul3li3tr5td1").innerText = '0138';
			document.getElementById("ul3li3tr5td2").innerText = 'Carga Merino 220 mm';
			document.getElementById("ul3li3tr5td3").innerText = '50';
			document.getElementById("ul3li3tr5td4").innerText = '';
            
			document.getElementById("ul3li3tr6td1").innerText = '0139';
			document.getElementById("ul3li3tr6td2").innerText = 'Carga Merino 250 mm';
			document.getElementById("ul3li3tr6td3").innerText = '50';
			document.getElementById("ul3li3tr6td4").innerText = '';
			
		});
        
		/*$('#rbMiniRoloMerino').click(function() {
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
			
		});*/
		
		
		
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