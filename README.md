# electron-react-boilerplate

React + Electron boilerplate.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Getting started

Clone the repository locally :

``` bash
git clone https://github.com/bonavida/electron-react-boilerplate.git
```

## Requirements:

- NodeJS 10.15.x
- npm 6.4.x

## Install dependencies:

``` bash
cd electron-react-boilerplate
npm install
```

## Development

To run the app in dev mode with hot-reloader run in two separate consoles:

To run the front-end
``` bash
npm run frontend
```

and to run electron

``` bash
npm run electron
```

## Build the app

```bash
npm run build
```

The built files are placed in `/dist` at the root directory.

If you want to run electron with the built files, run the following command:

```bash
npm run electron:local
```