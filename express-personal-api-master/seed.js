// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

// const LouieWish = {
//     item: "Lou Spike men Shoes",
//     description:"Designer Shoes",
//     price: 1200,
//     websiteLink: "http://us.christianlouboutin.com/us_en/shop/men/lou-spikes-men-s-flat.html"
// }


// db.Wish.create(LouieWish, (err, louieshoes) => {
// if (err) return err;
// console.log(`Created a new wish ${louieshoes} `);
// process.exit();
// })

db.Wish.find({ }, (err, wishList) => {
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
