const express=require('express');
const mongoose=require('mongoose');
const Mine=require('./model');
var app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const uri = "mongodb+srv://taruneluri:taruneluri@cluster0.gkezw.mongodb.net/assignment?retryWrites=true&w=majority";
mongoose.connect(uri).then(()=>{
console.log("mongoDB connected !");
})
app.get('/about',function(req,res){
    res.send('this is about page');
})
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
    
})
app.get('/fetch',function(req,res){
    Mine.find({},function(err,result){
        if(!err)
        {
            if(result==null)
            {
                console.log("NULL VALUES !!");
            }
            else
            {
                //console.log(result);
                res.send(result);
            }

        }
        else{
            console.log(err);
        }
    })
})
const connection=mongoose.connection;
app.listen(3000,()=>{console.log('Server Started')})
function a()
{
    alert("hai");
}