# electron-react-boilerplate

React + Electron boilerplate.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Features
- React v16.8
- React Router
- Sass
- Typescript

## Getting started

Clone the repository locally:

``` bash
git clone https://github.com/bonavida/electron-react-boilerplate.git
```

## Requirements:

- NodeJS 10.15.x
- npm 6.4.x

## Install dependencies:

``` bash
cd electron-react-boilerplate
yarn install
```

## Development

To run the app in dev mode with hot-reloader, run in two separate consoles:

To run the front-end
``` bash
yarn start
```

and to run electron

``` bash
yarn electron
```

## Build the app

```bash
yarn build
```

The built files are placed in `/build` at the root directory.

If you want to run electron with the built files, run the following command:

```bash
yarn electron:local
```

## App packaging and distribution

To package the app, depending on the desired platform, use the following commands:

``` bash
yarn dist:win     // Windows
yarn dist:linux   // Linux
yarn dist:osx     // Mac
yarn dist:all     // All platforms
```

The package files are placed in `/release`.

## Preload script
This file, placed at `electron/preload.js`, is needed to expose the electron API inside the React app. It lets your UI communicate with the native electron APIs.

### Electron API Usage
Inside the React app we have access to the native electron APIs trough `window.electron`. In the example below we use the electron module `ipcRenderer`. As you can see, we have added some extra code just to be sure that this won't throw an error if the app is deployed in the web browser and not in electron.

```
const { ipcRenderer }: any  = window.electron || {};

...

ipcRenderer && ipcRenderer.send('message');  // This will only run in electron
```
