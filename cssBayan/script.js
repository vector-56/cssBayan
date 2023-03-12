const btn = document.querySelector('.image')
const openClose = document.querySelector('.content-block')
const rotate = document.querySelector('.open-close-icon')

function toggleClass() {
    btn.classList.toggle('hide')
    rotate.classList.toggle('rotate')
}

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
  });

openClose.addEventListener('click', toggleClass)

const container = document.querySelector('.container')
const showHide = document.querySelectorAll('.open-close-icon')

function overMouse () {
    for (let i = 0; i < showHide.length; i++) {
        showHide[i].classList.toggle('show')
    }
}

container.addEventListener('mouseover', overMouse)
container.addEventListener('mouseout', overMouse)

