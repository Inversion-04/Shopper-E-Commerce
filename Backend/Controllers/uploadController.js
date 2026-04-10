const uploadImage = (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${process.env.PORT || 4000}/images/${req.file.filename}`
    })
}

module.exports = {
    uploadImage
}