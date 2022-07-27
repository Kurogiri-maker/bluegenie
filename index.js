const express = require('express');
const app = express();
const routes = require('./src/routes');
const mongoose = require('mongoose');
const cors = require("cors");



app.use(cors());
app.use(express.json());
app.use("/api/questions",routes);

app.get('/',(req,res)=> {
    res.send('Hello World');
});

//Connect to mongodb
mongoose.connect('mongodb://localhost/quiz')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDb...',err));

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port '+port +'..'));