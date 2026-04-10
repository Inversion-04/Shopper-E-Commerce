require("dotenv").config()
const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

// signup
const signup = async (req, res) => {
    let check = await User.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ succes: false, errors: "User with this email already exists" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });

    await user.save();

    const data = {
        user: {
            id: user.id,
        }
    }

    const token = jwt.sign(data, secret);
    res.json({ success: true, token });
};

// login
const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
        const passCompare = req.body.password === user.password;

        if (passCompare) {
            const data = {
                user: {
                    id: user.id,
                }
            }

            const token = jwt.sign(data, secret);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, errors: "Invalid Password" });
        }
    } else {
        res.json({ success: false, errors: "User with this email does not exist" });
    }
};

module.exports = {
    signup,
    login
}