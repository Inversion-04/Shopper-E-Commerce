const uploadImage = (req, res) => {
    res.json({
        success: 1,
        image: req.file.filename
    })
}

module.exports = {
    uploadImage
}