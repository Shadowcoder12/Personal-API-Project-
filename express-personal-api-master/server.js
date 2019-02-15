// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Checking to see if i am Awake
let today = new Date().getHours();
var wakey;

 function leoAwake () {
if (today >= 8 && today <= 22) {
wakey = true; }
else {
wakey = false; }

 }

 leoAwake();

 // HARD CODED PERSONAL API INFOMATION
 
const personalInfo = {
firstName: "Leonardo",
lastName: "Fontenette",
githubUsername: "lfonzi62",
githubLink: "https://github.com/lfonzi62",
githubProfileImage:" ",
personalSiteLink: "http://www.leonardo-fontenette.com/",
currentCity:"Oakland",
pets:[
{ breed:" Red Toy poddle", name: "bella", attitude:"Sassy", size:"smal"},
{breed:"Savanah Cat", name:"Rusty", attitude:"Crazy!!", size:"medium" }, ],
isAwake: wakey

}
/************
 * DATABASE *
 ************/

const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/lfonzi62", // CHANGE ME
    baseUrl: "https://still-dusk-90598.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  })
});

app.get('/api/profile', (req,res) => {
  res.json(personalInfo) ;
})
// SHOW ALL THE WISHES
app.get('/api/wish', (req ,res) => {
  
  db.Wish.find({}, (err, wishList) => {
    if (err) {
    console.log(err);
    }
    console.log(`Server route: ${wishList}`);
    res.json(wishList);
    });
})


// get one WISH depending on the id 

app.get('/api/wish/:id', function (req, res) {
  // find one book by its id
  let wishId = req.params.id;
  // grabs the id for the browser and then populates the Wish field with the relavent data 
  db.Wish.findOne({ _id: wishId} , (err, foundWish) =>  {
    res.json(foundWish);
  });    
});

// creating a new WISH
app.post('/api/wish', (req, res) => {
  let newWish = new db.Wish({
    item: req.body.item,
    description: req.body.description,
    price: req.body.price,
    websiteLink: req.body.websiteLink,
  });

  newWish.save((err, savedWish) => {
    if (err) throw err;
    // logs the saved Wish
    console.log(savedWish);
    // redirects the user to all of the wishes
    res.redirect('/api/wish');
  })
}) 


// UPDATING WISH 
app.put('/api/wish/:id', (req,res) => {

  let wishId = req.params.id;
  db.Wish.findByIdAndUpdate({_id: wishId}, req.body, {new:true})
  .exec((err, updatedWish) => {
    if (err) throw err;
    res.json(updatedWish);
  })
})

// DESTROY WISH
app.delete('/api/wish/:id', (req, res) => {
let wishId = req.params.id;
db.Wish.findByIdAndRemove({_id:wishId})

.exec((err, deletedWish) => {
if (err) throw err;
res.json(deletedWish);
})

})
/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
