const express = require('express')
const app = express()
const port = 4200
const upload = require('express-fileupload')
//const http = require('http').Server(app).listen(port)
app.use(upload())
app.use(express.static(__dirname+'/../public'))
app.post('/', (req, res) => {
    if (req.files) {
        var file = req.files.filename,
            filename = file.name
        file.mv(__dirname+"/../upload/" + filename, function (err) {
            if (err) {
                console.log(err)
                res.send("file upload error!!")
            } else {
                res.send("Done!")
            }
        })
    }
})
//console.log(__dirname);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))