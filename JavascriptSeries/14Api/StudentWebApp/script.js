const API_URL = "https://jsonplaceholder.typicode.com/users"

//Select HTML element/Tag
const title = document.getElementById("pageTitle")
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")

const loadBtn = document.getElementById("loadBtn")
const status = document.getElementById("status")
const profileCount = document.getElementById("profileCount")

const container = document.getElementById("profileConatiner")


//Store API Data data 
let allUsers = [];


//Change The Heading
title.textContent = "Explore User Profile"


//fetch The Data from API

async function loadProfile() {
    


    status.textContent = "Loading Profiles..."
    loadBtn.disabled = true


    try{
           //Successfull
                  
        const response   =   await  fetch(API_URL)


             if(!response.ok){
                throw new Error("Unable To Load Profile")
             }


         const users    =    await   response.json() 

         console.log(users)

         allUsers = users


        status.textContent = "Profiles Loaded"

    }catch(error){
        //Unsucessfull


        const message = document.createElement("p")
        message.className = "empty-message"
        message.textContent = "Could not load Profiles. Check your Internet conn and try again";


        profileCount.textContent = "Profile displayed : 0"
        status.textContent = "Unable to fetch data"

        console.log(error)

    }finally{
        loadBtn.disabled = false
    }
}



