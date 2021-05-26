const mongoose = require('mongoose')


//Create Schema
const homeSchema = new mongoose.Schema({
    neighborhood: {type: String,
            required: true
        },
    cost: {type: Number,
           developer: String
        },
        developer: {type: String},
    category: {
               type: String,
               enum: ["modern", "traditional", "tudor", "ranch"],
            },
    purchaseLot: Number,
    imageUrl: String,
    description: String,
    tags: Array
})

const Home = mongoose.model('Home', homeSchema);
module.exports = Home;