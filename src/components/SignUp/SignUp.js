import React, { useState } from 'react'
import style from "./SignUp.module.css"
const SignUp = () => {


  // const[name, setName]=useState("")
  // const[email, setEmail]=useState("")
  // const[password, setPassword]=useState("")

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  
  const handleSubmit=(e)=>{
     e.preventDefault()
     const existingData = JSON.parse(localStorage.getItem('signupData')) || [];

    // Add the new signup data to the existing data array
    const userData = [...existingData, formData];

    // Save the updated data to local storage
    localStorage.setItem('user', JSON.stringify(userData));
  alert("registered successfully")
    
  }
  return (
    <div  className={style.main}>
     <h1>Welcome to NayePankh foundation</h1>
      <div className={style.signup}>
        <input 
        name='name'
         placeholder='Enter your name '
         value={formData.name}
         onChange={handleInputChange}
         />
        <input
        name ="email"
         placeholder='Enter your email'
         value={formData.email}
         onChange={handleInputChange}
         />
        <input
        name='password'
         placeholder='Enter your password'
         value={formData.password}
         onChange={handleInputChange}
         />
        <div className={style.btn}>
        <button onClick={handleSubmit}>Register here</button>
        <button>SignIn</button>
        </div>
      </div>
  
    </div>
  )
}

export default SignUp
