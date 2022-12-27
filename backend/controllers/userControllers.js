
const asyncHandler = require("express-async-handler");
const User = require("../model/UserModel");


const registerUser = asyncHandler(async (req,res) => {
    const {name, email, password, pic} = req.body

    if(!name || !email || !password){
        resizeBy.status(400);
        throw new Error("Please Enter all the details");
    }

    const userExists = await User.findOne({ email });

    if(userExists) {
        resizeBy.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
        });
    } else{
        res.status(400);
        throw new Error("Failed to Create an account")
    }
});

module.exports = { registerUser }