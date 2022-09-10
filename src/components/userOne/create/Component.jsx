import React,{useEffect,useState} from 'react'
import ProjectComponent from '../../createForm/component/ProjectComponent'
import DashNav from '../../Dashboard/DashNav'
import Components from '../../createForm/import/components'
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom'

import ComponentDet from '../../createForm/import/ComponentDet'
export default function Component() {
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
            p_List.forEach((data)=>{
              if(data.Project_Name===name){
                  setproject(data.Project_Name)
              }
          })
      }).catch((err) => {
          console.log(err);
      })
  }, [])
  return (
    <>
    <DashNav srch={false} p_Name={project}/>
    <ProjectComponent/>
    <Components/>
    <ComponentDet/>
    </>
  )
}
