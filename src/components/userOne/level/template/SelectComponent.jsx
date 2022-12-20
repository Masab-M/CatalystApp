import React, { useContext } from 'react'
import { useEffect } from 'react';
import { FFContext } from '../../../../Context/FFContext'

export default function SelectComponent() {
  const { catList, setcId, level,itemLevel,setChangeView } = useContext(FFContext)
  const selectComponent = (e) => {
    const { value } = e.target;
    setcId(parseInt(value))
  }
  const onChangeView=(e)=>{
  const {value,name}=e.target;
  console.log(value);
  setChangeView(value)
  }
  useEffect(() => {
    document.getElementById("mySelect").selectedIndex = "0";
  }, [level])
  return (
    <>
      <div className="levelDiv">
        <div className="invstPrfomnce">
          <div className="headText">
            <h3>Select Component</h3>
          </div>
          <form action="" className="slctC">
            <div className="form-group">
              <select name="" id="mySelect" className="component" onChange={selectComponent}>
                {catList ? catList.projectcomponentslist.map((val, index) =>
                  <option key={index} value={val.projectcomponent_id
                  }>
                    {val.component_name}
                  </option>
                )
                  : ''}
              </select>
            </div>
            {
              itemLevel ?
                <div className="itemMapview">
                  <form action="">
                  <label htmlFor="TabView">Tabular View</label>
                  <input type="radio" name="radio" id="TabView" value='1' onClick={onChangeView} defaultChecked/>
                  <label htmlFor="mapView">Map View</label>
                  <input type="radio" name="radio" id="mapView" value='2' onClick={onChangeView} />
                  </form>
                </div>
                : ''
            }
          </form>

        </div>
      </div>
    </>
  )
}
