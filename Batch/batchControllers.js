const batchServices = require('./batchServices');
const { S3Client } = require('@aws-sdk/client-s3')
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require('aws-sdk');
const sharp = require("sharp");
const { nanoid } = require("nanoid");

let s3 = new S3Client({
    region: process.env.REGION_BUCKET_WS_S3,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
  });

var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: process.env.NAME_BUCKET_S3,
      metadata: function (req, file, cb) {
        cb(null, Object.assign({}, req.body));
      },
      key: function (req, file, cb) {
        cb(null, nanoid(9) + ".jpg");
      }
    })
  })


const crearBatch = async (req, res) => {
    try{

        const imageDefault = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHfZ4JbUxef1QgAWot_G9lY5vDeGw1MFYMIA&usqp=CAU"
        const images = [];

        if(req.files){
            req.files.map( (image) => images.push(image.location));
        };

        const newBatch =  {
            nroOfBatch : req.body.nroOfBatch,
            status: req.body.status,
            images: req.files !== [] || req.files !== undefined ? images : [imageDefault],
            dateInitial: req.body.dateInitial,
            amount: req.body.amount,
            serial: req.body.serial, 
            delivered: req.body.delivered,
            actaDeSalida: req.body.actaDeSalida,
            deliveredTo: req.body. deliveredTo
        };

        const resServices = res.send(await batchServices.createBatch(newBatch));
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    };
};







module.exports = { upload,  crearBatch };