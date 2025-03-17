import userModel from "../models/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User Doesn't exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Password" });
    }

    const token = createToken(user); // ✅ Pass the full user object

    console.log("Generated Token:", token);
    console.log("Decoded Token (Before Sending):", jwt.decode(token));
    res.json({ success: true, message: "Login Success", token, user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
const createToken = (user) => {
  return jwt.sign(
    { id: user._id, name: user.name }, // ✅ Include `name`
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// Register User
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    // ✅ Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // ✅ Validate email format & password strength
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password should be at least 8 characters",
      });
    }

    // ✅ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ✅ Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // ✅ Generate JWT Token including name
    const token = createToken(user); // ✅ Pass the actual user object
    // ✅ Pass the full user object
    console.log("Generated Token:", token);

    res.json({ success: true, token, name: user.name, user }); // ✅ Send name along with token
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error registering user" });
  }
};

export { loginUser, registerUser };
