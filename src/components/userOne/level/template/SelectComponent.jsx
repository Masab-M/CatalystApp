import React, { useContext } from 'react'
import { FFContext } from '../../../../Context/FFContext'

export default function SelectComponent() {
  const { catList,setcId } = useContext(FFContext)
  const selectComponent=(e)=>{
    const {value}=e.target;
    setcId(parseInt(value))
  }
  return (
    <>
      <div className="levelDiv">
        <div className="invstPrfomnce">
          <div className="headText">
            <h3>Select Component</h3>
          </div>
          <form action="" className="slctC">
            <div className="form-group">
              <select name="" id="" className="component" onChange={selectComponent}>
                {catList ? catList.projectcomponentslist.map((val,index) =>
                  <option key={index} value={val.projectcomponent_id
                  }>
                    {val.component_name}
                  </option>
                )
                  : ''}
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
