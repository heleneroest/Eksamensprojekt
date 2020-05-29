// Helene (header)
function myFunction() {
  var x = document.getElementById("toggleMenu"); // local variable
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Helene markering af valg
i = 0;
var bg = ["rgba(255, 0, 0, 0.6)", "rgb(48, 49, 52"]; // array, loop igennem
function colorChange(which){
  which.style.backgroundColor = bg[i++ % bg.length];
}

// Helene slut


// John Start
function vispakker() {
  var pakkeshow = document.getElementById("togglejohn"); // local variable
  if (pakkeshow.style.display === "block") {
    pakkeshow.style.display = "none";
  } else {
    pakkeshow.style.display = "block";
  }
}

function vispalleantal() {
  var pakkeshow = document.getElementById("toggleantal"); // local variable
  if (pakkeshow.style.display === "block") {
    pakkeshow.style.display = "none";
  } else {
    pakkeshow.style.display = "block";
  }
}

function vispalleantal() {
  var pakkeshow = document.getElementById("toggleAntal"); // local variable
  if (pakkeshow.style.display === "block") {
    pakkeshow.style.display = "none";
  } else {
    pakkeshow.style.display = "block";
  }
}



    $('#checkedmixpalletering').change(function() {
        $('#shownypakke').show();
    });

    // Define regular expression - sikkerhed og fejl(error) hvis værdi er ikke tal.
       var regex = /^\d*[.]?\d*$/;

       $("#myInput1").on("input", function(){
           // Get input value
           var inputVal = $(this).val();

           // Test input value against regular expression
           if(regex.test(inputVal)) {
               $(this).removeClass("error").addClass("success");
           } else{
               $(this).removeClass("success").addClass("error");
           }
       });

       // Define regular expression - sikkerhed og fejl(error) hvis værdi er ikke tal.
          var regex = /^\d*[.]?\d*$/;

          $("#myInput2").on("input", function(){
              // Get input value
              var inputVal = $(this).val();

              // Test input value against regular expression
              if(regex.test(inputVal)) {
                  $(this).removeClass("error").addClass("success");
              } else{
                  $(this).removeClass("success").addClass("error");
              }
          });

          // Define regular expression - sikkerhed og fejl(error) hvis værdi er ikke tal.
             var regex = /^\d*[.]?\d*$/;

             $("#myInput3").on("input", function(){
                 // Get input value
                 var inputVal = $(this).val();

                 // Test input value against regular expression
                 if(regex.test(inputVal)) {
                     $(this).removeClass("error").addClass("success");
                 } else{
                     $(this).removeClass("success").addClass("error");
                 }
             });



// John Slut
