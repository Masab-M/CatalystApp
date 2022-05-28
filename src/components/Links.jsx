import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div>
        <Link to={'userOne/login'}>login</Link>
        <Link to={'userOne/dashBoard'}>DashBoard</Link>
    </div>
  )
}
