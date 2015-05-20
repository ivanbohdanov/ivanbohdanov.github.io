(function($, undefined){
	
	
	$('nav a').click(function () {
		
		
		//add class to section tag for appearance of needs block
		//
		var that = this;
		if (!$('body').hasClass('active')) {
			$('section.first').hide(500);
			setTimeout(function () {
				var linkName = $(that).text();
				$('section').removeClass('is-selected');
				$('.' + linkName).addClass('is-selected');
			}, 500);
			$('body').addClass('active');
		} else {
			var linkName = $(that).text();
			$('section').removeClass('is-selected');
			$('.' + linkName).addClass('is-selected');
		}
		
		return false;
	});
	
	$('.input-wrapper input, .input-wrapper textarea').focusout(function () {
		$(this).removeClass('focus');
		if($(this).val().length > 0) {
			$(this).addClass('focus');
		}
	});
	
})(jQuery);