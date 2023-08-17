const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor() {
    bgColor.classList.add("online");
}

async function connectionStatus() {
    try {
        const fetchResults = await fetch(
            "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" + (new Date().getTime()));

        image.src = "./images/online.png";
        setColor();
        return fetchResults.status >= 200 && fetchResults.status < 300;
    } catch (error) {
        statusDisplay.textContent = "OOPS!!! Your internet connection is down";
        image.src = "./images/offline.png";
        bgColor.classList.remove("online");
    }
}

// monitor the connection
setInterval(async () => {
    const result = await connectionStatus();
    if(result) {
        statusDisplay.textContent = "You are Online!, CONNECTION LOOKS GOOD!";
        setColor();
    }
}, 5000);

// CHECK CONNECTION WHEN PAGE LOADS
window.addEventListener("load", async (event) => {
    if(connectionStatus()) {
        statusDisplay.textContent = "You are Online!";
    } else {
        statusDisplay.textContent = "You are Offline!";
    }
})
