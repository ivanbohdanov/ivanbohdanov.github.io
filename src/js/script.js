$(document).ready(function () {
  // var firstVideo = videojs('first');
  // var secondVideo = videojs('second');

  // firstVideo.play()

  // $(document).on('load', function () {
  //   secondVideo.play()
  // });
  
  videojs('third').src("/video.mov").ready(function () {
      this.play();
  })
  setTimeout(function () {
    $('#test').click();
  }, 2000)
})