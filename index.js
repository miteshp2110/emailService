const express = require('express');
const routes = require('./routes/routes.js')
const consumeMail = require("./utils/consumer")
const app = express();


const port =  process.env.PORT ;
app.use(express.json());

app.use("/send",routes)

consumeMail()

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

