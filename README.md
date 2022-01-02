# Rails Example

Ruby on Rails + React example project.

## Project Structure

1. `/api` - Ruby on Rails `--api` only application to serve as the backend
2. `/client` - Pure React.JS project

## Run

Ensure Docker is installed.

```bash
git clone https://github.com/woojiahao/rails-example.git
cd rails-example
docker-compose up --build
```

## Explaining Architecture

This example uses a basic client-server architecture. The client (React) is what the user interacts with. We use Webpack
to bundle the React application and serve the React application.

The server (Ruby on Rails) holds the business logic of the application. The client will send API requests to the server
and the server will respond accordingly.

Docker is used to deploy and manage both the client and server together. Think of it as running an isolated sandbox
environment to execute each component individually.

Docker Compose will run both components together, while maintaining the autonomy of each component.
