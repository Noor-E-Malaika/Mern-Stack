const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeModel = require('./models/Employe')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://NoorEMalaika:12345@nooremalaika.vxdclw1.mongodb.net/employe?retryWrites=true&w=majority&appName=NoorEMalaika");
//mongodb://localhost:27017/employe  mongodb://localhost:27017

app.post("/login" , (req, res) => {
    const {email, password} = req.body;
    EmployeModel.findOne({email: email})
    .then (user =>{
       if (user) {
          if(user.password === password) {
            res.json("Succes!")
          } else {
            res.json("incorrect password")
          }
        }  else{
            res.json("No record exist!")
        } 
    })
        
})

app.post('/register', (req, res) =>{
    EmployeModel.create(req.body)
    .then(employe => res.json(employe))
    .catch(err => res.json(err))
})

app.get('/' , (req, res) => {
    res.send("hello ")
})


app.listen(8000, () => {
    console.log("Server is running")
})



