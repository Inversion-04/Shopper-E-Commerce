const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Product = require('./Models/Product');
const multer = require('multer');
const path = require('path');
//using this path we can get access to backend directory in our express app

const cors = require("cors")
//it helps to connect frontend and backend

const app = express();
const PORT = 4000;

app.use(express.json());
// to accept json data from frontend to backend
app.use(cors());

//Database Connection with mongoDB
mongoose.connect("mongodb+srv://ritiksaxena164_db_user:I7CGjCF9K3FQjcG9@cluster0.ahlxnzr.mongodb.net/shopper")
.then(()=>{
    console.log("MongoDB Connected Successfully");
})
.catch((err)=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    res.send("Server is Running Successfully");
})

//Image storage Engine 
//if any image is uploaded it will be stored in upload/images folder

const storage = multer.diskStorage({
    destination : './upload/images',
    // specifying destination folder
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }   
})

// filename is a function which takes 3 parameters
// req -> request object
// file -> file which is being uploaded
// cb -> callback function to specify the file name
// path.extname() -> it will give us the extension of the file
// Date.now() -> it will give us the current timestamp to make the file name unique
// file.fieldname -> it will give us the name of the field in the form which is used to upload the file
// file.originalname -> it will give us the original name of the file
// cb -> callback function which takes 2 parameters
// first parameter is error if any
// second parameter is the file name which we want to save in the database

const upload = multer({storage:storage})
// configuration for multer to specify the storage engine

app.use('/images',express.static('upload/images'))
// to make the images folder static so that we can access the images from the browser

//Creating upload EndPoint for images
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success : 1,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    })
})

// image_url is only accessible beacause we have made the images folder static using express.static() middleware

//upload.single('product') -> it will accept a single file with the field name 'product'
//when the file is uploaded it will be stored in the destination folder specified in the storage engine with the file name specified in the storage engine user can access the file using req.file


// Creating EndPoint for adding product to the database

app.post('/addproduct',async(req,res)=>{
    //generating id from previous id
    let id;
    const products = await Product.find({});
    if(products.length>0){
        const last_product_array = products.slice(-1);
        //we used slice because it not give undefined for empty array ,it simple give empty array for array is empty, and if we use products[products.length-1] it will give us undefined for empty array
        const last_product = last_product_array[0];
        id = last_product.id + 1;
    }else{
        id = 1;
    }
    const product = new Product({
        id : id,
        name : req.body.name,
        image : req.body.image,
        category : req.body.category,
        new_price : req.body.new_price,
        old_price : req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("Product Added Successfully");
    // after saving the product to the database we are sending a response to the frontend with the name of the product which is added to the database
    res.json({
        success : true,
        name:`${product.name} added successfully`,
    })
})
//Endpoint for deleting a product from Databse
app.post('/removeproduct',async (req,res)=>{
    const id = req.body.id;
    const deletedProduct = await Product.findOneAndDelete({ id: id });
    // findOneAndDelete() -> it will find the document with the specified id and delete it from the database and return the deleted document
    res.json({
        success : true,
        name : `${req.body.name} removed successfully`,
    })
})

//Endpoint for getting all products from the database
app.get('/allproducts', async(req,res)=>{
    const products = await Product.find({});
    console.log("All products Fetched Successfully");
    res.json(products);
})

app.listen(PORT,()=>{
    console.log(`Server Connected Successfully at PORT ${PORT}`);
})
