const toggle = document.getElementById('toggle');
const navContainer = document.getElementById('nav');
const close = document.getElementById('close');
const open = document.getElementById('sign-up');
const modal = document.getElementById('modal');


toggle.addEventListener('click', () => {
    navContainer.classList.toggle('show-nav');
    toggle.classList.toggle('toggle-show');
});
//show modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal');
})
close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})

// hide the modal

window.addEventListener('click', e =>
    e.target == modal ? modal.classList.remove('show-modal') : false);