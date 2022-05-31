import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function AssumpDetails() {
    return (
        <>
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
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}
