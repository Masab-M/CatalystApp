import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CgArrowLongRight } from 'react-icons/cg';
import { MdEmail } from 'react-icons/md'
import { FaBell } from 'react-icons/fa'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import './DashNav.css'
export default function DashNav(props) {
    const isSrch = props.srch;
    const level = props.level;
    return (
        <div className='DashNav'>
            <Container fluid>
                <Row>
                    <Col xs={7}>
                        {isSrch ? <Search /> : <BranchDet />}
                    </Col>
                    <Col xs={5}>
                        <div className="wLevel">
                        {level ? <Level levelName={level}/> :''}
                        <div className="userSC">
                            <div className="mails">
                                <MdEmail />
                            </div>
                            <div className="ntfy">
                                <FaBell />
                            </div>
                            <div className="userLinks">
                                <div className="usrImg">
                                    <img src="https://picsum.photos/40/40" alt="" />
                                    <BsFillCaretDownFill />
                                </div>
                            </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
function Level(props) {
    return <div className="levelText">
        <span>
            {props.levelName} Level FF
        </span>
    </div>;
}
function BranchDet() {
    return <div className="BranchDet">
        <span className="type">
            Project
        </span>
        <CgArrowLongRight />
        <span className="BranchName">
            Zong Kohat City
        </span>
    </div>;
}

function Search() {
    return <div className='SearchProjects'>
        <form action="" className="srchP">
            <div className="form-group">
                <div className="iconField">
                    <input type="text" name="" id="" placeholder='Search' />
                    <BiSearch />
                </div>
                <a href="#" className="srchBtn">
                    <BiSearch />
                </a>
            </div>
        </form>
    </div>;
}