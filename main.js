const { app, BrowserWindow } = require('electron')
function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600 })
  urlOptions = {
      httpReferrer: "https://somesome.com"
  }
  win.loadURL('http://www.whatismyreferer.com/', urlOptions)
  win.on('closed', () => {
    win = null
  })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
   }
})
