import React,{useEffect,useState} from 'react'
import {NavLink, Outlet } from 'react-router-dom'
import DashNav from '../../Dashboard/DashNav'
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom'

export default function Assumption() {
  const [project, setproject] = useState('');
  const url = 'https://catalystcreatejourney.herokuapp.com'
  const p_list = '/v1/createjourney/getprojectlist'
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name')
  useEffect(() => {
      const pListP = axios.get(url + p_list)
      Promise.all([pListP]).then((result) => {
          const listObj = result[0].data;
          const p_List = listObj.projectList
          const p_for=p_List.forEach((data)=>{
              if(data.Project_Name===name){
                  setproject(data.Project_Name)
              }
          })
      }).catch((err) => {
          console.log(err);
      })
  }, [])
  console.log(project);
  return (
    <>
    <DashNav srch={false} p_Name={project} />
    <div className="linkDiv">
    <div className="assumpLinks">
        <NavLink  className='linkAssump' to='upload'>UPLOAD ASSUMPTION FILES</NavLink>
        <NavLink  className='linkAssump' to='import'>IMPORT ASSUMPTIONS FROM</NavLink>
    </div>
    </div>

    <Outlet/>
    </>
  )
}
