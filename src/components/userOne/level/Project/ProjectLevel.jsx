import React from 'react'
import DashNav from '../../../Dashboard/DashNav'
import InvestPerform from '../template/InvestPerform'
import { Outlet } from 'react-router-dom'

import '../level.css'
import SubLinks from '../template/SubLinks'
export default function ProjectLevel() {
  return (
    <>
    <DashNav level='Project'/>
    <InvestPerform/>
    <SubLinks/>
    <Outlet/>
    </>
  )
}
