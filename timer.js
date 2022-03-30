


// Set the date we're counting down to
var countDownDate = new Date("Mar 30, 2022 1:21:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  
  



  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Timer Expired";
    document.getElementById("updateDate").outerHTML = "<p1>Update 3/31</p1>";
    document.getElementById("newGame").outerHTML = "<p2>New Game : </p2><p2><a href='/indexes/tanukiSunset.html'>Tanuki Sunset</a></p2>";

  } else {
    document.getElementById("newGame").outerHTML = "<p2>New Game : </p2><p2><a href='/indexes/sansFight.html'>Sans Fight</a></p2>";
    document.getElementById("updateDate").outerHTML = "<p1>Update 3/30</p1>";
  }
}, 1000);
