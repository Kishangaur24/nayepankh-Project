import React, { useState } from 'react'
import style from "./SignIn.module.css"
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
  
  const [email,setEmail]=useState("")
  const [password, setPassword]=useState("")
   const navigate = useNavigate("")
  const handleLogin=(e)=>{
    e.preventDefault()
     const data = JSON.parse(localStorage.getItem("user"))
     console.log(data)
     if(email===data[0].email && password===data[0].password){
      alert("you login successfully")
      navigate("/home")
     }else{
      alert("your email or password incorrect")
     }
  }

  const handleSignIn=()=>{
   navigate("/")
  }

  return (
    <div  className={style.main}>
     <h1>Welcome to NayePankh foundation</h1>
      <div className={style.signup}> 
          {/* {errors.email && <span className={style.emailError}>{errors.email}</span>} */}
        <input
        name ="email"
         placeholder='Enter your email'
         value={email}
         required
         onChange={(e)=>setEmail(e.target.value)}
         
         />
        
         {/* {errors.password && <span className={style.passwordError}>{errors.password}</span>} */}
        <input
        name='password'
         placeholder='Enter your password'
         value={password}
         required
         onChange={(e)=>setPassword(e.target.value)}
         />
         
        <div className={style.btn}>
        <button onClick={handleLogin}>Login here</button>
        <button onClick={handleSignIn}>SignIn</button>
        </div>
      </div>
  

    </div>
  )
}

export default SignIn
