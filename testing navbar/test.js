const waffle = document.getElementsByClassName('waffle')[0]
const navLinks = document.getElementsByClassName('navLinks')[0]

waffle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})