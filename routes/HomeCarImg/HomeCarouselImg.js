const router = require('express').Router();
const mongoose = require('mongoose')
const { body, validationResult } = require('express-validator');
const multer  = require('multer')

// importing Models 
const HomeCarousel = require('../../models/HomeCarousel');
const FetchAdmin = require('../../middlewares/FetchAdmin');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/homeImg/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now().toString()+ '_'+file.originalname)
    }
})

const upload = multer({ storage : storage })

//Route :: Add Home Carousel Image :: Admin Protected Route
router.post('/addHomeCarImg', FetchAdmin, upload.array('images',5), async(req,res)=>{
    const errors = validationResult(req);
    try{
        if(!req.body.productImg){
            return res.status(400).json({success:false,msg:"Image Required"});
        }
        else{
            let craImg = new craImg({
                img:req.files.map(element=>{
                    return element.path
                })
            })
            let newCraImg = await craImg.save(); 
            return res.status(200).json({success:true,data:newCraImg});
    } 
    } catch(error){
        console.log(error.message);
        res.status(500).json({success:false, msg:'Internal Server Error'})
    }
})

module.exports = router;