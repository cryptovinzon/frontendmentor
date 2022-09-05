document.querySelectorAll('.expand').forEach(expand => {
    expand.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        e.target.nextElementSibling.classList.toggle('hidden')
    })
})
