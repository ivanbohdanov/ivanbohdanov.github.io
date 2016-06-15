$(document).ready(function () {
  var firstVideo = videojs('first');
  var secondVideo = videojs('second');

  firstVideo.play()

  $(document).on('load', function () {
    secondVideo.play()
  });

  videojs('third').ready(function() {
    this.play();
  });
})