const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require('express');
const path = require('path');

const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/crud')));

app.use(cookieParser());
app.use(cors());
app.options("*", cors());

// Redirect all the other resquests
app.get('*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(__dirname + `/dist/crud/${req.url}`));
    } else {
        res.sendFile(path.resolve(__dirname + `/dist/crud/index.html`));
    }
});

serverConfig = { port: 3011 };

app.listen(serverConfig.port, function () {
    console.log("reports.wallerapps.com app listening on port " + serverConfig.port);
});