const express = require("express");

const htmlFile = express();
htmlFile.get("/gadgets", (require, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
module.exports = htmlFile;
