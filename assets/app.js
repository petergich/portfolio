var i = 0;
var txt = 'PETER KAMAU'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
window.addEventListener("load", typeWriter);
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}