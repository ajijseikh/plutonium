const { count } = require("console")
const productModel= require("../models/productModel")

const productCreate= async function (req, res) {
    const product=await productModel.create(req.body)
    res.send({msg:product})
}

module.exports.productCreate= productCreate
