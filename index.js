var express = require("express");
var cors = require("cors");

const app = express();
app.use(cors()); // so we can call Heroku API; necessary to cross-origin resource sharing must be enable to mak AJAX calls to a different domain!

app.set("port", process.env.PORT || 5000);

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.get("/", (req, res) => {
  res.send({hi: "there"})
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
