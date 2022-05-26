import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {CgArrowLongRight} from 'react-icons/cg';
import {MdEmail} from 'react-icons/md'
import {FaBell} from 'react-icons/fa'
import {BsFillCaretDownFill} from 'react-icons/bs'
import './DashNav.css'
export default function DashNav() {
  return (
    <div className='DashNav'>
    <Container fluid>
    <Row>
        <Col xs={6}>
            <div className="BranchDet">
                <span className="type">
                    Project
                </span>
                <CgArrowLongRight/>
                <span className="BranchName">
                Zong Kohat City
                </span>
            </div>
        </Col>
        <Col xs={6}>
            <div className="userSC">
                <div className="mails">
                <MdEmail/>    
                </div>
                <div className="ntfy">
                <FaBell/>
                </div>
                <div className="userLinks">
                    <div className="usrImg">
                        <img src="https://picsum.photos/40/40" alt="" />
                        <BsFillCaretDownFill/>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
    </Container>
    </div>
  )
}
