const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Business =  new Schema({
        person_name:{
            type: String
        },
        business_name: {
            type: String
        },
        business_gst_number:{
            type: String
        },
        person_image: { 
            data: Buffer,
            contentType: String 
        }
    },{
        collection: 'business'
    });

module.exports = mongoose.model('Business',Business);