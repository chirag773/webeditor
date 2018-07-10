
var express           = require('express');
var app               = express();
var bodyParser        = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));




app.get("/",(req,res)=>{
	var html = "";
	var css  = "";
	var javascript = "";
	res.render("home",{html,css,javascript})
})

// app.get("/run",(req,res)=>{
	
// 	res.render("run")
// })


app.post("/run",(req,res)=>{
	var html = req.body.html;
	var css  = req.body.css;
	var js   = req.body.javascript;
	res.render("run",{html:html,css:css,js:js})
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});