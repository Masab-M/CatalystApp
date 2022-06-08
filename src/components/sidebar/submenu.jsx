import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const submenu = ({ item,linkAccess }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    return (
        <>
            <div className="menuLink" onClick={item.subNav && showSubnav}>
                <Link to={item.subNav ?"": item.path}>
                    <div>
                        {item.icon}
                        <label htmlFor="">{item.title}</label>
                    </div>
                </Link>
                <div >
                    {item.subNav && subnav? item.iconOpened: item.subNav? item.iconClosed: null}
                </div>
            </div>
            <div className="submenuLinks">
            {subnav &&
                item.subNav.map((item, index) => {
                    if(item.Access==linkAccess || item.Access=='both' ){
                        return (
                            <Link to={item.path} key={index}>
                                {item.icon}
                                <label htmlFor="">{item.title}</label>
                            </Link>
                        );
                    }
                })}
            </div>
          
        </>


    )
}
export default submenu;