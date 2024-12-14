let express=require('express');
let app=express();
let cors=require('cors');
require("dotenv").config();
app.use(cors());
app.use(express.json());
let upload=require('express-fileupload');
let bodyparser=require('body-parser');
let mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ruby:II2DBru3VNIRGUWY@cluster0.8blek.mongodb.net/ruby');

let api=require('./routes/api');
let path=require('path');
app.use(express.static("public/"));
let session=require('express-session');
app.use(session({
    resave:true,
    secret:'pratik',
    saveUninitialized:true
}))
app.use(upload());
app.use(bodyparser.urlencoded({extended:true}));
let admin=require("./routes/admin");
app.get("/",function(req,res){res.send("Welcome Back")});
app.use("/admin",admin);
app.use('/api',api);
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.listen(process.env.PORT || 1001);
