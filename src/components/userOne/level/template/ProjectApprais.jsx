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
                    <td>Year 1</td>
                    <td>Year 2</td>
                    <td>Year 3</td>
                    <td>Year 4</td>
                    <td>Year 5</td>
                    <td>Year 6</td>
                    <td>Year 7</td>
                    <td>Year 7</td>
                </tr>
            </tbody>
        </Table>
    </div>
</div>
  )
}
