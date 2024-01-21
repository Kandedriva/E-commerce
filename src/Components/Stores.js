import React, { useState } from "react";
import { useEffect } from "react";

function Stores(){
    const [allstores, setAllstores] = useState([])

useEffect(() => {
    fetch("http://localhost:3000/stores")
.then(response =>response.json())
.then(storeslist => {
    console.log(storeslist)

   const storelist = storeslist.map((store, index)=>(
    // console.log(store.storename)

        <div key={`${store.id}-${index}`} className="each-store">
        <h2>{store.storename}</h2>
        <img src="store.image" alt="Store"></img>
        <address>{store.location}</address>
   
        </div>
    ))
    setAllstores(storelist)
    console.log(storelist)
})

   
}, []);

return(
    <>
        <div>
{allstores}
        </div>
    </>
)

}

export default Stores