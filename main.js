
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

var mainWindow;
function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('exit', (evt, arg) => {
  app.quit()
})
ipcMain.on('maximize', (evt, arg) => {
  if (!mainWindow.isMaximized()) {
    mainWindow.maximize();
  } else {
    mainWindow.unmaximize();
  }
})

ipcMain.on('minimize', (evt, arg) => {
  mainWindow.minimize();
})