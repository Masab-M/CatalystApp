import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { CSVDownload, CSVLink } from 'react-csv';
import { FFContext } from '../../../../Context/FFContext'
export default function ItemTable() {
    const { itemLevel, setProjectLevel } = useContext(FFContext);
    const [selected, setselected] = useState(0)
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
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '38') {
        itemSelect(selected-1)
        // up arrowselected
    }
    else if (e.keyCode == '40') {
        itemSelect(selected+1)
        // down arrow
    }
}
    return (
        <>
            <div className="levelDiv">
            <CSVLink data={itemLevel.projectcomponentitemff}>Download me</CSVLink>
                <div className="expndtreTable itemLevelTable">
                    <div className="headText">
                        <h3>Choose Item</h3>
                    </div>
                    <Table className='expenditure' responsive hover>
                        <thead>
                            <tr>
                                <th>Property_ID</th>
                                <th>latitude</th>
                                <th>longitude</th>
                                <th>Payback_Period</th>
                                <th>NPV</th>
                                <th>IRR</th>
                                <th>Component_ID</th>
                                <th>Total_Revenue</th>
                                <th>Total_Capex</th>
                                <th>Total_Recurrent_Expenses</th>
                                <th>Carrier_Averages_Level</th>
                                <th>Carrier_Averages Sub-Level</th>
                                <th>Givin_Working_Radius</th>
                                <th>Actual_Working_Radius</th>
                                <th>Service_Category</th>
                                <th>Data_Growth_Time_Segment_Name</th>
                                <th>DGTSSN</th>
                                <th>CS_Voice_Growth_Time_SegmentName</th>
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
