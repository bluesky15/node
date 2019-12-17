"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
//const path = require('path');
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname + '/../../client/build')));
const port = 3000;
app.get('/', (req, res) => {
    //res.send('The sedulous hyena ate the antelope!');
    res.sendFile(path_1.default.join(__dirname + '/../../client/build/index.html'));
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
