import todo from "./components/todo";
import calculator from "./components/calculator";
import password from "./components/password";
import weather from "./components/weather";
import quotes from "./components/quotes";
import clock from "./components/clock";
import gridMenu from "./components/grid";
import app from "./app";
import '../css/output.css'
import '../css/style.css'

document.getElementById("app").innerHTML += app;

window.todo = todo;
window.calculator = calculator;
window.password = password;
window.weather = weather;
window.gridMenu = gridMenu;

gridMenu();
clock();
quotes();


