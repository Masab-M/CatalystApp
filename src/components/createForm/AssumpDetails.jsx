import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'
import { Table } from 'react-bootstrap'
export default function AssumpDetails() {
    return (
        <>
        <div className="adetDiv">
        <div className="assumpDet">
                <Container>
                    <Row>
                        <Col xs={6}>
                            <div className="headText">
                                <h3>Assumptions Details</h3>
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
                            <Table  hover>
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" name="slctAll" id="slctAll" />
                                        </th>
                                        <th>YEAR 1</th>
                                        <th>YEAR 2</th>
                                        <th>YEAR 3</th>
                                        <th>YEAR 4</th>
                                        <th>YEAR 5</th>
                                        <th>YEAR 6</th>
                                        <th>YEAR 7</th>
                                        <th>YEAR 8</th>
                                        <th>YEAR 9</th>
                                        <th>YEAR 10</th>
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
                                        <td>-5%</td> 
                                        <td>-5%</td> 
                                        <td className='adetactn'>
                                            <div className="edtdet">
                                                <AiOutlineEdit/>
                                            </div>
                                            <div className="dltdet">
                                                <AiOutlineDelete/>
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
                                        <td>-5%</td> 
                                        <td>-5%</td> 
                                        <td className='adetactn'>
                                            <div className="edtdet">
                                                <AiOutlineEdit/>
                                            </div>
                                            <div className="dltdet">
                                                <AiOutlineDelete/>
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
                                        <td>-5%</td> 
                                        <td>-5%</td> 
                                        <td className='adetactn'>
                                            <div className="edtdet">
                                                <AiOutlineEdit/>
                                            </div>
                                            <div className="dltdet">
                                                <AiOutlineDelete/>
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
