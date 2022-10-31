// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var router = express.Router();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});




app.get("/api/:date", function(req, res) {
  const time = req.params.date;
  const time1 = parseInt(time);
  console.log(time);
  let utc, unix; 




  if((new Date(time1)).toString() === "Invalid Date")
  {
    res.json({ error : "Invalid Date" });
    return;
  }




  
  if(time.indexOf('-') === -1 && time.indexOf(" ")=== -1){
    time2 = parseInt(time);
    unix = time2;
    utc = (new Date(time2)).toUTCString();
  }

    
  else {
      unix = (new Date(time)).getTime()
      utc = (new Date(parseInt(unix))).toUTCString();
  }
 res.json({unix,utc});
  
});



 //only returns time in Unix
app.get("/api/", function(req, res){

  res.json({ unix: (new Date()).getTime(),
            utc : (new Date()).toUTCString()});
  return;

  
})

  



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
