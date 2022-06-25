const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
const port = 3000
const api = 

app.get('/', (req, res) => 
{
    res.sendFile(__dirname +"/cal.html");
});
app.post("/",(req,res)=>{
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let num3 = num1 + num2;
``
    res.send("answer " + num3);
});
app.get('/bmi', (req, res) => 
{
    res.sendFile(__dirname +"/bmi.html");
});
app.post("/bmi",(req,res)=>{
    let w = parseFloat(req.body.w);
    let h = parseFloat(req.body.h);
    
    let bmi = w / (h*h);
    res.send("ans= "+bmi);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))