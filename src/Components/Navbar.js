import React from "react";

function Navbar(){
return(
    <>
      <div className="navigation-bar">
      <a href="/">Our list of store</a>
       <a href="register"> Register</a>
       <a href="login">Login</a>
       <input placeholder="Search" className="search-bar"></input>
       <button className="search-button">find</button>
      </div>
    </>
)
}

export default Navbar