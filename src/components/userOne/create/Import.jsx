import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import AssumpDetails from '../../createForm/common/AssumpDetails'
import Assump from '../../createForm/common/Assump'
import ProjectImport from '../../createForm/import/ProjectImport'
import { AssumpContext } from '../../../Context/AssumpContext'
import axios from 'axios'
export default function Import() {
  const [selectRecord, setSelectRecord] = useState(0)
  const [project, setproject] = useState({
    projectList: []
  })
  const [assumption, setassumption] = useState([
    {}
  ])
  useEffect(() => {
    const assumption = axios.get('https://catalystcreatejourney.herokuapp.com/v1/createjourney/getprojectassumptions/0')
    const depreication = axios.get('https://catalystcreatejourney.herokuapp.com/v1/createjourney/getprojectassumptionsDepreciationLife/0')
    const expense = axios.get('https://catalystcreatejourney.herokuapp.com/v1/createjourney/getprojectassumptionsRecurrentExpenses/0')
    const projects = axios.get('https://catalystcreatejourney.herokuapp.com/v1/createjourney/getprojectlist')
    Promise.all([projects,assumption, depreication, expense]).then((result) => {
      const projectlist = result[0].data;
      const assumptions = result[1].data;
      const depList = result[2].data;
      const expList = result[3].data;
      setassumption([...assumptions.projectAssumptions,...expList.projectAssumptionsRecurrentExpenses,...depList.projectAssumptionsDepreciationLife])
      setproject(projectlist)
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  
  return (
    <>
      <AssumpContext.Provider value={{ project,assumption,setassumption,setSelectRecord,selectRecord }} >
        <ProjectImport />
        <Assump />
        <AssumpDetails />
      </AssumpContext.Provider>
    </>
  )
}
