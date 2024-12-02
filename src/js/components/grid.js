export default function gridMenu() { 
    document.getElementById("container").innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
      <div onclick="todo()" class="flex flex-col justify-center text-center bg-white rounded-lg shadow-md p-6 cursor-pointer">
        <h2 class="text-xl font-bold text-purple-900 mb-4">Todo List</h2>
          <i class="fa-solid fa-check"></i>
          <p class="text-gray-700">A simple todo list.</p>
      </div>
      <div onclick="calculator()" class="flex flex-col justify-center text-center bg-white rounded-lg shadow-md p-6 cursor-pointer">
        <h2 class="text-xl font-bold text-purple-900 mb-4">IBM Calculator</h2>
          <i class="fa-solid fa-weight-scale"></i>
          <p class="text-gray-700">A calculator your ideal weight.</p>
      </div>
      <div onclick="password()" class="flex flex-col justify-center text-center bg-white rounded-lg shadow-md p-6 cursor-pointer">
        <h2 class="text-xl font-bold text-purple-900 mb-4">Password Generator</h2>
          <i class="fa-solid fa-lock"></i>
          <p class="text-gray-700">A easy way to generate a secure password.</p>
      </div>
      <div onclick="weather()" class="flex flex-col justify-center text-center bg-white rounded-lg shadow-md p-6 cursor-pointer">
        <h2 class="text-xl font-bold text-purple-900 mb-4">Weather</h2>
          <i class="fa-solid fa-cloud"></i>
          <p class="text-gray-700">Check your weather fast and easy.</p>
      </div>
    </div>  
    `;
  }