const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const userModel = require('./Model/UserModel');
const productModel = require('./Model/ProductModel');
const app = express()
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"],
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true
}))





app.use(cookieParser())
mongoose.connect('mongodb://localhost:27017/toolzy')

const verifyUser = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.json("Token is missing")
    }else{
        jwt.verify(token,"jwt-secret-key",(err ,decoded) =>{
            if(err){
                return res.json("Error with token");
            }else{
                if(decoded.role ==='admin'){
                    next()
                }else{
                    return res.json("not admin");
                }
            }
        })
    }
}
// app.get('/dashboard',verifyUser, (req,res)=>{
//     res.json("Success");
// })
app.get('/products', verifyUser, (req, res) => {
    productModel.find({})
        .then(products => res.json(products))
        .catch(err => res.status(500).json({ error: err.message }));
});


app.post('/register',(req,res)=>{
    const {firstname , lastname , email, password} = req.body;
    bcrypt.hash(password,10)
    .then(hash=>{
        userModel.create({firstname, lastname,email,password:hash})
        .then(user => res.json("Success"))
        .catch(err=> res.json(err))
    }).catch(err=> res.json(err))
})

app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    userModel.findOne({email:email})
    .then(user=>{
        if(user){
               bcrypt.compare(password,user.password,(err,response)=>{
                if(response){
                   const token = jwt.sign({email:user.email, role:user.role},
                    "jwt-secret-key",{expiresIn:'1d'})
                    res.cookie('token',token)
                    return res.json({Status:"Success",role: user.role})
                }else{
                    return res.json("The password is incorrect")
                }
               })
        }else{
            return res.json("No record existed")
        }
    })
})
///////////////////////////////////////////////
app.get('/menu',(req,res)=>{
    productModel.find({})
    .then(products => res.json(products))
    .catch(err=> res.json(err))
})
//////////////////////////////////////////////
app.get('/getProduct/:id',(req ,res)=>{
    const id = req.params.id;
    productModel.findById({_id:id})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.put('/updateProduct/:id',(req,res)=>{
    const id = req.params.id;
    productModel.findByIdAndUpdate({_id: id},{productname: req.body.productname,description: req.body.description, price: req.body.price, brandrating: req.body.brandrating,imageurl: req.body.imageurl})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.delete('/deleteProduct/:id',(req,res) =>{
    const id = req.params.id;
    productModel.findByIdAndDelete({_id : id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/createProduct",(req,res)=>{
    productModel.create(req.body)
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log("Server is Running");
})