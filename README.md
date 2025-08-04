<img width="690" height="417" alt="angular_microservices drawio" src="https://github.com/user-attachments/assets/b2a30121-c576-451c-8a1c-d946802babdf" />

docker run --name postgres-container --network my-app-network -e POSTGRES_USER=testuser -e POSTGRES_PASSWORD=password -e POSTGRES_DB=testdb -p 5432:5432 -d postgres:latest

docker run -d -e "SPRING_PROFILES_ACTIVE=docker" --name naming-registry-container --network my-app-network -p 8761:8761 jherzog89/naming-registry-service:v1

docker run -d -e "SPRING_PROFILES_ACTIVE=docker" --name authentication-container --network my-app-network -p 8777:8777 jherzog89/authentication-service:v1

docker run -d -e "SPRING_PROFILES_ACTIVE=docker" --name api-gateway-container --network my-app-network -p 8765:8765 jherzog89/api-gateway-service:v1

docker run -d -e "SPRING_PROFILES_ACTIVE=docker" --name reverse-string-container --network my-app-network -p 8080:8080 jherzog89/reverse-string-service:v1

docker run -d -e "SPRING_PROFILES_ACTIVE=docker" --name angular-app-container --network my-app-network -p 4200:80 jherzog89/angular-app:v1

docker run -d -e "SPRING_PROFILES_ACTIVE=docker" --name reverse-words-container --network my-app-network -p 8090:8090 jherzog89/reverse-words-service:v1

docker run -d --name zipkin --network my-app-network -p 9411:9411 openzipkin/zipkin




# Todo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
