document.addEventListener("DOMContentLoaded", function(event) {
  
  var canvas = document.getElementById("game"),
      select = document.getElementById("select_box"),
      ctx = canvas.getContext("2d"),
      imagesArray = [],
      optionNames = [],
      optionLoaded = false,
      imagesLoaded = false,
      windowWidth = 568,
      windowHeight = 320,
      spinXCoords = 483,
      spinYCoords = 125,
      spinHeight = 70,
      spinWidth = 70,
      imageXCoords = 182,
      imageYCoords = 110,
      imageHeight = 93,
      imageWidth = 140,
      bgImage,
      spinOnImage,
      spinOffImage,
      currentImage,
      finalImage,
      isWinner = false,
      intervalForLoading;
      
      
  function loadingScreen () {
    var counter = 0;
    var spanText = document.querySelector('.loading-text');
    intervalForLoading = setInterval(function () {
      if (counter <= 4) {
        spanText.innerHTML += ' .';
        counter++;
      } else {
        counter= 0
        spanText.innerHTML = '';
      }
    }, 500)
  }
  
  function loadXMLDoc() {
    var xmlhttp;

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
        if(xmlhttp.status == 200){
          var jsonContent = JSON.parse(xmlhttp.response);
          preloadImages(jsonContent);
          createOptions(jsonContent.SYM);
        }
        else if(xmlhttp.status == 400) {
          alert('There was an error 400')
        }
        else {
          alert('something else other than 200 was returned')
        }
      }
    }

    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
  }
  
  
  function preloadImages (json) {
    function _preload (image, callback) {
      image.img = new Image();
      image.img.src = image.path;
      image.img.name = image.name;
      image.img.order = image.id;
      image.img.addEventListener("load", function() {
        callback(image.img);
      }, false);
      return image.img
    }
    
    
    //images for game
    var SYM = json.SYM;
    var counter = 0;
    for (var i = 0; i < SYM.length; i++) {
      var image = SYM[i];
      _preload(image, function (imgFromCallback) {
        imagesArray[imgFromCallback.order] = imgFromCallback;
        optionNames[imgFromCallback.order] = imgFromCallback.name;
        
        if (counter == 3) {
          imagesLoaded = true;
          checkImgLoading();
        } else {
          counter++
        }
      });
    }
    var spinOnLoaded = false,
        spinOffLoaded = false,
        bgLoaded = false;
    bgImage = _preload(json.BG, function () {
      ctx.drawImage(bgImage, 0, 0, windowWidth, windowHeight);
      bgLoaded = true;
      checkImgLoading();
    });
    spinOnImage = _preload(json.BTN_Spin, function () {
      spinOnLoaded = true;
      checkImgLoading();
    });
    spinOffImage = _preload(json.BTN_Spin_d, function () {
      spinOffLoaded = true;
      checkImgLoading();
    });
    
    function checkImgLoading() {
      if (spinOnLoaded && spinOffLoaded && bgLoaded && imagesLoaded) {
        ctx.drawImage(spinOnImage, spinXCoords, spinYCoords, spinWidth, spinHeight); //render spin
        
        var random = getRandomInt(0,6);
        ctx.beginPath();
        ctx.rect(imageXCoords, imageYCoords, imageWidth, imageHeight);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.lineWidth = 0;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.drawImage(imagesArray[random],imageXCoords, imageYCoords, imageWidth, imageHeight); //render random image
        
        //hide loading screen
        setTimeout(function () {
          clearInterval(intervalForLoading);
          document.querySelector('.loading').style.display = 'none';
        }, 2000)
        
        canvas.addEventListener("click", onCanvasClick, false);
      }
    }
  }
  
  function createOptions (arrayWithOptionNames) {
    for (var i = 0; i < arrayWithOptionNames.length; i++) {
      var opt = document.createElement('option');
      opt.value = arrayWithOptionNames[i].name;
      opt.innerHTML = arrayWithOptionNames[i].name;
      select.appendChild(opt);
    }
    optionLoaded = true;
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function startGame () {
    var selectValue = select.value,
        random = getRandomInt(5, 10);
    document.body.style.pointerEvents = 'none'
    
    var firstInterval = setInterval(function () {
      renderImage(getRandomInt(0,5));
    },300)
    
    //clearinterval for reset inverval after random time
    
    setTimeout(function () {
      
      clearInterval(firstInterval);
      
      var secondInterval = setInterval(function () {
        renderImage(getRandomInt(0,5));
      },700)
      
      setTimeout(function () {
        clearInterval(secondInterval);
        finalImage = currentImage;
        console.log(finalImage);
        isWin(selectValue);
        
        document.body.style.pointerEvents = 'all'
      }, 3500)
      
    }, random * 1000)
  }
  
  function isWin(val) {
    if (finalImage == val) {
      win();
    } else {
      lose();
    }
  }
  
  function win () {
    console.log("win")
    document.querySelector('.win').style.display = 'block';
    setTimeout(function () {
      document.querySelector('.win').style.display = 'none';
    }, 3000)
  }
  function lose () {
    console.log("lose")
    document.querySelector('.lose').style.display = 'block';
    setTimeout(function () {
      document.querySelector('.lose').style.display = 'none';
    }, 3000)
  }
  
  function resetGame () {
    
  }
  
  function renderImage (random) {
    //render black bg
    ctx.beginPath();
    ctx.rect(imageXCoords, imageYCoords, imageWidth, imageHeight);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.lineWidth = 0;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    
    
    ctx.drawImage(imagesArray[random],imageXCoords, imageYCoords, imageWidth, imageHeight);
    currentImage = imagesArray[random].name;

  }
  
  function onCanvasClick(e) {
    var coords = getCursorPosition(e);
    //function for detect coords for start game
    if (coords[0] >= (spinXCoords) && coords[0] <= (spinXCoords + spinWidth)
    && coords[1] >= (spinYCoords) && coords[1] <= (spinYCoords + spinHeight)) {
      startGame();
    }
  }
  
  function getCursorPosition(e) {
    var x,
        y;
    var position = canvas.getBoundingClientRect();
    if (e.pageX != undefined && e.pageY != undefined) {
      x = e.pageX;
      y = e.pageY;
    } else {
      x = e.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
    }
    x -= position.left;
    y -= position.top;
        
    return [x,y];
  }
  
  
  
  function initGame () {
    
    loadXMLDoc();
    loadingScreen();
  }
  
  initGame();
});