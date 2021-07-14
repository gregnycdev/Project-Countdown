let count = 5;
let countText = document.getElementById("clock");
console.log(countText);
function countDown() {
  count = count - 1;
  console.log(count);
  if (count > 0) {
    countText.innerText = count;
  } else {
    countText.innerText = "Lift off!!! (Refresh to start over)";
    countText.style.color = "red";
    clearInterval(intervalId);
  }
}
let intervalId = setInterval(countDown, 1000);