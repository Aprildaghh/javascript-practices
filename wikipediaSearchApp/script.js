const search = document.querySelector("input");
const form = document.querySelector("form");
const searchResult = document.querySelector(".results");
const error = document.querySelector(".alert");
const line = document.querySelector("hr");

const apiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&search=";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let searchValue = search.value;
    
    if(searchValue === "")
    {
        errorMessage("Search cannot be empty, please enter a search term.")
    }
    else
    {
        getResult(searchValue)
    }

})

function errorMessage(msg)
{
    error.style.display = "block";
    line.style.display = "block";
    error.textContent = msg;
}

async function getResult(value)
{
    let query = apiURL + value;
    const response = await fetch(query);
    const data = await response.json();
    console.log(data);
    if(data.query.search.length == 0)
    {
        errorMessage("Invalid search, please enter another search term.");
    }
    else 
    {
        displayResults(data);
    }

}

function displayResults(results)
{
    line.style.display="block";
    let output = "";
    results.query.search.foreach((result) => {
        let resultURL = "https://en.wikipedia.org/?curid="+result.pageid;
        output += `
            <div class="result p-2">
                <a class="h3 fw-bold" href="${resultURL}" target="_blank" rel="noopener noreferrer">${result.title}</a>
                <br>
                <a class="fs-5 text-success" href="${resultURL}" target="_blank" rel="noopener noreferrer">${resultURL}</a>
                <p class="fs-5">
                    ${result.snippet}
                </p>
            </div>
        `;
    })

    searchResults.innerHtml = output;

}
