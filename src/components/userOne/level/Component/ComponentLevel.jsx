import React from 'react'
import { Outlet } from 'react-router-dom'
import DashNav from '../../../Dashboard/DashNav'
import InvestPerform from '../template/InvestPerform'

export default function ComponentLevel() {
  return (
    <>
    <DashNav level='Component'/>
    <InvestPerform/>
    <Outlet/>
    </>
  )
}
