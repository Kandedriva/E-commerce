import React, { useState } from "react";
import { useEffect } from "react";
import Productlist from "./ProductList";

function Stores(){
    const [allstores, setAllstores] = useState([])
    const [storesproduct, setStoresproduct] = useState([]);

useEffect(() => {
    fetch("http://localhost:3000/stores")
.then(response =>response.json())
.then(storeslist => {
    console.log(storeslist[0].products)
   const storelist = storeslist.map((store, index)=>(   
        <div
         key={`${store.id}-${index}`} 
         className="each-store"
         onClick={()=>storeProducts(store)}
         >
        <h2>{store.storename}</h2>
        <img src={`${process.env.PUBLIC_URL}/${store.image}`} alt="Store"></img>
        <address>{store.location}</address>
   
        </div>
    ))
    setAllstores(storelist)
    console.log(storelist)
})

   
}, []);

function storeProducts(store){
    setStoresproduct(store.products)
  
}
storesproduct.map(storep=>(
   
    <Productlist key ={storep.id} name ={storep.productName} price = {storep.productPrice} description = {storep.productDescription}>
    <div className = "store-products">
    <h4>
         {storep.productName}
         
     </h4>
     <p>
        {storep.productDescription} 
     </p>
     <p>
         {storep.productPrice}
     </p>
    </div>
    </Productlist>
   
 ))

console.log(storesproduct)
return(
    <>
        <div>
{allstores}

<div>
{storesproduct.map(storep=>(
   
   <div key ={storep.id} className="store-products" >
   <div >
   <div className="third-div">
   <h4>
        {storep.productName}
        
    </h4>
    <img src={storep.productImage} alt="This is the Item" className="ItemPicture">

    </img>
   <div className="product-description">
   <p >
       {storep.productDescription} 
    </p>
   </div>
    <p>
        {storep.productPrice}
    </p>
    <button className="card-button">+ Add to Your card</button>

   </div>
   </div>
   </div>
  
))}
</div>
        </div>
    </>
)

}

export default Stores