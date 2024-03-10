import React from "react";

function Productlist({name, price, description}){

    return(
        <div className = "store-products">
      <div>
      <h4>{name}</h4>
        <p>{description}</p>
        <p>{price}</p>
      </div>

        </div>
    )
}

export default Productlist