const express=require('express');
const router=express.Router();

const {localFileUpload,fileUploadtoCloudnary}=require('../controller/file-controller');

router.post('/local-file-upload',localFileUpload).
post('/file-upload-cloudnary', fileUploadtoCloudnary);

module.exports.fileRouter=router;