const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already exists"],
        required: [true, "Username is required"],
    },

    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"],
    },

    password: {
        type: String,
        required: [true, "Password is required"],
    },

    bio: {
        type: String,
    },

    profilePicture: {
        type: String,
        default: "https://ik.imagekit.io/7bua4ghrw/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg_semt=ais_hybrid&w=740&q=80",
    },

    isPrivate: {
        type: Boolean,
        default: false, // By default, the account is "public". But if the user wants to make it private, they can change it to "true".
    },

});

const User = mongoose.model("User", userSchema);

module.exports = User;