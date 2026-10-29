// import React, { useState } from "react";


// function App(){

//   const [isFollw , setIsFollow] = useState(false)

//   return(
//     <div>
//       <h2>Click Event</h2>

//       <button onClick={  ()=> setIsFollow(!isFollw)  }> {isFollw ? " Following" : "Follow"} </button>

//     </div>
//   )
// }

// export default App

//Example 2 : Input

import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from "./cards";



function App(){

  const [text , setText] = useState("")

  return(
    <div>
             <input 
             
             placeholder="Search..."  
             
             onChange={ (e)=> setText(e.target.value) }

             />


             <h3>You Typed : {text}   </h3>

             <Card />

            <Button variant="danger">Login</Button>

      <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Food Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Lunch</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Dinner</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Snacks</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>



    </div>
  )
}

export default App