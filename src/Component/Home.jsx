import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (<div>
        <h1>
            Wellcome to my POST APP
        </h1>
        <p>Do you want to change password?</p>
        <NavLink to="/change-password" className="link" > click here to change password </NavLink>
  </div>
  )
}

export default Home