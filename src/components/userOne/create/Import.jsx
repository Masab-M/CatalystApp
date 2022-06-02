import React from 'react'
import AssumpDetails from '../../createForm/common/AssumpDetails'
import Assump from '../../createForm/common/Assump'
import ProjectImport from '../../createForm/import/ProjectImport'

export default function Import() {
  return (
    <>
    <ProjectImport/>
    <Assump/>
    <AssumpDetails/>
    </>
  )
}
