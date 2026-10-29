import React from "react";

function Home({cart,setCart}){

    function addPizza(){
         setCart(cart + 1);
    }


     function addBurger(){
         setCart(cart + 1);
    }


    return(
        <div style={{padding:'20px'}}>

            <h1>Foodie Express</h1>


            <div style={{  border:'1px solid gray' , padding:'20px' , borderRadius:'12px' }}>
                <h2>Pizza</h2>

                <button onClick={addPizza}>Add Pizza</button>
            </div>


              <div style={{  border:'1px solid gray' , padding:'20px' , borderRadius:'12px' }}>
                <h2>Burger</h2>

                <button onClick={addBurger}>Add Burger</button>
            </div>

        </div>
    )
}

export default Home