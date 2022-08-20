
const bookModel= require("../models/bookModel")

const authorModel = require("../models/authorModel")


const createBook= async function (req, res) {
    let data= req.body

    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

module.exports.createBook=createBook;

const findOutBook=async function(req,res){

    let findout=await authorModel.find({author_name:"chetan bhagat"})
 
    let findBook=await bookModel.find({author_id:{$eq:findout[0].author_id}})
    res.send({msg:findBook})
}

module.exports.findOutBook=findOutBook;

const updatebook=async function(req, res){
    let findbook=await bookModel.find({name:"two state"}).select({author_id:1,_id:0});
    
    let findAuthor=await authorModel.find().select({author_id:1,_id:0});
    // console.log(findAuthor[0].author_name)
    let updateprice=await bookModel.findOneAndUpdate(
        {findbook:{$eq:findAuthor}},
        {$set:{price:100}},
        {new:true},
        )

        res.send({msg:updateprice,})
}
module.exports.updatebook=updatebook



const findCostBook=async function(req,res){
   
        let booksCost = await bookModel.find({ price : { $gte: 50, $lte: 100} } )
       
        let authorId = booksCost.map(x=> x.author_id)
        let authorName = await authorModel.find({booksCost:{$eq:authorId}}).select({author_name:1, _id:0})
        res.send({ msg: authorName, })
    }
    


module.exports.findCostBook=findCostBook






































































// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
