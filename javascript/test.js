function myFunction(){
  var x = document.getElementById("toggleMenu"); // local variable
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


i = 0;
var bg = ["rgba(255, 0, 0, 0.6)", "rgb(48, 49, 52"]; // array, loop igennem
function colorChange(which){
  which.style.backgroundColor = bg[i++ % bg.length];
}

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function myFunction3(){
  var i;
  for (i=4; i<6; i++){
    document.getElementById("panel"+i).style.visibility = "visible";
  }
}


function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}


// palletype
function farveValg(x){
  var farve = ["rgba(255, 0, 0, 0.6)", "rgb(48, 49, 52"];
  for (i=0; i<farve.length; i++){
  x.style.backgroundColor = farve[i];
  }
}


var i = 0;
function colorChange(which){
  var bg = ["rgba(255, 0, 0, 0.6)", "rgb(48, 49, 52"]; // array, loop igennem
  which.style.backgroundColor = bg[i++ % bg.length];
}

function farveValg(){
var i = 1;
var button = document.getElementById('knap'+i).style.backgroundColor;
var color = '';
for(i=1; i<7; i++){
  if (button !== 'rgba(255, 0, 0, 0.6)'){
    color = 'rgba(255, 0, 0, 0.6)';
    document.getElementById("knap"+i).style.backgroundColor = color;
    }
  else if (button === 'rgba(255, 0, 0, 0.6)'){
    color = 'rgb(48, 49, 52';
    document.getElementById("knap"+i).style.backgroundColor = color;
    }
  }
}
