const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(showPosition);
})

function showPosition(pos) {
    userLocation.innerHTML = `
        Latitude: ${pos.coords.latitude} <br>
        Longitude: ${pos.coords.longitude}
    `
}
