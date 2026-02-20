const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');   // JWT for token generation
const Register = require('../models/tables');


// ================= REGISTER =================
const registerUser = async (req, res) => {
    try {
        const { FullName, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const users = new Register({
            FullName,
            email,
            password: hashedPassword
        });

        await users.save();

        res.status(201).json({
            success: true,
            message: "Registration successful"
        });

    } catch (error) {
        console.log(error);

        res.status(400).json({
            success: false,
            message: "Registration unsuccessful"
        });
    }
};



// ================= LOGIN =================
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Register.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Login unsuccessful"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Login unsuccessful"
            });
        }

        // 🔐 TOKEN GENERATION
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,   // 👈 SEND TOKEN
            user
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports = {
    registerUser,
    loginUser
};
