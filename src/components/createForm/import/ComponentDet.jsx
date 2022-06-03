import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'
import { Table } from 'react-bootstrap'
export default function ComponentDet() {
  return (
    <>
            <div className="adetDiv">
        <div className="assumpDet">
                <Container>
                    <Row>
                        <Col xs={6}>
                            <div className="headText">
                                <h3>Component Details</h3>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className="insrt">
                                <button>Insert New Item</button>
                                <BsThreeDotsVertical />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Table  hover className='assumpDetTable'>
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" name="slctAll" id="slctAll" />
                                        </th>
                                        <th>Property_ID</th>
                                        <th>NH_Radius</th>
                                        <th>Cost_XS</th>
                                        <th>Cost_TX</th>
                                        <th>Cost_CEM</th>
                                        <th>Cost_SW_Co</th>
                                        <th>Cost_IP</th>
                                        <th>Existing Tech</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td> 
                                        <td>-5%</td> 
                                        <td >
                                            <div className="adetactn">
                                            <div className="edtdet">
                                                <AiOutlineEdit/>
                                            </div>
                                            <div className="dltdet">
                                                <AiOutlineDelete/>
                                            </div>
                                            </div>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td> 
                                        <td >
                                            <div className="adetactn">
                                            <div className="edtdet">
                                                <AiOutlineEdit/>
                                            </div>
                                            <div className="dltdet">
                                                <AiOutlineDelete/>
                                            </div>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td>
                                        <td>-5%</td> 
                                        <td >
                                            <div className="adetactn">
                                            <div className="edtdet">
                                                <AiOutlineEdit/>
                                            </div>
                                            <div className="dltdet">
                                                <AiOutlineDelete/>
                                            </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </>
  )
}
