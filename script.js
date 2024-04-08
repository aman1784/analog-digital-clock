function setClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.getElementById("hour-hand");
  const minuteHand = document.getElementById("minute-hand");
  const secondHand = document.getElementById("second-hand");

  const hourDegree = (hours % 12) * 30 + minutes * 0.5;
  const minuteDegree = minutes * 6 + seconds * 0.1;
  const secondDegree = seconds * 6;

  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;


  // ==================================================
  // Digital clock

  const digitalClock = document.getElementById("digital-clock");
  const ampm = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;

  const options = { month: "short", day: "2-digit", year: "numeric" }; // { day: '2-digit', month: '2-digit', year: 'numeric' };

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = weekdays[now.getDay()]; // Get the weekday

  const formattedDate = `${weekday}, ${now.toLocaleDateString(
    navigator.language,
    options
  )}`; 

  const formattedTime = `${String(hour12).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${ampm}`;

  digitalClock.textContent = formattedTime + " || " + formattedDate;
}

setInterval(setClock, 1000);
