const Usermodel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerControl(req, res) {
    const { username, email, password, bio, profilePicture } = req.body;

    const isUserExistbyUsername = await Usermodel.findOne({ username });

    if (isUserExistbyUsername) {
        return res.status(400).json({ message: "User already exists" });
    }

    const isUserExistbyEmail = await Usermodel.findOne({ email });

    if (isUserExistbyEmail) {
        return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Usermodel.create({
        username,
        email,
        password: hashedPassword,
        bio,
        profilePicture,
    });


    const token = jwt.sign({
        id: user._id,
        username: user.username,
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully", user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profilePicture: user.profilePicture,
        }
    });

}
async function loginControl(req, res) {
    const { username, email, password } = req.body;
    const user = await Usermodel.findOne({
        $or: [
            {
                username: username
            },
            {
                email: email
            },
        ]
    });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username,
    }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profilePicture: user.profilePicture
        },
        token,
    });
}

async function getMeControl(req, res) {
    const userId = req.user.id;
    const user = await Usermodel.findById(userId);
    res.status(200).json({
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profilePicture: user.profilePicture
        }
    });
}

module.exports = {
    registerControl,
    loginControl,
    getMeControl
}
