const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000;
const careersRouter = require('./routers/careers')

app.use(careersRouter)

app.listen(port, () => {
    console.log(`server is running on port no: ${port}`)
})