let speedTypingTestEl = document.getElementById("speedTypingTest");

let scoreEl = document.getElementById("topScore");
let timerEl = document.getElementById("timer");
let timedisplayEl = document.getElementById("sec");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let spinnerEl = document.getElementById("spinner");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");

let pageEl = document.getElementById("page");

let requestUrl = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
};
let score = 3600;
let intervalId = 0;
let counter = 0;
let quote = "";

function validate() {
    if (quote === quoteInputEl.value) {
        clearInterval(intervalId);

        let successMessage = `You typed in ${counter} seconds`;
        resultEl.textContent = successMessage;
        //console.log(scoreEl)

        if (counter < score) {
            score = counter;
            scoreEl.textContent = score;
            console.log(scoreEl)
        } else {
            scoreEl.textContent = score;
        }
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
}

function getQuote() {
    resultEl.textContent = " ";
    counter = 0;
    spinnerEl.classList.remove("d-none");
    pageEl.classList.add("d-none");
    quoteInputEl.value = "";

    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let keys = Object.getOwnPropertyNames(jsonData);
            quote = jsonData[keys[0]];
            pageEl.classList.remove("d-none");
            spinnerEl.classList.add("d-none");

            quoteDisplayEl.textContent = quote;
        });

    intervalId = setInterval(function() {

        counter = counter + 1;
        timerEl.textContent = counter;

        timedisplayEl.classList.remove("d-none");

        submitBtnEl.addEventListener("click", validate);

    }, 1000);

}
getQuote();
resetBtnEl.addEventListener("click", getQuote);
submitBtnEl.addEventListener("click", validate);