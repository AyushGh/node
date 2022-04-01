const { check, validationResult } = require('express-validator');


exports.checkValidation = [
    check("title").isString(),
    check("title").isLength({ min: 10 }),
    check("description").isString(),
    check("description").isLength({ min: 50 }),
];

exports.isValid = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({ errors })
    }
    next();
}