const fs = require("fs");
const ejs = require("ejs");
const express = require("express");
const opn = require("opn");
const app = express();

app.get("/", (req, res) => {
  fs.readFile("demo.ejs", function (err, data) {
    const options = { title: "WELCOME TO BONGO", app: "BONGO" };

    const parsedHtml = ejs.render(data.toString(), options);
    res.send(parsedHtml);
  });
});

app.listen(8080, (req, res) => {
  console.log(req, res);
});

fs.readFile("demo.ejs", function (err, data) {
  const options = { title: "WELCOME TO BONGO", app: "BONGO" };

  const parsedHtml = ejs.render(data.toString(), options);
  fs.writeFile("index.html", parsedHtml, function (err) {
    if (err) throw err;
    console.log("");
    console.log("=============     ==============");
    console.log("       Build Successfull");
    console.log("=============     ==============");
    console.log("");
  });
});

opn("http://localhost:8080");
