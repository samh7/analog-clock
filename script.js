const main = document.querySelector(".main");
const secondsHand = document.querySelector(".seconds-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
function updateTime() {
  let currentTime = new Date();

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds(); // Use seconds instead of milliseconds
  const [hDegree, mDegree, sDegree] = hmsToDegreesList(hours, minutes, seconds);
  console.log([hDegree, mDegree, sDegree + 90]);
  secondsHand.style.rotate = `${sDegree + 90}deg`;
  minuteHand.style.rotate = `${mDegree + 90}deg`;
  hourHand.style.rotate = `${hDegree + 90}deg`;
}

function hmsToDegreesList(hours, minutes, seconds) {
  hours = Number(hours);
  minutes = Number(minutes);
  seconds = Number(seconds);
  
  const degreesFromHours = (hours % 12) * 30 + minutes / 2 + seconds / 120; // Account for hours beyond 12
  const degreesFromMinutes = minutes * 6;
  const degreesFromSeconds = seconds * 6;

  return [degreesFromHours, degreesFromMinutes, degreesFromSeconds];
}

setInterval(updateTime, 1000);
