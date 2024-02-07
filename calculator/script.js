const keys = document.getElementsByTagName("li");
const result = document.querySelector("p");
const clear = document.querySelector(".clear");

for(let i = 0; i < keys.length; i++)
{
    if(keys[i].innerHTML === "=")
    {
        keys[i].addEventListener("click", () => { result.innerHTML = eval(result.innerHTML); });
    }
    else
    {
        keys[i].addEventListener("click", () => { result.innerHTML += keys[i].innerHTML; });
    }
}

clear.addEventListener("click", () => { result.innerHTML = ""; })