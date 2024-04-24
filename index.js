const express = require('express');
const easyecominvoice = require("./routes/createorder.js");

const app = express();
app.use("/createorder", easyecominvoice);