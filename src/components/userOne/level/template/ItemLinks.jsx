import React from 'react'
import { NavLink} from 'react-router-dom'

export default function ItemLinks() {
  return (
    <div className="otherInfoDet">
    <ul className="infoLinks">
        <li style={{zIndex:'999'}}>
          <NavLink to={'threedata'}>
             <span>3G Data</span> </NavLink>  
            </li>
         <li style={{zIndex:'99'}}>
         <NavLink to={'threevoice'}>
            <span>3G Voice</span> </NavLink>   
            </li>
         <li style={{zIndex:'10'}}>
        <NavLink to={'fourdata'}>
           <span>3G Video</span> </NavLink> </li>
         <li style={{zIndex:'5'}}>
        <NavLink to={'fourvoice'}>
           <span> 4G Data</span></NavLink> </li>
         <li style={{zIndex:'0'}}>
        <NavLink to={'fivedata'}>
           <span>5G Data</span> </NavLink></li>
    </ul>
</div> 
  )
}
