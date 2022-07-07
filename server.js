const express = require("express");
const app = express();

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

//app.use(cors(corsOpts));



app.use(express.static('client'));

app.listen(8000, () => {
  console.log("Application started and Listening on port 8000");
});

//allows images to be loaded
app.use(express.static(__dirname));

//display html page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/client/BeagleMusic.html");
});

//response to user submitting recommendation
app.post("/", (req, res) => {
    var subMusician = req.body.artist
    var subSong = req.body.song;
    res.send("Thank you for suggesting " + subSong + " to fans of " + subMusician);
  });


//json format list of songs linked to each artist
//rock
foo = [
  {"song1":"Zero - The smashing pumpkins"},
  {"song2":"Black hole sun - Soundgarden"},
  {"song3":"Go with the flow - Queens of the stoneage"}
]

app.get('/foo/list', function(req, resp){
  resp.send(foo);
});

GnR = [
  {"song1":"Dream on - Aerosmith"},
  {"song2":"Panama - Van Halen"},
  {"song3":"Crazy train - Ozzy Osborne"}
]
app.get('/GnR/list', function(req, resp){
  resp.send(GnR);
});


Oasis = [
  {"song1":"Bitter sweet symphony - The Verve"},
  {"song2":"Country House - Blur"},
  {"song3":"Waterfall - The Stone Roses"}
]
app.get('/Oasis/list', function(req, resp){
  resp.send(Oasis);
});

//pop
Ed = [
  {"song1":"All too well - Taylor Swift"},
  {"song2":"Treat you better - Shaun Mendes"},
  {"song3":"Stay with me - Sam Smith"}
]
app.get('/Ed/list', function(req, resp){
  resp.send(Ed);
});


ABBA = [
  {"song1":"Stayin' alive - The Bee Gees"},
  {"song2":"Club tropicana - Wham!"},
  {"song3":"Rasputin - Boney M"}
]
app.get('/abba/list', function(req, resp){
  resp.send(ABBA);
});
Elton = [
  {"song1":"Uptown girl - Billy Joel"},
  {"song2":"Mr Blue sky - ELO"},
  {"song3":"Let it be - The Beatles"}
]
app.get('/elton/list', function(req, resp){
  resp.send(Elton);
});


//folk
phoebe = [
  {"song1":"nightshift - Lucy Dacus"},
  {"song2":"First thing to go - Hayley Williams"},
  {"song3":"Paul - Big Thief"}
]
app.get('/phoebe/list', function(req, resp){
  resp.send(phoebe);
});
  dylan = [
    {"song1":"50 way to lose your lover - Paul Simon"},
    {"song2":"Brown eyed girl - Van morrison"},
    {"song3":"Wild World - Cat Stevens"}
  ]
  app.get('/dylan/list', function(req, resp){
    resp.send(dylan);
  });  

  mumford = [
    {"song1":"little talks - of monsters and men"},
    {"song2":"Ophelia - The lumineers"},
    {"song3":"Holoscene - Bon Iver"}
  ]
  app.get('/mumford/list', function(req, resp){
    resp.send(mumford);
  });



app.get('/dylan/list', function(req, resp){
  // resp.send(things);
  //console.log(dylan);
  resp.send(dylan);
  // if(thing == []){
  //   resp.send(folk);
  
  // }
  // else
  //   resp.status(404).json("sorry server is down");
})