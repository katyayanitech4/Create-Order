const express = require('express');
const easyecominvoice = require("./routes/createorder.js");

const app = express();
app.use(express.json());
app.use("/createorder", easyecominvoice);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 