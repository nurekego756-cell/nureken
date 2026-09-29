
document.addEventListener("DOMContentLoaded", function () {
  var counterEl = document.getElementById("counter");
  var incrementBtn = document.getElementById("incrementBtn");
  var resetBtn = document.getElementById("resetBtn");
  var count = 0;

  function updateDisplay() {
    counterEl.textContent = count;
  }

  incrementBtn.addEventListener("click", function () {
    count = count + 1;
    updateDisplay();
  });

  resetBtn.addEventListener("click", function () {
    count = 0;
    updateDisplay();
  });

  updateDisplay();
});
document.addEventListener("DOMContentLoaded",function(){var counterEl=document.getElementById("counter");var incrementBtn=document.getElementById("incrementBtn");var resetBtn=document.getElementById("resetBtn");var count=0;function updateDisplay(){counterEl.textContent=count;}incrementBtn.addEventListener("click",function(){count=count+1;updateDisplay();});resetBtn.addEventListener("click",function(){count=0;updateDisplay();});updateDisplay();});