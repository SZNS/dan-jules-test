const request = require("supertest");
const express = require("express");

let app;
beforeAll(() => {
  app = require("./index");
});

describe("GET /add", () => {
  it("should add two numbers", async () => {
    const res = await request(app).get("/add?a=2&b=3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  it("should return 400 if parameters are missing", async () => {
    const res = await request(app).get("/add?a=2");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters a and b must be numbers.");
  });

  it("should return 400 if parameters are not numbers", async () => {
    const res = await request(app).get("/add?a=foo&b=bar");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters a and b must be numbers.");
  });

  it("should add negative numbers", async () => {
    const res = await request(app).get("/add?a=-2&b=-3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(-5);
  });
});

describe("GET /subtract", () => {
  it("should subtract two numbers", async () => {
    const res = await request(app).get("/subtract?a=5&b=3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(2);
  });

  it("should return 400 if parameters are missing", async () => {
    const res = await request(app).get("/subtract?a=5");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters a and b must be numbers.");
  });

  it("should return 400 if parameters are not numbers", async () => {
    const res = await request(app).get("/subtract?a=foo&b=bar");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parameters a and b must be numbers.");
  });

  it("should subtract negative numbers", async () => {
    const res = await request(app).get("/subtract?a=-5&b=-3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(-2);
  });
});
