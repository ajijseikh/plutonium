const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
 const moment=require("moment")


const orderSchema = new mongoose.Schema( {
    userId:{type:ObjectId,
        ref:"user1"},
	productId: {type:ObjectId,
        ref:"product"},
	amount:Number,
	isFreeAppUser:Boolean, 
	 date:{type:String,
         default:moment().format('DD-MM-YYYY')}

}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)
