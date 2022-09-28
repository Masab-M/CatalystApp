import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineEdit } from 'react-icons/ai'
import { ComponentAssump } from '../../../Context/ProjectComponent'
export default function components() {
  const { cAssump, files,setselect,select } = useContext(ComponentAssump);
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
                files.length > 0 ?
                  
                  files.map((file,index)=>
                    <Col xs={4} onClick={()=>{
                      setselect(index)
                    }}>
                        <div className="singleAssump">
                          <span className="asumpid" >{index + 1}</span>
                          <span className="nAssump">{file[0].name}</span>
                          {
                          select==index ?
                          <AiOutlineEdit  />:''   
                        }
                        </div>
                      </Col>
                  )
                  : 'Browse and Upload File'

              }
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}
