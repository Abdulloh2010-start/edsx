const cityInput = document.getElementById("cityInput");
const gradus = document.getElementById("gradus");
const city = document.getElementById("city");
const maxGradus = document.getElementById("max-gradus");
const minGradus = document.getElementById("min-gradus");
const search = document.getElementById("search");
const container = document.querySelector(".container");
const data = document.getElementById("data");
const icon = document.getElementById("icon");
const openAppButton = document.getElementById('openAppButton');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

document.addEventListener('DOMContentLoaded', () => {
    openAppButton.addEventListener('click', () => {
        screen1.classList.add('active');
        setTimeout(() => {
        screen2.classList.add('active');
        screen1.style.display = 'none';
      }, 1000);
    });
  });  
async function getWeather() {
    const apiKey = "cea3e109464fe41c62c3ffbf9a19add8";
    const cityValue = cityInput.value;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}`;
    try {
        const response = await fetch(api);
        const data = await response.json();   
        city.textContent = data.name;
        data.textContent = data.weather.main;
        gradus.textContent = Math.round(data.main.temp-273)+"°";
        maxGradus.textContent = "Max:" + Math.round(data.main.temp_max-273) + "°";
        minGradus.textContent = "Min:" + Math.round(data.main.temp_min-273) + "°";
    } catch (error) {
        console.log("Xatolik", error)
    }
}
function clearInput() {
    cityInput.value = "";
}
let data2 = new Date();
let a2 = setInterval(() => {
    let aa1 = new Date();
    t.textContent = aa1.getHours();
    t2.textContent = aa1.getMinutes();
    t3.textContent = aa1.getSeconds();
}, 1);
let setDate = setInterval(() => {
    let getDate = new Date();
    data.textContent = `March, ` + getDate.getDate();
},1);
search.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getWeather();
        clearInput();
    }
});