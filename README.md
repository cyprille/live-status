# Live Status

## About

This project provides a dynamic user interface to display live status information based on API background checks.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- [Angular-cli](https://cli.angular.io/)

## Installation

Run
```bash
npm install && yarn install
```

## Development server

Run the following command for a dev server in FR language
```bash
ng serve --aot --i18nFile=src/locale/messages.fr.xlf --i18nFormat=xlf --locale=fr --base-href /fr/
```  
Run the following command for a dev server in EN language
```bash
ng serve --aot --i18nFile=src/locale/messages.en.xlf --i18nFormat=xlf --locale=en --base-href /en/
```

Navigate to http://localhost:4200/. 
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run the following command to generate a new component
```bash
ng generate component component-name
```
You can also use 
```bash
ng generate directive|pipe|service|class|guard|interface|enum|module.
```

## Build

Run the following command to build the project in FR language
```bash
ng build --aot --i18nFile=src/locale/messages.fr.xlf --i18nFormat=xlf --locale=fr --base-href /fr/ -e prod
```
Run the following command to build the project in EN language
```bash
ng build --aot --i18nFile=src/locale/messages.en.xlf --i18nFormat=xlf --locale=en --base-href /en/ -e prod
```

## Running unit tests

Run ```ng test``` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run ```ng e2e``` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use ```ng help``` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
