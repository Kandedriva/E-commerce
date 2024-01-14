import React from "react";
import { Form, Button } from 'react-bootstrap';

import { useMemo } from "react";

function Login(){
    return(
     <>
     <div className="login-form">
     <h1>LOG IN</h1>

     <form>
       <div>
       <label>user name</label><br></br>
        <input className="login-input"></input>
       </div>
       <div>
       <label>Password</label><br></br>
        <input className="login-input"></input>
       </div>
       <di>
       <button className="login-button">Login</button>
       </di>
       </form>
     </div>
     </>
        )
}

export default Login;