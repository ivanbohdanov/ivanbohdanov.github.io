// jQuery(function($) {
//  $(".parallax-bg-1").mousewheel(function(event, delta) {
//  var o = "empty";
//  if (event.deltaY > 0 && !$("div.ls-active").hasClass("first-slide"))
//    $(".ls-nav-prev").click();
//   else if (event.deltaY < 0 && !$("div.ls-active").hasClass("last-slide"))
//   $(".ls-nav-next").click();
//  });
// });

$(document).ready(function()  {
  $(window).mousemove(function (e) {
    var wrapperW = $('.parallax-bg-1').width()/2;
    var moveX = (wrapperW - 960 + (e.pageX * -1 / 15));
    var moveY = (e.pageY * -1 / 50);
      $(".parallax-bg-1").css("background-position", moveX + "px " + moveY+ "px");
  });
});
$(document).ready(function()  {
  $(window).mousemove(function (e) {
    var moveX = (e.pageX * -1 / 25);
    var moveY = (e.pageY * -1 / 25);
      $(".parallax-bg-2").css("background-position",moveX + "px " + moveY + "px");
  });
});

jQuery(function($){
  $('.main-widts').css({'left':($(window).width()/2-$('.main-widts').width()/2)+'px'});
  $(window).resize(function(){
  $('.main-widts').css({'left':($(window).width()/2-$('.main-widts').width()/2)+'px'});
    })          
});


jQuery(function($){
  $('#layerslider').css({'left':($(window).width()/2-$('#layerslider').width()/2)+'px'});
  $('#layerslider').css({'top':($('.header').height() + ($(window).height()-$('.header').height())/2-$('#layerslider').height()/2)+'px'});
  $(window).resize(function(){
  $('#layerslider').css({'left':($(window).width()/2-$('#layerslider').width()/2)+'px'});
  $('#layerslider').css({'top':($('.header').height() + ($(window).height()-$('.header').height())/2-$('#layerslider').height()/2)+'px'});
    })          
});

jQuery(function($)
 {
  var show = $('#show'); 
  $(document).ready(function()  {    
    show.addClass('hidden ');
    setTimeout(function ()  {  
      show.removeClass('hidden '); 
      $("#show").animate({ opacity: "1"}, 800);   
    }, 1000);  
  });    
});




jQuery(function(cash)
 {
$(document).ready(function() {
$("#cancel").click(function() {
$(this).parent().hide();
});
    $("form").submit(function() {
       
     var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields  
  $("#contact_form input[required=true], #contact_form textarea[required=true]").each(function(){
   $(this).css('border-color',''); 
   if(!$.trim($(this).val())){ //if this field is empty 
    $(this).css('border-color','red'); //change border color to red   
    proceed = false; //set do not proceed flag
   }
   //check invalid email
   var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
   if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
    $(this).css('border-color','red'); //change border color to red   
    proceed = false; //set do not proceed flag    
   } 
  });
       
        if(proceed) //everything looks good! proceed...
        {
   //get input field values data to be sent to server
            post_data = {
    'user_tel'  : $('input[name=tel]').val(),
    'user_email' : $('input[name=email]').val()
    //'country_code' : $('input[name=phone1]').val(), 
    //'phone_number' : $('input[name=phone2]').val(), 
    //'subject'  : $('select[name=subject]').val(), 
    //'msg'   : $('textarea[name=message]').val()
   };
            
            //Ajax post data to server
            $.post('contact_me.php', post_data, function(response){  
    if(response.type == 'error'){ //load json data from server and output message     
     output = '<div class="error">'+response.text+'</div>';
    }else{
        output = '<div class="success">'+response.text+'</div>';
     //reset values in all input fields
     $("#contact_form  input[required=true], #contact_form textarea[required=true]").val(''); 
     $("#contact_form #contact_body").slideUp(); //hide form after success
    }
    $("#contact_form #contact_results").hide().html(output).slideDown();
            }, 'json');
        }
        return false;
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() { 
        $(this).css('border-color',''); 
        $("#result").slideUp();
    });
});
});
$(document).ready(function()  {
  $(".onclick").click(function () {
      $("#contact_form").css({'display':'block'});
        var name = $(this).attr('about');
        $("#submit_form").attr('onsubmit',"yaCounter27881194.reachGoal('"+ name  +"'); _gaq.push(['_trackEvent', '"+ name  +"', 'Send']); return true;");
  });
});


