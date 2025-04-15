Electron + React + TypeScript Application

This is a desktop application development environment using Electron, React, and TypeScript.

Features
	•	Electron-based desktop application development environment
	•	UI components built with React
	•	Type-safe development with TypeScript

Development Environment Setup

Requirements
	•	Node.js (v14 or higher)
	•	npm (v6 or higher)

Installation

# Clone the repository
git clone https://github.com/your-username/electron_ts.git
cd electron_ts

# Install dependencies
npm install

Start Development Server

# Launch the application in development mode
num run build
npm run dev

Build

# Build the application
npm run build

# Run the application
npm start

Project Structure

electron_ts/
├── dist/                  # Build output directory
├── src/
│   ├── main/              # Electron main process
│   │   └── main.ts        # Entry point of the main process
│   └── renderer/          # Electron renderer process
│       ├── App.tsx        # Root component of the React application
│       ├── index.html     # HTML template
│       └── index.tsx      # Entry point of the renderer process
├── package.json           # Project configuration
├── tsconfig.json          # TypeScript configuration
└── webpack.config.js      # Webpack configuration

License

MIT

Author

Akira

---

Electron、React、TypeScriptを使用したデスクトップアプリケーションの開発環境です。

## 機能

- Electronデスクトップアプリケーション開発環境
- Reactを使用したUIコンポーネント
- TypeScriptによる型安全な開発

## 開発環境のセットアップ

### 必要条件

- Node.js (v14以上)
- npm (v6以上)

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/your-username/electron_ts.git
cd electron_ts

# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
num run build
# アプリケーションの開発モードでの起動
npm run dev
```

### ビルド

```bash
# アプリケーションのビルド
npm run build

# アプリケーションの実行
npm start
```

## プロジェクト構造

```
electron_ts/
├── dist/                  # ビルド出力ディレクトリ
├── src/
│   ├── main/              # Electronのメインプロセス
│   │   └── main.ts        # メインプロセスのエントリーポイント
│   └── renderer/          # Electronのレンダラープロセス
│       ├── App.tsx        # Reactアプリケーションのルートコンポーネント
│       ├── index.html     # HTMLテンプレート
│       └── index.tsx      # レンダラープロセスのエントリーポイント
├── package.json           # プロジェクト設定
├── tsconfig.json          # TypeScript設定
└── webpack.config.js      # Webpack設定
```

## ライセンス

MIT

## 作者

Akira