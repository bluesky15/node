import { Application, Request, Response } from "express";
import express from "express";
import path from "path";
import filewalker from "./src/fileWalker";

const app: Application = express();
app.use(express.static(path.join(__dirname + "/../../client/build")));
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../../client/build/index.html"));
});

app.get("/files", (req, res) => {
  // tslint:disable-next-line:max-line-length
  filewalker("/Users/lalitkumar.behera/code/LM/Android_app_v2/android_uat_appconfig/android/landmark", (err, data) => {
    if (err) {
        throw err;
    }
    res.send(data);
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
