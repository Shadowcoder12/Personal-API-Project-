const mongoose = require('mongoose');
Schema = mongoose.Schema;

// getting the wishes model

const WishSchema =  new Schema ({
    item: String, 
    description: String,
    price: Number,
    websiteLink: String
    
})

const Wish = mongoose.model('Wish', WishSchema);
// making the Wish model avail to other files
module.exports = Wish;