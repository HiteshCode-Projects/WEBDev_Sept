const API_URL = "https://jsonplaceholder.typicode.com/users"

//Select HTML element/Tag
const title = document.getElementById("pageTitle")
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")

const loadBtn = document.getElementById("loadBtn")
const status = document.getElementById("status")
const profileCount = document.getElementById("profileCount")

const container = document.getElementById("profileContainer")


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
              
         displayProfileCard(allUsers)

        status.textContent = "Profiles Loaded"

    }catch(error){
        //Unsucessfull
            container.replaceChildren()

        const message = document.createElement("p")
        message.className = "empty-message"
        message.textContent = "Could not load Profiles. Check your Internet conn and try again";

        container.appendChild(message)

        profileCount.textContent = "Profile displayed : 0"
        status.textContent = "Unable to fetch data"

        console.log(error)

    }finally{
        loadBtn.disabled = false
    }
}


//Create and Display Profile Card
function displayProfileCard(users){

        //Remove The Previous
   container.replaceChildren()

   //Update The Number 
   profileCount.textContent = "Profile displayed " + users.length;

   //Display a message when no result found
   if(users.length == 0){
    const message = document.createElement("p")
    message.className = "empty-message"
    message.textContent = "No matching Profile found"

   container.appendChild(message)     

    return;
   }

   //Create a Card for each User
   users.forEach( function(user){
            
    const card = document.createElement("article")
    card.className ="profile-card"

    const name = document.createElement("h3")
    name.textContent = user.name;

    const username = document.createElement("p")
    username.textContent = "Username: " + user.username

    const email = document.createElement("p")
    email.textContent = "Email :" + user.email

    const city = document.createElement("p")
    city.textContent = "City : "+ user.address.city

    const company = document.createElement("p")
    company.textContent = "Comapny :" + user.company.name;

    //Add Each Element to Profile Card
    card.appendChild(name)
    card.appendChild(username)
    card.appendChild(email)
    card.appendChild(city)
    card.appendChild(company)

    //Add The Card To Webpage
    container.appendChild(card)

   })

}


//Searcg Profile Already Loaded from API
function searchProfiles(){


    const searchText = searchInput.value.trim().toLowerCase();

    const filterUser = allUsers.filter( function(user){

       return(
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchInput)
       );

    })

    displayProfileCard(filterUser)

    status.textContent = searchText ? "Search Compelted ." : "Showing all loaded profile"


}


//Event 1: Load Button click
loadBtn.addEventListener('click' , loadProfile);

//Event : Search Profile
searchBtn.addEventListener('click', searchProfiles);

//Event 3:Press Enter
searchInput.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        searchProfiles()
    }
});

