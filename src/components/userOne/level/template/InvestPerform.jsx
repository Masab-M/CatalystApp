import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { FFContext } from '../../../../Context/FFContext'

export default function InvestPerform() {
    const { ProjectLevel } = useContext(FFContext)
    const [investP, setinvestP] = useState(null)
    useEffect(() => {
        if(ProjectLevel){
            let obj=ProjectLevel.projectff ? ProjectLevel.projectff :ProjectLevel.projectcomponentff? ProjectLevel.projectcomponentff :null;
            setinvestP(obj)
        }
    }, [ProjectLevel])
    console.log(investP);
        return (
        <>
            <div className="levelDiv">
                <div className="invstPrfomnce">
                    <div className="headText">
                        <h3>Invest Performance</h3>
                    </div>
                    <Container fluid>
                        {investP ?
                            <Row>
                                <Col xs={6}>
                                    <div className="ProjectInvst">
                                        <div className="headInvst">
                                            <h5>
                                                paybackperiod
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{
                                            investP.paybackperiod
                                            }</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="ProjectInvst">
                                        <div className="headInvst">
                                            <h5>
                                                totalrecurrentexpenses
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{investP.totalrecurrentexpenses}</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="ProjectInvst">
                                        <div className="headInvst">
                                            <h5>
                                                totalrevenue
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{
                                            investP.totalrevenue
                                            }</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="ProjectInvst">
                                        <div className="headInvst">
                                            <h5>
                                                totalcapex
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{investP.totalcapex }</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="ProjectInvst">
                                        <div className="headInvst">
                                            <h5>
                                                irr
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{investP.irr}</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="ProjectInvst">
                                        <div className="headInvst">
                                            <h5>
                                                Npv
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{investP.npv}</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            :'Loading'}

                    </Container>
                </div>
            </div>
        </>
    )
}
