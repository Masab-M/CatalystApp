import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div>
        <Link to={'userOne/login'}>login One</Link>
        <br />
        <Link to={'userOne/dashBoard'}>DashBoard One</Link>
        <br/>
        <Link to={'usertwo/login'}>login two</Link>
        <br />
        <Link to={'usertwo/dashBoard'}>DashBoard Two</Link>
    </div>
  )
}
