document.querySelector(".dice-container").addEventListener("click", getAdvice);

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => printAdvice(data))
        .catch((response => console.error(response.status)))
}

function printAdvice(advice) {
    tagDiv = document.querySelector(".tag");
    tagDiv.textContent = `ADVICE #${advice.slip.id}`

    adviceDiv = document.querySelector(".advice");
    adviceDiv.textContent = `" ${advice.slip.advice}"`
}

getAdvice();