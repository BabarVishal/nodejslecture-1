const express = require("express");
const app = express();
const port = 3000;
const db = require('./db');

 // Middleware to parse JSON bodies
 const bodyParser = require('body-parser');
 app.use(bodyParser.json());

 //personedata...
  const personeRouts = require('./router/personRoutes');
  app.use('/person', personeRouts);
 
// menudata
const menuroutes = require('./router/menuRoutes');
app.use('/menu',menuroutes);
  
 
//home page...
app.get('/', (req, res) =>{
      res.send('hy its working');
})


app.listen(port, () =>{
    console.log("Server Is Working");
})