jQuery(function($){
    $(document).ready(function() {$(".hoverbox_logo").hide(); });
    $(".logo-link").ready(function () {
        $(".logo-link").on('mouseenter', function () {
            $(".hoverbox_logo").show();
            //  $(".hoverbox").animate({ display:'block'}, 350);
        }).on('mouseleave', function () {
            $(".hoverbox_logo").hide();
            //    $(".hoverbox").animate({ display:'none'}, 350);
        });
    });
});



jQuery(function($){
$(document).ready(function() {$(".hoverbox").hide(); });
 $(".hoverstart").ready(function () {
    $(".hoverstart").on('mouseenter', function () {
 $(this).children().show();
      //  $(".hoverbox").animate({ display:'block'}, 350);
}).on('mouseleave', function () {
    $(this).children().hide();
    //    $(".hoverbox").animate({ display:'none'}, 350);
});
});
  });

jQuery(function($){
    setInterval(function ()  { 
    $(".ls-active").ready(function () {
        var show = $('.ls-active'); 
        show.addClass('opacity');
    });
    }, 10);
});



jQuery(function($) {

  //  $.mask.definitions['~']='[+-]';
  //  $('#phone').mask('(999) 999-9999');

    });
jQuery(document).ready(function($){
 
/* prepend menu icon */
$('#nav-wrap').prepend('<div id="menu-icon"><span class="menu-bg">Menu</span></div>');
 
/* toggle nav */
$("#menu-icon").on("click", function(){
$("#nav").slideToggle();
$(this).toggleClass("active");
});

if ($(".main-menu").width() < 680) {
  $("#nav li").on("click", function(){
  $("#nav").slideToggle();
  });
}
});


