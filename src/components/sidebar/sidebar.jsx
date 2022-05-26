import React from 'react'
import SubMenu from './submenu';
import {SidebarData} from './sidebarData';
import './sidebar.css'
const sidebar= () =>  {
  return (
    <div className="sideBar">
    <div className="Logo">
      <h4>CATALYST</h4>
    </div>
    <div className="sideBarLinks">
    {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
    </div>

    </div>
  )
}
export default sidebar;
