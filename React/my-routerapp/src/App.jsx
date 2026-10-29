// import React from "react";
// import {BrowserRouter , Routes , Route} from 'react-router-dom';

// //Page1 -Home
// function Home(){
// return(
//   <div>
//     <h1>Home Page </h1>
//   </div>
// )
// }

// //Page2- About
// function About(){
// return(
//   <div>
//     <h1>About Page </h1>
//   </div>
// )
// }



// function App(){
//   return(
//    <BrowserRouter>
   
//    <Routes>
//     <Route  path="/"       element={<Home />}    />
//     <Route  path="/about"  element={<About />}  />
//    </Routes>
   


//    </BrowserRouter>
//   )
// }

// export default App


//Example 2 - Link Tag:act likes anchor Tag
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './HomePage'
import About from './AboutPage'

function App(){
  return(
    <BrowserRouter>
    
      <nav>
        <Link to="/"  >Home</Link> | | 
        <Link to="/about"   >About/Support</Link>
      </nav>


      <Routes>
        <Route   path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App