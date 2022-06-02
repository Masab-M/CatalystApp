import React from 'react'
import {NavLink, Outlet } from 'react-router-dom'
import DashNav from '../../Dashboard/DashNav'

export default function Assumption() {
  return (
    <>
    <DashNav srch={false} />
    <div className="linkDiv">
    <div className="assumpLinks">
        <NavLink  className='linkAssump' to='upload'>UPLOAD ASSUMPTION FILES</NavLink>
        <NavLink  className='linkAssump' to='import'>IMPORT ASSUMPTIONS FROM</NavLink>
    </div>
    </div>

    <Outlet/>
    </>
  )
}
