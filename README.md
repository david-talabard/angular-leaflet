# Angular leaflet map library

This project allow to use angular with leaflet maps 

**Requirements:**

- Install [NodeJS > 8](https://nodejs.org/en/download/ "NodeJS") 
- Install [Git](https://git-scm.com/downloads "Git") 
- Install [Angular CLI](https://github.com/angular/angular-cli "Angular CLI") 

Run `npm install -g @angular/cli` to install angular CLI globally

**This project use:**

- [TypeScript](https://www.typescriptlang.org/ "TypeScript")
- [Angular 8+](https://angular.io/ "Angular 8+")
- [RXJS 6+](https://rxjs-dev.firebaseapp.com/ "RXJS 6+")

## Packages

Warnings: this package is not published on NPM yet.

| Name              | NPM repository         |  Module       
| ----------------- | ---------------------- | ------------
| map               | `@itkyo/leaflet-map`   | MapModule

## Installation

Here are the steps to add packages from this repository to a application :

- Run `npm i @itkyo/leaflet-map -S`, then do the same for all wanted packages (see above)
- Insert the `MapModule` in the final application

## Development (Demo)

### Installation

- Make this respository the current working directory.
- Install `node` and `npm` . Visit the [website](https://nodejs.org/en/download/) if needed.
- Run `npm install` to install the dependencies of the packages and the development tools.
- Write the file `./proxy-config.json`, to configure a valid endpoint to communicate with the platform API.
- Run `npm run build` to build all packages.
- Run `npm run start` to launch the development server. It is possible to set the angular serve options as follow `npm run start -- --port 8000 [...OPTIONS]`
- With default start, navigate to `http://localhost:4200/`. The app will automatically reload if any change on the source files.

### Usage

Currently the example folder is a sandbox application to test some functionalities of the the different packages.  

### Job

A specific job has been configured to build and publish packages.

Here are the steps performed by the job :

- `./scripts/build.sh`
- `./scripts/publish.sh`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
