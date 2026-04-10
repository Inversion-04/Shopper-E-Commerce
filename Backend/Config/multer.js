const multer = require('multer');
const path = require('path');

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

module.exports = upload;