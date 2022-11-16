import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import AssumpDetails from '../../createForm/common/AssumpDetails'
import Assump from '../../createForm/common/Assump'
import ProjectImport from '../../createForm/import/ProjectImport'
import { AssumpContext } from '../../../Context/AssumpContext'
import axios from 'axios'
export default function Import() {
  const [selectRecord, setSelectRecord] = useState(0)
  const [id, setid] = useState(null)
  const [project, setproject] = useState({
    projectList: []
  })
  const [assumption, setassumption] = useState([
    {}
  ])
  useEffect(() => {
    const projects = axios.get('http://103.245.193.211:5001v1/createjourney/getprojectlist')
    Promise.all([projects]).then((result) => {
      const projectlist = result[0].data;
      setproject(projectlist)
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  useLayoutEffect(() => {
    if(id!==null)
    {
      const assumption = axios.get(`http://103.245.193.211:5001v1/createjourney/getprojectassumptions/${id}`)
      const depreication = axios.get(`http://103.245.193.211:5001v1/createjourney/getprojectassumptionsDepreciationLife/${id}`)
      const expense = axios.get(`http://103.245.193.211:5001v1/createjourney/getprojectassumptionsRecurrentExpenses/${id}`)
      Promise.all([assumption, depreication, expense]).then((result) => {

        const assumptions = result[0].data;
        const depList = result[1].data;
        const expList = result[2].data;
        setassumption([...assumptions.projectAssumptions,...expList.projectAssumptionsRecurrentExpenses,...depList.projectAssumptionsDepreciationLife])
      }).catch((err) => {
        console.log(err);
      })

    }
  }, [id])
  
  return (
    <>
      <AssumpContext.Provider value={{id,setid, project,assumption,setassumption,setSelectRecord,selectRecord }} >
        <ProjectImport />
        <Assump />
        <AssumpDetails />
      </AssumpContext.Provider>
    </>
  )
}
