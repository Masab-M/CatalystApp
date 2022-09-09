import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'
import { AssumpContext } from '../../../Context/AssumpContext'
export default function ProjectImport() {
    const [id, setid] = useState(0)
    const { project, assumption,setassumption } = useContext(AssumpContext)
    function getid(e) {
        const {value}=e.target;
        setid(value)
    }
    function importAssumption(e) {
        e.preventDefault()
        const newobj = assumption
        assumption.map((val,index) =>
        newobj[index].project_id=id
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
        console.log(expList[0],depList[0],assumption);
        try {
            axios.post('https://catalystcreatejourney.herokuapp.com/v1/createjourney/insertprojectassumptions',assumptionList, {headers}).then((result)=>{
                console.log(result);
            }).catch((err)=>console.log(err))
            axios.post('https://catalystcreatejourney.herokuapp.com/v1/createjourney/insertprojectassumptionsdepreciationlife',depList[0],{headers}).then((result)=>{
                console.log(result);
            }).catch((err)=>console.log(err))
            axios.post('https://catalystcreatejourney.herokuapp.com/v1/createjourney/insertprojectassumptionsrecurrentexpenses',JSON.stringify(expList[0]),{headers}).then((result)=>{
                console.log(result);
            }).catch((err)=>console.log(err))
        } catch (error) {
            console.log();
        }

    }
    console.log('id',project);
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
                                        <select name="slctAssump" id="slctAssump" required onChange={getid}>
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
