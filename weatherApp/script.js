const api = {
    key: "key-code",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();

    if(e.type == "click") {
        getData();
    }

})


function getData() {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
        .then(response => {
            return response.json();
        })
        .then(displayData);
}

function displayData(res){
    if(response.cod === "404") {
        const error = document.querySelector(".error");
        error.textContent = "Please enter a valid city!";
    } else {
        const city = document.querySelector(".city");
        city.innerText = `${res.name}, ${res.sys.country}`;

        const today = new Date();
        const date = document.querySelector(".date");
        date.innerText = dateFunction(today);

        const temp = document.querySelector(".temp");
        temp.innerHTML = `Temp: ${Math.round(res.main.temp)}<span>°C</span>`;

        const weather = document.querySelector(".weather");
        weather.innerHTML = `Weather: ${Math.round(res.weather[0].main)}<span>°C</span>`;

        const tempRange = document.querySelector(".temp-range");
        tempRange.innerText = `Temp Range: ${Math.round(res.main.temp_min)}°C / ${Math.round(res.main.temp_max)}°C`;
    
        const weatherIcon = document.querySelector(".weather-icon");
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = iconURL + res.weather[0].icon + ".png";
    }
    search.value = "";
}

function dateFunction(d) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Doc"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}