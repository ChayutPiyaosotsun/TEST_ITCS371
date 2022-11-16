const express = require("express"),
  app = express(),
  router = require("../routes/clientRoutes"),
  request = require("supertest"),
  fs = require("fs"),
  path = require("path");

app.use("/", router);

describe("Integration Testing: Get the src in HTML file via / to compare with callStudentService.js file via /js/callStudentService.js", () => {
  let src = "";
  test("Test: GET /", async () => {
    const res = await request(app).get("/");
    expect(res.text).toEqual(
      fs.readFileSync(path.join(__dirname, "../views/studentForm.html"), "utf8")
    );
    script = res.text;
    for (let i = 3554; i <= 3577; i++) {
      src += script[i];
    }
  });
  test("Test: GET /js/callStudentService.js", async () => {
    const res = await request(app).get("/js/callStudentService.js");
    expect(res.text).toEqual(
      fs.readFileSync(path.join(__dirname, "../", src), "utf8")
    );
  });
});
