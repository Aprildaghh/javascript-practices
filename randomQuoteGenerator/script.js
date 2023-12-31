const btn = document.querySelector(".get-quotes");
const number = document.getElementById("number");
const url = "https://type.fit/api/quotes";

btn.addEventListener("click", (e) => {
    e.preventDefault();

    if(number.value.length == 0) {
        return alert("Please enter a number.");
    } else {
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            let output = "";

            let shuffledData = shuffle(data);

            for(let i = 0; i < shuffledData.length; i++) {
                if(i == number.value) break;

                output += 
                `
                    <li>Quote: ${shuffledData[i].text}</li>
                    <li>Author: ${shuffledData[i].author}</li>
                    <hr>
                `

                document.querySelector(".quotes").innerHTML = output;

            }

        });
    }

    
})

function shuffle(quotes) {
    let CI = quotes.length, tempValue, randomIndex;

    while (CI > 0) {
        randomIndex = Math.floor(Math.random() * CI);
    
        CI--;
    
        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }

    return quotes;
}
