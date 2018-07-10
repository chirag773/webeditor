
var express           = require('express');
var app               = express();
var bodyParser        = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));



app.get("/",(req,res)=>{
	var html = "";
	var css  = "";
	var javascript = "";
	res.render("home",{html,css,javascript})
})



app.post("/",(req,res)=>{
	var html = req.body.html;
	var css  = req.body.css;
	var javascript   = req.body.javascript;
	res.render("home",{html:html,css:css,javascript:javascript})
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});