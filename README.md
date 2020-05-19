# UserRegistrationClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Make sure to have Registration-Service Springboot app running, look for GitHub link below for the same ##
  https://github.com/NileshJorwar/springboot-fullstack

###### Angular Steps ####
1. Download the angular CLI using (make sure you have installed npm before) 
    ```npm install -g @angular/cli```
   
2. Once you have ng, create angular project using 
    ```ng new project-name```
3. To create the componentes
    ```ng g c registration```
4. To create the service
    ```ng g s user-registration```
5. Make sure to add the service to app.module.ts (providers) because the service handles business logic for consuming http endpoints
6. Add httpclientmodule as imports under the app.module.ts to handle the rest requests. Add formsModule as well for receiving inputs.
7. TO run the project use
    ``ng serve --open``
8. To run the app in debug mode
    ``Make sure to stop the app first, change the Settings to run JavaScript Debug to run in debug mode, then run the npm start which in turns run ng serve``
