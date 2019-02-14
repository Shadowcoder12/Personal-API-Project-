// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

const LouieWish = {
    item: "Lou Spike men Shoes",
    description:"Designer Shoes",
    price: 1200,
    websiteLink: "http://us.christianlouboutin.com/us_en/shop/men/lou-spikes-men-s-flat.html"
}

// CREATING THE LOUIE SHOES IN THE DATABASE

// db.Wish.create(LouieWish, (err, louieshoes) => {
// if (err) return err;
// console.log(`Created a new wish ${louieshoes} `);
// process.exit();
// })

const monclierWish = {
    item:"Monclier maya jacket",
    description:"overpriced puffer coat",
    price: 1400,
    websiteLink:"https://store.moncler.com/en-us/outerwear_cod10045112022146586.html?gclid=EAIaIQobChMIosGyvaa84AIVciCtBh3SzQ01EAQYAiABEgLZUPD_BwE&gclsrc=aw.ds&tp=70950"
}

// db.Wish.create(monclierWish, (err, monclerJacket) => {
// if (err) return err;
// console.log(`Created a new wish ${monclerJacket} `);
// process.exit();
// })

db.Wish.find({}, (err, wishList) => {
    if (err) {
    console.log(err);
    }
    console.log(wishList);
    });



// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
