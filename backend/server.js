const express = require("express");
const app = express();
const port = process.env.PORT || 3012;
//const vm = require("v-response");
//const morgan = require('morgan');
const mongoose = require("mongoose")
app.use(express.json());
//app.use(morgan('dev'));
const database = 'mongodb://localhost:27017/Sakshi';

mongoose.connect((database), {
    //useUnifiedTopology: true,
    //useFindAndModify: false,
    useNewUrlParser: true,
    //useCreateIndex: true,
})
    .then(async () => {
        console.log("connected to database", database);
    })
    .catch(err => console.log("error mongodb", err));


app.listen(port, () => console.log("server running on port:", port));