const express =  require('express') //API Building
const cors =     require('cors')//Enable The Resource Sharing 
const mongoose = require('mongoose') //Backend - Database Connection
const bcrypt =   require('bcrypt') //Hash the sensitive data - password
const { type } = require('node:os')


const app = express()


//Middleware
app.use(express.json())
app.use(cors())  //VV IMP

//Part A - Backend and Db Connection

//1. Connection : Local DB - mongodb:localhost:27017/Database_Name

mongoose.connect('mongodb://localhost:27017/SeptemStudentDb')

.then(()=>console.log('Mongob Connected'))  //Confirmation
 
.catch((err)=> console.log(err))  //Error Message


//2. Schema - Blueprint of data which you decide to store

const UserSchema =    new  mongoose.Schema({
                    //Key:Value
                    name:String,
                    email:{
                      type:String,
                      unique:true
                    },
                    password:String
                   })


//3. Model - Reprent as Collection In MongoDB
 const User    =   mongoose.model('User',UserSchema)



//Part B - API Connection

app.get('/',(req,res)=>{
    res.json({message:"API Running , Backend Heathly"})
})


app.post('/register', async(req,res)=>{


const {username , email , password} = req.body  


//1. Basic Validation

if(!username || !email || !password){
    return res.json({message:'All Feild must be completed'})
}


//2. Check Exiting User
     //Varibale      =          Value             
const existingUser   = await    User.findOne({email})

if(existingUser){
    return res.json({
        message:'User Already exits'
    })
}
                

//3. Hash Password and store the data


const hashPassword   =   await    bcrypt.hash(password , 10)

//Save The Data in MongoDB Collection/ Model - 
                 
  const newUser  =  new  User({
                    username,
                    email,
                    password:hashPassword
                   })

await newUser.save()   //  Store The Data in Collection

res.json({
    message:'User created Successfully'
})

})





app.post('/login', async(req,res)=>{

const {email , password} = req.body

//1. Find User

const user = await User.findOne({email})  //Boolean

if(!user){
    return res.json({
        message:'User Not Found - Register First'
    })
}


//Compare
const valid =  await   bcrypt.compare(password , user.password)  //Booleam

   if(valid){
                res.json({
                    message:'Login Successfully'
                })
   }else{
         res.json({
                    message:'Invalid Password'
                })
   }

})




app.listen(3000,()=>{
    console.log('Server Running http://localhost:3000')
})