import React from "react";

function Register(){
    return(
        <>
        <div className="login-form">
        <h1>Register</h1>
<form>
<div>
<label>First name</label><br></br>
<input></input>
  </div>
  <div>
<label>Last name</label><br></br>
<input></input>
  </div>
  <div>
<label> Email</label><br></br>
<input></input>
  </div>
  <div>
<label>Password</label><br></br>
<input></input>
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