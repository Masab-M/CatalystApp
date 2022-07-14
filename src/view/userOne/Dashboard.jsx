import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/sidebar/sidebar'
function createProject() {
  return (
    <>
        <SideBar Access='Admin'/>
        <div className="mainContent">
        <Outlet/>
        </div>
    </>
  )
}

export default createProject