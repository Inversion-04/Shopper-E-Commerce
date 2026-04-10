const User = require('../Models/User');

// add to cart
const addToCart = async (req, res) => {
    console.log("Added", req.body.itemId)
    console.log(req.body, req.user)

    const userData = await User.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;

    await User.findOneAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData }
    );

    res.json({ success: true, message: "Added To Cart Successfully" });
};

// remove from cart
const removeFromCart = async (req, res) => {
    console.log("removed", req.body.itemId)

    const userData = await User.findOne({ _id: req.user.id });

    if (userData.cartData[req.body.itemId] > 0)
        userData.cartData[req.body.itemId] -= 1;

    await User.findOneAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData }
    );

    res.json({ success: true, message: "Removed From Cart Successfully" });
};

// get cart
const getCart = async (req, res) => {
    console.log("GetCart");

    const userData = await User.findOne({ _id: req.user.id });
    res.json(userData.cartData);
};

module.exports = {
    addToCart,
    removeFromCart,
    getCart
};