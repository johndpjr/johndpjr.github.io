function switchTheme() {
    themeElem = document.getElementById('style');

    if (themeElem.getAttribute('href') == 'matrix-style.css') {
        themeElem.setAttribute('href', 'oj-blue-style.css');
    } else {
        themeElem.setAttribute('href', 'matrix-style.css');
    }

    localStorage.setItem('style', themeElem.getAttribute('href'));
}

window.onload = function() {
    themeName = localStorage.getItem('style');
    if (!themeName) {
        return;
    }
    themeElem = document.getElementById('style');
    themeElem.setAttribute('href', themeName);
}
