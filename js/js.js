$(document).ready(function() {
	
	var win_height = $(window).height();
	$("#intro").css("height", win_height);
	
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});
	
	if ($(".paralax").height()*-0.5 <= win_height ) {
		$('.paralax').parallax({
			speed :	-0.5
		});
	}
	
	$('.slide-container').each(function() {
	//Destaque plugin for parallax sliders
		$(this).destaque({
				slideMovement: 100,
				slideSpeed: 1000,
				elementSpeed: 1250,
				easingType: "easeInOutExpo",
				itemSelector: ".item",
				itemForegroundElementSelector: ".foreground .element",
				controlsSelector: ".slide-pagination a"
		});
  	});
	
	$('.cycles').each(function() {
		$(this).cycle({
			fx: 'fade',
			timeout: 4500,
			next: ".next",
			prev: ".prev",
			containerResize: 0,
			slideResize: 0
		});
	});
	
	$("#photographically-fit .cycles-window").hover(
		function() {
			$(".pager").fadeIn().css("dsplay, table");
		},
		function() {
			$(".pager").fadeOut().css("display, none");
		}
	);

	
	$('a.playbtn').colorbox({
		iframe:true,
		innerWidth: 853,
		innerHeight: 480,
	});

});