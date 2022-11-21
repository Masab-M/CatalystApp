import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { CSVLink } from 'react-csv';
import DataTable from 'react-data-table-component';
import { AiOutlineExport } from 'react-icons/ai';

import { FFContext } from '../../../../Context/FFContext'
export default function ItemTable() {
    const { itemLevel,loading, setProjectLevel, selected, setselected } = useContext(FFContext);
    const [filterText, setFilterText] = useState('');
    const [CSVData, setCSVData] = useState([]);
    var obj_arr_appended = itemLevel.projectcomponentitemff.map(function (currentValue, Index) {
        currentValue.SERIAL_NO = Index
        return currentValue
    })
    const filteredItems = obj_arr_appended.filter(
        row => row.property_id && row.property_id.toLowerCase().includes(filterText.toLowerCase()) || row.latitude && row.latitude.toLowerCase().includes(filterText.toLowerCase()),
    );
    const itemSelect = (e) => {
        const index = e.SERIAL_NO || e.SERIAL_NO === 0 ? e.SERIAL_NO : e;
        console.log('row-',index);
        filteredItems.forEach((e,i) => {
            var el = document.getElementById(`row-${i}`);
            console.log(el);
            el.classList.remove("active");
        });

        var element = document.getElementById(`row-${index}`);
        element.classList.add("active");
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
            if (selected < itemLevel.projectcomponentitemff.length - 1) {
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
            selector: row => parseInt(row.paybackperiod.toLocaleString()),
            sortable: true,
        }, {
            name: 'NPV',
            selector: row => parseInt(row.npv.toLocaleString()),
            sortable: true,
        }, {
            name: 'IRR (in %)',
            selector: row => parseInt((row.irr * 100).toString().split('.')[0]),
            sortable: true,
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
    useEffect(() => {
        let csvArray = JSON.parse(JSON.stringify(itemLevel.projectcomponentitemff))
        const result = csvArray.map(({ item_revenues, item_depreciation, item_expenditure, item_recurrent_expenses, item_profit_and_loss, item_cash_flow_performance, ...rest }) => ({ ...rest }));
        setCSVData(result)
    }, [itemLevel])

    return (
        <>
            <div className="levelDiv">
                <div className="expndtreTable itemLevelTable">
                    <div className="headText">
                        <h3>Choose Item</h3>
                        <div className="csvFile">
                            {itemLevel ?
                                <CSVLink data={CSVData}>
                                    <AiOutlineExport />
                                    Export CSV</CSVLink>
                                :
                                ''}
                        </div>
                    </div>
                    <DataTable
                        progressPending={loading}
                        fixedHeader={true} fixedHeaderScrollHeight={'300px'} subHeader subHeaderComponent={subHeaderComponentMemo} onRowClicked={(e) => { itemSelect(e) }} columns={columns} data={filteredItems} />
                </div>
            </div>
        </>
    )
}
