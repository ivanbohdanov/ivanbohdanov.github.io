(function($, undefined){
	
	
	$('nav a').click(function () {
		//add class to section tag for appearance of needs block
		//
		var linkName = $(this).text();
		$('section').removeClass('is-selected');
		$('.' + linkName).addClass('is-selected');
		return false;
	});
	
	$('.input-wrapper input, .input-wrapper textarea').focusout(function () {
		$(this).removeClass('focus');
		if($(this).val().length > 0) {
			$(this).addClass('focus');
		}
	});
	
})(jQuery);