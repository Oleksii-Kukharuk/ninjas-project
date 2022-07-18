(() => {
  const refs = {
    openModalBtn: document.querySelector('.contacts-menu-open'),
    closeModalBtn: document.querySelector('.contacts-menu-close'),
    modal: document.querySelector('.data-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('.second-contacts-menu-open'),
    closeModalBtn: document.querySelector('.second-contacts-menu-close'),
    modal: document.querySelector('.second-data-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
