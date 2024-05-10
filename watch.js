var second = 0;
var minute = 0;
var hour = 0;

function updateClock() {
  d = new Date(); // Add semicolon here
  second = d.getSeconds();
  minute = d.getMinutes();
  hour = d.getHours();

  document.getElementById("second-hand").style.transform = "rotate(" + second * 6 + "deg)"; // Update for seconds hand
  document.getElementById("minute-hand").style.transform = "rotate(" + minute * 6 + "deg)"; // Update for minute hand (adjust multiplier as needed)
  document.getElementById("hour-hand").style.transform = "rotate(" + (hour * 30 + minute * 0.5) + "deg)"; // Update for hour hand (adjust multipliers as needed)
}

setInterval(updateClock, 1000); // Call updateClock every second
