const express = require('express');
const router = express.Router();

const upload = require('../Config/multer');
const { uploadImage } = require('../Controllers/uploadController');

// upload endpoint SAME
router.post("/upload", upload.single('product'), uploadImage);

module.exports = router;