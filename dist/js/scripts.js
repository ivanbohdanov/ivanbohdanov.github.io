!function(e){var s=Trianglify({height:1e3,width:1e3,cell_size:50}),a=(e("canvas"),e(".canvas-wrapper")),t=e(document).height(),i=e(document).width();e(".canvas-wrapper").append(s.canvas()),a.height(t).width(i),e("h1").click(function(){return e("section.first").fadeOut(300),e("header").fadeOut(0),setTimeout(function(){e('nav a[href="#about"]').addClass("is-selected"),e(".about").addClass("is-selected"),e("header").fadeIn(200)},500),e("body").addClass("active"),!1}),e("nav a").click(function(){var s=this;return e("nav a").removeClass("is-selected"),e("body").hasClass("active")?(e(s).addClass("is-selected"),setTimeout(function(){var a=e(s).text();e("section").removeClass("is-selected").fadeOut(0),e("."+a).addClass("is-selected").fadeOut(0).fadeIn(200)},200)):(e("section.first").fadeOut(300),e("header").fadeOut(0),setTimeout(function(){e(s).addClass("is-selected");var a=e(s).text();e("section").removeClass("is-selected"),e("."+a).addClass("is-selected"),e("header").fadeIn(200)},500),e("body").addClass("active")),!1}),e(".input-wrapper input, .input-wrapper textarea").keyup(function(){e(this).val().length>0?(e(this).addClass("focus"),e(this).closest(".input-wrapper").addClass("focus")):(e(this).removeClass("focus"),e(this).closest(".input-wrapper").removeClass("focus")),e('input[type="text"]').hasClass("focus")&&e('input[type="email"]').hasClass("focus")&&e("textarea").hasClass("focus")?e('input[type="submit"]').addClass("focus").removeAttr("disabled"):e('input[type="submit"]').removeClass("focus").attr("disabled")}).focusin(function(){e(this).closest(".input-wrapper").addClass("focus")})}(jQuery);