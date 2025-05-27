const request = require("supertest");
const express = require("express");

let app;
beforeAll(() => {
  app = require("./index");
});

describe("GET /add", () => {
  it("should add two numbers", async () => {
    const res = await request(app).get("/add?num_a=2&num_b=3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  it("should return 400 if parameters are missing", async () => {
    const res = await request(app).get("/add?num_a=2");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters num_a and num_b must be numbers.");
  });

  it("should return 400 if parameters are not numbers", async () => {
    const res = await request(app).get("/add?num_a=foo&num_b=bar");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters num_a and num_b must be numbers.");
  });

  it("should add negative numbers", async () => {
    const res = await request(app).get("/add?num_a=-2&num_b=-3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(-5);
  });
});

describe("GET /subtract", () => {
  it("should subtract two numbers", async () => {
    const res = await request(app).get("/subtract?num_a=5&num_b=3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(2);
  });

  it("should return 400 if parameters are missing", async () => {
    const res = await request(app).get("/subtract?num_a=5");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters num_a and num_b must be numbers.");
  });

  it("should return 400 if parameters are not numbers", async () => {
    const res = await request(app).get("/subtract?num_a=foo&num_b=bar");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters num_a and num_b must be numbers.");
  });

  it("should subtract negative numbers", async () => {
    const res = await request(app).get("/subtract?num_a=-5&num_b=-3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(-2);
  });
});

describe("GET /multiply", () => {
  it("should multiply two positive numbers", async () => {
    const res = await request(app).get("/multiply?num_a=2&num_b=3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(6);
  });

  it("should multiply a positive and a negative number", async () => {
    const res = await request(app).get("/multiply?num_a=2&num_b=-3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(-6);
  });

  it("should multiply two negative numbers", async () => {
    const res = await request(app).get("/multiply?num_a=-2&num_b=-3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(6);
  });

  it("should multiply by zero", async () => {
    const res = await request(app).get("/multiply?num_a=5&num_b=0");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(0);
  });

  it("should return 400 if parameter b is missing", async () => {
    const res = await request(app).get("/multiply?num_a=2");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters num_a and num_b must be numbers.");
  });

  it("should return 400 if parameter a is missing", async () => {
    const res = await request(app).get("/multiply?num_b=3");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters num_a and num_b must be numbers.");
  });

  it("should return 400 if parameters are not numbers", async () => {
    const res = await request(app).get("/multiply?num_a=foo&num_b=bar");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters num_a and num_b must be numbers.");
  });
});

describe("GET /divide", () => {
  it("should divide two positive numbers", async () => {
    const res = await request(app).get("/divide?num_a=6&num_b=3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(2);
  });

  it("should divide a negative number by a positive number", async () => {
    const res = await request(app).get("/divide?num_a=-6&num_b=3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(-2);
  });

  it("should divide two negative numbers", async () => {
    const res = await request(app).get("/divide?num_a=-6&num_b=-3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(2);
  });

  it("should divide zero by a number", async () => {
    const res = await request(app).get("/divide?num_a=0&num_b=5");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(0);
  });

  it('should return a 400 status and the error message "Cannot divide by zero." if parameter b is zero', async () => {
    const res = await request(app).get("/divide?num_a=5&num_b=0");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Cannot divide by zero.");
  });

  it('should return a 400 status and the error message "Parameters num_a and num_b must be numbers." if parameter b is missing', async () => {
    const res = await request(app).get("/divide?num_a=6");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters num_a and num_b must be numbers.");
  });

  it('should return a 400 status and the error message "Parameters num_a and num_b must be numbers." if parameter a is missing', async () => {
    const res = await request(app).get("/divide?num_b=3");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters num_a and num_b must be numbers.");
  });

  it('should return a 400 status and the error message "Parameters num_a and num_b must be numbers." if parameters are not numbers', async () => {
    const res = await request(app).get("/divide?num_a=foo&num_b=bar");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters num_a and num_b must be numbers.");
  });
});

describe("GET /negate", () => {
  it("should negate a number", async () => {
    // Test for negating a positive number
    const res = await request(app).get("/negate?num_a=5");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(-5);

    // Test for negating a negative number
    const res2 = await request(app).get("/negate?num_a=-1");
    expect(res2.statusCode).toBe(200);
    expect(res2.body.result).toBe(1);
  });

  it("should return 400 if parameter is missing", async () => {
    const res = await request(app).get("/negate");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameter num_a must be a number.");
  });

  it("should return 400 if parameter is not a number", async () => {
    const res = await request(app).get("/negate?num_a=foo");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameter num_a must be a number.");
  });
});
