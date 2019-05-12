import express from "express"
import cors from "cors"
import upload from "express-fileupload"

const app = express()
const port = 4200

app.use(cors())

app.use(upload())

app.use(express.static(__dirname+'/../public'))
app.post('/upload', (req, res) => {
    if (req.files) {
        var file = req.files.filename,
            filename = file.name
        file.mv(__dirname+"/../upload/" + filename, function (err) {
            if (err) {
                console.log(err)
                res.send("file upload error!!")
            } else {
                res.json({"status": "success"});
            }
        })
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))