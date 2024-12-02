export default function clock() {

    const clock = document.getElementById("clock");

    function updateClock() {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      const timeString = `${hours}:${padZero(minutes)}:${padZero(seconds)}`;
      clock.textContent = timeString;
    }

    function padZero(number) {
      return number.toString().padStart(2, "0");
    }

    setInterval(updateClock, 1000);
}