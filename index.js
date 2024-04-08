const express = require('express');
const app = express();
const fileUpload = require("express-fileupload");
const {fileRouter}=require('./routes/file')
require('dotenv').config();
const cloudinaryConnect=require('./config/cloudnaryconfig');




const dbConnnect=require('./config/database');
dbConnnect();

app.use(express.json());
app.use(fileUpload(
    {
        useTempFiles: true,
        tempFileDir: '/tmp/',
        createParentPath: true,
    }
));
app.use('/api/v1',fileRouter);

app.use(express.json());

cloudinaryConnect();

app.get('/', (req, res) => {
    res.send('Welcome to file upload API');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});