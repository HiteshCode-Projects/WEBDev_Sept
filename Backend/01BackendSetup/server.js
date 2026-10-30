//BACKEND RULES TO WRITE CODE

//STEP 1: Import the Required Modules Which you have to use in Your Backend Setup
//Import - Means To Get the module whichever required

//How To Import The Modules in Node js:
//Syntax :  use   require('module-name') function To import Module in node
//example :  require('express')

const express    =    require('express')   //API

//Moudle : Pre written Logical Code - It has its own Inbuild Methods which we can use direclty

//Step 2: Create Express Application /Function by using express() function.

const app   =  express()  //Task is Build API/Routes


//Middleware - Security Layers 


//Step 3: Building API Endpoints / Routes / URL - Communication Backend And Frontend
//API METHOD/HTTP Method : GET - Get the data from backend, POST - send the data to backend , PUT - update existing data , DELETE - delete the data


//syntax : app.methodName('path/address', function(req,res){  task   }    )

//1. First Addres using get method

app.get('/' , function(req,res){

    res.send('Good Evening Backend Status Healthly')    

})

//2. Another Address
app.get('/login', function(req,res){
    res.send('Good Evening Please Login')
})

app.get('/register', function(req,res){
    res.send('Good Evening Please  Register')
})




//STEP 4 : START THE BACKEND SERVER By Using : app.listen()

//synatx app.listen(PortNumber, function(){})

//PortNumbe r- It is a Number which is used to identify the backend server - Address of Internet
//Example - 3000,5000,8000, 9000 

app.listen(3000, ()=>{
    console.log('Backend Server Running on port http://localhost:3000')
})






