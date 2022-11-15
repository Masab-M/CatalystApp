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
                               <th>Neutral</th>
                               <td>Year1</td>
                               <td>Year2</td>
                               <td>Year3</td>
                               <td>Year4</td>
                               <td>Year5</td>
                               <td>Year6</td>
                               <td>Year7</td>
                               <td>Year8</td>
                               <td>Year9</td>
                               <td>Year10</td>
                               <td>Total</td>
                           </tr>
                       </tbody>
                   </Table>
               </div>
           </div>
   </>
  )
}
