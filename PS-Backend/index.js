const express = require("express") ;
const app = express() ;
const port = 333 ;
const path = require("path") ;
let twetterPSdata = require("../PSdata.json") ;
const methodOverride = require("method-override") ;

app.set("view engine" , "ejs") ;
app.set("views" , path.join(__dirname ,"views")) ;
app.use(express.static(path.join(__dirname + "/public"))) ;
app.use(express.urlencoded( { extended : true } )) ;
app.use(methodOverride("_method")) ;
app.use(express.json()) ;

app.use((req , res , next) => {
    console.log(`ParvatiammaShivappa , request received`) ;
    next() ;
});

app.get("/PSx.com/posts" , (req ,res) => {
    res.render("home.ejs" , { twetterPSdata }) ;
});
app.get("/PSx.com/posts/new" , (req , res) => {
    res.render("../../PS-Backend/views/createNewPostPS.ejs");
}) ; 
app.post("/PSx.com/posts" , (req , res) => {
    let { username , postMessage , profilePicPS , postImage } = req.body ;
    let id = username ;
    let referedAs = "@" + id ; 
    let image = postImage ;
    twetterPSdata.forEach((PSdata) => {
        let rmKey = Object.values(PSdata)[0] ;
        if(rmKey.id === username) {
            rmKey.posts.push({
                                image,
                                likes : 0,
                                comments : 0
                            }) ;
        }
        else if((rmKey.id != username) && (rmKey.id != "dogs") && (rmKey.id != "cats")) {
            let newObjPS = {} ;
            newObjPS[username] = {
                    id,
                    referedAs,
                    profilePicPS,
                    postMessage,
                    posts : [
                        {
                            image,
                            likes : 0,
                            comments : 0
                        }
                    ]
            }
            console.log("parvatiammaShivappa") ;
            console.log(newObjPS) ;
            twetterPSdata.push(newObjPS) ;
        }
        console.log(twetterPSdata) ;
    }) ;
    res.redirect("http://localhost:333/PSx.com/posts") ;
}) ;
app.get("/PSx.com/posts/:username" , (req , res) => {
    let { username } = req.params ;
    let findId = twetterPSdata.find((PSdata) => {
        return PSdata[username] ;
    }) ;
    console.log(findId) ;
    res.render("showInDetail" , { findId }) ;
}) ;
app.get("/PSx.com/posts/:username/PSedit/PostMessage" , (req , res) => {
    let { username } = req.params ;
    let findId = twetterPSdata.find((PSdata) => {
        return PSdata[username]  ;
    })
    res.render("editPostMesPS" , { findId }) ;
}) ;
app.patch("/PSx.com/posts/:username/postMes" , (req , res) => {
    console.log(req.body) ;
    console.log(req.params) ;
    let { username } = req.params ;
    let PSnewPostMes  = req.body.postMessagePS ;
    let findId = twetterPSdata.find((PSdata) => {
        return PSdata[username] ;
    }) ;
    console.log(findId) ;
    findId[username].postMessage = PSnewPostMes ;
    res.redirect("/PSx.com/posts") ;
}) ;
app.get("/PSx.com/posts/:username/PSedit/PostImg" , (req , res) => {
    let { username } = req.params ;
    let findId = twetterPSdata.find((PSdata) => {
        return PSdata[username] ;
    }) ;
    res.render("editPostImg" , { findId }) ;
}) ;
app.patch("/PSx.com/posts/:username/postImg" , (req , res) => {
    let { username } = req.params ;
    let { PSpostImg } = req.body ;
    console.log(PSpostImg) ;
    let findId = twetterPSdata.find((PSdata) => {
        return PSdata[username] ;
    }) ;
    console.log(findId) ;
    let arrOfPostsPS = findId[username].posts ;
    let recentPosts = arrOfPostsPS[arrOfPostsPS.length - 1] ;
    console.log(recentPosts) ;
    recentPosts.image = PSpostImg ;
    res.redirect("/PSx.com/posts") ;
})
app.get("/PSx.com/posts/update/:username" , (req , res) => {
    let { username } = req.params ;
    let findId = twetterPSdata.find((PSdata) => {
        return PSdata[username] ;
    }) ;
    console.log(findId) ;
    res.render("updateRadically" , { findId : findId[username] });
}) ; 
app.put("/PSx.com/posts/:username" , (req , res) => {
    console.log(req.body) ;
    let { username , postMessage , profilePicPS , postImage} = req.body ;
    let findId = twetterPSdata.find((PSdata) => {
        return PSdata[username] ;
    }) ;
    findId[username].id = username ;
    findId[username].referedAs = "@" + username ;
    findId[username].profilePicPS = profilePicPS ;
    findId[username].postMessage = postMessage ;
    let arrOfPostsPS = findId[username].posts ;
    let recentPosts = arrOfPostsPS[arrOfPostsPS.length - 1] ;
    console.log(recentPosts) ;
    recentPosts.image = postImage ;
    res.redirect("/PSx.com/posts") ;    
}) ;
app.delete("/PSx.com/posts/delete/:username" , (req , res) => {
    let { username } = req.params ;
    let newPSdata = twetterPSdata.filter((PSdata) => {
        return !PSdata[username] ;
    }) ;
    twetterPSdata = newPSdata ;
    res.redirect("/PSx.com/posts") ;
}) ;
app.listen(port , () => {
    console.log(`ParvatiammaShivappa , our server is listening on port no ${port}`) ;
}) ;