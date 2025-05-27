# Express.js API Service

This is a basic Express.js API service with two endpoints:

- `/add` — Adds two numbers provided as query parameters `a` and `b`.
- `/subtract` — Subtracts two numbers provided as query parameters `a` and `b`.

## Getting Started

### Install dependencies

```
npm install
```

### Run the API server

```
npm start
```

The server will be available at `http://localhost:3000`.

## API Endpoints

### Add

```
GET /add?a=2&b=3
```

Response:

```
{
  "result": 5
}
```

### Subtract

```
GET /subtract?a=5&b=3
```

Response:

```
{
  "result": 2
}
```

## Running Tests

This project uses [Jest](https://jestjs.io/) and [Supertest](https://github.com/ladjs/supertest) for testing.

To run the test suite:

```
npm test
```

This will execute all unit tests in `index.test.js`.
