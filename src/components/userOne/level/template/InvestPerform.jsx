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
                                                Payback Period
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{
                                            investP.paybackperiod.toLocaleString()
                                            }</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="ProjectInvst">
                                        <div className="headInvst">
                                            <h5>
                                                Total Recurrentexpenses
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{investP.totalrecurrentexpenses.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="ProjectInvst">
                                        <div className="headInvst">
                                            <h5>
                                                Total Revenue
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{
                                            investP.totalrevenue.toLocaleString()
                                            }</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="ProjectInvst">
                                        <div className="headInvst">
                                            <h5>
                                                Total Capex
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{investP.totalcapex.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="ProjectInvst">
                                        <div className="headInvst">
                                            <h5>
                                                IRR
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{(investP.irr * 100).toString().split('.')[0]}%</span>
                                            {/* <span>{(investP.irr*100).toString().split('.')[0]+'.'+(investP.irr*100).toString().split('.')[1].slice(0,2)}%</span> */}
                                            {/* <span>{Number(investP.irr/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})}</span> */}
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="ProjectInvst">
                                        <div className="headInvst">
                                            <h5>
                                                NPV
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{investP.npv.toLocaleString()}</span>
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
