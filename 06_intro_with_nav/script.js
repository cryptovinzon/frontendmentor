document.querySelectorAll('.expand').forEach(expand => {
    expand.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        e.target.nextElementSibling.classList.toggle('hidden')
    })
})

document.querySelectorAll('.mobile-menu').forEach(button => {
    button.addEventListener('click', () => {
    document.querySelector('.nav-container').classList.toggle('show')
    })
})