export default function todo() {

document.getElementById('container').innerHTML = `
  <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8 mt-8 flip-in-hor-bottom">
    <div class="px-4 py-2">
        <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
    </div>
    <form class="w-full max-w-sm mx-auto px-4 py-2">
        <div class="flex items-center border-b-2 border-teal-500 py-2">
            <input
                id="taskInput"
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Add a task">
            <button
                id="addButton"
                class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button">
                Add
            </button>
        </div>
    </form>
    <ul class="divide-y divide-gray-200 px-4" id="taskList"></ul>
  </div>  
  `;

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const task = taskInput.value.trim();
  if (task !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add("py-4", "ml-3", "block", "text-gray-900", "text-lg", "font-medium");
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

taskList.addEventListener("click", completeTask);

function completeTask(event) {
  const clickedElement = event.target;
  clickedElement.classList.toggle("completed");
}

}