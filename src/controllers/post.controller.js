const { Mongoose } = require('mongoose');
const Post = require('../schema/post.schema');
const { check, validationResult } = require('express-validator');
const { checkValidation, isValid } = require('../Validaton/checkValidation');

module.exports.createPost = async (req, res) => {
    // TODO: Task #2

    const {userId, title, description } = req.body;

    if(!Mongoose.Types.ObjectId.isValid(userId)){
        return res.json("error");
    }

    //checkValidation
    // isValid
    
    const newPost = new Post({
        userId,
        title,
        description
    })
    try{
        await newPost.save();
        return res.status(201).json(newPost);
    } catch(error){
        res.status(409).json(error);
    }
}

    // res.status(501).json({
    //     error: "Not implemented"
    // })