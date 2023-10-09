const toggleIcon = document.getElementById('toggle-icon');
const navList = document.getElementById('nav-list');

toggleIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none';
    });
});
