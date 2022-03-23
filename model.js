const mongoose=require('mongoose');
const mine=new mongoose.Schema({
    info:{type:String},
    name:{type:String},
    abv:{type:String},
    contact:{type:Number},
    mail:{type:String}
});
module.exports=mongoose.model('Mine',mine);