import React from 'react'
import { Table } from 'react-bootstrap'
import DashNav from '../Dashboard/DashNav'
import './rvProject.css'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import InfoDropDown from './InfoDropDown'

export default function ReviewProject() {

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className='prjctactn'>
                                <InfoDropDown />

                                <div className="editProject">
                                    <AiOutlineEdit />
                                </div>
                                <div className="dltProject">
                                    <AiOutlineDelete />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className='prjctactn'>
                                <InfoDropDown />
                                <div className="editProject">
                                    <AiOutlineEdit />
                                </div>
                                <div className="dltProject">
                                    <AiOutlineDelete />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className='prjctactn'>
                                <InfoDropDown />
                                <div className="editProject">
                                    <AiOutlineEdit />
                                </div>
                                <div className="dltProject">
                                    <AiOutlineDelete />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}
