//1. require
const express = require("express");
const { json } = require('body-parser');
//upload image step 1
const multer = require('multer');
const path = require('path');
//Set The Storage Engine step 2
const storage = multer.diskStorage({
    destination: './src/helpers/uploads/',
    filename: function(req, file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
//Init upload step 3
var upload = multer({ 
    storage : storage 
}).array('myObject',2);

//2. create app
const app = express();
app.use(json());
app.use(express.static(__dirname + '/helpers'));//for import image, js static

//---set enviroment for dev
app.locals.isDev = process.env.NODE_ENV !== "production";
if(process.env.NODE_ENV !== "production"){
    const reload = require("reload");
    reload(app);
}
app.set("view engine","ejs");
app.set("views","./src/views");



//3. route
app.get("/", (req, res)=>{
    res.render('home');
});
app.get("/home", (req, res)=>{
    res.render('home');
});

app.get("/upload_object", (req, res)=>{
    res.render('upload_object');
});

app.get("/drag",(req, res)=>{
    res.render("drag");
})
//route upload object step 5
// app.post('/upload', (req, res) => {
//     upload(req, res, (err) => {
//       if(err){
//         res.render('upload_object', {
//           msg: err
//         });
//       } else {
//         if(req.file == undefined){
//           res.render('upload_object', {
//             msg: 'Error: No File Selected!'
//           });
//         } else {
//             var link_object = "";
//             var object_material = "";
//             for(var i=0; i<req.file.length; i++) {
//                 var f = req.file[i];
//                 if(f.name.split(".")[1] === "obj"){
//                     link_object = "uploads/"+f.filename;
//                 }else if(f.name.split(".")[1] === "mtl"){
//                     object_material = "uploads/"+f.filename;
//                 }    
//             }
//             console.log(link_object +
//                 "-"+ object_material);
//         //   res.render('upload_object', {
//         //     msg: 'File Uploaded!',
//         //     file: `uploads/${req.file.filename}`
//         //   });


//         }
//       }
//     });
//   });

app.get("/intro", (req, res)=>{
    res.render('intro');
});

//4. export
module.exports = { app };

