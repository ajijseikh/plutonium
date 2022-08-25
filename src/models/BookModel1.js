const mongoose=require("mongoose");

const bookSchema1=new mongoose.Schema({
    bookName:{type:String,required:true},
    price:{
        IndianPrice:String,
        EuropeanPrice:String
    },
    year:{type:Number,default:2021},
    tags:[String],
    authorName:String,
    totalPages:Number,
    stockAvailable:Boolean
},{timestams:true})

module.exports=mongoose.model("BookCollection",bookSchema1)