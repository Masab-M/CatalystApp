import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../level.css'
import Expenditure from './Expenditure';
import Depreciation from './Depreciation';
import Revenue from './Revenue';
import ProfitLoss from './ProfitLoss';
import CashFlow from './CashFlow';
export default function FFforCast() {
  return (
    <>
  <Tabs
      // defaultActiveKey="depreciation"
      id="uncontrolled-tab-example"
      className="otherInfoDet"
    > 
      <Tab className='infoLinks' eventKey="expenditure" title="expenditure">
        <Expenditure/>
      </Tab>
      <Tab className='infoLinks' eventKey="depreciation" title="depreciation">
        <Depreciation/>
      </Tab>
      <Tab className='infoLinks' eventKey="revenue" title="revenue">
        <Revenue/>
      </Tab>
      <Tab className='infoLinks' eventKey="profilLoss" title="profit and Loss">
        <ProfitLoss/>
      </Tab>
      <Tab className='infoLinks' eventKey="cashflow" title="cash Flow">
        <CashFlow/>
      </Tab>
    </Tabs>
    </>
  )
}
