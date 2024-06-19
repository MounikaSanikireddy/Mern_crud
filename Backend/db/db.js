const mongoose=require("mongoose")

const dbConnected=async ( )=>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/Crud")
        console.log("db is connected")
    }

    catch(error){
        console.log("something went wrong in connecting db")
    }   
 }
module.exports=dbConnected