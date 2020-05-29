// til header
function myFunction(){
  var x = document.getElementById("toggleMenu");
  if (x.style.display == "block"){
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// palletype
var i = 0;
function farve(which){
  var bf = ["rgba(255, 0, 0, 0.6)", "rgb(48, 49, 52"];
  which.style.backgroundColor = bf[i % 2];
  i++;
}

// pakketyper
function myFunction2(){
  var i;
  for (i=1; i<4; i++){
    document.getElementById("panel"+i).style.visibility = "visible";
  }
}

function myFunction3(){
  var i;
  for (i=4; i<6; i++){
    document.getElementById("panel"+i).style.visibility = "visible";
  }
}

// pakkehøjde
function myFunctionx(){
  var x, text;
  x = document.getElementById("tal").value;
  if (isNaN(x) || x < 0){
    text = "Indsæt et tal over 0";
  }else{
    window.location.href='../index.html';
  }
  document.getElementById("besked").innerHTML = text;
}
