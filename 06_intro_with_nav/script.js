document.querySelectorAll('.expand').forEach(expand => {
    expand.addEventListener('click', (e) => {
        e.target.nextElementSibling.classList.toggle('hidden')
    })
})
