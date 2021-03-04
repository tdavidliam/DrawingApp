var setRadius = function (newRadius) {
  if (newRadius < minRad) {
    newRadius = minRad;
  } else if (newRadius > maxRad) {
    newRadius = maxRad;
  };
  radius = newRadius;
  context.lineWidth = radius * 2;
  radSpan.innerHTML = radius;
};
var minRad = 0.5;
var maxRad = 100;
var defaultRad = 10;
var interval = 5;
var radSpan = document.getElementById("radval");
var decrad = document.getElementById("decrad");
var incrad = document.getElementById("incrad");
decrad.addEventListener("click", function () {
  setRadius(radius - interval);
});
incrad.addEventListener("click", function () {
  if (radius == 0.5) {
    radius = 5;
    context.lineWidth = radius * 2;
    radSpan.innerHTML = radius;
  } else {
    setRadius(radius + interval);
  };
});
setRadius(defaultRad);
