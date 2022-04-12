const Router = require('express').Router();
const ProductController = require('../controller/ProductController');
Router
    .get("/", ProductController.retrieve)
    .post("/", ProductController.save)
    .patch("/:id", ProductController.update)
    .delete("/:id", ProductController.delete);

module.exports = Router;