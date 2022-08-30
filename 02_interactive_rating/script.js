let rateButtons = document.querySelectorAll('.rating');
let rating;
rateButtons.forEach(button => {
    button.addEventListener('click', () => {
        resetButtons();
        button.classList.toggle('active');
        rating = button.textContent;        
    })
});

function resetButtons() {
    rateButtons.forEach(button => button.classList.remove('active'));
}

document.querySelector('.submit').addEventListener('click', () => {
    document.querySelector('.welcome').classList.toggle('hide');
    document.querySelector('.thankyou').classList.toggle('hide');
    print(rating);
})

function print(rating) {
    document.querySelector('.result').textContent = `You Selected ${rating} out of 5`;
}