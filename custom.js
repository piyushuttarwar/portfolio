// JavaScript Document

$(document).ready(function(){ 
	
	fullSize(); //fullSize() Function initialize
	applyOrientation(); //applyOrientation Function initialize
	
	$(window).scroll(function(){
	   if(scroll >= 100){
		  $(body).addClass("active-site");    
		}	
	})
	
	// Initializing fullpage.js
	initialize(true);

	function initialize(hasScrollBar){
		$('#myContainer').fullpage({
			anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage'],
			menu: '#menu',
			slidesNavigation: true,
			parallax: true,
			loopTop: true,
			loopBottom: true,
			parallaxKey: 'YWx2YXJvdHJpZ28uY29tXzlNZGNHRnlZV3hzWVhnPTFyRQ==',
			parallaxOptions: {
				type: 'reveal',
				percentage: 62,
				property: 'translate'
			},
			scrollingSpeed: 1000,
			autoScrolling: true,
			scrollBar: hasScrollBar,
			fitToSection:false,
		});
	}
	
	
	/*--------------owlCarousel---------------*/
	$('#demo').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		dots:false,
		autoplay:true,
		items:1,  
		navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		], 
	})
	$( "#right" ).click(function() {
		$( ".block" ).animate({ "left": "+=50px" }, "slow" );
	});
	
	$( "#left" ).click(function(){
		$( ".block" ).animate({ "left": "-=50px" }, "slow" );
	});
	/*-------------Toggle-Class------------*/
	$(".menu-bar").click(function(){
		 $("body").toggleClass("open-menu");    
	});
	/*-----------static-loader------------*/
	 function handlePreloader() { 
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}	
	handlePreloader();  
	
	/*-----------Push Columns in Responsive------*/
	$(window).resize(function(){
		if ($(window).width() <= 767){	
			$(".col-pull-cust").insertBefore($(".col-push-cust"));
			$(".col-pull-cust1").insertBefore($(".col-push-cust1"));	
		}	
    });  
	/*-------------Toggle-Class------------*/
	$(".demo").click(function(){
		 $("body").toggleClass("active");    
	});
	
	/*------------add active class---------*/
	$(".demo").click(function(){
	   $(".demo").removeClass("active");
	   $(this).addClass("active");
	});
	
	/*--------------Remove Class on scroll---------*/
	$(window).scroll(function(){   
		 if(scroll>=0){  
			$("body").removeClass("active");      
		 }    
	}); 
	
	/*----------------remove class click anywhere on body------------*/
	$(document).mouseup(function(e)
	{
		var container = $(".demo"); // class we have to remove from
		if (!container.is(e.target) // if the target of the click isn't the container...
				&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{
			  $(".demo").removeClass("active"); 
		}
	}); 
	
	/*------------ScrollerIt-----------*/
	$.scrollIt({
			upKey: 40,             // key code to navigate to the next section
			downKey: 40,           // key code to navigate to the previous section
			easing: 'ease-in-out',      // the easing function for animation
			scrollTime: 1500,       // how long (in ms) the animation takes
			activeClass: 'active', // class given to the active nav element
			onPageChange: null,    // function(pageIndex) that is called when page is changed
			topOffset:0           // offste (in px) for fixed top navigation
	});
	
	$(window).load(function(){
		if (window.innerWidth > 1024 ) {
			var s = skrollr.init(); 
		}
	});
	
	/*------------wow js init----------*/
	if ($('html').hasClass('desktop')) {
			new WOW().init();
	} 
	
	/*------------Tooltip-------------*/
	$(function () { 
	  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
	});
	
	$(function(){
		$('a[title]').tooltip();
	});
	
	/*--------------fullHeight---------*/
	function fullSize() {
		var heights = window.innerHeight;
		jQuery(".fullHt").css('min-height', (heights + 0) + "px");
		if(window.innerWidth < 1024){
			jQuery(".fullHt").css("min-height", "100%");
			} 
	} 
	
	/*-----------sticky header---------*/
	var banner_Ht = window.innerHeight - $('header').innerHeight();	
		$(window).scroll(function(){
		  var sticky = $('body'),
			  scroll = $(window).scrollTop();
		
		  if (scroll >= 100) sticky.addClass('sticky-header');
		  else sticky.removeClass('sticky-header');
	});
	
	/*-------------sticky footer-----------*/
	$(window).bind("load", function() {
		var footer = $(".footer-container");
		var pos = footer.position();
		var height = $(window).height();
		height = height - pos.top;
		height = height - footer.height();
		if (height > 0) {
		footer.css({'margin-top' : height+'px'});
	   }
	});
	
	/*-----------Custom Accordian---------*/
	$('.demo a').click(function(){ 
		$(this).parent().toggleClass('active').siblings().removeClass('active');
		$(this).parent().siblings().find("ul").slideUp();
		if($(this).parent().hasClass('active')){
			$(this).parent().find("ul").slideDown();
		}else{
			$(this).parent().find("ul").slideUp();
		} 
	}); 
	 
	/*-----------apply Orientation----------*/
	function applyOrientation() {
		if (window.innerHeight > window.innerWidth) {
			$("body").addClass("potrait");
			$("body").removeClass("landscape");
		} else {  
			$("body").addClass("landscape");
			$("body").removeClass("potrait");
		}
	}
	
	/*-----------single item owl-carousel---------*/
	function moved() {
		alert('in');
		var owl = $(".owl-carousel").data('owlCarousel');
		if (owl.currentItem + 1 === owl.itemsAmount) {
			alert('THE END');
		}
	}
	
	/*-------------Custom Scrollbar-----------*/ 
	(function($) {
		$(window).on("load", function() {
					$(".content").mCustomScrollbar();
		});
	 })(jQuery); 
	 
	 /*-------------funny-text-js-----------*/
	 $(document).ready(function() {
			$('.text1').funnyText({
				speed: 700,
				activeColor: '#fff',
				color: '#fff',
				fontSize: '94px'
			});
			
			
		});
	 
});
