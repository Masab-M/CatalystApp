import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'
import { AssumpContext } from '../../../Context/AssumpContext'
import { useNavigate } from 'react-router-dom'
export default function ProjectImport() {
  const [pid, setpid] = useState(null)
    let navigate = useNavigate();
    const { project, assumption,setassumption,id,setid } = useContext(AssumpContext)
    console.log('p',project);
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name')
    function getid(e) {
        const {value}=e.target;
        setid(value)
    }
    async function importAssumption(e) {
        e.preventDefault()
        const pid=await project.projectList.filter((val)=>{
            if(val.Project_Name===name){
                    return val;
            }
        }).map((val)=>{
           return val.Project_Id
        })
        console.log(pid);
        const newobj = assumption
        assumption.map((val,index) =>
        newobj[index].project_id=pid[0]
        )
        setassumption(newobj)
        const assumptionList=assumption.filter((val)=>{
            if(val.assumption_name){
                return val
            }
        })
        const depList=assumption.filter((val)=>{
            if(val.depreciationlife_name){
                return val
            }
        })
        const expList=assumption.filter((val)=>{
            if(val.recurrentexpense_Name){
                return val
            }
        })
        const headers = {
            'Content-Type': 'text/plain'
        };
        Object.keys(expList[0]).forEach(element => {
            expList[0][element] = String(expList[0][element])
        });
        Object.keys(depList[0]).forEach(element => {
            depList[0][element] = String(depList[0][element])
        });

            const assumpPromise=axios.post('https://catalystcreatejourney.herokuapp.com/v1/createjourney/insertprojectassumptions',assumptionList, {headers});
            const depPromise=axios.post('https://catalystcreatejourney.herokuapp.com/v1/createjourney/insertprojectassumptionsdepreciationlife',depList[0],{headers})
            const expPromise=axios.post('https://catalystcreatejourney.herokuapp.com/v1/createjourney/insertprojectassumptionsrecurrentexpenses',JSON.stringify(expList[0]),{headers})
            Promise.all([assumpPromise,depPromise,expPromise]).then((result)=>{
                console.log(result);
                navigate(`/userOne/dashBoard/Project/component?name=${name}`)
            }).catch((err)=>{
                console.log(err);
            })

    }
    return (
        <>
            <div className='projectDiv'>
                <div className="projectAssump">
                    <Container fluid>
                        <Row>
                            <Col xs={12}>
                                <div className="headText">
                                    <h3>Project Assupmtions</h3>
                                </div>
                                <form action="" onSubmit={importAssumption} className="assumptions">
                                    <div className="form-group">
                                        <label htmlFor="slctAssump">Select Projects</label>
                                        <select name="slctAssump" id="slctAssump" required onChange={getid} >
                                            <option value="">Select Project</option>
                                            {project.projectList.map((val) =>
                                                <option value={val.Project_Id}>{val.Project_Name}</option>

                                            )}
                                        </select>
                                    </div>
                                    <div className="actbtn">
                                        <Link to=''>Back</Link>
                                        <button type='Submit'>Save</button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
