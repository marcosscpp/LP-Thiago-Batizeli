export default function activatePixel(phpUrl) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", phpUrl, true);
  xhr.send();
}
