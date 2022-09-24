import React from 'react'
import { Table } from 'react-bootstrap'
import DashNav from '../Dashboard/DashNav'
import './rvProject.css'
import GnrtFF from './template/GnrtFF'
import { useSearchParams } from 'react-router-dom'
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import { useState } from 'react'
import { useEffect } from 'react'
export default function GenerateFF() {
            //toast state and function
            const [showA, setShowA] = useState(false);
      
            const toggleShowA = () => setShowA(!showA);
    const [searchParams] = useSearchParams();
    useEffect(() => {
      
      const request = searchParams.get('request');
      if(request && request==='new_project'){
        toggleShowA()
        setTimeout(() => {
          toggleShowA()
        }, 3000);
      } 
    }, [])
    
  return (
    <>
     <ToastContainer position="bottom-end" className="p-3">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">New Project</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body>Project Added</Toast.Body>
        </Toast>
    </ToastContainer>
    <DashNav srch={true}/>
    <div className="viewProject">
                <Table hover responsive className='reviewProjects'>
                    <thead>
                        <tr>
                            <th>Project ID</th>
                            <th>Project Name</th>
                            <th>Project Created On</th>
                            <th>Project Execution Year</th>
                            <th>Project Owner</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className='gnrtff'>
                            <GnrtFF gnrt={false}/>
                              
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className='gnrtff'>
                            <GnrtFF gnrt={true}/>

                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className='gnrtff'>
                              <GnrtFF gnrt={false}/>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
    </>
  )
}
