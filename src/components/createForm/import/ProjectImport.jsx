import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function ProjectImport() {
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
                            <form action="" className="assumptions">
                                <div className="form-group">
                                    <label htmlFor="slctAssump">Select Assumption</label>
                                    <select name="slctAssump" id="slctAssump">
                                        <option value=""></option>
                                        <option value="">Asuumption</option>
                                        <option value="">Asuumption</option>
                                        <option value="">Asuumption</option>
                                        <option value="">Asuumption</option>
                                    </select>
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
    </>
  )
}
