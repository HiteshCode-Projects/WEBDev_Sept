import {Link} from 'react-router-dom'


function Navbar({cart}){
return(
    <nav style={{ display:'flex' ,gap:'20px' , padding:'20px' , background:'black' , color:'white'  }}>


<Link to="/" style={{color:'white'}}>Home</Link>

<Link to="/cart" style={{color:'white'}}>Cart ({cart})</Link>
    </nav>
)

}

export default Navbar