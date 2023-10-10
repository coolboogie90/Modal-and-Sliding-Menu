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

