window.addEventListener('DOMContentLoaded', () => {

    const { ipcRenderer } = require('electron');

    const exitButton = document.getElementById('titlebar-close');
    const maximizeButton = document.getElementById('titlebar-maximize');
    const minimizeButton = document.getElementById('titlebar-minimize');

    exitButton.addEventListener('click', () => {
        ipcRenderer.send('exit')
    });
    maximizeButton.addEventListener('click', () => {
        ipcRenderer.send('maximize')
    });
    minimizeButton.addEventListener('click', () => {
        ipcRenderer.send('minimize')
    });
});