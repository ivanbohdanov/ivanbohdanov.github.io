!function(e){var s=Trianglify({height:1e3,width:1e3,cell_size:50,stroke_width:"random",x_colors:["#444","#ccc","#444"],y_colors:"match_x"}),t=e(".canvas-wrapper"),a=e("canvas"),i=e(".canvas-inner"),d=e(document).height(),n=e(document).width();i.append(s.canvas()),t.height(d).width(n),e(window).resize(function(){d=e(document).height(),n=e(document).width(),t.height(d).width(n)});var c=300;setTimeout(function(){e("body, html").animate({opacity:1},c)},c),a.css("transform","translate(-50%,-50%)"),e(document).mousemove(function(e){var s=e.pageX,t=e.pageY,a=.1,c=.05,o=(s+1)/n*100*a,u=(t+1)/d*100*c;i.css({transform:"translate(-"+(45+Number(o))+"%,-"+(48+Number(u))+"%)"})}),e("h1").click(function(){return e("section.first").fadeOut(300),e("header").fadeOut(0),setTimeout(function(){e('nav a[href="#about"]').addClass("is-selected"),e(".about").addClass("is-selected"),e("header").fadeIn(200)},500),e("body").addClass("active"),!1}),e("nav a").click(function(){var s=this;return e("nav a").removeClass("is-selected"),e("body").hasClass("active")?(e(s).addClass("is-selected"),setTimeout(function(){var t=e(s).text();e("section").removeClass("is-selected").fadeOut(0),e("."+t).addClass("is-selected").fadeOut(0).fadeIn(200)},200)):(e("section.first").fadeOut(300),e("header").fadeOut(0),setTimeout(function(){e(s).addClass("is-selected");var t=e(s).text();e("section").removeClass("is-selected"),e("."+t).addClass("is-selected"),e("header").fadeIn(200)},500),e("body").addClass("active")),!1}),e(".input-wrapper input, .input-wrapper textarea").keyup(function(){e(this).val().length>0?(e(this).addClass("focus"),e(this).closest(".input-wrapper").addClass("focus")):(e(this).removeClass("focus"),e(this).closest(".input-wrapper").removeClass("focus")),e('input[type="text"]').hasClass("focus")&&e('input[type="email"]').hasClass("focus")&&e("textarea").hasClass("focus")?e('input[type="submit"]').addClass("focus").removeAttr("disabled"):e('input[type="submit"]').removeClass("focus").attr("disabled")}).focusin(function(){e(this).closest(".input-wrapper").addClass("focus")})}(jQuery);