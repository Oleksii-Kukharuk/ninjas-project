(() => {
  const menuBtnRef = document.querySelector('[data-menu-button-first]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.classList.toggle('--is-open');

    mobileMenuRef.classList.toggle('--is-open');
    // bodyOverscroll.classList.toggle('modal-open');
  });
})();

(() => {
  const menuBtnRefsec = document.querySelector('[data-menu-button-sec]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuRefss = document.querySelector('[data-menu-button-first]');
  const mobileMenuRefsss = document.querySelector('[data-menu-button-thrd]');

  menuBtnRefsec.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('--is-open');
    mobileMenuRefss.classList.toggle('visually-hidden');
    mobileMenuRefsss.classList.toggle('visually-hidden');
    // bodyOverscroll.classList.toggle('modal-open');
  });
})();

(() => {
  const btn = document.querySelector('[data-menu-button-first]');
  const mobileMenuRef = document.querySelector('[data-menu-button-thrd]');

  btn.addEventListener('click', () => {
    btn.classList.toggle('visually-hidden');

    mobileMenuRef.classList.toggle('visually-hidden');
    // bodyOverscroll.classList.toggle('modal-open');
  });
})();
