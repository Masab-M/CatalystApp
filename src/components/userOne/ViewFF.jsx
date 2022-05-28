import React from 'react'
import DashNav from '../Dashboard/DashNav'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ViewFF() {
  return (
    <>
    <DashNav srch={true} />
    <div className="viewProject">
                <Table hover responsive className='reviewProjects'>
                    <thead>
                        <tr>
                            <th>Project ID</th>
                            <th>Project Name</th>
                            <th>Project Created On</th>
                            <th>Project Execution Year</th>
                            <th>Project Owner</th>
                            <th>View</th>
                            <th>View</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                              <Link className='viewBtn plvl' to={''}>
                              P level
                              </Link>
                            </td>
                            <td>
                            <Link className='viewBtn clvl' to={''}>
                              C level
                              </Link>
                            </td>
                            <td>
                            <Link className='viewBtn ilvl' to={''}>
                              I level
                              </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                              <Link className='viewBtn plvl' to={''}>
                              P level
                              </Link>
                            </td>
                            <td>
                            <Link className='viewBtn clvl' to={''}>
                              C level
                              </Link>
                            </td>
                            <td>
                            <Link className='viewBtn ilvl' to={''}>
                              I level
                              </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                              <Link className='viewBtn plvl' to={''}>
                              P level
                              </Link>
                            </td>
                            <td>
                            <Link className='viewBtn clvl' to={''}>
                              C level
                              </Link>
                            </td>
                            <td>
                            <Link className='viewBtn ilvl' to={''}>
                              I level
                              </Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
    </>
  )
}