jQuery(document).ready(function($){

if ($(document).width() > 500) {
  $('.li-hack').remove();
}


  $('.article-thumbnails-wrapper, .portfolio-thumbnails-wrapper').bxSlider({
    infiniteLoop: false,
    mode: 'vertical',
    pager: false
  });
  $('.article-controls .arrow-up').on('click' , function () {
    $('.article-thumbnails .bx-prev').click();
  });
  $('.article-controls .arrow-down').on('click' , function () {
    $('.article-thumbnails .bx-next').click();
  });
  $('.portfolio-controls .arrow-up').on('click' , function () {
    $('.portfolio-thumbnails .bx-prev').click();
  });
  $('.portfolio-controls .arrow-down').on('click' , function () {
    $('.portfolio-thumbnails .bx-next').click();
  });
  $('.testimonials-wrapper').bxSlider({
    infiniteLoop: true,
    auto: true,
    pause : 8000
  });


  var data = ['<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Atu3hwTdl2o" frameborder="0" allowfullscreen></iframe>',
  '<iframe src="https://player.vimeo.com/video/141553220" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
  '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ibjLDARGZWM" frameborder="0" allowfullscreen></iframe>',];
  function appendVideo(count) {
    $('.video').append(data[count])
  };
  var thumbnail = $('.thumbnail');
  function handler (num) {
    return function () {
      $('.video').html(data[num]);
    }
  }
  for (var i = 0; i < thumbnail.length; i++) {
    $(thumbnail[i]).on('click', handler (i+1));
  }

  $('#play').on('click',function () {
    $('#play, .video img').hide();
    appendVideo(0);
  })
var imageData = [
'portfolio/flight_text.min.jpg',
'portfolio/memocute.min.jpg',
'portfolio/calculator.min.jpg',
'portfolio/delivery.min.jpg',
'portfolio/photo.min.jpg',
'portfolio/lawyer.min.jpg',
'portfolio/conference.min.jpg',
'portfolio/saycons.min.jpg',
'portfolio/craigslist.min.jpg',
'portfolio/building.min.jpg',
'portfolio/cafe.min.jpg',
'portfolio/product_evaluation.min.jpg',
'portfolio/clerk.min.jpg',
'portfolio/girlheadphones.min.jpg',
'portfolio/girls.min.jpg'
]

$('.portfolio-image').each(function (n) {
  $(this).attr('src', imageData[n]);
})


//script for pdf files
  var PDFObject=function(h){if(!h||!h.url){return false}var e="1.2",c=h.id||false,d=h.width||"100%",p=h.height||"100%",g=h.pdfOpenParams,a,m,l,b,j,i,n,o,q,f,k;l=function(r){var s;try{s=new ActiveXObject(r)}catch(t){s=null}return s};b=function(){var r=null;if(window.ActiveXObject){r=l("AcroPDF.PDF");if(!r){r=l("PDF.PdfCtrl")}if(r!==null){return true}}return false};j=function(){var r,u=navigator.plugins,s=u.length,t=/Adobe Reader|Adobe PDF|Acrobat/gi;for(r=0;r<s;r++){if(t.test(u[r].name)){return true}}return false};i=function(){var r=navigator.mimeTypes["application/pdf"];return(r&&r.enabledPlugin)};n=function(){var r=null;if(j()||b()){r="Adobe"}else{if(i()){r="generic"}}return r};o=function(){var s=document.getElementsByTagName("html"),t,r;if(!s){return false}t=s[0].style;r=document.body.style;t.height="100%";t.overflow="hidden";r.margin="0";r.padding="0";r.height="100%";r.overflow="hidden"};q=function(s){var r="",t;if(!s){return r}for(t in s){if(s.hasOwnProperty(t)){r+=t+"=";if(t==="search"){r+=encodeURI(s[t])}else{r+=s[t]}r+="&"}}return r.slice(0,r.length-1)};f=function(s){var r=null;switch(s){case"url":r=a;break;case"id":r=c;break;case"width":r=d;break;case"height":r=p;break;case"pdfOpenParams":r=g;break;case"pluginTypeFound":r=m;break;case"pdfobjectversion":r=e;break}return r};k=function(r){if(!m){return false}var s=null;if(r){s=(r.nodeType&&r.nodeType===1)?r:document.getElementById(r);if(!s){return false}}else{s=document.body;o();d="100%";p="100%"}s.innerHTML='<object    data="'+a+'" type="application/pdf" width="'+d+'" height="'+p+'"></object>';return s.getElementsByTagName("object")[0]};a=encodeURI(h.url)+"#"+q(g);m=n();this.get=function(r){return f(r)};this.embed=function(r){return k(r)};this.pdfobjectversion=e;return this};

  function showPopup (type) {
    $('.popup-wrapper,.popup-'+type).addClass('is-active');
    $('body').addClass('popup');
    $('#leftBlock').hide();
  }

  function hidePopup () {
    $('.popup-wrapper,.popup-pdf, .popup-img').removeClass('is-active');
    $('body').removeClass('popup');
    $('#leftBlock').show();
  }

  $('.article-thumbnail, .career-list li').on('click', function () {
    var pdfUrl = $(this).data('link');
    var pdf = new PDFObject({
      url: pdfUrl,
      id: "pdfWrapper",
      pdfOpenParams: {
        view: "FitH"
      }
    }).embed("pdfWrapper");
    showPopup('pdf');
  });

  $('.portfolio-thumbnail').on('click', function () {
    var url = $(this).find('a').attr('href');
    $('.popup-img').html('<img src="'+ url +'">');
    showPopup('img');
    return false
  });

  $('.close').on('click', function () {
    hidePopup();
  });

})