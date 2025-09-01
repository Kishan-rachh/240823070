const express = require("express");
const Router = express.Router();
const ProductsController = require("../Controller/ProductsController");
const {
    createValidator,
    updateValidator,
    validate,
} = require("../validators/ProductsValidator");

Router.get("/index1",ProductsController.index1);
Router.get("/show/:id", ProductsController.show);
Router.post("/store", (req,res,next)=>{

    const result = validate(createValidator,req.body)

    if(!result.success){
        return res.status(400).json({status:"error",errors:result.errors});
    }
    ProductsController.store(req,res,next);
});

Router.put("/update/:id", (req, res, next) => {
    const result = validate(updateValidator, req.body);
    if (!result.success) {
        return res.status(400).json({ status: "error", errors: result.errors });
    }
    next();
}, ProductsController.update);

Router.delete("/delete/:id", ProductsController.delete);

module.exports = Router;