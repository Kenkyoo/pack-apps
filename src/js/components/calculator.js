export default function calculator() {
    
  document.getElementById('container').innerHTML = `
  <h3><b>B</b>ody <b>M</b>ass <b>I</b>ndex Calculator</h3>
  <form class="form flip-in-hor-bottom" id="form" onsubmit="return validateForm()">
    <div class="row-two">
      <input type="text" id="heightInput" class="text-input" id="height" autocomplete="off" required><p class="text">Height (cm)</p>
      <input type="text" id="weightInput" class="text-input" id="weight" autocomplete="off" required><p class="text">Weight (kg)</p>
    </div>
    <button type="button" id="calculateButton">Submit</button>
  </form>
    <h1 id="bmiResult"></h1>`;

    const weightInput = document.getElementById("weightInput");
    const heightInput = document.getElementById("heightInput");
    const calculateButton = document.getElementById("calculateButton");
    const bmiResult = document.getElementById("bmiResult");

    calculateButton.addEventListener("click", calculateBMI);

function calculateBMI() {
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value) / 100;
  const bmi = weight / (height * height);
  bmiResult.textContent = `Your BMI is ${bmi.toFixed(1)}`;
}

}