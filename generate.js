const fs = require("fs");
const ejs = require("ejs");
const express = require("express");
const app = express();

fs.readFile("demo.ejs", function (err, data) {
  const options = {
    title: "WELCOME TO BIOSCOPE",
    app: "BIOSCOPE",
    logo: "./bioscope.png",
  };

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
