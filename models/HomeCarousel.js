const mongoose = require('mongoose'); 

const HomeCarousel = new mongoose.Schema({
    productImg : {
        type : Array,
        required: true
    }
})

module.exports = mongoose.model('HomeCarousel',HomeCarousel);