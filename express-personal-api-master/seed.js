// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// HEROKU BASH SEEDING
// make changes to local seed files first, then push file changes to heroku "push origing heroku master"
// then run following command.  1. heroku run bash 2. node seed.js
const db = require('./models');


// Array of different wish items

const wishList = [
    {
        item: "Lou Spike men Shoes",
        description:"Designer Shoes",
        price: 1200,
        websiteLink: "http://us.christianlouboutin.com/us_en/shop/men/lou-spikes-men-s-flat.html"
    },
    {
        item:"Monclier maya jacket",
        description:"overpriced puffer coat",
        price: 1400,
        websiteLink:"https://store.moncler.com/en-us/outerwear_cod10045112022146586.html?gclid=EAIaIQobChMIosGyvaa84AIVciCtBh3SzQ01EAQYAiABEgLZUPD_BwE&gclsrc=aw.ds&tp=70950"
    },
];

// SEEDING THE DATA IN THE DB

db.Wish.deleteMany({}, function(err, Wish) {
console.log(`Deleted ${Wish.length} ${Wish}`);
db.Wish.create(wishList, (err, wishes) => {
    if (err) return err;
    console.log(`Created ${wishes.length} wishes`);
    process.exit();
});
})

// db.Wish.find({}, (err, wishList) => {
//     if (err) {
//     console.log(err);
//     }
//     console.log(wishList);
//     });

// ORIGINAL CREATE FUNCTION
//  db.Wish.create(wishList, (err, wishes) => {
//     if (err) return err;
//     console.log(`Created ${wishes.length} wishes`);
//     process.exit();
// });




    
// EXAMPLE

// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
