import React from 'react'
import { Table } from 'react-bootstrap'

export default function InvestPerform() {
  return (
    <>
    <div className="levelDiv">
        <div className="invstPrfomnce">
            <div className="headText">
                <h3>Invest Performance</h3>
            </div>
            <Table className='performData'>
                <thead>
                    <tr>
                        <th>Revenue Total</th>
                        <th>capital</th>
                        <th>R Expenses</th>
                        <th>payback Period</th>
                        <th>IRR</th>
                        <th>nPV</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>

    </>
  )
}
