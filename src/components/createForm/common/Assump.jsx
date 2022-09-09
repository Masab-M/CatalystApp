import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineEdit } from 'react-icons/ai'
import { AssumpContext } from '../../../Context/AssumpContext'
export default function Assump() {
  const { assumption ,setSelectRecord} = useContext(AssumpContext)
  const chooseRecord=(val)=>{
    setSelectRecord(val)
  }
  return (
    <>
      <div className="AssumpDiv">
        <div className="Assumptions">
          <div className="headText">
            <h3>Assumptions</h3>
          </div>
          <Container fluid>
            <Row>
              {
                assumption.map((val, index) =>
                  <Col xs={4}>
                    <div className="singleAssump" onClick={()=>{chooseRecord(index)}}>
                      <span className="asumpid">{val.assumption_id || val.depreciationlife_id || val.recurrentexpense_Id}</span>
                      <span className="nAssump">{val.assumption_name || val.depreciationlife_name || val.recurrentexpense_Name}</span>
                      <AiOutlineEdit />
                    </div>
                  </Col>
                )
              }
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}
