import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import DashNav from '../../Dashboard/DashNav'

export default function Assumption() {
  return (
    <>
    <DashNav srch={false} />
    <div className="assumpLinks">
        <NavLink to='upload'>Upload </NavLink>
    </div>
    <Outlet/>
    </>
  )
}
