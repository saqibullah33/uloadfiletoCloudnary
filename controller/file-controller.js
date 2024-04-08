const File = require('../model/file');
const cloudinary = require("cloudinary").v2;
const isFileTypeSupported = require('../utils/isfilesupported');
const uploadFileToCloudinary = require('../utils/uploadToCloudnary');


//local file upload

const localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        // let path= __dirname+ '/uploads/' +file.name+Date.now()+`.${file.name.split('.')[1]}`
        const path = __dirname + `/uploads/${file.name}`
        file.mv(path, async (err) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            }
        })


        console.log(file);
        res.send(file.name)
    } catch (error) {
        res.send(error.message)
    }
}


const fileUploadtoCloudnary=async(req,res)=>{
    const file=req.files.file;
    const filetype=file.name.split('.')[1].toLowerCase();
    console.log("file",file);
    const isSupported=isFileTypeSupported(filetype);
    if(!isSupported){
        return res.status(400).send('File type not supported');
    }
    const folder='FileUpload';

    try{
        const uploadedFile=await uploadFileToCloudinary(file,folder,10);
        const newFile=new File({
            fileUrl:uploadedFile.secure_url
        });
        const savedFile=await newFile.save();
        res.status(201).send(savedFile);
    }
    catch(error){
        console.log(error);
        res.status(500).send(error.message);
    }

}

module.exports = {
    localFileUpload,
    fileUploadtoCloudnary
}