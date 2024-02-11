let input = document.querySelector(".input");
let character = document.querySelector(".character");
let word = document.querySelector(".word");
let readingTime = document.querySelector(".reading-time");
let wordLimit = document.querySelector(".word-limit");
let WORD_LIMIT = 225;


input.addEventListener("keyup", characterCount);
input.addEventListener("keyup", wordCounter); 

function characterCount() {
    character.innerHTML = input.value.length;
}

function wordCounter(e) {
    let words = input.value.match(/\b[-?(\w+)?]+\b/gi);

    if(words)
    {
        word.innerHTML = words.length;
        wordLimit.innerHTML = WORD_LIMIT - words.length;
    }
    else
    {
        word.innerHTML = 0;
        wordLimit.innerHTML = WORD_LIMIT;
    }

    input.addEventListener("keydown", function(e) {
        words = input.value.match(/\b[-?(\w+)?]+\b/gi);
        if(words)
        {
            if(words.length > WORD_LIMIT - 1 && e.code !== "Backspace") {
                e.preventDefault();
            }
        }
    })

    // reading time based on 225 words/min
    if(words) {
        let seconds = Math.floor((words.length * 60) / 225);
        if(seconds > 59)
        {
            const minutes = Math.floor(seconds / 60);
            seconds = seconds - minutes * 60;
            readingTime.innerHTML = minutes + "m " + seconds + "s";
        }
        else
        {
            readingTime.innerHTML = seconds + "s";
        }
    }

}
