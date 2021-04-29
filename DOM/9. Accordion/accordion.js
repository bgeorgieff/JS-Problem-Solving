function toggle() {
    let toggleMenu = document.getElementsByClassName('button')[0];
    let hiddenText = document.getElementById('extra');

    if (toggleMenu.textContent === 'More') {
        toggleMenu.textContent = "Less";
        hiddenText.style.display = 'block';
    } else {
        toggleMenu.textContent = 'More';
        hiddenText.style.display = 'none';
    }
}
