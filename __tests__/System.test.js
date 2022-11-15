const express = require("express"),
  app = express(),
  router = require("../routes/studentServiceRoutes"),
  puppeteer = require("puppeteer");

app.use("/", router);

test("Test: Getting the information of student through the user interface.", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });

  const page = await browser.newPage();
  await page.goto("http://localhost:3100/");

  await page.click("input#STU_ID");
  await page.type("input#STU_ID", "2");

  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });
  await page.click("input#select");

  const studentObject = await page.evaluate(() => {
    return {
      firstName: document.getElementById("STU_FNAME").value,
      lastName: document.getElementById("STU_LNAME").value,
      age: document.getElementById("STU_AGE").value,
    };
  });
  expect(studentObject).toEqual({
    firstName: "Alexandra",
    lastName: "Brown",
    age: "25",
  });
}, 20000);
