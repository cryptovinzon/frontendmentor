document.querySelectorAll('h2').forEach(heading => {
    heading.addEventListener('click', (e) => toggleAnswer(e))
})

function toggleAnswer(e) {
    e.target.nextElementSibling.classList.toggle('answer');
    e.target.classList.toggle('active');
}