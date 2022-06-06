import React from 'react'
import { NavLink} from 'react-router-dom'

export default function SubLinks() {
  return (
     <div className="otherInfoDet">
    <ul className="infoLinks">
        <li style={{zIndex:'999'}}>
          <NavLink to={'expenditure'}>
             <span>Expenditure</span> </NavLink>  
            </li>
         <li style={{zIndex:'99'}}>
         <NavLink to={'depreciation'}>
            <span>Depreciation</span> </NavLink>   
            </li>
         <li style={{zIndex:'10'}}>
        <NavLink to={'revenue'}>
           <span>Revenue</span> </NavLink> </li>
         <li style={{zIndex:'5'}}>
        <NavLink to={'profitandLoss'}>
           <span> Profit & Loss</span></NavLink> </li>
         <li style={{zIndex:'0'}}>
        <NavLink to={'cashFlow'}>
           <span>Cash Flow</span> </NavLink></li>
    </ul>
</div> 
  )
}
