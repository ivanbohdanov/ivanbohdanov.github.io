$(document).ready(function () {
  var firstVideo = videojs('first');
  var secondVideo = videojs('second');
  var thirdVideo = videojs('third');

  firstVideo.play()

  $(document).on('load', function () {
    secondVideo.play()
  });

  setTimeout(function () {
    thirdVideo.play();
  }, 1500)
})