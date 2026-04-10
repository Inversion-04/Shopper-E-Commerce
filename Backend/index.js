const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require("cors");

dotenv.config();


const connectDB = require('./Config/db');

const productRoutes = require('./Routes/productRoutes');
const userRoutes = require('./Routes/userRoutes');
const cartRoutes = require('./Routes/cartRoutes');
const uploadRoutes = require('./Routes/uploadRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://shopper-e-commerce-gilt.vercel.app"
  ],
  credentials: true
}));

// DB
connectDB();

app.get('/', (req, res) => {
    res.send("Server is Running Successfully");
});

// static images folder
app.use('/images', express.static(path.join(__dirname, 'upload/images')))


// Routes
app.use('/', productRoutes);
app.use('/', userRoutes);
app.use('/', cartRoutes);
app.use('/', uploadRoutes); 

app.listen(PORT, () => {
    console.log(`Server Connected Successfully at PORT ${PORT}`);
});