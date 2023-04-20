const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Register a user
//route Post /api/users
//access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable = await User.findOne({ email })
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }
    res.json({ message: "Register the user" });
});

//@desc Login user
//route Post /api/login
//access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login user" });
});

//@desc current user information
//route Get /api/current
//access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };

