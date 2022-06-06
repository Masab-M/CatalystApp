import React from 'react'
import { Table } from 'react-bootstrap'

export default function CashFlowC() {
  return (
    <>
    <div className="levelDiv">
               <div className="cshflowTable">
                   <div className="headText">
                       <h3>Cash Flow</h3>
                   </div>
                   <Table className='cshflw'>
                       <thead>
                           <tr>
                               <th>Neutral</th>
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
                               <th>Total</th>
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
                               <td>Year 8</td>
                               <td>Year 9</td>
                               <td>Year 10</td>
                               <td>Total</td>
                           </tr>
                       </tbody>
                   </Table>
               </div>
           </div>
   </>
  )
}
