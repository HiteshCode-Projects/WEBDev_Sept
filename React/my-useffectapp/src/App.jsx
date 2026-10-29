//API - https://jsonplaceholder.typicode.com/users

import React from "react";
import { useEffect , useState } from "react";

function App(){

const [users , setUsers] = useState([])  //users = [API Data will store after you fetch it]


useEffect( ()=>{

//Task - Get The Dta from API
fetch('https://jsonplaceholder.typicode.com/users')

.then(response => response.json())
.then(data => setUsers(data));




},[]);

return(
  <div>
    
    <h2>User List</h2>

    {users.map( xyz =>(

      <p key={xyz.id}> {xyz.name} </p>

    ))}



  </div>
)


}

export default App