let count = 0;
let Stop = null;

function startCounter() {
  if (!Stop) {
    Stop = setInterval(() => {
      count++;
      document.getElementById("counter").innerHTML = count;
    }, 100);
  }
}

function stopCounter() {
  clearInterval(Stop);
  Stop = null;
}

function resetCounter() {
  stopCounter();
  count = 0;
  document.getElementById("counter").innerHTML = count;
}


