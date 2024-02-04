// BMI is kg/m^2
// normal is 18.5 - 24.9, underweight is < 18.5
// overweight is 25 - 29.9, obese 30 and above

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const weightEl = document.querySelector(".weight");
const heightEl = document.querySelector(".height");

btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
    e.preventDefault();

    let height = heightEl.value;
    let weight = weightEl.value;

    // validation
    if(height === "" || isNaN(height))
    {
        return result.innerHTML = "Provide a valid height!"
    }
    else if(weight === "" || isNaN(weight))
    {
        return result.innerHTML = "Provide a valid weight!"
    }
    
    height /= 100;
    let bmi = (weight / Math.pow(height, 2)).toFixed(2);

    let bmiHTML = "";

    if(bmi >= 30)
    {
        result.innerHTML = `Obese: ${bmi}`;
        result.style.backgroundColor = "red";
    }
    else if(bmi <= 18.5)
    {
        result.innerHTML = `Underweight: ${bmi}`;
        result.style.backgroundColor = "green";
    }
    else if(bmi >= 25 && bmi <= 29.9)
    {
        result.innerHTML = `Overweight: ${bmi}`;
        result.style.backgroundColor = "orange";
    }
    else
    {
        result.innerHTML = `Normal: ${bmi}`;
        result.style.backgroundColor = "blue";
    }

    result.style.display = "block";
    reset.style.display = "block";
    
}

reset.addEventListener("click", () => {
    document.querySelector("form").reset();
    reset.style.display = "none";
    result.style.display = "none";
});