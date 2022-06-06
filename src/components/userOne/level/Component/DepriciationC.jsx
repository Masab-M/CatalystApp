import React from 'react'
import { Table } from 'react-bootstrap'

export default function DepriciationC() {
  return (
    <>
                  <div className="levelDiv">
                <div className="levelTable">
                    <div className="headText">
                        <h3>Depreciation</h3>
                    </div>
                    <Table className='expenditure'>
                        <thead>
                            <tr>
                                <th>Items</th>
                                <th>Life</th>
                                <th>CAPEX</th>
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
                                <td>Neutral</td>
                                <td>Neutral</td>
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
            
            <div className="levelDiv">
                <div className="levelTable">
                    <div className="headText">
                        <h3>Depreciation Summary</h3>
                    </div>
                    <Table className='expndtreSmry'>
                        <thead>
                            <tr>
                                <th>Items</th>
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
