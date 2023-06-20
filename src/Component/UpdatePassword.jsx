import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
// /change-password



export default function UpdatePassword(){

    const [errorMessage, setErrorMessage] = useState("")
    const [responseMessage, setResponseMessage] = useState("")

    const submitHandler = async(e) => {
    e.preventDefault()
    
    const newPasswordData = {
        password:e.target['password'].value,
        newPassword:e.target['newPassword'].value,
        confirmPassword:e.target['confirmPassword'].value,
    }

    const config = {
      headers: {
          'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('my-app-token'))}` 
      }
  }

  if (newPasswordData.confirmPassword === newPasswordData.newPassword){
    try {
        const result =  await axios.put(`${process.env.REACT_APP_BE_URL}/api/auth/change-password`,newPasswordData,config )
        setResponseMessage(result.data)
    } catch (error) {
        setErrorMessage(error.message)
    }

  }
else{
    setErrorMessage("New Password and confirm password must be same")}
}
return(<>
 <h3>update password component</h3>
 <form onSubmit={submitHandler}>

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          />
        <input
          type="password"
          name="newPassword"
          placeholder="Password new"
          required
          />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Password confirm"
          required
          />

        {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
        {responseMessage && <p style={{color:'green'}}>{responseMessage}</p>}

        <input type="submit" value="Change Password" />
        <input type="reset" value="Cancel" />

      </form>



</>)
}