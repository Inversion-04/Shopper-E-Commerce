  // in this file we are creating a signup form with validation for name, email, password and a
  //  checkbox to agree to terms of service

  // the signup page is divided into multiple sections including input fields, a submit button, and a link to login for 
  // existing users

  import React, { useState } from 'react'
  import './CSS/LoginSignup.css'

  function LoginSignup() {
  // State to manage form data
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      agree: false
    })
  // State to manage form errors
    const [errors, setErrors] = useState({})
    const[state,setState] = useState("Login");

    //handle login
    const login = async(req,res)=>{
        console.log("Login Executed",formData)
        let responseData;

         await fetch('http://localhost:4000/login',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData),
         }).then((response)=>response.json()).then((data)=>responseData = data)

         if(responseData.success){
          // after successful signup we are storing the token in the local storage of the browser so that we can use it for authentication in future requests
             localStorage.setItem('auth-token',responseData.token);
             window.location.replace('/'); // after successful signup we are redirecting the user to the home page of the application
             alert("Login Successful 🎉")
         }else{
            alert(responseData.errors)
         }
    }

    //handle signup
    const singup = async(req,res)=>{
         console.log("Sing Up Executed",formData)
         let responseData;

         await fetch('http://localhost:4000/signup',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData),
         }).then((response)=>response.json()).then((data)=>responseData = data)

         if(responseData.success){
          // after successful signup we are storing the token in the local storage of the browser so that we can use it for authentication in future requests
             localStorage.setItem('auth-token',responseData.token);
             window.location.replace('/'); // after successful signup we are redirecting the user to the home page of the application
             alert("Signup Successful 🎉")
         }else{
            alert(responseData.errors)
         }
    }
  // Handle input changes
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      })
    }
   // Validate form data
    const validate = () => {
      let newErrors = {}
  // Validate name
      if (!formData.name.trim()) {
        newErrors.name = "Name is required"
      }
  // Validate email
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format"
      }
  // Validate password
      if (!formData.password) {
        newErrors.password = "Password is required"
      } else if (formData.password.length <6) {
        newErrors.password = "Password must be at least 6 characters"
      }
  // Check if terms are agreed
      if (!formData.agree){
        newErrors.agree = "You must agree to terms"
      }

  // Set errors state
      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }
  // Handle form submission
    const handleSubmit = (e) => {
  e.preventDefault();

  if (state === "Login") {
    login();
  } else {
    if (validate()) {
      singup();
    }
  }
};
  //Render the signup form
    return (
      <div className="loginsignup">
        <form className="loginsignup-container" onSubmit={handleSubmit}>
          <h1>{state}</h1>
{/* // Input fields for name, email, password and terms agreement */}
          <div className="loginsignup-fields">
            {state === "Sign Up" ? 
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            /> : <></>}
    
      {/* // Display error message for name field */}
            {state === "Sign Up" ? errors.name && <span className="error-text">{errors.name}</span> : <></>}
{/* // Email input field */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {/* // Display error message for email field */} 
            {errors.email && <span className="error-text">{errors.email}</span>}

            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
            />
            {/* // Display error message for password field */}
            {errors.password && <span className="error-text">{errors.password}</span>}

          </div>

          <button type="submit" >{state}</button>
          
          {state === "Sign Up" ?

          <p className="loginsignup-login">
            Already have an account? <span onClick={()=>{setState("Login")}}>Login</span>
          </p>

           :  <p className="loginsignup-login">
              Create an Account <span onClick={()=>{setState("Sign Up")}}>Click Here</span>
              </p>
          }
{/* // Checkbox for agreeing to terms of service */}
          <div className="loginsignup-agree">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <p>I agree to the Terms of Service and Privacy Policy</p>
          </div>
          {/* // Display error message for terms agreement */}
          {errors.agree && <span className="error-text">{errors.agree}</span>}
        </form>
      </div>
    )
  }

  export default LoginSignup
