import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './project.css'
import { useEffect } from 'react';

export default function Project() {
    const [status, setstatus] = useState([])
    const [owner, setowner] = useState([])
    const [pList, setPList] = useState([])
    const [isUnique, setisUnique] = useState(true)
    var curr = new Date();
    curr.setDate(curr.getDate());
    var Defaultdate = curr.toISOString().substring(0, 10);
    console.log('date', Defaultdate);
    const url = 'https://catalystcreatejourney.herokuapp.com'
    const statusEP = '/v1/createjourney/getprojectstatustypes';
    const ownerEP = '/v1/createjourney/getprojectownerlist';
    const newProjectEP = '/v1/createjourney/createnewproject';
    const getProjects = '/v1/createjourney/getprojectlist';
    useEffect(() => {
        const statusP = axios.get(url + statusEP)
        const ownerP = axios.get(url + ownerEP)
        const ProjectList = axios.get(url + getProjects)
        Promise.all([statusP, ownerP, ProjectList]).then(function (result) {
            const statusObj = result[0].data
            const ownerObj = result[1].data;
            const listobj = result[2].data;
            console.log(result[2].data);
            setstatus(statusObj.projectStatusTypes);
            setowner(ownerObj.projectOwnerList);
            setPList(listobj.projectList)
        });
    }, [])
    const checkDuplicateName = (e) => {
        const { value } = e.target;
        pList.forEach((ele) => {
            if (ele.Project_Name.toLowerCase() === value.toLowerCase()) {
                setisUnique(false)
            }
            else {
                setisUnique(true)
            }
        })
    }
    let navigate = useNavigate();
    const hello = (event) => {
        event.preventDefault();
        const P_name = event.target[0].value
        if (isUnique && P_name !== '') {
            const P_desc = event.target[1].value
            const P_id = event.target[2].value
            const P_date = event.target[3].value
            const P_year = event.target[4].value
            const P_ver = event.target[5].value
            const P_status = event.target[6].value
            const P_owner = event.target[7].value
            const p_newPayload = {
                "Project_Name": P_name,
                "Project_Desc": P_desc,
                "Project_Create_Date": P_date,
                "Project_Deployemnt_Year": P_year,
                "Project_StatusType_Id": P_status,
                "Project_Owner_Id": P_owner,
                "Project_version": P_ver,
            };
            const myJSON = JSON.stringify(p_newPayload);
            axios.post(url + newProjectEP, myJSON)
                .then(function (response) {
                    navigate(`/userOne/dashBoard/Project/assumption?name=${P_name}&id=${P_id}`, { replace: true });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {

        }
    };
    return (
        <div className="ProjectForm">
            <div className="formcontent">
                <Container fluid className='formDiv'>
                    <Row>
                        <Col xs={12}>
                            <div className="formHead">
                                <FiArrowLeft />
                                <h4>Create Project</h4>
                            </div>
                            <form action="" onSubmit={hello} className='createProject'>
                                <div className="form-group">
                                    <label htmlFor="pName">
                                        Project Name
                                        {isUnique ? '' :
                                            (
                                                <span className='usedErr'>Already Used</span>
                                            )
                                        }
                                    </label>
                                    <input type="text" onKeyUp={checkDuplicateName} name="pName" id="pName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pdesc">
                                        Project Description
                                    </label>
                                    <input type="text" name="pdesc" id="pdesc" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pId">
                                        Project ID
                                    </label>
                                    <input type="text" name="pId" id="pId" disabled />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pName">
                                        Project Created On
                                    </label>
                                    <input type="Date" name="pName" id="pName" defaultValue={Defaultdate} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pExecYear">
                                        Project Execution Year
                                    </label>
                                    <input type="text" name="pExecYear" id="pExecYear" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pVersion">
                                        Project Version
                                    </label>
                                    <input type="text" name="pVersion" id="pVersion" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pStatus">
                                        Project Status
                                    </label>
                                    <select name="pStatus" id="pStatus">
                                        {status.map((name, index) =>
                                            <option key={index} value={name.ProjectStatusType_Id}>{name.ProjectStatusType_Name}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pOwner">
                                        Project Owner
                                    </label>
                                    <select name="pOwner" id="pOwner">
                                        {owner.map((name, index) =>
                                            <option key={index} value={name.ProjectOwner_Id}>{name.ProjectOwner_Name}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-submit">
                                    <button type='submit' className={`${!isUnique && 'disabled'}`}>Next</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

