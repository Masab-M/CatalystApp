import React from 'react'
import { Table } from 'react-bootstrap'

export default function RevenueC() {
  return (
  <>
    <div className="levelDiv">
    <div className="levelTable">
        <div className="headText">
            <h3>Depreciation Summary</h3>
        </div>
        <Table className='expndtreSmry'>
            <thead>
                <tr>
                    <th>Items</th>
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
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>WAD CAPEX</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>10</td>
                </tr>
            </tbody>
        </Table>
    </div>
</div>
</>
  )
}