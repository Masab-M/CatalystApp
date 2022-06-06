import React from 'react'
import DashNav from '../../../Dashboard/DashNav'
import { Outlet } from 'react-router-dom'
import SelectComponent from '../template/SelectComponent'
import ItemLinks from '../template/ItemLinks'


export default function ItemLevel() {
  return (
    <>
    <DashNav level='Item'/>
    <SelectComponent/>
    <ItemLinks/>
    <Outlet/>
    </>
  )
}
