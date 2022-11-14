import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CgArrowLongRight } from 'react-icons/cg';
import { MdEmail } from 'react-icons/md'
import { FaBell } from 'react-icons/fa'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import './DashNav.css'
import { useContext } from 'react';
import { FFContext } from '../../Context/FFContext';

export default function DashNav(props) {
    const isSrch = props.srch;
    const level = props.level;
    const p_Name = props.p_Name;
    return (
        <div className='DashNav'>
            <Container fluid>
                <Row>
                    <Col xs={7}>
                        {isSrch ? <Search /> : <BranchDet branchName={p_Name}/>}
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
const {setlevel} = useContext(FFContext)
    const setLevel=(e)=>{
        const {value}= e.target
        setlevel(parseInt(value))
        }
    return <div className="levelText">
        <form action="">
            <div className="form-group">
                <select name="" id="" onChange={setLevel}>
                    <option value="1">Project Level</option>
                    <option value="2">Component Level</option>
                    <option value="3">Item Level</option>
                </select>
            </div>
        </form>
    </div>;
}

function BranchDet(props) {
    
    return <div className="BranchDet">
        <span className="type">
            Project
        </span>
        <CgArrowLongRight />
        <span className="BranchName">
            {props.branchName ? props.branchName :"Project Name"}
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