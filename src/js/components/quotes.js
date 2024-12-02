export default function quotes() {
    document.getElementById('footer').innerHTML = `
      <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white mt-8">
        <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
        <p id="quoteText"></p>
      </blockquote>
      <button id="quoteButton" class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg mt-4">Generate Quote</button>
    `;

    const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "In the middle of every difficulty lies opportunity. - Albert Einstein",
      "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
      "The best way to predict the future is to create it. - Peter Drucker",
      "Do what you can, with what you have, where you are. - Theodore Roosevelt",
      "It always seems impossible until it’s done. - Nelson Mandela",
      "Don’t count the days, make the days count. - Muhammad Ali",
      "You miss 100% of the shots you don’t take. - Wayne Gretzky",
      "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
      "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
      "Act as if what you do makes a difference. It does. - William James"
    ];
    
    const quoteButton = document.getElementById("quoteButton");
    const quoteText = document.getElementById("quoteText");

    quoteButton.addEventListener("click", generateQuote);

    function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
    }

    generateQuote()
}