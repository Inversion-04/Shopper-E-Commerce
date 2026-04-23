const Product = require("../Models/Product")

// Creating EndPoint for adding product to the database
const addProduct = async (req, res) => {
    let id;
    const products = await Product.find({});
    if (products.length > 0) {
        const last_product_array = products.slice(-1);
        const last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    console.log(product);
    await product.save();
    console.log("Product Added Successfully");

    res.json({
        success: true,
        name: `${product.name} added successfully`,
    });
};

//Endpoint for deleting a product from Databse
const removeProduct = async (req, res) => {
    const id = req.body.id;
    const deletedProduct = await Product.findOneAndDelete({ id: id });

    res.json({
        success: true,
        name: `${req.body.name} removed successfully`,
    });
};

//Endpoint for getting all products from the database
const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    console.log("All products Fetched Successfully");
    res.json(products);
};

// new collections
const newCollections = async (req, res) => {
    const products = await Product.find({});
    const newCollections = products.slice(1).slice(-8);
    console.log("New Collections Fetched Successfully");
    res.send(newCollections);
};

// popular women
const popularInWomen = async (req, res) => {
    const products = await Product.find({ category: "women" });
    const popular_in_women = products.slice(0, 4);
    console.log("Popular In Women Products Fetched Successfully");
    res.send(popular_in_women);
};

// related products
const relatedProducts = async(req,res)=>{
    const products = await Product.find({});
    const displayedProducts = products.slice(0,4);
    res.send(displayedProducts);
}

module.exports = {
    addProduct,
    removeProduct,  
    getAllProducts,
    newCollections,
    popularInWomen,
    relatedProducts,
};
