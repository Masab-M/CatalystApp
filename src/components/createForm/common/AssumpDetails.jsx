import React, { useEffect, useMemo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { Table } from 'react-bootstrap'
import { AssumpContext } from '../../../Context/AssumpContext'
import { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import { useRef } from 'react'
export default function AssumpDetails() {
    const { selectRecord, setassumption, assumption } = useContext(AssumpContext)
    const assumpForm = useRef(null)
    const [show, setShow] = useState(false);
    const handleClose = () => {

        setShow(false);
    }
    function updateAssump(event) {
        const body = new FormData(event.target)
        event.preventDefault();
        let newobj = assumption;
        for (let entry of body.entries()) {
            newobj[selectRecord][entry[0]] = entry[1]
        }
    }

    const handleShow = () => setShow(true);
    const Keys = Object.keys(assumption[selectRecord]).map((val, index) =>
        (index > 2 && index < (Object.keys(assumption[selectRecord]).length - 1)) ? <th>{val}</th> :''
    )
    const values= Object.values(assumption[selectRecord]).map((val, index) =>
        index > 2 && index < (Object.keys(assumption[selectRecord]).length - 1) ?
            <td>{val}</td> : ''
    )
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Assumption</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={updateAssump} ref={assumpForm}>
                        {Object.entries(assumption[selectRecord]).map(([key, val], index) =>
                            index > 2 && index < (Object.keys(assumption[selectRecord]).length - 1) ?
                                <>
                                    <div className="form-group">
                                        <label>{key}</label>
                                        <input type="text" defaultValue={val} name={key} id={key} />
                                    </div>
                                </>
                                : ''
                        )}
                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
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
                                <Table hover responsive className='assumpDetTable'>
                                    <thead>
                                        <tr>
                                            <th>
                                                <input type="checkbox" name="slctAll" id="slctAll" />
                                            </th>
                                          {
                                            Keys
                                          }
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="" id="" />
                                            </td>
                                           {
                                            values
                                           }
                                            <td >
                                                <div className="adetactn">
                                                    <div className="edtdet">
                                                        <AiOutlineEdit variant="primary" onClick={handleShow} />
                                                    </div>
                                                    <div className="dltdet">
                                                        <AiOutlineDelete />
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
