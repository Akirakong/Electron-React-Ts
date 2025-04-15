import { app, BrowserWindow } from 'electron';
import * as path from 'path';

// 開発モードの場合、electron-reloaderを使用して自動リロードを有効にする
if (process.env.NODE_ENV === 'development') {
  try {
    require('electron-reloader')(module, {
      watchRenderer: true,
      ignore: [
        /node_modules/,
        /dist/,
      ]
    });
    console.log('Electron Reloader activated');
  } catch (err) {
    console.error('Electron Reloader failed:', err);
  }
}

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  // ブラウザウィンドウを作成
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // メインのHTMLファイルを読み込む
  mainWindow.loadFile(path.join(__dirname, '..', 'index.html'));

  // 開発ツールを開く
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  // ウィンドウが閉じられたときの処理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Electronの初期化が完了したらウィンドウを作成
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // macOSでは、Dockアイコンがクリックされたときにウィンドウがない場合に新しいウィンドウを作成する
    if (mainWindow === null) {
      createWindow();
    }
  });
});

// 全てのウィンドウが閉じられたときの処理
app.on('window-all-closed', () => {
  // macOS以外ではアプリを終了する
  if (process.platform !== 'darwin') {
    app.quit();
  }
});