let rateButtons = document.querySelectorAll('.rating');
rateButtons.forEach(button => {
    button.addEventListener('click', () => button.classList.toggle('active'))
});