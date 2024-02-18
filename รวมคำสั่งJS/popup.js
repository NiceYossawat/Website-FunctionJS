// popup & Modal
const openModal = document.querySelector('.open-btn');
const closeModal = document.querySelector('.close-btn');
const modalContainer = document.querySelector('.modal-container');

openModal.addEventListener('click', () =>{
    modalContainer.classList.add('show')
})
closeModal.addEventListener('click', () =>{
    modalContainer.classList.remove('show')
})