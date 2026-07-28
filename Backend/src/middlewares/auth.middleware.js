const jwt = require("jsonwebtoken");


async function identifyUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "User not authenticated" });
    }

    let decoded = null;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(401).json({ message: "user not authorized" });
    }

    req.user = {
        email: decoded.email,
        username: decoded.username
    };

    next();
}



module.exports = identifyUser
