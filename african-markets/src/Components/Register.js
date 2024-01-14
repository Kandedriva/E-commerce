import React, { useState } from "react";

function Register(){
const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""

})

    function handleChange(event){
        const name = event.target.name;
        let value  =event.target.value;
        setRegister({
            ...register,
            [name]: value
        })
        console.log(name, value)
        console.log()


    }
    return(
        <>
        <div className="login-form">
        <h1>Register</h1>
<form>
<div>
<label>First name</label><br></br>
<input 
name = "firstName"
onChange={handleChange}
></input>
  </div>
  <div>
<label>Last name</label><br></br>
<input
name="lastName"
onChange={handleChange}
></input>
  </div>
  <div>
<label> Email</label><br></br>
<input
name="email"
onChange={handleChange}
></input>
  </div>
  <div>
<label>Password</label><br></br>
<input
name="password"
onChange={handleChange}
></input>
  </div>
  <div>
<button className="login-button">Register</button>
</div>
</form>
</div>

        </>
    );
}
export default Register;