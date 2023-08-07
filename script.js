const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('nav');
const toggleIcon = document.querySelector('#toggle-icon');
const images = document.querySelectorAll('.image')
const textBox = document.getElementById('text-box');
let isDark = false;
function imageToggle(color) {
    const imageArray = [{ image: images[0], src: `img/undraw_proud_coder_${color}.svg` }, { image: images[1], src: `img/undraw_feeling_proud_${color}.svg` }, { image: images[2], src: `img/undraw_conceptual_idea_${color}.svg` }]
    imageArray.map((item) => { item.image.src = item.src });
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