(function($, undefined){


//trianglify function options
	var pattern = Trianglify({
	  	height: 1000,
	  	width: 1000,
  		cell_size: 50,
  		stroke_width: 'random',
		x_colors: ['#444', '#ccc', '#444'],
		y_colors: 'match_x'
	}),
		canvasWrapper = $('.canvas-wrapper'),
		canvas = $('canvas'),
		canvasInner = $('.canvas-inner'),
		height = $(document).height(),
		width = $(document).width();

	canvasInner.append(pattern.canvas());
	canvasWrapper.height(height).width(width);
	$(window).resize(function () {
		height = $(document).height(),
		width = $(document).width();
		canvasWrapper.height(height).width(width);
	});

//	appearance of body

	var timeout = 300;
	setTimeout(function() {
		$('body, html').animate({'opacity': 1}, timeout);
	}, timeout);

	canvas.css('transform', 'translate(-50%,-50%)');

//	paralax effect for background

	$(document).mousemove(function (e) {
		var x = e.pageX,
			y = e.pageY,
			ratioX = 0.1,
			ratioY = 0.05,
			dX = ((x + 1) / width) * 100 * ratioX,
			dY = ((y + 1) / height) * 100 * ratioY;
			canvasInner.css({
				'transform' : 'translate(-'+ (45 + Number(dX)) +'%,-'+ (48 + Number(dY)) +'%)'
			});
	});


	$('h1').click (function () {
		$('section.first').fadeOut(300);
		$('header').fadeOut(0);
		setTimeout(function() {
			$('nav a[href="#about"]').addClass('is-selected');
			$('.about').addClass('is-selected');
			$('header').fadeIn(200);
		}, 500);
		$('body').addClass('active');
		return false;
	});

	$('nav a').click(function () {


		//add class to section tag for appearance of needs block
		//
		var that = this;
		$('nav a').removeClass('is-selected');
		if (!$('body').hasClass('active')) {
			$('section.first').fadeOut(300);
			$('header').fadeOut(0);
			setTimeout(function () {
				$(that).addClass('is-selected');
				var linkName = $(that).text();
				$('section').removeClass('is-selected');
				$('.' + linkName).addClass('is-selected');
				$('header').fadeIn(200);
			}, 500);
			$('body').addClass('active');
		} else {
			$(that).addClass('is-selected');
			setTimeout(function() {
				var linkName = $(that).text();
				$('section').removeClass('is-selected').fadeOut(0);
				$('.' + linkName).addClass('is-selected').fadeOut(0).fadeIn(200);
			}, 200);
		}

		return false;
	});
	
	// $('.input-wrapper input, .input-wrapper textarea').keyup(function () {
	// 	if ($(this).val().length > 0) {
	// 		$(this).addClass('focus');
	// 		$(this).closest('.input-wrapper').addClass('focus');
	// 	} else {
	// 		$(this).removeClass('focus');
	// 		$(this).closest('.input-wrapper').removeClass('focus');
	// 	}
	//
	// 	if ( $('input[type="text"]').hasClass('focus') && $('input[type="email"]').hasClass('focus') && $('textarea').hasClass('focus')) {
	// 		$('input[type="submit"]').addClass('focus').removeAttr('disabled');
	// 	} else {
	// 		$('input[type="submit"]').removeClass('focus').attr('disabled');
	// 	}
	// })
	// .focusin(function () {
	// 	$(this).closest('.input-wrapper').addClass('focus');
	// });

})(jQuery);
