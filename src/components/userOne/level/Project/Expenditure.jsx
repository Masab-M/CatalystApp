import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { FFContext } from '../../../../Context/FFContext'

export default function Expenditure() {
    const { ProjectLevel } = useContext(FFContext)
    const [expenditure, setExpenditure] = useState(null);
    useEffect(() => {
        console.log('change', ProjectLevel);
        if (ProjectLevel) {
            let obj = ProjectLevel.projectff ? ProjectLevel.projectff.project_expenditure : ProjectLevel.projectcomponentff ? ProjectLevel.projectcomponentff.component_expenditure : ProjectLevel.itemff ?  ProjectLevel.itemff.item_expenditure :null;
            setExpenditure(obj)
        }
    }, [ProjectLevel])
    return (
        <>
            <div className="levelDiv">
                <div className="expndtreTable">
                    <div className="headText">
                        <h3>Expenditure</h3>
                    </div>
                    <Table className='expenditure' responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Remarks</th>
                                <th>Year 0</th>
                                <th>Year 1</th>
                                <th>Year 2</th>
                                <th>Year 3</th>
                                <th>Year 4</th>
                                <th>Year 5</th>
                                <th>Year 6</th>
                                <th>Year 7</th>
                                <th>Year 8</th>
                                <th>Year 9</th>
                                <th>Year 10</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenditure ? expenditure.map((rec, index) =>
                                <tr key={index}>
                                    <th>{rec.forecast_name.split('Project')[1]}</th>
                                    <th>{rec.remarks}</th>
                                    <td>{rec.year_0}</td>
                                    <td>{rec.year_1}</td>
                                    <td>{rec.year_2}</td>
                                    <td>{rec.year_3}</td>
                                    <td>{rec.year_4}</td>
                                    <td>{rec.year_5}</td>
                                    <td>{rec.year_6}</td>
                                    <td>{rec.year_7}</td>
                                    <td>{rec.year_8}</td>
                                    <td>{rec.year_9}</td>
                                    <td>{rec.year_10}</td>
                                </tr>
                            ) :<tr >
                            <th>Loading</th>
                        </tr> }

                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
