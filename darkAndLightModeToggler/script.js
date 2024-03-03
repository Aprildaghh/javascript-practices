const toggleDarkMode = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    toggleText.textContent = "Light";
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    toggleText.textContent = "Dark";
    localStorage.setItem("darkMode", null);
};

if(localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
}

toggleDarkMode.addEventListener("click", () => {
    let darkMode = localStorage.getItem("darkMode");
    
    if(darkMode !== "enabled")
    {
        enableDarkMode();
    }
    else
    {
        disableDarkMode();
    }
});
