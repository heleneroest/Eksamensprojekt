function myFunction() {
  var x = document.getElementById("toggleMenu"); // local variable
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


i = 0;
var bg = ["red", "rgb(48, 49, 52"]; // array, loop igennem 
function colorChange(which) {
  which.style.backgroundColor = bg[i++ % bg.length];
}
