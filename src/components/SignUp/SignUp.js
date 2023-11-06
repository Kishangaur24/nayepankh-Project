import React, { useState } from 'react'
import style from "./SignUp.module.css"
import { useNavigate } from 'react-router-dom'
const SignUp = () => {


  const[name, setName]=useState("")
  const[email, setEmail]=useState("")
  const[password, setPassword]=useState("")
  const [errors, setErrors]=useState({})
   const navigate = useNavigate()
  const newUser={
    name:name,
    email:email,
    password:password
  }
  

  const handleSubmit=(e)=>{
     e.preventDefault()

     const validationErrors={}
     if(!name.trim()){
      validationErrors.name="username is required !"
     }
     if(!email.trim()){
      validationErrors.email="email is required !"
     }else if(!/^\S+@\S+\.\S+$/.test(email)){
         validationErrors.email="email is not valid"
     }
     if(!password.trim()){
      validationErrors.password="password is required !"
     }else if(password.length<6){
         validationErrors.password="password should be at least 6 character"
     }

     setErrors(validationErrors)
     if(Object.keys(validationErrors).length===0){
      alert("You registered successfully")
      navigate("/home")
     }
     const existingData = JSON.parse(localStorage.getItem('signupData')) || [];
// Add the new signup data to the existing data array
  const userData = [...existingData, newUser];
    
  // Save the updated data to local storage
    localStorage.setItem('user', JSON.stringify(userData));
  // alert("registered successfully")
  setName("")
  setEmail("")
  setPassword("")
  
    
  }
 
  const handleLogin=()=>{
    navigate("/login")
  }


  return (
    <div  className={style.main}>
     <h1>Welcome to NayePankh foundation</h1>
      <div className={style.signup}>
      {errors.name && <span className={style.nameError}>{errors.name}</span>}
        <input 
        
         placeholder='Enter your name '
         value={name}
         required
         onChange={(e)=>setName(e.target.value)}
         />
          
          {errors.email && <span className={style.emailError}>{errors.email}</span>}
        <input
        name ="email"
         placeholder='Enter your email'
         value={email}
         required
         onChange={(e)=>setEmail(e.target.value)}
         
         />
        
         {errors.password && <span className={style.passwordError}>{errors.password}</span>}
        <input
        name='password'
         placeholder='Enter your password'
         value={password}
         required
         onChange={(e)=>setPassword(e.target.value)}
         />
         
        <div className={style.btn}>
        <button onClick={handleSubmit}>Register here</button>
        <button onClick={handleLogin}>Login</button>
        </div>
      </div>
  
    </div>
  )
}

export default SignUp
