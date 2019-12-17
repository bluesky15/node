import { Request, Response, Application } from 'express';
import express from 'express';
import path from 'path'

const app: Application = express();
app.use(express.static(path.join(__dirname+'/../../client/build')))
const port = 3000;
app.get('/', (req, res) => {
  //res.send('The sedulous hyena ate the antelope!');
  res.sendFile(path.join(__dirname+'/../../client/build/index.html'))
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});