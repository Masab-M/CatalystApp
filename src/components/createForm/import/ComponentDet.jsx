import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { Table } from 'react-bootstrap'
import { ComponentAssump } from '../../../Context/ProjectComponent'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { BiLeftTopArrowCircle } from 'react-icons/bi'
export default function ComponentDet() {
    // Contexts States
    const { cAssump, setcAssump } = useContext(ComponentAssump)
    // Modal states and functions
    var tableData;
    const [show, setShow] = useState(false);
    const [editRecord, seteditRecord] = useState(0);
    const handleClose = (e) => {
        e.preventDefault();
        let newArray = [];
        header.map((val, index) => {
            newArray.push(e.target[index].value);
        })
        let tempArray = cAssump
        tempArray[editRecord+1] = newArray;
        setcAssump(tempArray)
        console.log(cAssump);
        setShow(false)
    };
    const handleShow = (index) => {
        setShow(true)
        seteditRecord(index)
    };
    //Component States
    const [header, setHeader] = useState([])
    try {
        var modalData = cAssump[editRecord + 1].map((val, index) =>
            <>
                <div className="form-group">
                    <label htmlFor="">{header[index]}</label>
                    <input type="text" defaultValue={val} />
                </div>
            </>
        )
    } catch (error) {
    }
    useLayoutEffect(() => {
        if (cAssump[0] === undefined) {
            setHeader([]);
        }
        else {

            setHeader(cAssump[0]);
        }
    }, [cAssump])
    console.log(cAssump);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={handleClose}>
                        {
                            modalData
                        }
                        <div className="actbtn">
                            <button type='submit' className=''>
                                Save Changes
                            </button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
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
                                {cAssump.length > 0 ?
                                    <Table responsive hover className='assumpDetTable'>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input type="checkbox" name="slctAll" id="slctAll" />
                                                </th>
                                                {
                                                    header.map((val) =>
                                                        <th>{val}</th>
                                                    )
                                                }
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cAssump.slice(1).map((val, index) =>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" name="" id="" />
                                                        </td>
                                                        {
                                                            val.map((tdval, index) =>
                                                                <td key={index}>{tdval}</td>
                                                            )
                                                        }
                                                        <td >
                                                            <div className="adetactn">
                                                                <div className="edtdet">
                                                                    <AiOutlineEdit onClick={() => {
                                                                        handleShow(index)
                                                                    }} />
                                                                </div>
                                                                <div className="dltdet">
                                                                    <AiOutlineDelete />
                                                                </div>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                    : 'Browse and Upload File'
                                }

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
