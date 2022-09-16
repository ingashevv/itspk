const burgerMenu = document.querySelector('.line__menu');
const headerMenu = document.querySelector('.header__men');

burgerMenu.addEventListener('click', function () {
    headerMenu.classList.toggle('active');
})
