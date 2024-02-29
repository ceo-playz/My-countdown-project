const countDownDate = new Date("Mar 31, 2024 00:00:00").getTime();
const countdownFunction = setInterval(function() {
const now = new Date().getTime();
const distance = countDownDate - now;
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("days").innerHTML = days + "d ";
document.getElementById("hours").innerHTML = hours + "h ";
document.getElementById("minutes").innerHTML = minutes + "m ";
document.getElementById("seconds").innerHTML = seconds + "s ";
if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "Promo ended";
  }
}, 1000);
