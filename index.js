const express = require('express');
const routes = require('./routes/routes.js')
const app = express();


const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/send",routes)


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

