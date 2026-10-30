//Step 1: Import Module
const express  =     require('express')
const cors     =     require('cors')


//Step 2 : create express function
const app   =      express()

//Middleware 
app.use(express.json())
app.use(cors()) //Enable The cors so we can share resource even though havinf different port number

//Step 3:
//API 
app.get('/', function(req,res){
    res.json({message:'Backend Running'})
})


//POST METHOD - SEND TTHE DATA TO BACKEND
app.post('/login' , (req,res)=>{

    const {name , email} = req.body //----Frontend

    console.log(name)

    //Simple Validation
    if(name && email){
        res.json({message:`Welcome ${name} To My Webiste`})
    }else{
        res.json({message:`Email and Name are reuired`})

    }
})


//Start The Backend
app.listen(3000,()=>{
        console.log('Backend Server Running on port http://localhost:3000')

})
