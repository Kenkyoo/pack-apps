export default function password() {
    document.getElementById('container').innerHTML = `
  <div class="bg-white p-4 mt-8 rounded flex flex-col items-center justify-center flip-in-hor-bottom">
    <div class="mb-6">
        <label for="length" class="text-gray-700 font-bold">Password Length:</label>
        <input type="number" id="lengthInput" name="length"
            class="ml-2 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="6" max="30" value="12">
    </div>
    <div class="mb-6">
        <label for="includeUppercase" class="text-gray-700 font-bold">Include Uppercase Letters:</label>
        <input type="checkbox" id="uppercaseCheckbox" name="includeUppercase" class="ml-2">
    </div>
    <div class="mb-6">
        <label for="includeNumbers" class="text-gray-700 font-bold">Include Numbers:</label>
        <input type="checkbox" id="numbersCheckbox" name="includeNumbers" class="ml-2">
    </div>
    <div class="mb-6">
        <label for="includeSymbols" class="text-gray-700 font-bold">Include Symbols:</label>
        <input type="checkbox" id="symbolsCheckbox" name="includeSymbols" class="ml-2">
    </div>
    <button id="generateButton"
        class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Generate
        Password</button>
    <div id="passwordResult" class="mt-6"></div>
</div>`
;

const lengthInput = document.getElementById("lengthInput");
const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
const numbersCheckbox = document.getElementById("numbersCheckbox");
const symbolsCheckbox = document.getElementById("symbolsCheckbox");
const generateButton = document.getElementById("generateButton");
const passwordResult = document.getElementById("passwordResult");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

generateButton.addEventListener("click", generatePassword);

function generatePassword() {
  const length = Number(lengthInput.value);
  const includeUppercase = uppercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;
  
  let characters = "";
  
  if (includeUppercase) {
    characters += uppercaseLetters;
  }
  if (includeNumbers) {
    characters += numbers;
  }
  if (includeSymbols) {
    characters += symbols;
  }
  
  let password = "";
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  
  passwordResult.textContent = `Generated Password: ${password}`;
}

}