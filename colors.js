var colors = ["black", "grey", "white", "red", "orange", "yellow", "green", "blue", "indigo", "violet"];
context.fillstyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);
var swatchs = document.getElementsByClassName("swatch");
for (let i = 0; i < colors.length; i++) {
  var swatch = document.createElement("div");
  swatch.className = "swatch";
  swatch.style.backgroundColor = colors[i];
  swatch.addEventListener("click", setSwatch);
  document.getElementById("colors").appendChild(swatch);
};
function setColor(color) {
  context.fillStyle = color;
  context.strokeStyle = color;
  var active = document.getElementsByClassName("active")[0];
  if (active) {
    active.className = "swatch";
  }
}
function setSwatch(e) {
  var swatch = e.target;
  setColor(swatch.style.backgroundColor);
  swatch.className += " active";
}
setSwatch({
  target: document.getElementsByClassName("swatch")[0]
});
