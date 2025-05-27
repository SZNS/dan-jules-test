# Express.js API Service

This is a basic Express.js API service with five endpoints:

- `/add` — Adds two numbers provided as query parameters `num_a` and `num_b`.
- `/subtract` — Subtracts two numbers provided as query parameters `num_a` and `num_b`.
- `/multiply` — Multiplies two numbers provided as query parameters `num_a` and `num_b`.
- `/divide` — Divides two numbers provided as query parameters `num_a` and `num_b`.
- `/negate` — Negates a number provided as query parameter `num_a`.

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
GET /add?num_a=2&num_b=3
```

Response:

```
{
  "result": 5
}
```

### Subtract

```
GET /subtract?num_a=5&num_b=3
```

Response:

```
{
  "result": 2
}
```

### Multiply

```
GET /multiply?num_a=4&num_b=3
```

Response:

```
{
  "result": 12
}
```

### Divide

```
GET /divide?num_a=10&num_b=2
```

Response:

```
{
  "result": 5
}
```

### Negate

```
GET /negate?num_a=7
```

Response:

```
{
  "result": -7
}
```

## Running Tests

This project uses [Jest](https://jestjs.io/) and [Supertest](https://github.com/ladjs/supertest) for testing.

To run the test suite:

```
npm test
```

This will execute all unit tests in `index.test.js`.
