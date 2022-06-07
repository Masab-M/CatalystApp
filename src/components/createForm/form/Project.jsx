import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import {FiArrowLeft} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './project.css'

export default function Project() {
    let navigate = useNavigate();
    const hello = (event) =>{
        event.preventDefault();
        navigate("/userOne/dashBoard/Project/assumption/upload", { replace: true });
    };
  return (
      <div className="ProjectForm">
          <div className="formcontent">
              <Container fluid className='formDiv'>
                  <Row>
                      <Col xs={12}>
                          <div className="formHead">
                              <FiArrowLeft/>
                              <h4>Create Project</h4>
                          </div>
                          <form action="" onSubmit={hello} className='createProject'>
                              <div className="form-group">
                                  <label htmlFor="pName">
                                  Project Name
                                  </label>
                                  <input type="text" name="pName" id="pName" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="pId">
                                  Project ID
                                  </label>
                                  <input type="text" name="pId" id="pId" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="pName">
                                  Project Created On
                                  </label>
                                  <input type="Date" name="pName" id="pName" />
                              </div> 
                              <div className="form-group">
                                  <label htmlFor="pExecYear">
                                  Project Execution Year
                                  </label>
                                  <input type="text" name="pExecYear" id="pExecYear" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="pVersion">
                                  Project Version
                                  </label>
                                  <input type="text" name="pVersion" id="pVersion" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="pOwner">
                                  Project Owner
                                  </label>
                                  <select name="pOwner" id="pOwner">
                                      <option value="">Lorem</option>
                                  </select>
                              </div>
                              <div className="form-submit">
                                  <button type='submit'>Next</button>
                              </div>
                          </form>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  )
}

