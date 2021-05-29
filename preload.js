window.addEventListener('DOMContentLoaded', () => {
    const { ipcRenderer } = require('electron');

    const exitButton = document.getElementById('titleBarExit');
    const maximizeButton = document.getElementById('titleBarMaximize');
    const minimizeButton = document.getElementById('titleBarMinimize');

    exitButton.addEventListener('click', () => {
        ipcRenderer.send('exit')
    });

    maximizeButton.addEventListener('click', () => {
        ipcRenderer.send('maximize')
    });

    minimizeButton.addEventListener('click', () => {
        ipcRenderer.send('minimize')
    });

})