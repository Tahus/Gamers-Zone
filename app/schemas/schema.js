const Joi = require('joi');

const schema = Joi.object({
    id: Joi.number()
        .integer(),
    name: Joi.string()
        .min(5)
        .max(8)
        .required(),
    password: Joi.string()
        .regex(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    repeat_password: Joi.ref('password'),
    email: Joi.string()
        .required(),
    birth_date: Joi.string()
        .min(10)
        .max(10)
        .required(),

});
module.exports = schema;