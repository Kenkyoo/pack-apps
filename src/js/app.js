const app = `  
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
    <div class="mx-auto max-w-3xl px-6 py-12">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white mb-4">PackApps</h1>
          <p class="text-xl text-white mb-8">
            Four apps writing in JavaScript
          </p>
          <a href="#"
            id="clock"
            class="clock">
          </a>
          <i onclick="gridMenu()" id="btn" class="fa-solid fa-bars"></i>
      </div>
      <div class="flip-in-hor-bottom" id="container"></div>
      <div id="footer"></div>
    </div>
  </div>   
  `;

  export default app;