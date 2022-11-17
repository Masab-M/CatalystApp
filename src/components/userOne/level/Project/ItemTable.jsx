import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import {  CSVLink } from 'react-csv';
import DataTable from 'react-data-table-component';
import { AiOutlineExport } from 'react-icons/ai';

import { FFContext } from '../../../../Context/FFContext'
export default function ItemTable() {
    const { itemLevel, setProjectLevel,selected, setselected } = useContext(FFContext);
    const [filterText, setFilterText] = useState('');
    
    var obj_arr_appended = itemLevel.projectcomponentitemff.map(function(currentValue, Index) {
        currentValue.SERIAL_NO = Index
        return currentValue
     })
    const filteredItems = obj_arr_appended.filter(
        row => row.property_id && row.property_id.toLowerCase().includes(filterText.toLowerCase()),
    );
    const itemSelect = (e) => {
        const index = e.SERIAL_NO || e.SERIAL_NO===0 ? e.SERIAL_NO:e ;
        console.log(index);
        setselected(index)
        if (itemLevel) {
            let obj = {};
            obj.itemff = itemLevel.projectcomponentitemff[index]
            setProjectLevel(obj)
        }
    }
    
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '38') {
            e.preventDefault()
            if (selected > 0) {
                itemSelect(selected - 1)
            }
            // up arrowselected
        }
        else if (e.keyCode == '40') {
            e.preventDefault()
            if (selected < itemLevel.projectcomponentitemff.length-1) {
                itemSelect(selected + 1)

            }
            // down arrow
        }
    }
    const columns = [
        {
            name: 'ID',
            selector: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: 'Property_ID',
            selector: row => row.property_id,
            sortable: true,
        },
        {
            name: 'latitude',
            selector: row => row.latitude,
            sortable: false,
        },
        {
            name: 'longitude',
            selector: row => row.longitude,
            sortable: false,
        },
        {
            name: 'Payback_Period',
            selector: row => row.paybackperiod.toLocaleString(),
            sortable: false,
        }, {
            name: 'NPV',
            selector: row => row.npv.toLocaleString(),
            sortable: false,
        }, {
            name: 'IRR',
            selector: row => (row.irr * 100).toString().split('.')[0] + '%',
            sortable: false,
        }, {
            name: 'Component_ID',
            selector: row => row.projectcomponent_id.toLocaleString(),
            sortable: false,
        }, {
            name: 'Total_Recurrent_Expenses',
            selector: row => row.totalrevenue.toLocaleString(),
            sortable: false,
        },
        {
            name: 'Total_Capex',
            selector: row => row.totalcapex.toLocaleString(),
            sortable: false,
        }, {
            name: 'Total_Recurrent_Expenses',
            selector: row => row.totalrecurrentexpenses.toLocaleString(),
            sortable: false,
        },
        {
            name: 'Carrier_Averages_Level',
            selector: row => row.carrieraverageslevel.toLocaleString(),
            sortable: false,
        }, {
            name: 'Carrier_Averages_Sub-Level',
            selector: row => row.carrieraveragessublevel.toLocaleString(),
            sortable: false,
        }, {
            name: 'Givin_Working_Radius',
            selector: row => row.givinworkingradius.toLocaleString(),
            sortable: false,
        }, {
            name: 'Actual_Working_Radius',
            selector: row => row.actualworkingradius.toLocaleString(),
            sortable: false,
        }, {
            name: 'Service_Category',
            selector: row => row.servicecategory.toLocaleString(),
            sortable: false,
        }, {
            name: 'Data_Growth_Time_Segment_Name',
            selector: row => row.datagrowthtimesegmentname.toLocaleString(),
            sortable: false,
        }, {
            name: 'DGTSSN',
            selector: row => row.datagrowthtimesubsegmentname.toLocaleString(),
            sortable: false,
        }, {
            name: 'CS_Voice_Growth_Time_SegmentName',
            selector: row => row.csvoicegrowthtimesegmentname.toLocaleString(),
            sortable: false,
        }, {
            name: 'csvoicegrowthtimesubsegmentname',
            selector: row => row.csvoicegrowthtimesubsegmentname.toLocaleString(),
            sortable: false,
        }, {
            name: 'workingdatagrowthrate',
            selector: row => row.workingdatagrowthrate.toLocaleString(),
            sortable: false,
        },
        {
            name: 'workingcsvoicegrowthrate',
            selector: row => row.workingcsvoicegrowthrate.toLocaleString(),
            sortable: false,
        },
        {
            name: 'lm_avgdailytotdatamb_mobile',
            selector: row => row.lm_avgdailytotdatamb_mobile.toLocaleString(),
            sortable: false,
        }, {
            name: 'lm_avgdailytotvoicemin',
            selector: row => row.lm_avgdailytotvoicemin.toLocaleString(),
            sortable: false,
        }, {
            name: 'lm_qci8_data',
            selector: row => row.lm_qci8_data.toLocaleString(),
            sortable: false,
        }, {
            name: 'workingdataunitrate',
            selector: row => row.workingdataunitrate.toLocaleString(),
            sortable: false,
        }, {
            name: 'workingcsvoiceunitrate',
            selector: row => row.workingcsvoiceunitrate.toLocaleString(),
            sortable: false,
        }, {
            name: 'unitratedate',
            selector: row => row.unitratedate.split('T')[0],
            sortable: false,
        }, {
            name: 'neighborhoodradius',
            selector: row => row.neighborhoodradius.toLocaleString(),
            sortable: false,
        }, {
            name: 'cost_xs',
            selector: row => row.cost_xs.toLocaleString(),
            sortable: false,
        }, {
            name: 'cost_tx',
            selector: row => row.cost_tx.toLocaleString(),
            sortable: false,
        }, {
            name: 'cost_cem',
            selector: row => row.cost_cem.toLocaleString(),
            sortable: false,
        }, {
            name: 'cost_sw_core',
            selector: row => row.cost_sw_core.toLocaleString(),
            sortable: false,
        }, {
            name: 'cost_ip_core',
            selector: row => row.cost_ip_core.toLocaleString(),
            sortable: false,
        }, {
            name: 'tech_name',
            selector: row => row.tech_name.toLocaleString(),
            sortable: false,
        }, {
            name: 'band_name',
            selector: row => row.band_name.toLocaleString(),
            sortable: false,
        }, {
            name: 'carrier_name',
            selector: row => row.carrier_name.toLocaleString(),
            sortable: false,
        },
        {
            name: 'justification',
            selector: row => row.justification.toLocaleString(),
            sortable: false,
        }, {
            name: 'discountfactoronavg',
            selector: row => row.discountfactoronavg.toLocaleString(),
            sortable: false,
        },
    ];
    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setFilterText('');
            }
        };

        return (
            <>
                <div className="SearchRows">
                    <input
                        id="search"
                        type="text"
                        placeholder="Property ID"
                        aria-label="Search Input"
                        value={filterText}
                        onChange={e => setFilterText(e.target.value)}
                    />
                    <button type="button" onClick={handleClear}>
                        X
                    </button>
                </div>

            </>
        );
    }, [filterText]);
    return (
        <>
            <div className="levelDiv">
                <div className="expndtreTable itemLevelTable">
                    <div className="headText">
                        <h3>Choose Item</h3>
                        <div className="csvFile">
                            {itemLevel ?
                                <CSVLink data={itemLevel.projectcomponentitemff}>
                                    <AiOutlineExport />
                                    Export CSV</CSVLink>
                                :
                                ''}
                        </div>
                    </div>
                    {/* <Table className='expenditure' responsive hover>
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
                                <tr onClick={() => { itemSelect(index) }} className={`${selected === index ? "visit" : ""}`} key={index}>
                                    <th>{ele.property_id}</th>
                                    <th>{ele.latitude}</th>
                                    <td>{ele.longitude}</td>
                                    <td>{ele.paybackperiod.toLocaleString()}</td>
                                    <td>{ele.npv.toLocaleString()}</td>
                                    <td>{(ele.irr * 100).toString().split('.')[0] + '.' + (ele.irr * 100).toString().split('.')[1].slice(0, 2)}%</td>
                                    <td>{ele.projectcomponent_id.toLocaleString()} </td>
                                    <td>{ele.totalrevenue.toLocaleString()} </td>
                                    <td>{ele.totalcapex.toLocaleString()} </td>
                                    <td>{ele.totalrecurrentexpenses.toLocaleString()} </td>
                                    <td>{ele.carrieraverageslevel.toLocaleString()} </td>
                                    <td>{ele.carrieraveragessublevel.toLocaleString()} </td>
                                    <td>{ele.givinworkingradius.toLocaleString()} </td>
                                    <td>{ele.actualworkingradius.toLocaleString()} </td>
                                    <td>{ele.servicecategory.toLocaleString()} </td>
                                    <td>{ele.datagrowthtimesegmentname.toLocaleString()} </td>
                                    <td>{ele.datagrowthtimesubsegmentname.toLocaleString()} </td>
                                    <td>{ele.csvoicegrowthtimesegmentname.toLocaleString()} </td>
                                    <td>{ele.csvoicegrowthtimesubsegmentname.toLocaleString()} </td>
                                    <td>{ele.workingdatagrowthrate.toLocaleString()} </td>
                                    <td>{ele.workingcsvoicegrowthrate.toLocaleString()} </td>
                                    <td>{ele.lm_avgdailytotdatamb_mobile.toLocaleString()} </td>
                                    <td>{ele.lm_avgdailytotvoicemin.toLocaleString()} </td>
                                    <td>{ele.lm_qci8_data.toLocaleString()} </td>
                                    <td>{ele.workingdataunitrate.toLocaleString()} </td>
                                    <td>{ele.workingcsvoiceunitrate.toLocaleString()} </td>
                                    <td>{ele.unitratedate.split('T')[0]} </td>
                                    <td>{ele.neighborhoodradius.toLocaleString()} </td>
                                    <td>{ele.cost_xs.toLocaleString()} </td>
                                    <td>{ele.cost_tx.toLocaleString()} </td>
                                    <td>{ele.cost_cem.toLocaleString()} </td>
                                    <td>{ele.cost_sw_core.toLocaleString()} </td>
                                    <td>{ele.cost_ip_core.toLocaleString()} </td>
                                    <td>{ele.tech_name.toLocaleString()} </td>
                                    <td>{ele.band_name.toLocaleString()} </td>
                                    <td>{ele.carrier_name.toLocaleString()} </td>
                                    <td>{ele.justification.toLocaleString()} </td>
                                    <td>{ele.discountfactoronavg.toLocaleString()} </td>
                                </tr>
                            ) : <tr>
                                <th>Loading</th>
                            </tr>}
                        </tbody>
                    </Table> */}
                    <DataTable subHeader subHeaderComponent={subHeaderComponentMemo} onRowClicked={(e) => { itemSelect(e) }} columns={columns} data={filteredItems} />
                </div>
            </div>
        </>
    )
}
