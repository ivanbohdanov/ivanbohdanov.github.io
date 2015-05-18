(function($, undefined){
	
	
	$('nav a').click(function () {
		//add class to section tag for appearance of needs block
		//
		var linkName = $(this).text();
		$('section').removeClass('is-selected');
		$('.' + linkName).addClass('is-selected');
		return false;
	});
	
	
})(jQuery);