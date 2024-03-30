const express = require("express");
let fs = require("fs");
const app = express();

const port = 3000;

// readFileAsncronasly: non-bloking;

fs.readFile('./greeting.txt','utf8',(err, data) =>{
    if(err){
        console.log("Its a errr", err);
        return0;
    }
    console.log(data);
})

//readFileSncronasly: bloking;

try{
    const data = fs.appendFileSync('./greeting.txt', 'utf8');
    console.log(data);
}catch (err){
    console.err(err);
}

// createfileAscronaly; non-bloking;

const content = "Vishal Ashok Babar";

fs.writeFile('name.txt',  content, (err, data) =>{
         if(err){
            console.log(err);
         }
         console.log(data);
})

// createfileScronasly: Bloking;

try{
    const data = fs.writeFileSync('name.txt', 'utf8');
    console.log(data); 
}catch(err){
    console.error(err);
}

app.get('/', (req, res) =>{
      res.send("Hy ITs me Home page");
})

app.get('/About', (req, res) =>{
    res.send("hy Its About page");
})

app.get('/Contact', (req, res) =>{
    res.send("hy Its contact page");
})



app.listen(port, () =>{
    console.log("Its Working");
})