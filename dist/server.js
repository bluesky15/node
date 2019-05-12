"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const express = require('express')
var cors = require('cors');

var app = (0, _express["default"])();
var port = 4200;

var upload = require('express-fileupload');

app.use(cors()); //const http = require('http').Server(app).listen(port)

app.use(upload());
app.use(_express["default"]["static"](__dirname + '/../public'));
app.post('/upload', function (req, res) {
  if (req.files) {
    var file = req.files.filename,
        filename = file.name;
    file.mv(__dirname + "/../upload/" + filename, function (err) {
      if (err) {
        console.log(err);
        res.send("file upload error!!");
      } else {
        res.json({
          "status": "success"
        });
      }
    });
  }
}); //console.log(__dirname);

app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});