// import React from "react";

// function App(){

//     let count = 0;

//     function IncreaseCount(){
//       count = count+ 1
//       console.log(count)
//     }

//   return(
//     <div>
            
//             <h2>Cart/Like/Counter  : {count}     </h2>
//             <button onClick={IncreaseCount}>Increase</button>

  
//     </div>
//   )

// }

// export default App


// useState()  - Special React Variable . It will Store The updated Value and It will Update Screen as well

//syntax :     const[mainVariableName- On Screen , setVariableName-store Updated value]  = useState(Inital value)
// import React from "react";
// import { useState } from "react";
// function App(){
//        //React : camelCase . 
//      const [count , setCount] = useState(11) 

//     function IncreaseCount(){
            
//       setCount(count+1)
    
//       console.log(count)
//     }

//   return(
//     <div>
            
//             <h2>Cart/Like/Counter  : {count}     </h2>
//             <button onClick={IncreaseCount}>Increase</button>

  
//     </div>
//   )

// }

// export default App


//Example 3- Password Hide and Show
// import React, { useState } from "react";

// function App(){

//    const [show,setShow] = useState(false)
   

//   return(
//     <div>

//           <input type={ show ? "text"  : "password"  }      placeholder="Enter your password"  />  

//           <button onClick={ ()=> setShow(!show)  }>Show/Hide</button>
       
//     </div>
//   )

// }

// export default App


// import React, { useState } from "react";

// function App(){

//   const [follow , setFollow] = useState(false)

//   return(
//     <div>
            
//             <button onClick={()=> setFollow(!follow)  }> {follow ? "Follwing" : "Follow"}  </button>
           
  
//     </div>
//   )

// }

// export default App




//Write Logic of Logout and Login Button Along with Theme Change.  

import React, { useState } from "react";

function App(){

 const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return(
   
            <div style={{ backgroundColor: isDarkMode ? 'blue' : 'white' }}>
               <button onClick={() => setIsLoggedIn(!isLoggedIn)}> {isLoggedIn ? 'Log Out' : 'Log In'} </button>
                <button onClick={() => setIsDarkMode(!isDarkMode)}> {isDarkMode ? 'Light Mode' : 'Dark Mode'} </button>
           
  
    </div>
  )

}

export default App


