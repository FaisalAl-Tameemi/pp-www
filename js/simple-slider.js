// $(document).ready(function(){
// 	var curSlide = 1;
	
// 	$('#next').click(function(e) {
// 		e.preventDefault();
// 		alert(curSlide);
// 		var from = curSlide;

// 		if($('#testimonials-slide-'+(curSlide+1)).doesExist()){
// 			// check if the next slide exists
// 			curSlide++;
// 		}else{
// 			// reset slider
// 			curSlide = 1;
// 		}

// 		getSlide(from);
// 	}
	
// 	$("previous").click(function() {
// 		e.preventDefault();
// 		alert(curSlide);
// 		var from = curSlide;

// 		if($('#testimonials-slide-'+(curSlide-1)).doesExist()){
// 			// check if the previous slide exists
// 			curSlide--;
// 		}else{
// 			// go to last slide
// 			curSlide = 3;
// 		}

// 		getSlide(from);
// 	}

// 	function getSlide(from){
// 		$('#testimonials-slide-'+ from ).hide();
// 		$('#testimonials-slide-'+ curSlide).show();
// 	}
// });

$('#next').click(function(e) {

	alert('something');

	}