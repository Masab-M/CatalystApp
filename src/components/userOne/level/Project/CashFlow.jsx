import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { CSVLink } from 'react-csv'
import { FFContext } from '../../../../Context/FFContext'
import { AiOutlineExport } from 'react-icons/ai';

export default function CashFlow() {
    const { ProjectLevel } = useContext(FFContext)
    const [cashflow, setcashflow] = useState(null);
    useEffect(() => {
        if (ProjectLevel) {
            let obj = ProjectLevel.projectff ? ProjectLevel.projectff.project_cash_flow_performance : ProjectLevel.projectcomponentff ? ProjectLevel.projectcomponentff.component_cash_flow_performance : ProjectLevel.itemff ? ProjectLevel.itemff.item_cash_flow_performance : null;
            setcashflow(obj)
        }
    }, [ProjectLevel])
    return (
        <>
            <div className="levelDiv">
                <div className="cshflowTable">
                    <div className="headText">
                        <h3>Cash Flow</h3>
                        <div className="csvFile">
                        {cashflow ?
                    <CSVLink data={cashflow}>
                        <AiOutlineExport/>
                        Export CSV</CSVLink>
                    :
                    ''}
                        </div>
                    </div>
                    <Table className='cshflw' responsive>
                        <thead>
                            <tr>
                                <th>Name</th>

                                <th>Year0</th>
                                <th>Year1</th>
                                <th>Year2</th>
                                <th>Year3</th>
                                <th>Year4</th>
                                <th>Year5</th>
                                <th>Year6</th>
                                <th>Year7</th>
                                <th>Year8</th>
                                <th>Year9</th>
                                <th>Year10</th>
                            </tr>
                        </thead>
                        <tbody>{cashflow ? cashflow.map((rec, index) =>
                            <tr key={index}>
                                <td>{rec.forecast_name}</td>
                                <td>{Math.round(rec.year_0).toLocaleString()}</td>
                                <td>{Math.round(rec.year_1).toLocaleString()}</td>
                                <td>{Math.round(rec.year_2).toLocaleString()}</td>
                                <td>{Math.round(rec.year_3).toLocaleString()}</td>
                                <td>{Math.round(rec.year_4).toLocaleString()} </td>
                                <td>{Math.round(rec.year_5).toLocaleString()} </td>
                                <td>{Math.round(rec.year_6).toLocaleString()} </td>
                                <td>{Math.round(rec.year_7).toLocaleString()} </td>
                                <td>{Math.round(rec.year_8).toLocaleString()} </td>
                                <td>{Math.round(rec.year_9).toLocaleString()} </td>
                                <td>{Math.round(rec.year_10).toLocaleString()} </td>
                            </tr>
                        ) : <tr >
                            <th>Loading</th>
                        </tr>}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
