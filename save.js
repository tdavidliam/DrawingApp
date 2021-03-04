var saveBtn = document.getElementById("save");
var imageType = document.getElementById("image-type");
var imageName = document.getElementById("image-name");
saveBtn.addEventListener("click", saveImage);
function saveImage() {
  var data = {
    imageType: imageType.value,
    imageName: imageName.value,
    dataURL: canvas.toDataURL()
  };
  download(data.dataURL, data.imageName + "." + data.imageType);
}
