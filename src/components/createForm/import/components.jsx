import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {AiOutlineEdit} from 'react-icons/ai'
export default function components() {
  return (
    <>
        <div className="AssumpDiv">
    <div className="Assumptions">
        <div className="headText">
            <h3>Components</h3>
        </div>
        <Container fluid>
        <Row>
            <Col xs={4}>
            <div className="singleAssump">
              <span className="asumpid">1263589</span>
              <span className="nAssump">Assumption of a Model town....</span>
              <AiOutlineEdit/>
            </div>
            </Col>
            <Col xs={4}>
            <div className="singleAssump">
              <span className="asumpid">1263589</span>
              <span className="nAssump">Assumption of a Model town....</span>
              <AiOutlineEdit/>
            </div>
            </Col>
            <Col xs={4}>
            <div className="singleAssump">
              <span className="asumpid">1263589</span>
              <span className="nAssump">Assumption of a Model town....</span>
              <AiOutlineEdit/>
            </div>
            </Col>
        </Row>
        </Container>
    </div>
    </div>
    </>
  )
}
