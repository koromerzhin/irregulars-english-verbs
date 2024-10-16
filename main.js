const { app, BrowserWindow, Menu, dialog } = require('electron')
const fs = require('fs')
const path = require('path')

const packageJsonPath = path.join(__dirname, 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
const appDescription = packageJson.description
const appAuthor = packageJson.author
const appVersion = packageJson.version

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('index.html')
}

function showAboutDialog() {
  dialog.showMessageBox({
    type: 'info',
    title: 'A propos',
    message: appDescription,
    detail: 'Version: '+appVersion+'\nAuthor: '+appAuthor,
    buttons: ['OK']
  })
}

app.whenReady().then(() => {
  createWindow()

  const menu = Menu.buildFromTemplate([
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click: showAboutDialog
        }
      ]
    }
  ])
  Menu.setApplicationMenu(menu)

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
