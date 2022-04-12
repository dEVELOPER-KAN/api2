const req = require('express/lib/request');
const Product = require('../model/Product')

exports.retrieve = async (request, response, next) => {
    const products = await Product.find();
    response.status(200).json({
        "status": "success",
        "data": products
    })
    next();
}

exports.save = async (request, response, next) => {
    const { title, description, vendor, variants } = request.body;
    const product = await new Product({
        'title': title,
        'description': description,
        'vendor': vendor,
        'variants': variants
    });
    const data = await product.save({ new: true });
    response.status(200).json({
        "status": "success",
        "data": data
    })
    next();
}

exports.delete = async (request, response, next) => {
    const product = await Product.findByIdAndDelete(request.params.id,{ new: true })
    response.status(200).json({
        "status": "success",
        "data": product
    })
    next();
}

exports.update = async (request, response, next) => {
    var props = Object.keys(request.body);
    if (props.length > 0 && props.indexOf('title') == -1) {
        response.status(401).json({
            "status": "failure",
            "message": "Only title updation is allowed for products"
        })
    }
    else {
        const products = await Product.findByIdAndUpdate(request.params.id, {
            title: request.body.title
        },{ new: true });

        response.status(200).json({
            "status": "success",
            "data": products
        })
    }

    next();
}