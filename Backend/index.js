const express=require("express")
const dbConnected=require("./db/db")
const cors=require("cors")
const userModel =require("./model/model.js")
const app=express()
const PORT=4000
const hostName="127.0.0.1"


app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    userModel.find({}).then((users)=>{
        res.json(users)
    }).catch((err=>console.log(err)))
})
app.get("/getUser/:id",(req,res)=>{
  const id=req.params.id
    
    userModel.findById({_id:id}).then((users)=>{
        res.json(users)
    }).catch((err=>res.json(err)))

})
app.delete("/deleteUser/:id",(req,res)=>{
    const id=req.params.id
      
      userModel.findByIdAndDelete({_id:id}).then((res)=>{
          res.json(res)
      }).catch((err=>res.json(err)))
  
  })

app.put("/updateUser/:id",(req,res)=>{
    const id=req.params.id
      
      userModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email}).then((users)=>{
          res.json(users)
      }).catch((err=>res.json(err)))
  
  })
// mongoose.connect("mongodb://127.0.0.1:27017/crud")
app.post("/createUser",(req,res)=>{
    userModel.create(req.body).then((users)=>res.json(users)).catch(err=> res.json(err))
})


app.listen(PORT,hostName,()=>{
    dbConnected()
    console.log(`server starts at http://${hostName}:${PORT}`)
})