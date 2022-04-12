const mongoose = require('mongoose');
//const variants = require('./Variants')
const ProductSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "vendor": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "variants": [
        {
            "grams": {
                type: Number,
            },
            "price": {
                type: Number,
                required: true
            },
            "title": {
                type: String
            },
            "weight": {
                type: Number
            }
        }
    ]
},
    { timestamps: true }
);
const Product = new mongoose.model('product', ProductSchema);

module.exports = Product;