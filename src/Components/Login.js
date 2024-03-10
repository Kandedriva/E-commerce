import React from "react";
import { useState } from "react";

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmail(event){
        const value = event.target.value;
        const name = event.target.name
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
   function validation(){
    let result = true;
    if(email === "" || email === null){
        result = false;
        console.log("please your email adress");
    }
    if(password ==="" || password === null){
        result = false;
        console.log("Password field can't be empty: please enter your password")
    }
    return result
   }

    function handleSumit(event){
        event.preventDefault();

        if(validation()){
            fetch("http://localhost:3000/users")
            .then(response=>response.json())
            .then(users =>{
                if (Object.keys(users).length === 0){
                users.forEach(user => {
                    if(user.password ===password){
                        console.log("Password Marched")
                    }else{
                        console.log("please Try it again")
                    }
                    
                });
                
                if(Object.keys(users).length === 0){
                    console.log('Please provide email and password..!')

                }else{
                    
                }}





















                    // const logUserArray = []
                    // for(let i = 0; i<users.length; i++){
                    //     const logUserEmail = users[i]
                    //     logUserArray.push(logUserEmail)
                    //     // const logUse = logUserArray.find(user=>user.password === password);




                    //     console.log(logUserArray.firstname)
                    //     const logUser = users[i]
                    //     if(logUserArray.includes(password)){
                    //         // alert(`${logUser} is successfully longed In..!`)
                    //         console.log("Good")
                    //        }else{
                    //         // alert("No user found with the provided information. Please try it again...!")
                    //         console.log("Bad..!")
                    //        }
                    // }
                //    const logUser = users.find(user=>user.password === password);
                //    sessionStorage.setItem("email", email)
                //    console.log(logUser)
                  
                
            })
            console.log("let's go..!")
        }

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
        autoComplete="username"
        ></input>
       </div>
       <div>
       <label>Password</label><br></br>
        <input 
        type="password"
        onChange={handlePassword}
        className="login-input"
        name="password"
        autoComplete="current-password"
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