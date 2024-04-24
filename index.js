const express = require('express');
const easyecominvoice = require("./routes/createorder.js");
const easyecomcreditnote = require("./routes/easyecomcreditnote.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/createorder", easyecominvoice);
app.use("/easyecomcreditnote", easyecomcreditnote);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 