const links = document.querySelector('.links');
const iconMenu = document.querySelector('#iconMenu');
const iconClosed = document.querySelector('#iconClosed');

function MenuDrop() {
    links.classList = 'displayLinks';
    iconMenu.style.display = 'none';
    iconClosed.style.display = 'inline';
};

function MenuClosed() {
    links.classList = 'displayLinksOff';
    iconMenu.style.display = 'inline';
    iconClosed.style.display = 'none';
};