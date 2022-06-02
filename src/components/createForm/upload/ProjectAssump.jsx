import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ProjectAssump.css';
export default function ProjectAssump() {
    return (
        <div className='projectDiv'>
            <div className="projectAssump">
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <div className="headText">
                                <h3>Project Assupmtions</h3>
                            </div>
                            <form action="" className="assumptions">
                                <div className="form-group">
                                    <label htmlFor="assumpId">Assupmtion ID</label>
                                    <input type="text" name="assumpId" id="assumpId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="aName">Assupmtion Name</label>
                                    <input type="text" name="aName" id="aName" />
                                </div>
                                <div className="form-group">
                                    <div className="uploadField">
                                        <input type="file" name="aFile" id="aFile" />
                                        <div className="fileName">
                                            <span className='uploadName'></span>
                                        </div>
                                        <label htmlFor="aFile">Browse</label>
                                        <button id='uploadAssump'>Upload</button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="adesc">Assupmtion Description</label>
                                    <textarea name="adesc" id="adesc" cols="30" rows="5"></textarea>
                                </div>
                                <div className="actbtn">
                                    <Link to=''>Save</Link>
                                    <Link to=''>Finish</Link>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>


            </div>
        </div>
    )
}
