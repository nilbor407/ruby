
let mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ruby:II2DBru3VNIRGUWY@cluster0.8blek.mongodb.net/');
let Schema=mongoose.Schema;
let company=new Schema({
    "name":String,
    "about":String,
    "instagram":String,
    "whatsapp":String,
    "facebook":String,
    "address":String,
    "email":String,
    "mobile":String,
    "youtube":String
})
let comapny_model=mongoose.model("Compay_details",company);
module.exports=comapny_model;