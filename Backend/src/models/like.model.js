const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: "users",
        required: [true, "Username is required"],
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: [true, "Post ID is required"],
    }
}, { timestamps: true });

likeSchema.index({ user: 1, post: 1 }, { unique: true });

const likeModel = mongoose.model("like", likeSchema);

module.exports = likeModel;