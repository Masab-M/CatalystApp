import React from 'react'
import { Table } from 'react-bootstrap'

export default function ProjectApprais() {
  return (
    <div className="levelDiv">
    <div className="prjctAppraiseTable">
        <div className="headText">
            <h3>Project Appraisal</h3>
        </div>
        <Table className='prjctAppraise'>
            <thead>
                <tr>
                    <th>Site Name</th>
                    <th>Payback</th>
                    <th>NPV</th>
                    <th>IRR</th>
                    <th>Cost XS</th>
                    <th>Cost TX</th>
                    <th>Cost CEM</th>
                    <th>Cost SW Core</th>
                    <th>Cost IP Core</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Neutral</th>
                    <td>Year1</td>
                    <td>Year2</td>
                    <td>Year3</td>
                    <td>Year4</td>
                    <td>Year5</td>
                    <td>Year6</td>
                    <td>Year7</td>
                    <td>Year7</td>
                </tr>
            </tbody>
        </Table>
    </div>
</div>
  )
}
