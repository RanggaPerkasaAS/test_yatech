const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

//call router pengobatan
const pengobatan = require("./routers/pengobatan")
app.use("/pengobatan",pengobatan)

app.listen(8000,()=>{
    console.log(`Server run on port 8000`)
})