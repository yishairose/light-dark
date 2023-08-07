const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.getElementById('text-box');
let isDark = false;
function imageToggle(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleMode(isDark, color) {
    isDark ? nav.style.backgroundColor = 'rgb(0 0 0 / 50%)' : nav.style.backgroundColor = 'rgb(255 255 255/ 50%)';
    isDark ? textBox.style.backgroundColor = 'rgb(255 255 255/ 50%)' : textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    isDark ? toggleIcon.children[0].textContent = 'Dark' : toggleIcon.children[0].textContent = 'Light';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageToggle('dark') : imageToggle('light');

}

function switchTheme(e) {
    let checked = e.target.checked;
    if (checked) {
        isDark = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleMode(isDark);

    } else {
        isDark = false;
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleMode(isDark);

    }
}
toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleMode(true)
    }

}