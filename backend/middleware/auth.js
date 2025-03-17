import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    // ✅ Extract token from Authorization header
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    // ✅ Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded Token:", decoded); // 🔍 Debugging

    // ✅ Attach user ID & name to request
    req.user = { id: decoded.id, name: decoded.name };

    console.log("Authenticated User:", req.user); // 🔍 Debugging

    next();
  } catch (error) {
    console.error("Auth Error:", error);
    return res.status(401).json({
      success: false,
      message: "Invalid Token. Please Login Again.",
    });
  }
};

export default authMiddleware;
