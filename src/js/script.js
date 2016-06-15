$(document).ready(function () {
  // var firstVideo = videojs('first');
  // var secondVideo = videojs('second');

  // firstVideo.play()

  // $(document).on('load', function () {
  //   secondVideo.play()
  // });
  function triggerClick(element) {
    if(document.createEvent) {
      console.log(element)
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        element.dispatchEvent(evt);
    }
    else {
        element.click();
    }
  } 
  videojs('third').src("/video.mov").ready(function () {
      this.play();
  })
  setTimeout(function () {
    triggerClick($('#test').get()[0])
  }, 2000)

})