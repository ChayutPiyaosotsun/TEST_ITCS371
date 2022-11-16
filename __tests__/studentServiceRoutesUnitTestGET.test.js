const express = require("express"),
  app = express(),
  router = require("../routes/studentServiceRoutes"),
  request = require("supertest");

app.use("/", router);

describe("Unit Testing: Test the root", () => {
  test("Test: GET /", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ error: true, message: "hello" });
  });
});
