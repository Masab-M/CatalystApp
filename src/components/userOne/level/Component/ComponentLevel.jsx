import React from 'react'
import { Outlet } from 'react-router-dom'
import DashNav from '../../../Dashboard/DashNav'
import InvestPerform from '../template/InvestPerform'
import SelectComponent from '../template/SelectComponent'
import SubLinks from '../template/SubLinks'

export default function ComponentLevel() {
  return (
    <>
    <DashNav level='Component'/>
    <SelectComponent/>
    <InvestPerform/>
    <SubLinks/>
    <Outlet/>
    </>
  )
}
