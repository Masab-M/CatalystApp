import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { CSVLink } from 'react-csv'
import { FFContext } from '../../../../Context/FFContext'
import { AiOutlineExport } from 'react-icons/ai';

export default function InvestPerform() {
    const [CSVData, setCSVData] = useState([]);
    const { ProjectLevel,level } = useContext(FFContext)
    const [investP, setinvestP] = useState(null)
    useEffect(() => {
        if(ProjectLevel){
            let obj=ProjectLevel.projectff ? ProjectLevel.projectff :ProjectLevel.projectcomponentff? ProjectLevel.projectcomponentff :null;
            setinvestP(obj)
        }
    }, [ProjectLevel])
    useEffect(() => {
        if(investP){

            let csvArray = JSON.parse(JSON.stringify(investP))
            if(level===1)
            {
                delete csvArray['project_cash_flow_performance']; 
                delete csvArray['project_depreciation'];
                delete csvArray['project_expenditure'];
                delete csvArray['project_profit_and_loss'];
                delete csvArray['project_recurrent_expenses'];
                delete csvArray['project_revenues'];   
            }
            if(level===2)
            {
                delete csvArray['component_cash_flow_performance']; 
                delete csvArray['component_depreciation'];
                delete csvArray['component_expenditure'];
                delete csvArray['component_profit_and_loss'];
                delete csvArray['component_recurrent_expenses'];
                delete csvArray['component_revenues'];  
            }
            setCSVData(csvArray)
        }
    }, [investP])
    
        return (
        <>
            <div className="levelDiv">
                <div className="invstPrfomnce">
                    <div className="headText">
                        <h3>Investment Performance</h3>
                        <div className="csvFile">
                        {investP ?
                    <CSVLink data={[CSVData]}>
                        <AiOutlineExport/>
                        Export CSV</CSVLink>
                    :
                    ''}
                        </div>
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
                                            } Years</span>
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
                                                NPV
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{investP.npv.toLocaleString()}</span>
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
                                                Total Recurrent Expenses
                                            </h5>
                                        </div>
                                        <div className="ValueInvst">
                                            <span>{investP.totalrecurrentexpenses.toLocaleString()}</span>
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
