import React from "react";
import { useState } from "react";

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmail(event){
        const value = event.target.value;
        const name = event.target.name
        console.log(value, name)
        setEmail({
            ...email,
            [name]: value
        })
    }

    function handlePassword(event){
        const value = event.target.value;
        const name  = event.target.name;
        setPassword({
            ...password,
            [name]: value
        })
    }

    function handleSumit(event){
        event.preventDifault()
    }
    return(
     <>
     <div className="login-form">
     <h1>LOG IN</h1>

     <form onSubmit={handleSumit}>
       <div>
       <label>Email</label><br></br>
        <input 
        name="email"
        className="login-input"
        onChange={handleEmail}
        ></input>
       </div>
       <div>
       <label>Password</label><br></br>
        <input 
        onChange={handlePassword}
        className="login-input"
        name="password"
        ></input>
       </div>
       <div>
       <button className="login-button">Login</button>
       </div>
       </form>
     </div>
    
      
     </>
        )
}

export default Login;