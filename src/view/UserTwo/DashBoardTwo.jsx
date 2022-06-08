import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/sidebar/sidebar'

export default function DashBoardTwo() {
  return (
    <>
    <SideBar Access='User'/>
    <div className="mainContent">
        <Outlet/>
    </div>
    </>
  )
}
