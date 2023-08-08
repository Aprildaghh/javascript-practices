const btn = document.querySelector(".generate");
const colorDisp = document.querySelector(".color");

const generateColor = () =>
{
    let color = "#" + Math.random().toString(16).substring(2, 8);
    colorDisp.innerHTML = color;
    document.body.style.backgroundColor = color;
}


btn.addEventListener("click", generateColor);







