const express = require("express"),
  app = express(),
  router = require("../routes/clientRoutes"),
  request = require("supertest"),
  fs = require("fs"),
  path = require("path");

app.use("/", router);

describe("Unit Testing: Test the root", () => {
  test("Test: GET /", async () => {
    const res = await request(app).get("/");
    expect(res.text).toEqual(
      fs.readFileSync(path.join(__dirname, "../views/studentForm.html"), "utf8")
    );
  });
});
