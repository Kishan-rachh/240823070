const Joi = require("joi");
exports.createValidator=Joi.object({
    name:Joi.string().min(3).max(30).required(),
    price:Joi.number().min(0).required(),

});

exports.updateValidator=Joi.object({
    name:Joi.string().min(3).max(30).optional(),
    price:Joi.number().min(0).optional(),

});

exports.validate=(schema,data)=>{
    const{error,value}=schema.validate(data,{abortEarly:false});
    if(error){
        return{
            success:false,
            errors:error.details.map((err)=>({
                field:err.path[0],
                message:err.message,
            })),
        };
    }
    return {success:true,value};
}