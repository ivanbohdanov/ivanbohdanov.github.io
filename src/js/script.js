(function($, undefined){
	
	
	$('nav a').click(function () {
		
		
		//add class to section tag for appearance of needs block
		//
		var that = this;
		if (!$('body').hasClass('active')) {
			$('section.first').fadeOut(300);
			$('header').fadeOut(0);
			setTimeout(function () {
				var linkName = $(that).text();
				$('section').removeClass('is-selected');
				$('.' + linkName).addClass('is-selected');
				$('header').fadeIn(200);
			}, 500);
			$('body').addClass('active');
		} else {
			setTimeout(function() {
				var linkName = $(that).text();
				$('section').removeClass('is-selected').fadeOut(0);
				$('.' + linkName).addClass('is-selected').fadeOut(0).fadeIn(200);
			}, 200);
		}
		
		return false;
	});
	
	$('.input-wrapper input, .input-wrapper textarea').focusout(function () {
		$(this).removeClass('focus');
		if ($(this).val().length > 0) {
			$(this).addClass('focus');
		}
		if ( $('input[type="text"]').hasClass('focus') && $('input[type="email"]').hasClass('focus') && $('textarea').hasClass('focus')) {
			$('input[type="submit"]').addClass('focus').removeAttr('disabled');
		}
	});
	
})(jQuery);