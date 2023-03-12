const btn = document.querySelector('.image')
const openClose = document.querySelector('.open-close-icon')

function toggleClass() {
    btn.classList.toggle('hide')
}

openClose.addEventListener('click', toggleClass)




const container = document.querySelector('.container')
const showHide = document.querySelectorAll('.open-close-icon')

function overMouse () {
    showHide.classList.toggle('show')
}

container.addEventListener('mouseover', overMouse)
container.addEventListener('mouseout', overMouse)
