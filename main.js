const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');
const serve = require('electron-serve');
const loadURL = serve({ directory: 'public' });

let mainWindow;

function isDev() {
    return !app.isPackaged;
}

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 1280,
        minHeight: 720,
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },

        // TODO Comment when packaging!
        icon: isDev() ? path.join(process.cwd(), 'public/assets/favicon.png') : path.join(__dirname, 'public/assets/favicon.png'),

        // TODO Uncomment when packaging!
        // icon: path.join(__dirname, 'public/favicon.png'),
        frame: false,
        show: false
    });

    // TODO Comment when packaging!
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5000/');
    } else {
        loadURL(mainWindow);
    }
    
    //TODO Uncomment when packaging!
    // loadURL(mainWindow);

    mainWindow.on('closed', function () {
        mainWindow = null
    });

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    });
}

app.on('ready', createWindow);


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
    if (mainWindow === null) createWindow()
});