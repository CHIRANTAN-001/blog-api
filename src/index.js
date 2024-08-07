const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogsRouter = require('./routes/blogs.js')
const connectDB = require('./db/index.js');
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
})

const app = express();

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERROR: ", error)
            throw error;
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT}`)
        })
    })
    
    .catch((err) => {
        console.log("MongoDB connection failed !!! ", err);
    })


app.use(bodyParser.json());
app.use('/api/blogs', blogsRouter);

