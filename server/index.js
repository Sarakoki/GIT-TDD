const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../angular-client/')));

app.get('/cats', function (req, res) {
    db.Cat.find({},function(error,data){
  	if(error){
      console.log("error in find")
     	res.status(404).send("error in get");
  	}
  	else{
     	res.status(200).send(data)
  	}
  })

});

app.post('/cats', function (req, res) {
  db.save(req.body,function(data){
  	res.status(200).send();	
  })
  
})



let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
module.exports = app


