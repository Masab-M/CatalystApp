import React from 'react'
import DashNav from '../Dashboard/DashNav'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function ViewFF() {
  const [projects, setProjects] = useState([])
  const url = 'http://103.245.193.211:5001'
  const p_list = '/v1/createjourney/getprojectlist'
  useEffect(() => {
    const pListP = axios.get(url + p_list)
    Promise.all([pListP]).then((result) => {
        const listObj = result[0].data;
        const p_List = listObj.projectList
        setProjects(p_List)
        console.log(p_List);
       
    }).catch((err) => {
        console.log(err);
    })
  }, [])
  
  return (
    <>
    <DashNav srch={true} />
    <div className="viewProject">
                <Table hover responsive className='reviewProjects'>
                    <thead>
                        <tr>
                            <th>Project ID</th>
                            <th style={{width:'100px'}}>Name</th>
                            <th>Project Created On</th>
                            <th>Project Execution Year</th>
                            <th>Project Owner</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                      {projects.map((ele,index)=>
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{ele.Project_Name}</td>
                        <td>{ele.Project_Create_date.split('T')[0]}</td>
                        <td>{ele.Project_Deployment_Year}</td>
                        <td>{ele.Project_Owner_Id}</td>
                        <td>
                          <Link className='viewBtn plvl' to={`project/${ele.Project_Id}`}>
                          Project level
                          </Link>
                        </td>
                    </tr>                      
                      )}

                    </tbody>
                </Table>
    </div>
    </>
  )
}
