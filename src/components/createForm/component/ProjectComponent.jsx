import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as XLSX from 'xlsx';
import { ComponentAssump } from '../../../Context/ProjectComponent';
export default function ProjectComponent() {
    const { files, setfiles, cAssump, setcAssump } = useContext(ComponentAssump)
    const [type, setType] = useState(null);
    function getFiles(e) {
        const file = e.target.files;
        setfiles(file)
    }
    function assumpType(e) {
        const { value, name } = e.target;
        console.log(value);
        setType(value)
    }
    function sendAsumption(e) {
        e.preventDefault();
        let objArray = {}
        objArray.data = cAssump.slice(1).map((val) => {
            var obj = {};
            val.map((ele, index) => {
                obj[cAssump[0][index]] = ele.toString();
            })
            return obj;
        })
        objArray.component_name = e.target[2].value;
        objArray.component_desc = e.target[3].value;
        objArray.component_filename = files[0].name;
        let id=localStorage.getItem('new_project_id');
        objArray.project_id = parseInt(id);
        console.log(objArray);
        let url;
        console.log(type);
        switch (parseInt(type)) {
            case 1:
                console.log('done');
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

    }
    function cAssumpSend(url, payload) {
        console.log('call');
        const headers = {
            'Content-Type': 'text/plain'
        };
        const assumpPromise = axios.post(url, payload, { headers });
        Promise.all([assumpPromise]).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        })
    }
    function uploadFiles(e) {
        e.preventDefault()
        var reader = new FileReader();
        const f = files[0];
        reader.onload = async function (e) {
            var data = e.target.result;
            let readedData = XLSX.read(data, { type: 'binary' });
            const wsname = readedData.SheetNames[0];
            const ws = readedData.Sheets[wsname];
            /* Convert array to json*/
            const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1, blankrows: true });
            setcAssump(dataParse)
        };
        reader.readAsBinaryString(f)
    }
    return (
        <>
            <div className='projectDiv'>
                <div className="projectAssump">
                    <Container fluid>
                        <Row>
                            <Col xs={12}>
                                <div className="headText">
                                    <h3>Project Components</h3>
                                </div>
                                <form action="" className="assumptions" onSubmit={sendAsumption}>
                                    <div className="form-group">
                                        <label htmlFor="aFile">Import Component</label>
                                        <div className="uploadField">
                                            <input type="file" name="aFile" id="aFile" accept=".xls,.xlsx,.ods,.csv" multiple onChange={getFiles} />
                                            <div className="fileName">
                                                <span className='uploadName'></span>
                                            </div>
                                            <label htmlFor="aFile">Browse</label>
                                            <button id='uploadAssump' onClick={uploadFiles}>Upload</button>
                                        </div>
                                    </div>
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
                                        <Link to=''>Finish</Link>
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
