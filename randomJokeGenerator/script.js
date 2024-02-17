// joke api: https://api.chucknorris.io/jokes/random

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", getJoke);

/*
function getJoke() {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            joke.innerHTML = data.value;
        })
}
*/

async function getJoke() {

    try {
        const response = await fetch(url);
        const data = await response.json();

        joke.innerHTML = data.value;
    } catch(err) {
        console.error(err.message);
    }

    
}