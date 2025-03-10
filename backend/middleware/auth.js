import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    try {
        // ✅ Extract token from Authorization header
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
        }

        // ✅ Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // ✅ Attach user ID to request
        req.body.userId = decoded.id;

        next();
    } catch (error) {
        console.error("Auth Error:", error);
        return res.status(401).json({ success: false, message: "Invalid Token. Please Login Again." });
    }
};

export default authMiddleware;
