import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import {AiOutlineEdit} from 'react-icons/ai'
import { ComponentAssump } from '../../../Context/ProjectComponent'
export default function components() {
  const {cAssump,files}=useContext(ComponentAssump);
  return (
    <>
        <div className="AssumpDiv">
    <div className="Assumptions">
        <div className="headText">
            <h3>Components</h3>
        </div>
        <Container fluid>
        <Row>
          {
            cAssump.length>0 ?<Col xs={4}>
            <div className="singleAssump">
              <span className="asumpid">1</span>
              <span className="nAssump">{files[0].name}</span>
              <AiOutlineEdit/>
            </div>
            </Col>:'Browse and Upload File'
          }
            
        </Row>
        </Container>
    </div>
    </div>
    </>
  )
}
