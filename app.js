const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
var ip = require('ip');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
const port = process.env.PORT || 3000;

console.log(ip.address());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const uploadImg = multer({storage: storage}).single('image');

app.get('/', (req, res) => {
  return res.status(200).send({message: 'welcome to show'});
});

app.post('/upload', uploadImg, (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send({message: 'Please upload a file.'});
  }

  return res.status(200).send({message: 'File Upload Successfuly'});
});

app.listen(port);
