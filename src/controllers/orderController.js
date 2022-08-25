
const orderModel = require("../models/orderModel")

const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const orderCreate = async function (req, res) {
    let data = req.body
    let {
        userId,
        productId
    } = data
    const findUserAmount = await userModel.findById(userId).select({
        balance: 1,
        _id: 0
    });
    const findProductPrice = await productModel.findById(productId).select({
        price: 1,
        _id: 0
    })
      console.log(findUserAmount.balance, findProductPrice)
    let header = req.headers.isfreeappuser
    // console.log(header)
    header = header.toLowerCase()
    if (header === "true") {
        req.body.isFreeAppUser = true
        req.body.amount = 0

    } else if (header === "false") {

        if (findUserAmount.balance > findProductPrice.price) {
            let amount = findUserAmount.balance - findProductPrice.price
            await userModel.updateOne({
                _id: userId
            }, {
                balance: amount
            })
            req.body.amount = findProductPrice.price
            req.body.isFreeAppUser = false
        } else {
            return res.send({
                msg: " you have don't sufficient balance"
            })
        }
    }

    let order = await orderModel.create(req.body)
    res.send({
        data: order
    })


}


module.exports.orderCreate = orderCreate




























































// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }






// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }



// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor