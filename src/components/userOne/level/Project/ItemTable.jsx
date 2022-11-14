import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { FFContext } from '../../../../Context/FFContext'
export default function ItemTable() {
    const { itemLevel, setProjectLevel } = useContext(FFContext);
    const [selected, setselected] = useState(null)
    console.log('item', itemLevel);
    const itemSelect = (index) => {
        setselected(index)
        if (itemLevel) {
            let obj = {};
            obj.itemff = itemLevel.projectcomponentitemff[index]
            console.log(obj);
            setProjectLevel(obj)
        }
    }
    return (
        <>
            <div className="levelDiv">
                <div className="expndtreTable">
                    <div className="headText">
                        <h3>Choose Item</h3>
                    </div>
                    <Table className='expenditure' responsive hover>
                        <thead>
                            <tr>
                                <th>Property ID</th>
                                <th>latitude</th>
                                <th>longitude</th>
                                <th>Payback Period</th>
                                <th>NPV</th>
                                <th>IRR</th>
                                <th>Component ID</th>
                                <th>Total Revenue</th>
                                <th>Total Capex</th>
                                <th>Total Recurrent Expenses</th>
                                <th>Carrier Averages Level</th>
                                <th>Carrier Averages Sub-Level</th>
                                <th>Givin Working Radius</th>
                                <th>Actual Working Radius</th>
                                <th>Service Category</th>
                                <th>Data Growth Time Segment Name</th>
                                <th>Data Growth Time Sub-Segment Name</th>
                                <th>csvoicegrowthtimesegmentname</th>
                                <th>csvoicegrowthtimesubsegmentname</th>
                                <th>workingdatagrowthrate</th>
                                <th>workingcsvoicegrowthrate</th>
                                <th>lm_avgdailytotdatamb_mobile</th>
                                <th>lm_avgdailytotvoicemin</th>
                                <th>lm_qci8_data</th>
                                <th>workingdataunitrate</th>
                                <th>workingcsvoiceunitrate</th>
                                <th>unitratedate</th>
                                <th>neighborhoodradius</th>
                                <th>cost_xs</th>
                                <th>cost_tx</th>
                                <th>cost_cem</th>
                                <th>cost_sw_core</th>
                                <th>cost_ip_core</th>
                                <th>tech_name</th>
                                <th>band_name</th>
                                <th>carrier_name</th>
                                <th>justification</th>
                                <th>discountfactoronavg</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemLevel ? itemLevel.projectcomponentitemff.map((ele, index) =>
                                <tr onClick={() => { itemSelect(index) }}   className={`${selected===index ? "visit" : ""}`} key={index}>
                                    <th>{ele.property_id}</th>
                                    <th>{ele.latitude}</th>
                                    <td>{ele.longitude}</td>
                                    <td>{ele.paybackperiod}</td>
                                    <td>{ele.npv}</td>
                                    <td>{ele.irr}</td>
                                    <td>{ele.projectcomponent_id} </td>
                                    <td>{ele.totalrevenue} </td>
                                    <td>{ele.totalcapex} </td>
                                    <td>{ele.totalrecurrentexpenses} </td>
                                    <td>{ele.carrieraverageslevel} </td>
                                    <td>{ele.carrieraveragessublevel} </td>
                                    <td>{ele.givinworkingradius} </td>
                                    <td>{ele.actualworkingradius} </td>
                                    <td>{ele.servicecategory} </td>
                                    <td>{ele.datagrowthtimesegmentname} </td>
                                    <td>{ele.datagrowthtimesubsegmentname} </td>
                                    <td>{ele.csvoicegrowthtimesegmentname} </td>
                                    <td>{ele.csvoicegrowthtimesubsegmentname} </td>
                                    <td>{ele.workingdatagrowthrate} </td>
                                    <td>{ele.workingcsvoicegrowthrate} </td>
                                    <td>{ele.lm_avgdailytotdatamb_mobile} </td>
                                    <td>{ele.lm_avgdailytotvoicemin} </td>
                                    <td>{ele.lm_qci8_data} </td>
                                    <td>{ele.workingdataunitrate} </td>
                                    <td>{ele.workingcsvoiceunitrate} </td>
                                    <td>{ele.unitratedate} </td>
                                    <td>{ele.neighborhoodradius} </td>
                                    <td>{ele.cost_xs} </td>
                                    <td>{ele.cost_tx} </td>
                                    <td>{ele.cost_cem} </td>
                                    <td>{ele.cost_sw_core} </td>
                                    <td>{ele.cost_ip_core} </td>
                                    <td>{ele.tech_name} </td>
                                    <td>{ele.band_name} </td>
                                    <td>{ele.carrier_name} </td>
                                    <td>{ele.justification} </td>
                                    <td>{ele.discountfactoronavg} </td>
                                </tr>
                            ) : <tr>
                                <th>Loading</th>
                            </tr>}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
