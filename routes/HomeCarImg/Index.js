const router = require('express').Router();


//importing home Image crousel routes
const carouselImg = require('./HomeCarouselImg'); 

router.use('/',carouselImg);

module.exports = router ; 