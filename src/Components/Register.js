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
       
    }
function createUser(event){
  console.log(register.firstName)
  event.preventDefault();
  const newUser = {
    firstname: register.firstName,
    lastname: register.lastName,
    email: register.email,
    password: register.password
  }
  fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(newUser)

  })
  .then(response =>response.json())
  .then(newUsers => console.log(newUsers))
}




    return(
        <>
        <div className="login-form">
        <h1>Register</h1>
<form onSubmit={createUser}>
<div>
<label>First name</label><br></br>
<input 
name = "firstName"
onChange={handleChange}
autoComplete="username"

></input>
  </div>
  <div>
<label>Last name</label><br></br>
<input
name="lastName"
onChange={handleChange}
autoComplete="username"

></input>
  </div>
  <div>
<label> Email</label><br></br>
<input
name="email"
onChange={handleChange}
autoComplete="username"

></input>
  </div>
  <div>
<label>Password</label><br></br>
<input
type="password"
name="password"
onChange={handleChange}
autoComplete="current-password"

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