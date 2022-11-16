const express = require("express"),
  app = express(),
  router = require("../routes/clientRoutes"),
  request = require("supertest"),
  fs = require("fs"),
  path = require("path");

app.use("/", router);

describe("Unit Testing: Test the root", () => {
  test("Test: GET /js/callStudentService.js", async () => {
    const res = await request(app).get("/js/callStudentService.js");
    expect(res.text).toEqual(
      fs.readFileSync(
        path.join(__dirname, "../js/callStudentService.js"),
        "utf8"
      )
    );
  });
});
