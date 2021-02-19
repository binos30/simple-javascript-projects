var dragValue;

function move() {
  const element = document.getElementById("square");

  element.style.position = "absolute";
  element.onmousedown = function () {
    dragValue = element;
  };
}

document.onmouseup = function () {
  dragValue = null;
};

document.onmousemove = function (e) {
  const x = e.pageX;
  const y = e.pageY;

  dragValue.style.left = `${x}px`;
  dragValue.style.top = `${y}px`;
};
