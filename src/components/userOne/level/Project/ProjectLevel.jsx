import React from 'react'
import '../level.css'
import DashNav from '../../../Dashboard/DashNav'
import InvestPerform from '../template/InvestPerform'
import { useParams, } from 'react-router-dom'
import { FFContext } from '../../../../Context/FFContext'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import FFforCast from './FFforCast'
import SelectComponent from '../template/SelectComponent'
import ItemTable from './ItemTable'
export default function ProjectLevel() {
  const [ProjectLevel, setProjectLevel] = useState(null) //* Level Data
  const [itemLevel, setItemLevel] = useState(null) //* Level Data
  const [cId, setcId] = useState(null);//* Selected Category 
  const [projectname, setprojectname] = useState(null)//* project name 
  const [catList, setCatList] = useState(null)//*category List for Component and Item Level
  const [level, setlevel] = useState(1) //* three Project Level 
  let { id } = useParams();// *ID
  const url = 'http://103.245.193.211:5002'
  const changeLevel = async (endpoint) => {
    const pListP = axios.get(url + endpoint)
    const listObj = await Promise.all([pListP])
    return listObj[0].data;
  }
  useEffect(() => {
    let endpoint = '';
    switch (level) {
      case 1:
        endpoint = `/v1/viewff/getprojectff/${id}`//* ID have to be updated
        changeLevel(endpoint).then((result) => {
          setProjectLevel(result)
          setCatList(null)
          setprojectname(result.projectff.project_name)
        })
        break;
      case 2:
        setProjectLevel(null)
        setItemLevel(null)
        endpoint = `/v1/viewff/getcomponentlist/${id}`//* ID have to be updated
        changeLevel(endpoint).then((result) => {
          setCatList(result)
        })
        break;
        case 3:
          setProjectLevel(null)
          endpoint = `/v1/viewff/getcomponentlist/${id}`//* ID have to be updated
          changeLevel(endpoint).then((result) => {
            setCatList(result)
          })
          break;
      default:
        break;
    }
  }, [level])
  useEffect(() => {
    if (cId) {
      if(level===3){
        console.log('item');
        const i_Level = `/v1/viewff/getprojectcomponentitemff/${id}/${cId}`//* ID have to be updated with 2
        changeLevel(i_Level).then((result) => {
          setItemLevel(result)
        })
      }
      else{
        const c_Level = `/v1/viewff/getprojectcomponentff/${id}/${cId}`//* ID have to be updated with 2
        changeLevel(c_Level).then((result) => {
          setProjectLevel(result)
        })
      }
    }
  }, [cId])
  return (
    <>
      <FFContext.Provider value={{ ProjectLevel, setlevel, catList, setcId,itemLevel,setProjectLevel}}>
        <DashNav level='Project' p_Name={projectname} />
        {catList ? <SelectComponent /> : ''}
        {level!==3 ? <InvestPerform />:'' } 
        {itemLevel ? <ItemTable /> : ''}
        <FFforCast />
      </FFContext.Provider>
    </>
  )
}
