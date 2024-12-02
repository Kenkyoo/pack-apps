export default function weather() {
    document.getElementById('container').innerHTML = `    
    <div id="form" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto mt-8 max-w-md w-full flip-in-hor-bottom">
        <h1 class="text-center text-2xl font-bold mb-6">Enter city</h1>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                    City name
                </label>
                <input id="locationInput" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your city" />
            </div>
            <button id="searchButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                Set Weather!
            </button>
    </div>
<div id="weather" class="p-4 w-50 mx-auto mt-16 rounded-lg bg-slate-100 text-gray-800 border shadow-md flip-in-hor-bottom">    	
  <div class="flex justify-between">
		<div class="flex flex-col items-center">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-24 h-24 p-2 text-yellow-500 fill-current">
				<path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
				<rect width="32" height="48" x="240" y="16"></rect>
				<rect width="32" height="48" x="240" y="448"></rect>
				<rect width="48" height="32" x="448" y="240"></rect>
				<rect width="48" height="32" x="16" y="240"></rect>
				<rect width="32" height="45.255" x="400" y="393.373" transform="rotate(-45 416 416)"></rect>
				<rect width="32.001" height="45.255" x="80" y="73.373" transform="rotate(-45 96 96)"></rect>
				<rect width="45.255" height="32" x="73.373" y="400" transform="rotate(-45.001 96.002 416.003)"></rect>
				<rect width="45.255" height="32.001" x="393.373" y="80" transform="rotate(-45 416 96)"></rect>
			</svg>
			<h4 id="locationName" class="font-semibold"></h4>
		</div>
    <div class="flex flex-col items-center">
      <span id="temperature" class="font-bold text-5xl mb-4"></span>
      <span class="text-lg block" id="description"></span>
    </div>
	</div>
</div>  
`;
    document.getElementById('weather').classList.add('hidden');    
    const locationInput = document.getElementById("locationInput");
    const searchButton = document.getElementById("searchButton");
    const locationName = document.getElementById("locationName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");

    searchButton.addEventListener("click", fetchWeatherData);

    function fetchWeatherData() {
      const location = locationInput.value.trim();
      const apiKey = "f185a144d581e8f34f30c1c9cda3cb73";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          document.getElementById('weather').classList.remove('hidden');
          document.getElementById('form').style.display = "none";
          locationName.textContent = data.name;
          temperature.textContent = `${data.main.temp}°C`;
          description.textContent = `${data.weather[0].description}`;
       })
        .catch(error => {
        console.log("Error:", error);
      });
    }
}