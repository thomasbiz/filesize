var express = require('express');
var multer  = require('multer')
var upload = multer();
var app = express();

app.post('/getFileSize', upload.single('file'), function(req, res) {
    if (!req.file) {
        res.status(400).send({error: 'How will I tell you the file size if you don\'t send me a file?'});
    } else {
        res.send({size: req.file.size});
    }
});

app.get('/', function(req, res) {
   res.sendFile('index.html', { root: __dirname + '/public'});
});

app.listen(process.env.PORT, function() {
    console.log('Listening on port ' + process.env.PORT);
})