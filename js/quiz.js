const resultPopup = document.getElementById("resultPopup");
const resultText = document.getElementById("resultText");
const closePopup = document.getElementById("closePopup");

const correct_symbol = "✔️";
const wrong_symbol = "❌";

document.querySelectorAll('.answer').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.correct === "true") {
      btn.innerHTML = correct_symbol;
      resultText.textContent = "✅ Correct!";
      btn.disabled = true
    } else {
      btn.innerHTML = wrong_symbol
      resultText.textContent = "❌ Try again!";
       btn.disabled = true
    }
 
    resultPopup.style.display = "flex"; 
  });
});


closePopup.addEventListener('click', () => {
  resultPopup.style.display = "none";
});
