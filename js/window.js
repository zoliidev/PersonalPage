var windowElement = document.querySelector('.right');
var titleBarElement = document.querySelector('.bar');

var windowX = 0;
var windowY = 0;

var mouseX = 0;
var mouseY = 0;

var mouseOffsetX = 0;
var mouseOffsetY = 0;

var isMoving = false;

titleBarElement.addEventListener('mousedown', function (event) {
  isMoving = true;

  mouseX = event.clientX;
  mouseY = event.clientY;

  windowX = windowElement.offsetLeft;
  windowY = windowElement.offsetTop;

  mouseOffsetX = mouseX - windowX;
  mouseOffsetY = mouseY - windowY;
});

document.addEventListener('mousemove', function (event) {
  if (isMoving) {
    let windowWidht = window.innerWidth / 1.175;
    let windowHeight = window.innerHeight / 1.53;

    mouseX = event.clientX;
    mouseY = event.clientY;

    windowX = mouseX - mouseOffsetX;
    windowY = mouseY - mouseOffsetY;

    console.log("Ablak Szél:" + windowWidht + "," + " Ablak Mag:" + windowHeight);
    console.log("Obj Szél:" + windowX + "," + " Obj Mag:" + windowY);

    //windowElement.style.left = windowX + 'px';
    //windowElement.style.top = windowY + 'px';
    if (windowY <= windowHeight) {
      windowElement.style.top = windowY + "px";
    }

    if (windowX <= windowWidht) {
      windowElement.style.left = windowX + "px";
    }
  }
});

document.addEventListener('mouseup', function (event) {
  isMoving = false;
});