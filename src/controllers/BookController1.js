const bookModel=require("../models/BookModel1")

const bookCreate= async function(req,res){
    const createBook=await bookModel.create(req.body)
    res.send({data:createBook})
}
module.exports.bookCreate=bookCreate


const getBook=async function(req,res){

    const data=req.body
    const {bookName,authorName}=data
    const findBook=await bookModel.find({$or:[{bookName:bookName},{authorName:authorName}]})
    res.send({data:findBook})
}

module.exports.getBook=getBook

const getBookInYear=async function(req,res){
    const findBookYear=await bookModel.find({year:req.body.year})
    res.send({data:findBookYear})

}
module.exports.getBookInYear=getBookInYear

const getparticularBook= async function(req,res){
       const data=req.body
       let findBook=await bookModel.find({data})
       res.send({msg:findBook})
}
module.exports.getparticularBook=getparticularBook
                  
const getBookByINR=async function(req,res){
    
    let findBook=await bookModel.find({"price.IndianPrice":{$in:["100","200","500"]}}).select({bookName:1,_id:0})
    res.send({data:findBook})
}
module.exports.getBookByINR=getBookByINR

const getRandomBooks=async function(req,res){
    const findBook=await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({data:findBook})

}
module.exports.getRandomBooks=getRandomBooks