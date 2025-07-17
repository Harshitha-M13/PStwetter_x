const express = require("express") ;
const app = express() ;
const port = 333 ;
const path = require("path") ;
const twetterPSdata = require("../PSdata.json") ;

app.set("view engine" , "ejs") ;
app.set("views" , path.join(__dirname ,"views")) ;
app.use(express.static(path.join(__dirname , "public"))) ;

app.use((req , res , next) => {
    console.log(`ParvatiammaShivappa , request received`) ;
    next() ;
});

app.get("/PSx.com/posts" , (req ,res) => {
    let data = twetterPSdata ;
    res.render("home.ejs" , { data }) ;
});
app.get("/PSx.com/posts/form" , (req , res) => {
    res.render("../../PS-Frontend/updateEntirePostPS") ;
})
app.listen(port , () => {
    console.log(`ParvatiammaShivappa , our server is listening on port no ${port}`) ;
}) ;