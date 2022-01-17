const fs = require("fs");
const Handlebars = require("handlebars");
const express = require("express");
const app = express();

Handlebars.registerHelper("ifCond", function (v1, operator, v2, options) {
  switch (operator) {
    case "==":
      return v1 == v2 ? options.fn(this) : options.inverse(this);

    case "!=":
      return v1 != v2 ? options.fn(this) : options.inverse(this);

    case "===":
      return v1 === v2 ? options.fn(this) : options.inverse(this);

    case "!==":
      return v1 !== v2 ? options.fn(this) : options.inverse(this);

    case "&&":
      return v1 && v2 ? options.fn(this) : options.inverse(this);

    case "||":
      return v1 || v2 ? options.fn(this) : options.inverse(this);

    case "<":
      return v1 < v2 ? options.fn(this) : options.inverse(this);

    case "<=":
      return v1 <= v2 ? options.fn(this) : options.inverse(this);

    case ">":
      return v1 > v2 ? options.fn(this) : options.inverse(this);

    case ">=":
      return v1 >= v2 ? options.fn(this) : options.inverse(this);

    default:
      return eval("" + v1 + operator + v2)
        ? options.fn(this)
        : options.inverse(this);
  }
});

fs.readFile("demo.handlebars", function (err, data) {
  const template = Handlebars.compile(data.toString());
  const parsedHtml = template({ title: "Hi BONGO TRIEB", app: "BIOSCOP" });
  fs.writeFile("index.html", parsedHtml, function (err) {
    if (err) throw err;
    console.log("");
    console.log("=============     ==============");
    console.log("       Build Successfull");
    console.log("=============     ==============");
    console.log("");
  });
});
