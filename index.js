const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ajunair0:GdtUExecYPdwbzc1@cluster0.7th9i25.mongodb.net/?retryWrites=true&w=majority");
const nocache = require("nocache");

const express = require("express");
const app = express();
const path=require('path')
//loding assets
app.use('/css',express.static(path.join(__dirname,"public/css")))
app.use('/img',express.static(path.join(__dirname,"public/img")))
app.use('/js',express.static(path.resolve(__dirname,"public/js")))
app.use('/js',express.static(path.resolve(__dirname,"public/lib")))
app.use('/js',express.static(path.resolve(__dirname,"public/scss")))

// app.use(nocache());

const disableBackButton = (req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store,must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '1');
      next();
  };


//for user routes
const userRoute = require('./routes/userRoute');
app.use('/',disableBackButton,userRoute);


//for admin routes
const adminRoute = require('./routes/adminRoute');
app.use('/admin',disableBackButton,adminRoute);


const port = 3000
app.listen(port, () => console.log(`Server started At http://localhost:${port}`))