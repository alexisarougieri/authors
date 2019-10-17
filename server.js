const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = 9001;

const app = express();

app.use(bodyParser.json()); // important!

app.use(express.static(path.join(__dirname, './public/dist/public')));

require('./server/config/database');
require('./server/config/routes')(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
})

app.listen(PORT, function () {
    console.log(`Full mean on port ${PORT}`);
})