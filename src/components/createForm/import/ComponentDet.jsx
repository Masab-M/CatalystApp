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
    const { cAssump, setcAssump,select } = useContext(ComponentAssump)
    // Modal states and functions
    var tableData;
    function padLeft(nr, n, str){
        return Array(n-String(nr).length+1).join(str||'0')+nr;
    }
    const [show, setShow] = useState(false);
    const [editRecord, seteditRecord] = useState(0);
    const handleClose = (e) => {
        e.preventDefault();
        let newArray = [];
        header.map((val, index) => {
            try {
                newArray.push(e.target[index].value);
            } catch (error) {
                
            }
        })
        let tempArray = cAssump
        tempArray[editRecord+1] = newArray;
        setcAssump(tempArray)
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
                <div className="form-group" key={index}>
                    <label htmlFor="">{header[index]}</label>
                    <input type="text" defaultValue={val} />
                </div>
            </>
        )
    } catch (error) {
    }
    useLayoutEffect(() => {
        if (select === null) {
            setHeader([]);
        }
        else {
            setHeader(cAssump[select][0]);
        }
    }, [select])
    console.log('cAssump',cAssump);
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
                                select!==null?
                                    <Table responsive hover className='assumpDetTable'>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input type="checkbox" name="slctAll" id="slctAll" />
                                                </th>
                                                {
                                                    header.map((val,index) =>
                                                        <th key={index}>{val}</th>
                                                    )
                                                }
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                
                                                cAssump[select].slice(1).map((val, indexP) =>
                                                    <tr key={indexP}>
                                                        <td>
                                                            <input type="checkbox" name="" id="" />
                                                        </td>
                                                        {
                                                            val.map((tdval, index) =>
                                                            index===0?
                                                                <td key={index}>{header[0]==='property_id'?'X'+padLeft(indexP + 1,4):tdval}</td>:<td key={index}>{tdval}</td>
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
                                    :'Select Component From Above'
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
