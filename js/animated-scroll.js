$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': ($target.offset().top - 100)
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	$('#back-to-top').on('click',function (e) {
	    e.preventDefault();

	    $('html, body').stop().animate({
	        'scrollTop': 0
	    }, 800, 'swing');
	});

	var curSlide = 1;
	
	$('#next').on('click',function (e) {
		e.preventDefault();
		var from = curSlide;

		if($('#testimonials-slide-'+(curSlide+1)).doesExist()){
			// check if the next slide exists
			curSlide++;
		}else{
			// reset slider
			curSlide = 1;
		}

		getSlide(from);
	});
	
	$('#previous').on('click',function (e) {
		e.preventDefault();
		var from = curSlide;

		if($('#testimonials-slide-'+(curSlide-1)).doesExist()){
			// check if the previous slide exists
			curSlide--;
		}else{
			// go to last slide
			curSlide = 3;
		}

		getSlide(from);
	});

	function getSlide(from){
		$('#testimonials-slide-'+ from ).addClass('hideThis').removeClass('animated fadeInLeft').delay(200).queue(function(next){
		    $(this).addClass('hideThis')
		    next();
		});
		$('#testimonials-slide-'+ curSlide).removeClass('hideThis').addClass('animated fadeInLeft');
	}

	$.fn.doesExist = function(){
		return jQuery(this).length > 0;
	}

	$('.project-icon').on('click',function (e) {
		e.preventDefault();
		var id = $(this).attr( "id" );


		$('.project-details').removeClass('fadeInUp').addClass('fadeOutDown').queue(function(next){
		    $(this).addClass('hideThis')

		    $('#' + id + '-detail').removeClass('hideThis fadeOutDown').addClass('animated fadeInUp');
		    $('#' + id + '-stats').delay(1000).addClass('animated fadeInUp');
		    $('#' + id + '-text').addClass('animated fadeInDown');
		    $('#' + id + '-platforms').addClass('animated fadeInLeft');
		    next();

		});
	});

	$('.close-project-details').on('click',function (e) {
		e.preventDefault();
		
		$('.project-details').removeClass('fadeInUp').addClass('fadeOutDown').delay(600).queue(function(next){
		    $(this).addClass('hideThis');
		    next();
		});
	});

	$('#picto-plus').on('click',function (e) {
		e.preventDefault();
		
		$('#intro-section').addClass('animated fadeOutUp').delay(900).queue(function(next){
			$(this).addClass('hideThis').removeClass('animated fadeInUp');
		    $('#hand-section').addClass('animated fadeInUp').removeClass("hideThis");
		    next();
		});
	});

	// set interval
	var tid = setInterval(mycode, 4000);
	function mycode() {
	  	// do some stuff...
	  	$('#picto-plus').addClass('rotateIn').removeClass('rotateOut').delay(3000).queue(function(next){
		    $(this).removeClass('rotateIn').addClass('rotateOut');
		    next();
		});
	}

});