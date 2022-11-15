import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import * as XLSX from 'xlsx';
import { ComponentAssump } from '../../../Context/ProjectComponent';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

export default function ProjectComponent() {
    let navigate = useNavigate();
    //toast state and function
    const [showA, setShowA] = useState(false);
    const [fileName, setfileName] = useState('');

    const toggleShowA = () => setShowA(!showA);
    const { files, setfiles, cAssump, setcAssump ,select,setselect} = useContext(ComponentAssump)
    const [type, setType] = useState(null);
    function getFiles(e) {
        const newfile = e.target.files;
        setfiles([...files, newfile])
        // uploadFiles();
    }
    function assumpType(e) {
        const { value, name } = e.target;
        setType(value)
    }
    function sendAsumption(e) {
        e.preventDefault();
        let objArray = {}
        objArray.data = cAssump[select].slice(1).map((val) => {
            var obj = {};
            val.map((ele, index) => {
                obj[cAssump[select][0][index]] = ele.toString();
            })
            return obj;
        })
        let component_detail = {}
        component_detail.component_name = e.target[2].value;
        component_detail.component_desc = e.target[3].value;
        component_detail.component_filename = files[select][0].name;
        let id = localStorage.getItem('new_project_id');
        component_detail.project_id = id;
        objArray.component_detail = component_detail;
        let url;
        console.log(objArray);
        switch (parseInt(type)) {
            case 1:
                url = 'https://catalystcreatejourney.herokuapp.com/v1/createjourney/insertprojectcarrierexp';
                cAssumpSend(url, objArray);
                break;
            case 2:
                url = 'https://catalystcreatejourney.herokuapp.com/v1/createjourney/insertprojectbandexp';
                cAssumpSend(url, objArray);
                break;
            case 3:
                url = 'https://catalystcreatejourney.herokuapp.com/v1/createjourney/insertprojecttechsitesexp';
                cAssumpSend(url, objArray);
                break;
            case 4:
                url = 'https://catalystcreatejourney.herokuapp.com/v1/createjourney/insertprojectradiolocexp';
                cAssumpSend(url, objArray);
                break;
            default:
                break;
        }
        e.target.reset();
    }
    function cAssumpSend(url, payload) {
        const headers = {
            'Content-Type': 'text/plain'
        };
        const assumpPromise = axios.post(url, payload, { headers });
        Promise.all([assumpPromise]).then((result) => {
            toggleShowA();
            setTimeout(() => {
                toggleShowA()
            }, 3000);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        try {
            setfileName(files[files.length - 1][0].name);
        } catch (error) {

        }
    }, [files])
    useEffect(() => {
        if(files.length>0)
        {
            var reader = new FileReader();
            const f = files[files.length-1][0];
            reader.onload = async function (e) {
                var data = e.target.result;
                let readedData = XLSX.read(data, { type: 'binary' });
                const wsname = readedData.SheetNames[0];
                const ws = readedData.Sheets[wsname];
                /* Convert array to json*/
                const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1, blankrows: true });
                setcAssump([...cAssump,dataParse])
                setselect(files.length-1)
            };
            reader.readAsBinaryString(f)
        }
    }, [files])
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
                        <strong className="me-auto">Component Assumptions</strong>
                        <small>Just Now</small>
                    </Toast.Header>
                    <Toast.Body>File is Added</Toast.Body>
                </Toast>

            </ToastContainer>
            <div className='projectDiv'>
                <div className="projectAssump">
                    <Container fluid>
                        <Row>
                            <Col xs={12}>
                                <div className="headText">
                                    <h3>Project Components</h3>
                                </div>
                                <div className="form-group">
                                        <label htmlFor="aFile">Import Component</label>
                                        <div className="uploadField">
                                            <input type="file" name="aFile" id="aFile" accept=".xls,.xlsx,.ods,.csv" onChange={getFiles} />
                                            <div className="fileName">
                                                <span className='uploadName'>{fileName}</span>
                                            </div>
                                            <label htmlFor="aFile">Browse</label>
                                            <button id='uploadAssump'>Upload</button>
                                        </div>
                                    </div>
                                <form action="" className="assumptions" onSubmit={sendAsumption}>

                                    <div className="form-group">
                                        <label htmlFor="aName">Component Name</label>
                                        <input type="text" name="aName" id="aName" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="adesc">Component Description</label>
                                        <textarea name="adesc" id="adesc" cols="30" rows="5" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="aSelect">Component Assumption</label>
                                        <select name="aSelect" onChange={assumpType} id="aSelect" required>
                                            <option value="0">Select Assumptions</option>
                                            <option value="1">Carrier Expansion</option>
                                            <option value="2">Band Expansion</option>
                                            <option value="3">Tech Sites Expansion</option>
                                            <option value="4">Radio Loc Expansion</option>
                                        </select>
                                    </div>
                                    <div className="actbtn">
                                        <button type='submit'>Save</button>
                                        <button onClick={() => {
                                            navigate(`/userOne/dashBoard/ff/generate?request=new_project`)
                                        }
                                        }>Finish</button>
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
