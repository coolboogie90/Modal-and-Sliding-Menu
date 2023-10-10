/*---Modal---*/

const openModalButton = document.getElementById('openModalButton');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');

openModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
    document.body.classList.add('modal-open');
});

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});

closeModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    document.body.classList.remove('modal-open');
});

/*---Sliding Menu---*/

const hamburgerIcon = document.querySelector('.hamburger-icon');
const slideMenu = document.querySelector('.slide-menu');

hamburgerIcon.addEventListener('click', () => {
  slideMenu.classList.toggle('show');
});

const closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', () => {
  slideMenu.classList.remove('show');
});
